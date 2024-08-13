Quick Start just download codvar.js and connect with you Html 

on your html file in the head tag 
```javascript
<script src="codvar.js"></script>
```
and read this to use 


Our  framework provides utility functions for selecting DOM elements and hiding them with animations. It includes options for fade-out and ease-out animations.

## Functions

### 1. `select(selector)`

Selects an element based on the provided selector.

**Parameters:**
- `selector` (string): The  selector to select the element. Supports IDs (e.g., `#myId`), classes (e.g., `.myClass`), and other valid DOM selectors.

**Returns:**
- The selected DOM element or `null` if no element matches the selector.

**Example:**

```javascript
const element = select('#myId'); // Selects an element with ID 'myId'
const classElement = select('.myClass'); // Selects the first element with class 'myClass'
```


## 2. `write()`

### Purpose
The `write()` function sets the text content or value of a DOM element.

### Syntax
```javascript
write(selector, value)
```

### Parameters
- **`selector`**: A string representing the DOM(LIKE CSS) selector of the element(s) to modify.
- **`value`**: The text or value to set. For form elements like `<input>` or `<textarea>`, this sets the `value` property. For other elements, this sets the `innerText` property.

### Examples
1. **Set Input Value**
    ```javascript
    write('#username', 'codvar');
    ```
    Sets the value of the `<input>` element with ID `username` to `codvar`.

2. **Set Text Content**
    ```javascript
    write('.welcome-message', 'Welcome to our website!');
    ```
    Sets the text content of the element with class `welcome-message` to `Welcome to our website!`.

3. **Set Data Attribute Value**
    ```javascript
    write('[data-info]', 'Updated Data');
    ```
    Sets the text content of elements with the `data-info` attribute to `Updated Data`.

---
3. 
### 3 `hide(selector, animation = 'none', duration = '0s')`

Hides an element with a specified animation or without animation.

**Parameters:**
- `selector` (string): The DOM selector for the element to hide.
- `animation` (string, optional): The type of animation to use. Options are:
  - `'fade'`: Fades out the element.
  - `'ease'`: Scales down the element.
  - `'none'` (default): Hides the element immediately without animation.
- `duration` (string, optional): The duration of the animation. Default is `'0s'`. Supports:
  - `'500ms'`: Duration in milliseconds.
  - `'0.5s'`: Duration in seconds.

**Example:**

```javascript
hide('#myId', 'fade', '500ms'); // Fades out the element with ID 'myId' over 500 milliseconds
hide('.myClass', 'ease', '1s'); // Scales down the first element with class 'myClass' over 1 second
hide('div', 'none'); // Hides all <div> elements immediately without animation
```

## Detailed Function Descriptions

### `fadeOut(element, duration)`

Fades out the given element by gradually reducing its opacity.

**Parameters:**
- `element` (DOM element): The element to fade out.
- `duration` (number): Duration of the fade-out animation in milliseconds.

**Example:**

```javascript
const element = select('#myId');
fadeOut(element, 500); // Fades out the element over 500 milliseconds
```

### `easeOut(element, duration)`

Scales down the given element to zero size.

**Parameters:**
- `element` (DOM element): The element to scale down.
- `duration` (number): Duration of the scale-down animation in milliseconds.

**Example:**

```javascript
const element = select('.myClass');
easeOut(element, 1000); // Scales down the element over 1 second
```

### `parseDuration(duration)`

Converts a duration string into milliseconds.

**Parameters:**
- `duration` (string | number): Duration as a string (e.g., `'500ms'` or `'0.5s'`) or a number in milliseconds.

**Returns:**
- The duration in milliseconds.

**Example:**

```javascript
const milliseconds = parseDuration('500ms'); // Returns 500
const millisecondsFromSeconds = parseDuration('0.5s'); // Returns 500
const millisecondsFromNumber = parseDuration(300); // Returns 300
```



# `addStyleSheet` Function Documentation

## Overview

The `addStyleSheet` function is a utility that allows developers to dynamically apply CSS styles to elements on a webpage based on CSS selectors. It supports both direct styling and media queries, making it easy to implement responsive design.

## Function Signature

```javascript
function addStyleSheet(styleConfig) { /* ... */ }
```

## Parameters

