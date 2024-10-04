/**
 * An array of routes that are accessable to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes require authentication
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prifix for API authentication routes
 * Routes that start with prefix are used for API
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default redirection after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
