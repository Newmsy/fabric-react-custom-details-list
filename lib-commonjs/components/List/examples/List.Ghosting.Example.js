"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FocusZone_1 = require("office-ui-fabric-react/lib-commonjs/FocusZone");
var List_1 = require("office-ui-fabric-react/lib-commonjs/List");
var Image_1 = require("office-ui-fabric-react/lib-commonjs/Image");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var example_data_1 = require("@uifabric/example-data");
var react_hooks_1 = require("@uifabric/react-hooks");
var theme = Styling_1.getTheme();
var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
var classNames = Styling_1.mergeStyleSets({
    container: {
        overflow: 'auto',
        maxHeight: 500,
    },
    itemCell: [
        Styling_1.getFocusStyle(theme, { inset: -1 }),
        {
            minHeight: 54,
            padding: 10,
            boxSizing: 'border-box',
            borderBottom: "1px solid " + semanticColors.bodyDivider,
            display: 'flex',
            selectors: {
                '&:hover': { background: palette.neutralLight },
            },
        },
    ],
    itemImage: {
        flexShrink: 0,
    },
    itemContent: {
        marginLeft: 10,
        overflow: 'hidden',
        flexGrow: 1,
    },
    itemName: [
        fonts.xLarge,
        {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    ],
    itemIndex: {
        fontSize: fonts.small.fontSize,
        color: palette.neutralTertiary,
        marginBottom: 10,
    },
    chevron: {
        alignSelf: 'center',
        marginLeft: 10,
        color: palette.neutralTertiary,
        fontSize: fonts.large.fontSize,
        flexShrink: 0,
    },
});
var onRenderCell = function (item, index, isScrolling) {
    return (React.createElement("div", { className: classNames.itemCell, "data-is-focusable": true },
        React.createElement(Image_1.Image, { className: classNames.itemImage, src: isScrolling ? undefined : item.thumbnail, width: 50, height: 50, imageFit: Image_1.ImageFit.cover }),
        React.createElement("div", { className: classNames.itemContent },
            React.createElement("div", { className: classNames.itemName }, item.name),
            React.createElement("div", { className: classNames.itemIndex }, "Item " + index))));
};
exports.ListGhostingExample = function () {
    var items = react_hooks_1.useConst(function () { return example_data_1.createListItems(5000); });
    return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.vertical },
        React.createElement("div", { className: classNames.container, "data-is-scrollable": true },
            React.createElement(List_1.List, { items: items, onRenderCell: onRenderCell }))));
};
//# sourceMappingURL=List.Ghosting.Example.js.map