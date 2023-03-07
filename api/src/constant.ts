export const RETURN_CODE = {
    SUCCESS: 200, // success
    BAD_REQUEST: 400, // Bad Request
    UNAUTHORIZED: 401, // Unauthorized
    FORBIDDEN: 403, // Forbidden
    NOT_FOUND: 404, // Not Found
    CONFLICT: 409, // Conflict
    INTERNAL_SERVER: 500, // Internal Server Error
};

export const CONSOLE_COLOR = {
    red: '\x1b[31m%s\x1b[0m',
    green: '\x1b[32m%s\x1b[0m',
    yellow: '\x1b[33m%s\x1b[0m',
    blue: '\x1b[34m%s\x1b[0m',
    magenta: '\x1b[35m%s\x1b[0m',
    cyan: '\x1b[36m%s\x1b[0m',
};