
function select(selector) {
    if (selector.startsWith('#')) {
        return document.getElementById(selector.slice(1));
    } else if (selector.startsWith('.')) {
        return document.querySelector(selector);
    } else {
        return document.querySelector(selector);
    }
}

function hide(selector, animation, duration) {
    const element = select(selector);
    if (!element) return;

    switch (animation) {
        case 'fade':
            fadeOut(element, parseDuration(duration));
            break;
        case 'ease':
            easeOut(element, parseDuration(duration));
            break;
        default:
            element.style.display = 'none';
            break;
    }
}

function fadeOut(element, duration) {
    let opacity = 1;
    const interval = 50;
    const gap = interval / duration;

    function fade() {
        opacity -= gap;
        if (opacity <= 0) {
            opacity = 0;
            element.style.display = 'none';
        }
        element.style.opacity = opacity;
        if (opacity > 0) {
            setTimeout(fade, interval);
        }
    }

    fade();
}

function easeOut(element, duration) {
    let scale = 1;
    const interval = 50;
    const gap = interval / duration;

    function ease() {
        scale -= gap;
        if (scale <= 0) {
            scale = 0;
            element.style.display = 'none';
        }
        element.style.transform = `scale(${scale})`;
        if (scale > 0) {
            setTimeout(ease, interval);
        }
    }

    ease();
}

