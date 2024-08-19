// codvar.js
export function select(selector) {
    if (selector.startsWith('#')) {
        return document.getElementById(selector.slice(1));
    } else if (selector.startsWith('.')) {
        return document.querySelectorAll(selector); 
    } else {
        return document.querySelector(selector);
    }
}

// Function to create a component from a template literal
export function comp(strings, ...values) {
    const html = strings.reduce((result, string, i) => {
        return result + string + (values[i] || '');
    }, '');
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

// Function to render multiple components into a container
export function render(...components) {
    const container = document.body;
    components.forEach(component => {
        // Clone the component if it's a DocumentFragment
        if (component instanceof DocumentFragment) {
            container.appendChild(component.cloneNode(true));
        } else {
            // If the component is not a DocumentFragment, assume it's a string template
            const htmlComponent = comp`${component}`;
            container.appendChild(htmlComponent.cloneNode(true));
        }
    });
}

function camelToKebab(property) {
    return property.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function addStyleSheet(styles) {
    const style = document.createElement('style');
    document.head.appendChild(style);
    const sheet = style.sheet;

    for (const selector in styles) {
        const rules = styles[selector];
        let ruleString = '';
        for (const property in rules) {
            
            const kebabProperty = camelToKebab(property);
            ruleString += `${kebabProperty}: ${rules[property]}; `;
        }
        sheet.insertRule(`${selector} { ${ruleString} }`, sheet.cssRules.length);
    }
}
export function write(selector, value) {
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
