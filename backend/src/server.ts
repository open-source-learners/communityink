import app from "./app";
import logger from "./config/logger";

/**
 * Server entry point
 * Starts the Express application and seeds the database
 */
async function startServer() {
  try {
    // Start the Express application
    await app.start();
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
}

// Start the server
startServer();
