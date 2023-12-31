"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var TextField_1 = require("office-ui-fabric-react/lib-commonjs/TextField");
var DetailsList_1 = require("office-ui-fabric-react/lib-commonjs/DetailsList");
var Tooltip_1 = require("office-ui-fabric-react/lib-commonjs/Tooltip");
var ScrollablePane_1 = require("office-ui-fabric-react/lib-commonjs/ScrollablePane");
var Sticky_1 = require("office-ui-fabric-react/lib-commonjs/Sticky");
var MarqueeSelection_1 = require("office-ui-fabric-react/lib-commonjs/MarqueeSelection");
var Selection_1 = require("office-ui-fabric-react/lib-commonjs/Selection");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var classNames = Styling_1.mergeStyleSets({
    wrapper: {
        height: '80vh',
        position: 'relative',
        backgroundColor: 'white',
    },
    filter: {
        backgroundColor: 'white',
        paddingBottom: 20,
        maxWidth: 300,
    },
    header: {
        margin: 0,
        backgroundColor: 'white',
    },
    row: {
        display: 'inline-block',
    },
});
var footerItem = {
    key: 'footer',
    test1: 'Footer 1',
    test2: 'Footer 2',
    test3: 'Footer 3',
    test4: 'Footer 4',
    test5: 'Footer 5',
    test6: 'Footer 6',
};
var LOREM_IPSUM = ('lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut ' +
    'labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
    'eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt ').split(' ');
var loremIndex = 0;
var lorem = function (wordCount) {
    var startIndex = loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
    loremIndex = startIndex + wordCount;
    return LOREM_IPSUM.slice(startIndex, loremIndex).join(' ');
};
var allItems = Array.from({ length: 200 }).map(function (item, index) { return ({
    key: index,
    test1: lorem(4),
    test2: lorem(4),
    test3: lorem(4),
    test4: lorem(4),
    test5: lorem(4),
    test6: lorem(4),
}); });
var columns = Array.from({ length: 6 }).map(function (item, index) { return ({
    key: 'column' + (index + 1),
    name: 'Test ' + (index + 1),
    fieldName: 'test' + (index + 1),
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
}); });
var onItemInvoked = function (item) {
    alert('Item invoked: ' + item.test1);
};
var onRenderDetailsHeader = function (props, defaultRender) {
    if (!props) {
        return null;
    }
    var onRenderColumnHeaderTooltip = function (tooltipHostProps) { return (React.createElement(Tooltip_1.TooltipHost, tslib_1.__assign({}, tooltipHostProps))); };
    return (React.createElement(Sticky_1.Sticky, { stickyPosition: Sticky_1.StickyPositionType.Header, isScrollSynced: true }, defaultRender(tslib_1.__assign(tslib_1.__assign({}, props), { onRenderColumnHeaderTooltip: onRenderColumnHeaderTooltip }))));
};
var onRenderDetailsFooter = function (props, defaultRender) {
    if (!props) {
        return null;
    }
    return (React.createElement(Sticky_1.Sticky, { stickyPosition: Sticky_1.StickyPositionType.Footer, isScrollSynced: true },
        React.createElement("div", { className: classNames.row },
            React.createElement(DetailsList_1.DetailsRow, { columns: props.columns, item: footerItem, itemIndex: -1, selection: props.selection, selectionMode: (props.selection && props.selection.mode) || Selection_1.SelectionMode.none, rowWidth: props.rowWidth }))));
};
var hasText = function (item, text) {
    return (item.test1 + "|" + item.test2 + "|" + item.test3 + "|" + item.test4 + "|" + item.test5 + "|" + item.test6).indexOf(text) > -1;
};
exports.ScrollablePaneDetailsListExample = function () {
    var _a = React.useState(allItems), items = _a[0], setItems = _a[1];
    var selection = React.useState(function () {
        var s = new DetailsList_1.Selection();
        s.setItems(items, true);
        return s;
    })[0];
    var onFilterChange = function (ev, text) {
        setItems(text ? allItems.filter(function (item) { return hasText(item, text); }) : allItems);
    };
    return (React.createElement("div", { className: classNames.wrapper },
        React.createElement(ScrollablePane_1.ScrollablePane, { scrollbarVisibility: ScrollablePane_1.ScrollbarVisibility.auto },
            React.createElement(Sticky_1.Sticky, { stickyPosition: Sticky_1.StickyPositionType.Header },
                React.createElement(TextField_1.TextField, { className: classNames.filter, label: "Filter by name:", onChange: onFilterChange })),
            React.createElement(Sticky_1.Sticky, { stickyPosition: Sticky_1.StickyPositionType.Header },
                React.createElement("h1", { className: classNames.header }, "Item list")),
            React.createElement(MarqueeSelection_1.MarqueeSelection, { selection: selection },
                React.createElement(DetailsList_1.DetailsList, { items: items, columns: columns, setKey: "set", layoutMode: DetailsList_1.DetailsListLayoutMode.fixedColumns, constrainMode: DetailsList_1.ConstrainMode.unconstrained, onRenderDetailsHeader: onRenderDetailsHeader, onRenderDetailsFooter: onRenderDetailsFooter, selection: selection, selectionPreservedOnEmptyClick: true, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", onItemInvoked: onItemInvoked })))));
};
//# sourceMappingURL=ScrollablePane.DetailsList.Example.js.map