/**
 * Utility Module - Shared functions and error handling
 * Provides safe DOM access, error handling, and common utilities
 */

const AppUtil = (function() {
  'use strict';

  /**
   * Safely get element by ID with error handling
   * @param {string} elementId - The ID of the element
   * @param {string} context - Where this is being called from (for logging)
   * @returns {HTMLElement|null} The element or null
   */
  function getElementById(elementId, context = 'Unknown') {
    if (!elementId || typeof elementId !== 'string') {
      console.warn(`[AppUtil] Invalid element ID provided in ${context}:`, elementId);
      return null;
    }

    const element = document.getElementById(elementId);
    if (!element) {
      console.warn(`[AppUtil] Element with ID "${elementId}" not found in ${context}`);
      return null;
    }
    return element;
  }

  /**
   * Safely query selector with error handling
   * @param {string} selector - CSS selector
   * @param {string} context - Where this is being called from
   * @returns {HTMLElement|null} The element or null
   */
  function querySelector(selector, context = 'Unknown') {
    if (!selector || typeof selector !== 'string') {
      console.warn(`[AppUtil] Invalid selector provided in ${context}:`, selector);
      return null;
    }

    try {
      const element = document.querySelector(selector);
      if (!element) {
        console.warn(`[AppUtil] Element matching selector "${selector}" not found in ${context}`);
      }
      return element;
    } catch (error) {
      console.warn(`[AppUtil] Invalid CSS selector "${selector}" in ${context}:`, error.message);
      return null;
    }
  }

  /**
   * Safely add event listener with error handling
   * @param {HTMLElement} element - The element to add listener to
   * @param {string} event - Event type (e.g., 'click')
   * @param {Function} handler - The handler function
   * @param {string} context - Where this is being called from
   * @returns {boolean} Success status
   */
  function addEventListener(element, event, handler, context = 'Unknown') {
    if (!element) {
      console.warn(`[AppUtil] Cannot add event listener: element is null in ${context}`);
      return false;
    }

    if (!event || typeof event !== 'string') {
      console.warn(`[AppUtil] Invalid event type provided in ${context}:`, event);
      return false;
    }

    if (typeof handler !== 'function') {
      console.warn(`[AppUtil] Handler must be a function in ${context}`);
      return false;
    }

    try {
      element.addEventListener(event, handler);
      return true;
    } catch (error) {
      console.error(`[AppUtil] Failed to add ${event} listener in ${context}:`, error);
      return false;
    }
  }

  /**
   * Safe DOM ready wrapper
   * @param {Function} callback - Function to run when DOM is ready
   */
  function onDOMReady(callback) {
    if (typeof callback !== 'function') {
      console.warn('[AppUtil] Callback must be a function');
      return;
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      // DOM is already loaded
      callback();
    }
  }

  /**
   * Safe console logging with custom styling
   * @param {string} message - Message to log
   * @param {string} level - Log level (log, warn, error, info)
   * @param {string} style - CSS style string (optional)
   */
  function log(message, level = 'log', style = 'color: #03dac6; font-weight: bold;') {
    if (!message) return;

    const timestamp = new Date().toLocaleTimeString();
    const formattedMessage = `[${timestamp}] ${message}`;

    if (style && level === 'log') {
      console[level](`%c${formattedMessage}`, style);
    } else {
      console[level](formattedMessage);
    }
  }

  /**
   * Validate form inputs
   * @param {HTMLFormElement} form - The form to validate
   * @param {Array} fields - Field names to validate
   * @returns {boolean|object} True if valid, or object with error details
   */
  function validateForm(form, fields = []) {
    if (!form || !(form instanceof HTMLFormElement)) {
      console.warn('[AppUtil] Invalid form provided to validateForm');
      return false;
    }

    const errors = {};

    fields.forEach(fieldName => {
      const field = form.elements[fieldName];
      if (!field) {
        errors[fieldName] = `Field "${fieldName}" not found`;
        return;
      }

      const value = field.value?.trim();
      if (!value) {
        errors[fieldName] = `${fieldName} is required`;
      }
    });

    return Object.keys(errors).length === 0 ? true : errors;
  }

  /**
   * Safe JSON parse
   * @param {string} jsonString - JSON string to parse
   * @param {string} context - Where this is being called from
   * @returns {object|null} Parsed object or null
   */
  function parseJSON(jsonString, context = 'Unknown') {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error(`[AppUtil] Failed to parse JSON in ${context}:`, error.message);
      return null;
    }
  }

  /**
   * Debounce function for performance optimization
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} Debounced function
   */
  function debounce(func, wait = 300) {
    if (typeof func !== 'function') {
      console.warn('[AppUtil] debounce requires a function');
      return () => {};
    }

    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Throttle function for performance optimization
   * @param {Function} func - Function to throttle
   * @param {number} limit - Time limit in milliseconds
   * @returns {Function} Throttled function
   */
  function throttle(func, limit = 300) {
    if (typeof func !== 'function') {
      console.warn('[AppUtil] throttle requires a function');
      return () => {};
    }

    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Public API
  return {
    getElementById,
    querySelector,
    addEventListener,
    onDOMReady,
    log,
    validateForm,
    parseJSON,
    debounce,
    throttle
  };
})();

// Legacy support: Define safeRun if it doesn't exist
if (typeof safeRun === 'undefined') {
  window.safeRun = function(functionName) {
    try {
      if (typeof window[functionName] === 'function') {
        window[functionName]();
      } else {
        console.warn(`Function "${functionName}" not found`);
      }
    } catch (error) {
      console.error(`Error executing "${functionName}":`, error.message);
    }
  };
}
