import * as React from 'react';
import { SwatchColorPicker } from 'office-ui-fabric-react/lib/SwatchColorPicker';
var colorCellsExample1 = [
    { id: 'a', label: 'orange', color: '#ca5010' },
    { id: 'b', label: 'cyan', color: '#038387' },
    { id: 'c', label: 'blueMagenta', color: '#8764b8' },
    { id: 'd', label: 'magenta', color: '#881798' },
    { id: 'e', label: 'white', color: '#ffffff' },
];
var colorCellsExample2 = [
    { id: 'a', label: 'red', color: '#a4262c' },
    { id: 'b', label: 'orange', color: '#ca5010' },
    { id: 'c', label: 'orangeYellow', color: '#986f0b' },
    { id: 'd', label: 'yellowGreen', color: '#8cbd18' },
    { id: 'e', label: 'green', color: '#0b6a0b' },
    { id: 'f', label: 'cyan', color: '#038387' },
    { id: 'g', label: 'cyanBlue', color: '#004e8c' },
    { id: 'h', label: 'magenta', color: '#881798' },
    { id: 'i', label: 'magentaPink', color: '#9b0062' },
    { id: 'j', label: 'black', color: '#000000' },
    { id: 'k', label: 'gray', color: '#7a7574' },
    { id: 'l', label: 'gray20', color: '#69797e' },
];
export var SwatchColorPickerBasicExample = function () {
    var _a = React.useState(), previewColor = _a[0], setPreviewColor = _a[1];
    var swatchColorPickerOnCellHovered = function (id, color) {
        setPreviewColor(color);
    };
    return (React.createElement("div", null,
        React.createElement("div", null, "Simple circle swatch color picker:"),
        React.createElement(SwatchColorPicker, { columnCount: 5, cellShape: 'circle', colorCells: colorCellsExample1 }),
        React.createElement("div", null, "Simple square swatch color picker with default size of 20px:"),
        React.createElement(SwatchColorPicker, { columnCount: 5, cellShape: 'square', colorCells: colorCellsExample1 }),
        React.createElement("div", null, "Simple square swatch color picker with custom size of 35px:"),
        React.createElement(SwatchColorPicker, { columnCount: 5, cellHeight: 35, cellWidth: 35, cellShape: 'square', colorCells: colorCellsExample1 }),
        React.createElement("div", null, "Simple swatch color picker with multiple rows and larger cells that updates its icon color and shows a preview color:"),
        React.createElement("div", { style: {
                color: previewColor,
                fontSize: '24px',
            } }, "Sample Text"),
        React.createElement(SwatchColorPicker, { onCellHovered: swatchColorPickerOnCellHovered, onCellFocused: swatchColorPickerOnCellHovered, columnCount: 4, cellShape: 'circle', cellHeight: 35, cellWidth: 35, cellBorderWidth: 3, colorCells: colorCellsExample2 }),
        React.createElement("div", null, "Simple disabled circle swatch color picker:"),
        React.createElement(SwatchColorPicker, { disabled: true, columnCount: 5, cellShape: 'circle', colorCells: colorCellsExample1 })));
};
//# sourceMappingURL=SwatchColorPicker.Basic.Example.js.map