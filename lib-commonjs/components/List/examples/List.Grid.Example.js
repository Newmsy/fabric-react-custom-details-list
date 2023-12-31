"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FocusZone_1 = require("office-ui-fabric-react/lib-commonjs/FocusZone");
var List_1 = require("office-ui-fabric-react/lib-commonjs/List");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var example_data_1 = require("@uifabric/example-data");
var react_hooks_1 = require("@uifabric/react-hooks");
var theme = Styling_1.getTheme();
var palette = theme.palette, fonts = theme.fonts;
var ROWS_PER_PAGE = 3;
var MAX_ROW_HEIGHT = 250;
var classNames = Styling_1.mergeStyleSets({
    listGridExample: {
        overflow: 'hidden',
        fontSize: 0,
        position: 'relative',
    },
    listGridExampleTile: {
        textAlign: 'center',
        outline: 'none',
        position: 'relative',
        float: 'left',
        background: palette.neutralLighter,
        selectors: {
            'focus:after': {
                content: '',
                position: 'absolute',
                left: 2,
                right: 2,
                top: 2,
                bottom: 2,
                boxSizing: 'border-box',
                border: "1px solid " + palette.white,
            },
        },
    },
    listGridExampleSizer: {
        paddingBottom: '100%',
    },
    listGridExamplePadder: {
        position: 'absolute',
        left: 2,
        top: 2,
        right: 2,
        bottom: 2,
    },
    listGridExampleLabel: {
        background: 'rgba(0, 0, 0, 0.3)',
        color: '#FFFFFF',
        position: 'absolute',
        padding: 10,
        bottom: 0,
        left: 0,
        width: '100%',
        fontSize: fonts.small.fontSize,
        boxSizing: 'border-box',
    },
    listGridExampleImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    },
});
exports.ListGridExample = function () {
    var columnCount = React.useRef(0);
    var rowHeight = React.useRef(0);
    var getItemCountForPage = React.useCallback(function (itemIndex, surfaceRect) {
        if (itemIndex === 0) {
            columnCount.current = Math.ceil(surfaceRect.width / MAX_ROW_HEIGHT);
            rowHeight.current = Math.floor(surfaceRect.width / columnCount.current);
        }
        return columnCount.current * ROWS_PER_PAGE;
    }, []);
    var onRenderCell = React.useCallback(function (item, index) {
        return (React.createElement("div", { className: classNames.listGridExampleTile, "data-is-focusable": true, style: {
                width: 100 / columnCount.current + '%',
            } },
            React.createElement("div", { className: classNames.listGridExampleSizer },
                React.createElement("div", { className: classNames.listGridExamplePadder },
                    React.createElement("img", { src: item.thumbnail, className: classNames.listGridExampleImage }),
                    React.createElement("span", { className: classNames.listGridExampleLabel }, "item " + index)))));
    }, [columnCount.current]);
    var getPageHeight = function () {
        return rowHeight.current * ROWS_PER_PAGE;
    };
    var items = react_hooks_1.useConst(function () { return example_data_1.createListItems(5000); });
    return (React.createElement(FocusZone_1.FocusZone, null,
        React.createElement(List_1.List, { className: classNames.listGridExample, items: items, getItemCountForPage: getItemCountForPage, getPageHeight: getPageHeight, renderedWindowsAhead: 4, onRenderCell: onRenderCell })));
};
//# sourceMappingURL=List.Grid.Example.js.map