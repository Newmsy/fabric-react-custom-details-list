"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var Checkbox_1 = require("office-ui-fabric-react/lib-commonjs/Checkbox");
var MarqueeSelection_1 = require("office-ui-fabric-react/lib-commonjs/MarqueeSelection");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var react_hooks_1 = require("@uifabric/react-hooks");
var PHOTOS = Utilities_1.createArray(250, function (index) {
    var randomWidth = 50 + Math.floor(Math.random() * 150);
    return {
        key: index,
        url: "http://placehold.it/" + randomWidth + "x100",
        width: randomWidth,
        height: 100,
    };
});
var theme = Styling_1.getTheme();
var styles = Styling_1.mergeStyleSets({
    photoList: {
        display: 'inline-block',
        border: '1px solid ' + theme.palette.neutralTertiary,
        margin: 0,
        padding: 10,
        overflow: 'hidden',
        userSelect: 'none',
    },
    photoCell: {
        position: 'relative',
        display: 'inline-block',
        margin: 2,
        boxSizing: 'border-box',
        background: theme.palette.neutralLighter,
        lineHeight: 100,
        verticalAlign: 'middle',
        textAlign: 'center',
        selectors: {
            '&.is-selected': {
                background: theme.palette.themeLighter,
                border: '1px solid ' + theme.palette.themePrimary,
            },
        },
    },
    checkbox: {
        margin: '10px 0',
    },
});
var useForceUpdate = function () {
    var _a = React.useState(0), setCount = _a[1];
    console.log('update');
    return react_hooks_1.useConstCallback(function () { return setCount(function (current) { return current + 1; }); });
};
exports.MarqueeSelectionBasicExample = function () {
    var _a = react_hooks_1.useBoolean(true), isMarqueeEnabled = _a[0], toggleIsMarqueeEnabled = _a[1].toggle;
    var forceUpdate = useForceUpdate();
    var selection = react_hooks_1.useConst(function () {
        return new MarqueeSelection_1.Selection({
            items: PHOTOS,
            onSelectionChanged: forceUpdate,
        });
    });
    return (React.createElement(MarqueeSelection_1.MarqueeSelection, { selection: selection, isEnabled: isMarqueeEnabled },
        React.createElement(Checkbox_1.Checkbox, { className: styles.checkbox, label: "Is marquee enabled", defaultChecked: true, onChange: toggleIsMarqueeEnabled }),
        React.createElement("p", null, "Drag a rectangle around the items below to select them:"),
        React.createElement("ul", { className: styles.photoList }, PHOTOS.map(function (photo, index) { return (React.createElement("div", { key: index, className: Utilities_1.css(styles.photoCell, selection.isIndexSelected(index) && 'is-selected'), "data-is-focusable": true, "data-selection-index": index, style: { width: photo.width, height: photo.height } }, index)); }))));
};
//# sourceMappingURL=MarqueeSelection.Basic.Example.js.map