


Our  framework provides utility functions for selecting DOM elements and hiding them with animations. It includes options for fade-out and ease-out animations.

## Functions

### `select(selector)`

Selects an element based on the provided selector.

**Parameters:**
- `selector` (string): The CSS selector to select the element. Supports IDs (e.g., `#myId`), classes (e.g., `.myClass`), and other valid CSS selectors.

**Returns:**
- The selected DOM element or `null` if no element matches the selector.

**Example:**

```javascript
const element = select('#myId'); // Selects an element with ID 'myId'
const classElement = select('.myClass'); // Selects the first element with class 'myClass'
```

### `hide(selector, animation = 'none', duration = '0s')`

Hides an element with a specified animation or without animation.

**Parameters:**
- `selector` (string): The CSS selector for the element to hide.
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