function parseDuration(duration) {
    return duration.endsWith('ms') ? parseInt(duration) : parseInt(duration) * 1000;
}
function checkType(value) {
    const type = typeof value;

    if (type === 'string') {
        // Check if the string can be converted to a number
        const numberValue = Number(value);
        if (!isNaN(numberValue) && value.trim() !== '') {
            if (Number.isInteger(numberValue)) {
                return 'integer';
            } else {
                return 'float'; // In JavaScript, all numbers are floating-point
            }
        }
        return 'string';
    } else if (type === 'number') {
        if (Number.isInteger(value)) {
            return 'integer';
        } else if (Number.isNaN(value)) {
            return 'NaN'; // Special case for NaN
        } else {
            return 'float'; // In JavaScript, all numbers are floating-point
        }
    } else if (type === 'boolean') {
        return 'boolean';
    } else if (type === 'function') {
        return 'function';
    } else if (type === 'object') {
        if (value === null) {
            return 'null';
        } else if (Array.isArray(value)) {
            return 'array';
        } else if (value instanceof Date) {
            return 'date';
        } else if (value instanceof RegExp) {
            return 'regexp';
        } else if (value instanceof Map) {
            return 'map';
        } else if (value instanceof Set) {
            return 'set';
        } else if (value instanceof WeakMap) {
            return 'weakmap';
        } else if (value instanceof WeakSet) {
            return 'weakset';
        } else if (value instanceof Symbol) {
            return 'symbol';
        } else if (value instanceof BigInt) {
            return 'bigint';
        } else {
            return 'object'; 
        }
    } else if (type === 'undefined') {
        return 'undefined';
    } else {
        return 'unknown';
    }
}function write(selector, value) {
    let elements;

    if (selector.startsWith('#')) {
      
        const element = document.getElementById(selector.substring(1));
        if (element) {
            if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                element.value = value;
            } else {
                element.innerText = value;
            }
        } else {
            console.warn(`Element with ID '${selector}' not found.`);
        }
    } else if (selector.startsWith('.')) {
      
        elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            elements.forEach(element => {
                if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                    element.value = value;
                } else {
                    element.innerText = value;
                }
            });
        } else {
            console.warn(`Elements with class '${selector}' not found.`);
        }
    } else if (selector.startsWith('data-')) {
        
        elements = document.querySelectorAll(`[${selector}]`);
        if (elements.length > 0) {
            elements.forEach(element => {
                if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                    element.value = value;
                } else {
                    element.innerText = value;
                }
            });
        } else {
            console.warn(`Elements with data attribute '${selector}' not found.`);
        }
    } else {
       
        elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            elements.forEach(element => {
                if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                    element.value = value;
                } else {
                    element.innerText = value;
                }
            });
        } else {
            console.warn(`Elements with selector '${selector}' not found.`);
        }
    }
}
function slideshow(selector, slideshowType = 'fade', speed = '2s', options = {}) {
    const elements = document.querySelectorAll(selector);
    let currentIndex = 0;

    if (elements.length === 0) {
        console.warn(`No elements found with selector '${selector}'`);
        return;
    }

    // Default options
    const settings = {
        interval: 3000,
        transitionDuration: speed, // Use the speed parameter for transition duration
        easing: 'ease-in-out',
        ...options
    };

    // Initialize styles for all elements
    function initializeStyles() {
        elements.forEach((el, i) => {
            el.style.position = 'absolute';
            el.style.top = '0';
            el.style.left = '0';
            el.style.width = '100%';
            el.style.height = '100%';
            el.style.transition = `all ${settings.transitionDuration} ${settings.easing}`;
            el.style.opacity = '0';
            el.style.transform = 'none';
            el.style.visibility = 'hidden';
        });
    }

    function showSlide(index) {
        elements.forEach((el, i) => {
            el.style.zIndex = i === index ? 1 : 0;
            switch (slideshowType) {
                case 'fade':
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'slide-left':
                    el.style.transform = `translateX(${(i - index) * 100}%)`;
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'slide-right':
                    el.style.transform = `translateX(${(index - i) * 100}%)`;
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'slide-up':
                    el.style.transform = `translateY(${(i - index) * 100}%)`;
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'slide-down':
                    el.style.transform = `translateY(${(index - i) * 100}%)`;
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'zoom-in':
                    el.style.transform = i === index ? 'scale(1)' : 'scale(0.8)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'zoom-out':
                    el.style.transform = i === index ? 'scale(1)' : 'scale(1.2)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'flip-horizontal':
                    el.style.transform = i === index ? 'rotateY(0)' : 'rotateY(180deg)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    el.style.backfaceVisibility = 'hidden';
                    el.style.perspective = '1000px';
                    break;

                case 'flip-vertical':
                    el.style.transform = i === index ? 'rotateX(0)' : 'rotateX(180deg)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    el.style.backfaceVisibility = 'hidden';
                    el.style.perspective = '1000px';
                    break;

                case 'rotate-clockwise':
                    el.style.transform = i === index ? 'rotate(0deg)' : 'rotate(360deg)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'rotate-counterclockwise':
                    el.style.transform = i === index ? 'rotate(0deg)' : 'rotate(-360deg)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'cube':
                    const cubeAngle = (i - index) * (360 / elements.length);
                    el.style.transform = `rotateY(${cubeAngle}deg) translateZ(300px)`;
                    el.style.opacity = '1';
                    el.style.visibility = 'visible';
                    el.style.backfaceVisibility = 'hidden';
                    el.style.perspective = '1000px';
                    break;

                case 'carousel':
                    const carouselAngle = (i - index) * (360 / elements.length);
                    el.style.transform = `rotateY(${carouselAngle}deg) translateZ(300px)`;
                    el.style.opacity = '1';
                    el.style.visibility = 'visible';
                    el.style.backfaceVisibility = 'hidden';
                    el.style.perspective = '1000px';
                    break;

                case 'wipe-left':
                    el.style.transform = i === index ? 'translateX(0)' : 'translateX(-100%)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'wipe-right':
                    el.style.transform = i === index ? 'translateX(0)' : 'translateX(100%)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'wipe-up':
                    el.style.transform = i === index ? 'translateY(0)' : 'translateY(-100%)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'wipe-down':
                    el.style.transform = i === index ? 'translateY(0)' : 'translateY(100%)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'ken-burns':
                    el.style.transform = i === index ? 'scale(1.2)' : 'scale(1)';
                    el.style.transitionDuration = settings.transitionDuration;
                    el.style.opacity = '1';
                    el.style.visibility = 'visible';
                    break;

                case 'push-left':
                    el.style.transform = i === index ? 'translateX(0)' : 'translateX(-100%)';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'push-right':
                    el.style.transform = i === index ? 'translateX(0)' : 'translateX(100%)';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'push-up':
                    el.style.transform = i === index ? 'translateY(0)' : 'translateY(-100%)';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'push-down':
                    el.style.transform = i === index ? 'translateY(0)' : 'translateY(100%)';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'cover-left':
                    el.style.transform = i === index ? 'translateX(0)' : 'translateX(-100%)';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'cover-right':
                    el.style.transform = i === index ? 'translateX(0)' : 'translateX(100%)';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'cover-up':
                    el.style.transform = i === index ? 'translateY(0)' : 'translateY(-100%)';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'cover-down':
                    el.style.transform = i === index ? 'translateY(0)' : 'translateY(100%)';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'reveal-left':
                    el.style.transform = i === index ? 'translateX(0)' : 'translateX(100%)';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'reveal-right':
                    el.style.transform = i === index ? 'translateX(0)' : 'translateX(-100%)';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'reveal-up':
                    el.style.transform = i === index ? 'translateY(0)' : 'translateY(100%)';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'reveal-down':
                    el.style.transform = i === index ? 'translateY(0)' : 'translateY(-100%)';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'parallax':
                    el.style.transform = i === index ? 'translateZ(0)' : 'translateZ(-300px)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'bounce':
                    el.style.transform = i === index ? 'scale(1.1)' : 'scale(0.9)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                case 'shake':
                    el.style.transform = i === index ? 'translateX(0)' : 'translateX(-10px)';
                    el.style.opacity = i === index ? '1' : '0';
                    el.style.visibility = i === index ? 'visible' : 'hidden';
                    break;

                default:
                    console.warn(`Unsupported slideshow type '${slideshowType}'`);
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % elements.length;
        showSlide(currentIndex);
    }

    function startSlideshow() {
        initializeStyles();
        showSlide(currentIndex);
        setInterval(nextSlide, settings.interval);
    }

    startSlideshow();
}
