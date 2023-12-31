define(["require", "exports", "react", "office-ui-fabric-react/lib/GroupedList", "office-ui-fabric-react/lib/Link", "@uifabric/example-data", "office-ui-fabric-react/lib/Styling"], function (require, exports, React, GroupedList_1, Link_1, example_data_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var theme = Styling_1.getTheme();
    var headerAndFooterStyles = {
        minWidth: 300,
        minHeight: 40,
        lineHeight: 40,
        paddingLeft: 16,
    };
    var classNames = Styling_1.mergeStyleSets({
        header: [headerAndFooterStyles, theme.fonts.xLarge],
        footer: [headerAndFooterStyles, theme.fonts.large],
        name: {
            display: 'inline-block',
            overflow: 'hidden',
            height: 24,
            cursor: 'default',
            padding: 8,
            boxSizing: 'border-box',
            verticalAlign: 'top',
            background: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            paddingLeft: 32,
        },
    });
    var onRenderHeader = function (props) {
        var toggleCollapse = function () {
            props.onToggleCollapse(props.group);
        };
        return (React.createElement("div", { className: classNames.header },
            "This is a custom header for ",
            props.group.name,
            "\u00A0 (",
            React.createElement(Link_1.Link, { onClick: toggleCollapse }, props.group.isCollapsed ? 'Expand' : 'Collapse'),
            ")"));
    };
    var onRenderCell = function (nestingDepth, item, itemIndex) {
        return (React.createElement("div", { "data-selection-index": itemIndex },
            React.createElement("span", { className: classNames.name }, item.name)));
    };
    var onRenderFooter = function (props) {
        return React.createElement("div", { className: classNames.footer },
            "This is a custom footer for ",
            props.group.name);
    };
    var groupedListProps = {
        onRenderHeader: onRenderHeader,
        onRenderFooter: onRenderFooter,
    };
    var items = example_data_1.createListItems(20);
    var groups = example_data_1.createGroups(4, 0, 0, 5);
    exports.GroupedListCustomExample = function () { return (React.createElement(GroupedList_1.GroupedList, { items: items, onRenderCell: onRenderCell, groupProps: groupedListProps, groups: groups })); };
});
//# sourceMappingURL=GroupedList.Custom.Example.js.map