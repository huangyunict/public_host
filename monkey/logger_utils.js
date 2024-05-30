//  Shared classes / methods for Violentmonkey scripts, which may or may not be used in Greasemonkey / Tampermonkey scripts.
//  version 0.1
//  2024-06-01
//  Copyright (c) 2024, Yun Huang, huangyunict@gmail.com
//  Released under the GPL license:  http://www.gnu.org/copyleft/gpl.html
//  Refer to this script by adding the following statement in the user script.
//    @require https://raw.githubusercontent.com/huangyunict/public_host/main/monkey/logger_utils.js
// --------------------------------------------------------------------

/**
 * Utilities for console loggers.
 */
class LoggerUtils {
  /**
   * Returns the appropriate logging function based on the provided log level.
   *
   * @param {string} logLevel The log level for which to retrieve the logging function.
   * @return {Function} The logging function corresponding to the provided log level.
   */
  static getLogger(logLevel) {
    if (logLevel === 'debug') return console.debug;
    if (logLevel === 'info') return console.info;
    if (logLevel === 'warn' || logLevel === 'warning') return console.warn;
    if (logLevel === 'error') return console.error;

    // Default to console.log if logLevel is not recognized or just 'log'.
    return console.log;
  }

  /**
   * Logs a message at the specified log level.
   *
   * @param {string} logLevel The log level at which to log the message.
   * @param {...any} args The message or messages to log.
   */
  static logMessage(logLevel, ...args) {
    LoggerUtils.getLogger(logLevel)(...args);
  }
}
