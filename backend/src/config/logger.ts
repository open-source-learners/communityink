import winston from "winston";
import path from "path";

/**
 * Winston logger configuration
 * Provides structured logging with different levels and transports
 */
const logger = winston.createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: "communityink-api" },
  transports: [
    // File logging is only enabled in non-production environments.
    // Uncomment the following lines to enable file logging in development or test environments.
    ...(process.env.NODE_ENV !== "production"
      ? [
          // new winston.transports.File({
          //   filename: path.join(__dirname, "../../logs/error.log"),
          //   level: "error",
          //   maxsize: 5242880, // 5MB
          //   maxFiles: 5,
          // }),
          // new winston.transports.File({
          //   filename: path.join(__dirname, "../../logs/combined.log"),
          //   maxsize: 5242880, // 5MB
          //   maxFiles: 5,
          // }),
        ]
      : []),
    // Always add a console transport
    new winston.transports.Console({
      format:
        process.env.NODE_ENV === "production"
          ? winston.format.combine(
              winston.format.timestamp(),
              winston.format.json()
            )
          : winston.format.combine(
              winston.format.colorize(),
              winston.format.simple(),
              winston.format.printf(
                ({ timestamp, level, message, service, ...meta }) => {
                  return `${timestamp} [${service}] ${level}: ${message} ${
                    Object.keys(meta).length
                      ? JSON.stringify(meta, null, 2)
                      : ""
                  }`;
                }
              )
            ),
    }),
  ],
});

/**
 * Request logger middleware
 * Logs incoming HTTP requests with relevant details
 */
export const requestLogger = (req: any, res: any, next: any) => {
  const start = Date.now();

  // Log request details
  logger.info("Incoming request", {
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.get("User-Agent"),
    timestamp: new Date().toISOString(),
  });

  // Log response details when request completes
  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.info("Request completed", {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      timestamp: new Date().toISOString(),
    });
  });

  next();
};

/**
 * Error logger
 * Logs application errors with stack traces
 */
export const errorLogger = (error: Error, req?: any) => {
  logger.error("Application error", {
    error: error.message,
    stack: error.stack,
    url: req?.url,
    method: req?.method,
    timestamp: new Date().toISOString(),
  });
};

export default logger;
