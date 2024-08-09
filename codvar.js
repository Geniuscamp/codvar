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
