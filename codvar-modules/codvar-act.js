/**
 * Reloads the entire webpage.
 * @param {boolean} force - Determines how the page is reloaded.
 *   - `true`: Reloads from the server, bypassing the cache.
 *   - `false`: Reloads from the cache.
 */
export function reloadPage(force=false) {
  return window.location.reload(force);
}

/**
 * Checks whether the user's connection is enabled or disabled.
 * @returns {boolean} `true` if the user is online, `false` otherwise.
 * This check includes both Wi-Fi and cellular data connections.
 */
export function checkConnection() {
  return navigator.onLine;
}

/**
 * Retrieves the user agent string of the browser.
 * @returns {string} The user agent string.
 */
export function userInfo() {
  return navigator.userAgent;
}

/**
 * Retrieves the user's browser language.
 * @returns {string} The browser's language setting.
 */
export function userLanguage() {
  return navigator.language;
}

/**
 * Retrieves the user's battery status in percentage.
 * @param {Function} callback - A function to call with the battery percentage or an error.
 *   - `callback(error, percentage)`: Called with an error if the API is not supported, or with the battery percentage if successful.
 */
export function getBatteryStatus(callback) {
  if (!navigator.getBattery) {
    callback(new Error("Battery status API is not supported on this browser."), null);
    return;
  }

  navigator.getBattery()
    .then(battery => {
      const percentage = battery.level * 100;
      callback(null, percentage);
    })
    .catch(error => {
      callback(error, null);
    });
}

/**
 * Retrieves the screen resolution of the user's device.
 * @returns {Object} An object with `width` and `height` properties.
 */
export function getScreenResolution() {
  return {
    width: window.screen.width,
    height: window.screen.height
  };
}

/**
 * Retrieves the size of the viewport.
 * @returns {Object} An object with `width` and `height` properties.
 */
export function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}



export function data(){
  return navigator.onLine
}



/**
 * Retrieves the device's pixel ratio.
 * @returns {number} The device's pixel ratio.
 */
export function getDevicePixelRatio() {
  return window.devicePixelRatio;
}

/**
 * Retrieves an item from localStorage.
 * @param {string} key - The key of the item to retrieve.
 * @returns {string|null} The value of the item, or `null` if not found.
 */
export function getLocalStorageItem(key) {
  return localStorage.getItem(key);
}

/**
 * Sets an item in localStorage.
 * @param {string} key - The key of the item to set.
 * @param {string} value - The value to set.
 */
export function setLocalStorageItem(key, value) {
  localStorage.setItem(key, value);
}

/**
 * Removes an item from localStorage.
 * @param {string} key - The key of the item to remove.
 */
export function removeLocalStorageItem(key) {
  localStorage.removeItem(key);
}

/**
 * Clears all items from localStorage.
 */
export function clearLocalStorage() {
  localStorage.clear();
}

/**
 * Checks if the device supports touch events.
 * @returns {boolean} `true` if the device supports touch events, `false` otherwise.
 */
export function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Retrieves the name of the browser.
 * @returns {string} The name of the browser.
 */
export function getBrowserName() {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("Trident")) return "Internet Explorer";
  if (userAgent.includes("Edge")) return "Edge";
  if (userAgent.includes("Chrome")) return "Chrome";
  if (userAgent.includes("Safari")) return "Safari";
  return "Unknown";
}

/**
 * Retrieves the orientation of the screen.
 * @returns {string} The screen orientation type, or `"Unknown"` if not supported.
 */
export function getScreenOrientation() {
  if (window.screen.orientation) {
    return window.screen.orientation.type;
  }
  return "Unknown";
}

/**
 * Retrieves the title of the document.
 * @returns {string} The document title.
 */
export function getDocumentTitle() {
  return document.title;
}

/**
 * Sets the title of the document.
 * @param {string} title - The title to set.
 */
export function setDocumentTitle(title) {
  document.title = title;
}

/**
 * Retrieves all cookies from the document.
 * @returns {Object} An object containing all cookies as key-value pairs.
 */
export function getCookies() {
  const cookies = {};
  document.cookie.split(';').forEach(cookie => {
    const [key, value] = cookie.split('=').map(c => c.trim());
    cookies[key] = value;
  });
  return cookies;
}

/**
 * Sets a cookie.
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {number} [days] - The number of days until the cookie expires.
 */
export function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `expires=${date.toUTCString()};`;
  }
  document.cookie = `${name}=${value}; ${expires}path=/`;
}

/**
 * Deletes a cookie.
 * @param {string} name - The name of the cookie to delete.
 */
export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

/**
 * Retrieves network information of the user's connection.
 * @returns {Object} An object containing network information:
 *   - `type`: The effective connection type (e.g., '4g').
 *   - `downlink`: The estimated downlink speed (in Mbps).
 *   - `rtt`: The estimated round-trip time (in milliseconds).
 */
export function getNetworkInformation() {
  if (navigator.connection) {
    return {
      type: navigator.connection.effectiveType,
      downlink: navigator.connection.downlink,
      rtt: navigator.connection.rtt
    };
  }
  return { type: "Unknown" };
}

/**
 * Retrieves the device's memory in GB.
 * @returns {number|string} The device's memory in GB or `"Unknown"` if not supported.
 */
export function getDeviceMemory() {
  return navigator.deviceMemory || "Unknown";
}

/**
 * Retrieves the current URL.
 * @returns {string} The current URL.
 */
export function getCurrentUrl() {
  return window.location.href;
}
/**
 * Retrieves available memory (if supported).
 * @returns {MemoryInfo} An object containing memory information and attributes.
 */
export function getAvailableMemory() {
  const memory = navigator.deviceMemory || "Unknown";

  
  class MemoryInfo {
    constructor(memory) {
      this.memory = memory;
    }

    get availableMemory() {
      return this.memory;
    }

    get unit() {
      return "GB";
    }

    get message() {
      return this.memory !== "Unknown" 
        ? `Available memory: ${this.memory} GB` 
        : "Memory information is not available.";
    }
  }

  // Return an instance of MemoryInfo
  return new MemoryInfo(memory);
}


/**
 * Retrieves the operating system from the user agent string.
 * @returns {string} The name of the operating system.
 */
export function getOperatingSystem() {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Win")) return "Windows";
  if (userAgent.includes("Mac")) return "Mac OS";
  if (userAgent.includes("X11")) return "UNIX";
  if (userAgent.includes("Linux")) return "Linux";
  return "Unknown";
}

/**
 * Retrieves the downlink speed of the network.
 * @returns {number|string} The downlink speed (in Mbps) or `"Unknown"` if not supported.
 */
export function getConnectionDownlink() {
  if (navigator.connection) {
    return navigator.connection.downlink;
  }
  return "Unknown";
}

/**
 * Retrieves the current scroll position of the page.
 * @returns {Object} An object with `x` and `y` properties representing the scroll position.
 */
export function getPageScrollPosition() {
  return {
    x: window.scrollX,
    y: window.scrollY
  };
}

/**
 * Retrieves the vertical scroll position of the page.
 * @returns {number} The vertical scroll position.
 */
export function getScrollTop() {
  return window.scrollY;
}

/**
 * Retrieves the horizontal scroll position of the page.
 * @returns {number} The horizontal scroll position.
 */
export function getScrollLeft() {
  return window.scrollX;
}

/**
 * Retrieves the total height of the document.
 * @returns {number} The scroll height of the document.
 */
export function getScrollHeight() {
  return document.documentElement.scrollHeight;
}

/**
 * Retrieves the total width of the document.
 * @returns {number} The scroll width of the document.
 */
export function getScrollWidth() {
  return document.documentElement.scrollWidth;
}