### `styleConfig`
- **Type**: `Object`
- **Description**: An object where each key is a CSS selector, and each value is either an object containing style properties and values or an object containing media queries.
  
  **Key Types**:
  - **Selector**: A CSS selector string (e.g., `'.className'`, `'#elementId'`, `'tagName'`).
  
  **Value Types**:
  - **Styles Object**: An object where the keys are CSS properties and the values are the corresponding CSS values (e.g., `color: 'blue'`).
  - **Media Queries**: An object where the `media` key contains an object of media queries and their associated styles.

### Example Structure
```javascript
const styleConfig = {
    '.selector': {
        property: 'value',
        media: {
            '(max-width: 600px)': {
                property: 'value',
            },
        },
    },
    '#anotherSelector': {
        property: 'value',
    },
};
```

## How It Works

1. **Iterate Over Selectors**: The function iterates through each key in the `styleConfig` object.
2. **Check for Media Queries**: If a `media` property is found within the style object, the function calls a helper function to apply the media queries. If no `media` property is found, the function directly applies the styles to the elements selected by the given selector.
3. **Apply Styles**: The function applies the styles directly to each selected element or generates a `<style>` block in the document’s `<head>` for media queries.

## Usage

### Basic Usage

```javascript
addStyleSheet({
    '#header': {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
    },
});
```


### Hover Effect Example

```javascript
addStyleSheet({
    '.button': {
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
    },
    '.button:hover': {
        backgroundColor: 'darkblue',
    },
});
```

## Benefits

- **Dynamic Styling**: Easily apply styles to elements without requiring external CSS files.
- **Responsive Design**: Handle responsive styling with integrated media queries.
- **Ease of Use**: Apply multiple styles and media queries in a single function call.


## Conclusion

The `addStyleSheet` function is a powerful tool for applying dynamic styles in JavaScript. Its support for both direct styles and media queries makes it an excellent choice for building responsive and interactive web pages without relying on external CSS files.
```

## 5. `slideshow()`

### Purpose
The `slideshow()` function creates a slideshow with various transition effects and controls.

### Syntax
```javascript
slideshow(selector, slideshowType, speed, options)
```

### Parameters
- **`selector`**: A string representing the CSS selector for the slideshow elements.
- **`slideshowType`**: (Optional) The type of transition effect for the slideshow. Possible values include:
  - `'fade'`
  - `'slide-left'`
  - `'slide-right'`
  - `'slide-up'`
  - `'slide-down'`
  - `'zoom-in'`
  - `'zoom-out'`
  - `'flip-horizontal'`
  - `'flip-vertical'`
  - `'rotate-clockwise'`
  - `'rotate-counterclockwise'`
  - `'cube'`
  - `'carousel'`
  - `'wipe-left'`
  - `'wipe-right'`
  - `'wipe-up'`
  - `'wipe-down'`
  - `'ken-burns'`
  - `'push-left'`
  - `'push-right'`
  - `'push-up'`
  - `'push-down'`
  - `'cover-left'`
  - `'cover-right'`
  - `'cover-up'`
  - `'cover-down'`
  - `'reveal-left'`
  - `'reveal-right'`
  - `'reveal-up'`
  - `'reveal-down'`
  - `'parallax'`
  - `'bounce'`
  - `'shake'`
- **`speed`**: (Optional) Duration of the transition (e.g., `'2s'`). Defaults to `'2s'`.
- **`options`**: (Optional) An object for additional settings:
  - **`interval`**: (Number) Time between slides in milliseconds (e.g., `3000` for 3 seconds).
  - **`transitionDuration`**: (String) Duration of the transition effect.
  - **`easing`**: (String) Easing function for the transition (e.g., `'ease-in-out'`).

### Examples
1. **Basic Slideshow**
    ```javascript
    slideshow('.slides');
    ```
    Creates a slideshow with default settings (fade effect, 2-second speed).

2. **Slideshow with Slide Transition**
    ```javascript
    slideshow('.slides', 'slide-left', '1s');
    ```
    Creates a slideshow with a slide-left transition effect and a 1-second transition speed.

3. **Slideshow with Custom Interval and Transition**
    ```javascript
    slideshow('.slides', 'zoom-in', '1.5s', { interval: 4000 });
    ```
    Creates a slideshow with a zoom-in transition effect, a 1.5-second transition speed, and a 4-second interval between slides.
