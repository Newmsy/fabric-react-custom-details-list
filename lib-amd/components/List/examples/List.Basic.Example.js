define(["require", "exports", "react", "office-ui-fabric-react/lib/Utilities", "office-ui-fabric-react/lib/FocusZone", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Image", "office-ui-fabric-react/lib/Icon", "office-ui-fabric-react/lib/List", "office-ui-fabric-react/lib/Styling", "@uifabric/example-data", "@uifabric/react-hooks"], function (require, exports, React, Utilities_1, FocusZone_1, TextField_1, Image_1, Icon_1, List_1, Styling_1, example_data_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var theme = Styling_1.getTheme();
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Styling_1.mergeStyleSets({
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
    var onRenderCell = function (item, index) {
        return (React.createElement("div", { className: classNames.itemCell, "data-is-focusable": true },
            React.createElement(Image_1.Image, { className: classNames.itemImage, src: item.thumbnail, width: 50, height: 50, imageFit: Image_1.ImageFit.cover }),
            React.createElement("div", { className: classNames.itemContent },
                React.createElement("div", { className: classNames.itemName }, item.name),
                React.createElement("div", { className: classNames.itemIndex }, "Item " + index),
                React.createElement("div", null, item.description)),
            React.createElement(Icon_1.Icon, { className: classNames.chevron, iconName: Utilities_1.getRTL() ? 'ChevronLeft' : 'ChevronRight' })));
    };
    exports.ListBasicExample = function () {
        var originalItems = react_hooks_1.useConst(function () { return example_data_1.createListItems(5000); });
        var _a = React.useState(originalItems), items = _a[0], setItems = _a[1];
        var resultCountText = items.length === originalItems.length ? '' : " (" + items.length + " of " + originalItems.length + " shown)";
        var onFilterChanged = function (_, text) {
            setItems(originalItems.filter(function (item) { return item.name.toLowerCase().indexOf(text.toLowerCase()) >= 0; }));
        };
        return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.vertical },
            React.createElement(TextField_1.TextField, { label: 'Filter by name' + resultCountText, onChange: onFilterChanged }),
            React.createElement(List_1.List, { items: items, onRenderCell: onRenderCell })));
    };
});
//# sourceMappingURL=List.Basic.Example.js.map