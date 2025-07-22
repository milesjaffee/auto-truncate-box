# react-auto-truncate-box

A React component for a box that auto-truncates its contents.

## Installation

```bash
npm install react-auto-truncate-box
```

## Usage Example

```Typescript
import AutoTruncateBox from 'react-auto-truncate-box';

<AutoTruncateBox 
  text="Lorem ipsum is simply dummy text. Lorem Ipsum was invented in the 1500s." 
  maxLines={1} 
  showToggle
  ellipsis="....."
/>
```

## Parameters

`text` (string, required): the text or content to go in the box

`maxLines` (number, optional): max number of lines of text allowed in the box, not counting the toggle button

`ellipsis` (string, optional): How to show the trailing-off ellipsis that indicates where the text is cut off. Defaults to `...`

`showToggle` (boolean, optional): Show 'expand' button or not.

`className` (string, optional): Pass classes, including working Tailwind CSS if that's your style.

`style` (optional): React CSS properties, same as any other component.

`width` (string/number, optional): Deprecated. Control width of box with style or className.
