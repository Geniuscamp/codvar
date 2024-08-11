


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
4. 
## 4. `slideshow()`

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
