import express, { Request, Response, NextFunction } from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import http from "http";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import db from "./config/db";
import logger, { requestLogger, errorLogger } from "./config/logger";
import env from "./config/environment";
/**
 * Express application setup
 * Handles MongoDB connection, middleware configuration, and routing
 */
class App {
  public app: express.Application;
  public server: http.Server;
  private port: number;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || "3001", 10);
    this.server = http.createServer(this.app);
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  /**
   * Initialize all middleware
   */
  private initializeMiddlewares() {
    // CORS configuration
    const corsConfig = {
      origin: [env.corsOrigin], // Fix typo: crosOrigin → corsOrigin
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      allowedHeaders: ["Content-Type", "Authorization", "User-Agent"],
      exposedHeaders: ["Content-Length", "X-Powered-By"],
      credentials: true,
      preflightContinue: false,
    };
    const sessionMiddleware = session({
      secret: env.sessionSecret,
      resave: false, // Prevent resaving sessions if unmodified
      saveUninitialized: false, // does't create session until data is added
      store: MongoStore.create({ mongoUrl: env.mongoURI }),
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
      },
    });

    this.app.set("trust proxy", 1);
    // Body parsing middleware
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ extended: true, limit: "10mb" }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, "../", "public")));
    this.app.use(cors(corsConfig));
    // this.app.options("*", cors(corsConfig)); // Enable preflight for all routes
    this.app.use(sessionMiddleware);
    // Logging middleware
    this.app.use(
      morgan("combined", {
        stream: {
          write: (message: string) => logger.info(message.trim()),
        },
      })
    );

    // Custom request logger
    this.app.use(requestLogger);

    // Security headers
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.setHeader("X-Frame-Options", "DENY");
      res.setHeader("X-XSS-Protection", "1; mode=block");
      next();
    });
  }

  /**
   * Initialize API routes
   */
  private initializeRoutes(): void {
    // Health check route
    this.app.get("/health", (req: Request, res: Response) => {
      res.status(200).json({
        status: "OK",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || "development",
      });
    });

    // Test route
    this.app.get("/api/test", (req: Request, res: Response) => {
      res.status(200).json({
        message: "Bountlyx API is running successfully! 🚀",
        timestamp: new Date().toISOString(),
        database: db.getConnectionStatus() ? "Connected" : "Disconnected",
      });
    });

    // Mount API routes here

    // API routes (to be expanded)
    this.app.use("/api", (req: Request, res: Response) => {
      res.status(404).json({
        error: "Route not found",
        message: "This API endpoint is not implemented yet",
        availableRoutes: ["/health", "/api/test"],
      });
    });

    // Root route
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        message: "Welcome to Communityink API! 🎯",
        version: "1.0.0",
        health: "/health",
        test: "/api/test",
      });
    });
  }

  /**
   * Initialize error handling middleware
   */
  private initializeErrorHandling(): void {
    // 404 handler - catch all unmatched routes
    this.app.use((req: Request, res: Response) => {
      res.status(404).json({
        error: "Not Found",
        message: `Route ${req.originalUrl} not found`,
        timestamp: new Date().toISOString(),
      });
    });

    // Global error handler
    this.app.use(
      (error: Error, req: Request, res: Response, next: NextFunction) => {
        errorLogger(error, req);

        res.status(500).json({
          error: "Internal Server Error",
          message:
            process.env.NODE_ENV === "production"
              ? "Something went wrong"
              : error.message,
          timestamp: new Date().toISOString(),
        });
      }
    );
  }

  /**
   * Start the server
   */
  public async start(): Promise<void> {
    try {
      // Connect to MongoDB
      await db.connect();

      // Start Express server
      this.server.listen(this.port, () => {
        logger.info(`🚀 Communityink API server started on port ${this.port}`);
        logger.info(`📊 Environment: ${process.env.NODE_ENV || "development"}`);
        logger.info(`🔗 Health check: http://localhost:${this.port}/health`);
        logger.info(`🧪 Test endpoint: http://localhost:${this.port}/api/test`);
      });
    } catch (error) {
      logger.error("Failed to start server:", error);
      process.exit(1);
    }
  }

  /**
   * Graceful shutdown
   */
  public async shutdown(): Promise<void> {
    try {
      await db.disconnect();
      logger.info("Server shutdown completed");
      process.exit(0);
    } catch (error) {
      logger.error("Error during shutdown:", error);
      process.exit(1);
    }
  }
}

// Create and export app instance
const app = new App();

// Handle graceful shutdown
process.on("SIGTERM", () => app.shutdown());
process.on("SIGINT", () => app.shutdown());

export default app;
