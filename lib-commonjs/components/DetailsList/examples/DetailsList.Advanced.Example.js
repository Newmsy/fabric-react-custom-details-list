"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Link_1 = require("office-ui-fabric-react/lib-commonjs/Link");
var TextField_1 = require("office-ui-fabric-react/lib-commonjs/TextField");
var CommandBar_1 = require("office-ui-fabric-react/lib-commonjs/CommandBar");
var Announced_1 = require("office-ui-fabric-react/lib-commonjs/Announced");
var ContextualMenu_1 = require("office-ui-fabric-react/lib-commonjs/ContextualMenu");
var DetailsList_1 = require("office-ui-fabric-react/lib-commonjs/DetailsList");
var example_data_1 = require("@uifabric/example-data");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var theme = Styling_1.getTheme();
var headerDividerClass = 'DetailsListAdvancedExample-divider';
var classNames = Styling_1.mergeStyleSets({
    headerDivider: {
        display: 'inline-block',
        height: '100%',
    },
    headerDividerBar: [
        {
            display: 'none',
            background: theme.palette.themePrimary,
            position: 'absolute',
            top: 16,
            bottom: 0,
            width: '1px',
            zIndex: 5,
        },
        headerDividerClass,
    ],
    linkField: {
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
    },
    root: {
        selectors: (_a = {},
            _a["." + headerDividerClass + ":hover + ." + headerDividerClass] = {
                display: 'inline',
            },
            _a),
    },
});
var commandBarStyles = { root: { marginBottom: '40px' } };
var DEFAULT_ITEM_LIMIT = 5;
var PAGING_SIZE = 10;
var PAGING_DELAY = 2000;
var ITEMS_COUNT = 5000;
var DetailsListAdvancedExample = /** @class */ (function (_super) {
    tslib_1.__extends(DetailsListAdvancedExample, _super);
    function DetailsListAdvancedExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderDivider = function (columnProps, defaultRenderer) {
            var columnIndex = columnProps.columnIndex;
            return (React.createElement(React.Fragment, { key: "divider-wrapper-" + columnIndex },
                React.createElement("span", { className: classNames.headerDivider }, defaultRenderer(columnProps)),
                React.createElement("span", { className: classNames.headerDividerBar })));
        };
        _this._onRenderMissingItem = function (index) {
            _this._onDataMiss(index);
            return null;
        };
        _this._onToggleLazyLoad = function () {
            var isLazyLoaded = _this.state.isLazyLoaded;
            isLazyLoaded = !isLazyLoaded;
            _this.setState({
                isLazyLoaded: isLazyLoaded,
                items: isLazyLoaded
                    ? _this._allItems.slice(0, PAGING_SIZE).concat(new Array(ITEMS_COUNT - PAGING_SIZE))
                    : _this._allItems,
            });
        };
        _this._onToggleHeaderVisible = function () {
            _this.setState({ isHeaderVisible: !_this.state.isHeaderVisible });
        };
        _this._onToggleResizing = function () {
            var _a = _this.state, items = _a.items, sortedColumnKey = _a.sortedColumnKey, isSortedDescending = _a.isSortedDescending;
            var canResizeColumns = _this.state.canResizeColumns;
            canResizeColumns = !canResizeColumns;
            _this.setState({
                canResizeColumns: canResizeColumns,
                columns: _this._buildColumns(items, canResizeColumns, _this._onColumnClick, sortedColumnKey, isSortedDescending),
            });
        };
        _this._onCheckboxVisibilityChanged = function (ev, menuItem) {
            _this.setState({ checkboxVisibility: menuItem.data });
        };
        _this._onLayoutChanged = function (ev, menuItem) {
            _this.setState({ layoutMode: menuItem.data });
        };
        _this._onConstrainModeChanged = function (ev, menuItem) {
            _this.setState({ constrainMode: menuItem.data });
        };
        _this._onSelectionChanged = function (ev, menuItem) {
            _this.setState({ selectionMode: menuItem.data });
        };
        _this._onItemLimitChanged = function (ev, value) {
            var newValue = parseInt(value, 10);
            if (isNaN(newValue)) {
                newValue = DEFAULT_ITEM_LIMIT;
            }
            _this.setState({ groupItemLimit: newValue });
        };
        _this._getCommandItems = function (canResizeColumns, checkboxVisibility, constrainMode, isHeaderVisible, isLazyLoaded, layoutMode, selectionMode) {
            return [
                {
                    key: 'addRow',
                    text: 'Insert row',
                    iconProps: { iconName: 'Add' },
                    onClick: _this._onAddRow,
                },
                {
                    key: 'deleteRow',
                    text: 'Delete row',
                    iconProps: { iconName: 'Delete' },
                    onClick: _this._onDeleteRow,
                },
                {
                    key: 'configure',
                    text: 'Configure',
                    iconProps: { iconName: 'Settings' },
                    subMenuProps: {
                        items: [
                            {
                                key: 'resizing',
                                text: 'Allow column resizing',
                                canCheck: true,
                                checked: canResizeColumns,
                                onClick: _this._onToggleResizing,
                            },
                            {
                                key: 'headerVisible',
                                text: 'Is header visible',
                                canCheck: true,
                                checked: isHeaderVisible,
                                onClick: _this._onToggleHeaderVisible,
                            },
                            {
                                key: 'lazyload',
                                text: 'Simulate async loading',
                                canCheck: true,
                                checked: isLazyLoaded,
                                onClick: _this._onToggleLazyLoad,
                            },
                            {
                                key: 'dash',
                                text: '-',
                            },
                            {
                                key: 'checkboxVisibility',
                                text: 'Checkbox visibility',
                                subMenuProps: {
                                    items: [
                                        {
                                            key: 'checkboxVisibility.always',
                                            text: 'Always',
                                            canCheck: true,
                                            isChecked: checkboxVisibility === DetailsList_1.CheckboxVisibility.always,
                                            onClick: _this._onCheckboxVisibilityChanged,
                                            data: DetailsList_1.CheckboxVisibility.always,
                                        },
                                        {
                                            key: 'checkboxVisibility.onHover',
                                            text: 'On hover',
                                            canCheck: true,
                                            isChecked: checkboxVisibility === DetailsList_1.CheckboxVisibility.onHover,
                                            onClick: _this._onCheckboxVisibilityChanged,
                                            data: DetailsList_1.CheckboxVisibility.onHover,
                                        },
                                        {
                                            key: 'checkboxVisibility.hidden',
                                            text: 'Hidden',
                                            canCheck: true,
                                            isChecked: checkboxVisibility === DetailsList_1.CheckboxVisibility.hidden,
                                            onClick: _this._onCheckboxVisibilityChanged,
                                            data: DetailsList_1.CheckboxVisibility.hidden,
                                        },
                                    ],
                                },
                            },
                            {
                                key: 'layoutMode',
                                text: 'Layout mode',
                                subMenuProps: {
                                    items: [
                                        {
                                            key: DetailsList_1.DetailsListLayoutMode[DetailsList_1.DetailsListLayoutMode.fixedColumns],
                                            text: 'Fixed columns',
                                            canCheck: true,
                                            checked: layoutMode === DetailsList_1.DetailsListLayoutMode.fixedColumns,
                                            onClick: _this._onLayoutChanged,
                                            data: DetailsList_1.DetailsListLayoutMode.fixedColumns,
                                        },
                                        {
                                            key: DetailsList_1.DetailsListLayoutMode[DetailsList_1.DetailsListLayoutMode.justified],
                                            text: 'Justified columns',
                                            canCheck: true,
                                            checked: layoutMode === DetailsList_1.DetailsListLayoutMode.justified,
                                            onClick: _this._onLayoutChanged,
                                            data: DetailsList_1.DetailsListLayoutMode.justified,
                                        },
                                    ],
                                },
                            },
                            {
                                key: 'selectionMode',
                                text: 'Selection mode',
                                subMenuProps: {
                                    items: [
                                        {
                                            key: DetailsList_1.SelectionMode[DetailsList_1.SelectionMode.none],
                                            text: 'None',
                                            canCheck: true,
                                            checked: selectionMode === DetailsList_1.SelectionMode.none,
                                            onClick: _this._onSelectionChanged,
                                            data: DetailsList_1.SelectionMode.none,
                                        },
                                        {
                                            key: DetailsList_1.SelectionMode[DetailsList_1.SelectionMode.single],
                                            text: 'Single select',
                                            canCheck: true,
                                            checked: selectionMode === DetailsList_1.SelectionMode.single,
                                            onClick: _this._onSelectionChanged,
                                            data: DetailsList_1.SelectionMode.single,
                                        },
                                        {
                                            key: DetailsList_1.SelectionMode[DetailsList_1.SelectionMode.multiple],
                                            text: 'Multi select',
                                            canCheck: true,
                                            checked: selectionMode === DetailsList_1.SelectionMode.multiple,
                                            onClick: _this._onSelectionChanged,
                                            data: DetailsList_1.SelectionMode.multiple,
                                        },
                                    ],
                                },
                            },
                            {
                                key: 'constrainMode',
                                text: 'Constrain mode',
                                subMenuProps: {
                                    items: [
                                        {
                                            key: DetailsList_1.ConstrainMode[DetailsList_1.ConstrainMode.unconstrained],
                                            text: 'Unconstrained',
                                            canCheck: true,
                                            checked: constrainMode === DetailsList_1.ConstrainMode.unconstrained,
                                            onClick: _this._onConstrainModeChanged,
                                            data: DetailsList_1.ConstrainMode.unconstrained,
                                        },
                                        {
                                            key: DetailsList_1.ConstrainMode[DetailsList_1.ConstrainMode.horizontalConstrained],
                                            text: 'Horizontal constrained',
                                            canCheck: true,
                                            checked: constrainMode === DetailsList_1.ConstrainMode.horizontalConstrained,
                                            onClick: _this._onConstrainModeChanged,
                                            data: DetailsList_1.ConstrainMode.horizontalConstrained,
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ];
        };
        _this._onItemInvoked = function (item, index) {
            console.log('Item invoked', item, index);
        };
        _this._onItemContextMenu = function (item, index, ev) {
            var contextualMenuProps = {
                target: ev.target,
                items: [
                    {
                        key: 'text',
                        name: _this._selection.getSelectedCount() + " selected",
                    },
                ],
                onDismiss: function () {
                    _this.setState({
                        contextualMenuProps: undefined,
                    });
                },
            };
            if (index > -1) {
                _this.setState({
                    contextualMenuProps: contextualMenuProps,
                });
            }
            return false;
        };
        _this._onColumnClick = function (ev, column) {
            if (column.columnActionsMode !== DetailsList_1.ColumnActionsMode.disabled) {
                _this.setState({
                    contextualMenuProps: _this._getContextualMenuProps(ev, column),
                });
            }
        };
        _this._onColumnContextMenu = function (column, ev) {
            if (column.columnActionsMode !== DetailsList_1.ColumnActionsMode.disabled) {
                _this.setState({
                    contextualMenuProps: _this._getContextualMenuProps(ev, column),
                });
            }
        };
        _this._onContextualMenuDismissed = function () {
            _this.setState({
                contextualMenuProps: undefined,
            });
        };
        _this._onSortColumn = function (columnKey, isSortedDescending) {
            var sortedItems = _copyAndSort(_this._allItems, columnKey, isSortedDescending);
            _this.setState({
                items: sortedItems,
                announcedMessage: columnKey + " is sorted " + (isSortedDescending ? 'descending' : 'ascending'),
                groups: undefined,
                columns: _this._buildColumns(sortedItems, true, _this._onColumnClick, columnKey, isSortedDescending, undefined, _this._onColumnContextMenu),
                isSortedDescending: isSortedDescending,
                sortedColumnKey: columnKey,
            });
        };
        _this._onGroupByColumn = function (column) {
            var key = column.key, isGrouped = column.isGrouped;
            var _a = _this.state, sortedColumnKey = _a.sortedColumnKey, isSortedDescending = _a.isSortedDescending, groups = _a.groups, items = _a.items, columns = _a.columns;
            if (isGrouped) {
                // ungroup
                _this._onSortColumn(sortedColumnKey, !!isSortedDescending);
            }
            else {
                var groupedItems = [];
                var newGroups = void 0;
                if (groups) {
                    newGroups = tslib_1.__spreadArrays(groups);
                    groupedItems = _this._groupByKey(newGroups, items, key);
                }
                else {
                    groupedItems = _copyAndSort(items, key);
                    newGroups = _this._getGroups(groupedItems, key);
                }
                for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                    var c = columns_1[_i];
                    if (c.key === key) {
                        c.isGrouped = true;
                        break;
                    }
                }
                _this.setState({
                    items: groupedItems,
                    columns: tslib_1.__spreadArrays(columns),
                    groups: newGroups,
                });
            }
        };
        _this._onAddRow = function () {
            _this.setState({
                items: example_data_1.createListItems(1).concat(_this.state.items),
            });
        };
        _this._onDeleteRow = function () {
            if (_this._selection.getSelectedCount() > 0) {
                _this.setState(function (previousState) {
                    return {
                        items: previousState.items.filter(function (item, index) { return !_this._selection.isIndexSelected(index); }),
                    };
                });
            }
            else {
                _this.setState({
                    items: _this.state.items.slice(1),
                });
            }
        };
        _this._onItemsSelectionChanged = function () {
            _this.setState({
                selectionCount: _this._selection.getSelectedCount(),
            });
        };
        _this._getCommandItems = Utilities_1.memoizeFunction(_this._getCommandItems);
        _this._allItems = example_data_1.createListItems(ITEMS_COUNT);
        _this._selection = new DetailsList_1.Selection({
            onSelectionChanged: _this._onItemsSelectionChanged,
        });
        _this._selection.setItems(_this._allItems, false);
        _this.state = {
            items: _this._allItems,
            selectionCount: 0,
            groups: undefined,
            groupItemLimit: DEFAULT_ITEM_LIMIT,
            layoutMode: DetailsList_1.DetailsListLayoutMode.justified,
            constrainMode: DetailsList_1.ConstrainMode.horizontalConstrained,
            selectionMode: DetailsList_1.SelectionMode.multiple,
            canResizeColumns: true,
            checkboxVisibility: DetailsList_1.CheckboxVisibility.onHover,
            columns: _this._buildColumns(_this._allItems, true, _this._onColumnClick, '', undefined, undefined, _this._onColumnContextMenu),
            contextualMenuProps: undefined,
            sortedColumnKey: 'name',
            isSortedDescending: false,
            isLazyLoaded: false,
            isHeaderVisible: true,
        };
        return _this;
    }
    DetailsListAdvancedExample.prototype.render = function () {
        var _a = this.state, canResizeColumns = _a.canResizeColumns, checkboxVisibility = _a.checkboxVisibility, columns = _a.columns, constrainMode = _a.constrainMode, contextualMenuProps = _a.contextualMenuProps, groupItemLimit = _a.groupItemLimit, groups = _a.groups, isHeaderVisible = _a.isHeaderVisible, isLazyLoaded = _a.isLazyLoaded, items = _a.items, layoutMode = _a.layoutMode, selectionMode = _a.selectionMode, announcedMessage = _a.announcedMessage;
        var isGrouped = groups && groups.length > 0;
        var groupProps = {
            getGroupItemLimit: function (group) {
                if (group) {
                    return group.isShowingAll ? group.count : Math.min(group.count, groupItemLimit);
                }
                else {
                    return items.length;
                }
            },
            footerProps: {
                showAllLinkText: 'Show all',
            },
        };
        return (React.createElement("div", { className: classNames.root },
            React.createElement(CommandBar_1.CommandBar, { styles: commandBarStyles, items: this._getCommandItems(canResizeColumns, checkboxVisibility, constrainMode, isHeaderVisible, isLazyLoaded, layoutMode, selectionMode), farItems: [{ key: 'count', text: this.state.selectionCount + " selected" }] }),
            React.createElement(Announced_1.Announced, { message: this.state.selectionCount + " selected" }),
            isGrouped ? React.createElement(TextField_1.TextField, { label: "Group item limit", onChange: this._onItemLimitChanged }) : null,
            announcedMessage ? React.createElement(Announced_1.Announced, { message: announcedMessage }) : undefined,
            React.createElement(DetailsList_1.DetailsList, { setKey: "items", items: items, selection: this._selection, groups: groups, columns: columns, checkboxVisibility: checkboxVisibility, layoutMode: layoutMode, isHeaderVisible: isHeaderVisible, selectionMode: selectionMode, constrainMode: constrainMode, groupProps: groupProps, enterModalSelectionOnTouch: true, onItemInvoked: this._onItemInvoked, onItemContextMenu: this._onItemContextMenu, selectionZoneProps: {
                    selection: this._selection,
                    disableAutoSelectOnInputElements: true,
                    selectionMode: selectionMode,
                }, ariaLabelForListHeader: "Column headers. Click to sort.", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", ariaLabelForSelectionColumn: "Toggle selection", checkButtonAriaLabel: "Row checkbox", onRenderMissingItem: this._onRenderMissingItem }),
            contextualMenuProps && React.createElement(ContextualMenu_1.ContextualMenu, tslib_1.__assign({}, contextualMenuProps))));
    };
    DetailsListAdvancedExample.prototype._onDataMiss = function (index) {
        var _this = this;
        index = Math.floor(index / PAGING_SIZE) * PAGING_SIZE;
        if (!this._isFetchingItems) {
            this._isFetchingItems = true;
            setTimeout(function () {
                _this._isFetchingItems = false;
                var itemsCopy = tslib_1.__spreadArrays(_this.state.items);
                itemsCopy.splice(index, PAGING_SIZE).concat(_this._allItems.slice(index, index + PAGING_SIZE));
                _this.setState({
                    items: itemsCopy,
                });
            }, PAGING_DELAY);
        }
    };
    DetailsListAdvancedExample.prototype._getContextualMenuProps = function (ev, column) {
        var _this = this;
        var items = [
            {
                key: 'aToZ',
                name: 'A to Z',
                iconProps: { iconName: 'SortUp' },
                canCheck: true,
                checked: column.isSorted && !column.isSortedDescending,
                onClick: function () { return _this._onSortColumn(column.key, false); },
            },
            {
                key: 'zToA',
                name: 'Z to A',
                iconProps: { iconName: 'SortDown' },
                canCheck: true,
                checked: column.isSorted && column.isSortedDescending,
                onClick: function () { return _this._onSortColumn(column.key, true); },
            },
        ];
        if (example_data_1.isGroupable(column.key)) {
            items.push({
                key: 'groupBy',
                name: 'Group by ' + column.name,
                iconProps: { iconName: 'GroupedDescending' },
                canCheck: true,
                checked: column.isGrouped,
                onClick: function () { return _this._onGroupByColumn(column); },
            });
        }
        return {
            items: items,
            target: ev.currentTarget,
            directionalHint: ContextualMenu_1.DirectionalHint.bottomLeftEdge,
            gapSpace: 10,
            isBeakVisible: true,
            onDismiss: this._onContextualMenuDismissed,
        };
    };
    DetailsListAdvancedExample.prototype._groupByKey = function (groups, items, key) {
        var groupedItems = [];
        if (groups) {
            for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
                var group = groups_1[_i];
                if (group.children && group.children.length > 0) {
                    var childGroupedItems = this._groupByKey(group.children, items, key);
                    groupedItems = groupedItems.concat(childGroupedItems);
                }
                else {
                    var itemsInGroup = items.slice(group.startIndex, group.startIndex + group.count);
                    var nextLevelGroupedItems = _copyAndSort(itemsInGroup, key);
                    groupedItems = groupedItems.concat(nextLevelGroupedItems);
                    group.children = this._getGroups(nextLevelGroupedItems, key, group);
                }
            }
        }
        return groupedItems;
    };
    DetailsListAdvancedExample.prototype._getGroups = function (groupedItems, key, parentGroup) {
        var _this = this;
        var separator = '-';
        var groups = groupedItems.reduce(function (current, item, index) {
            var currentGroup = current[current.length - 1];
            var itemColumnValue = item[key];
            if (!currentGroup || _this._getLeafGroupKey(currentGroup.key, separator) !== itemColumnValue) {
                current.push({
                    key: (parentGroup ? parentGroup.key + separator : '') + itemColumnValue,
                    name: key + ': ' + itemColumnValue,
                    startIndex: parentGroup ? parentGroup.startIndex + index : index,
                    count: 1,
                    level: parentGroup ? parentGroup.level + 1 : 0,
                });
            }
            else {
                currentGroup.count++;
            }
            return current;
        }, []);
        return groups;
    };
    DetailsListAdvancedExample.prototype._getLeafGroupKey = function (key, separator) {
        var leafKey = key;
        if (key.indexOf(separator) !== -1) {
            var arrKeys = key.split(separator);
            leafKey = arrKeys[arrKeys.length - 1];
        }
        return leafKey;
    };
    DetailsListAdvancedExample.prototype._buildColumns = function (items, canResizeColumns, onColumnClick, sortedColumnKey, isSortedDescending, groupedColumnKey, onColumnContextMenu) {
        var _this = this;
        var columns = DetailsList_1.buildColumns(items, canResizeColumns, onColumnClick, sortedColumnKey, isSortedDescending, groupedColumnKey);
        columns.forEach(function (column) {
            column.onRenderDivider = _this._onRenderDivider;
            column.onColumnContextMenu = onColumnContextMenu;
            column.ariaLabel = "Operations for " + column.name;
            if (column.key === 'thumbnail') {
                column.iconName = 'Picture';
                column.isIconOnly = true;
            }
            else if (column.key === 'description') {
                column.isMultiline = true;
                column.minWidth = 200;
            }
            else if (column.key === 'name') {
                column.onRender = function (item) { return React.createElement(Link_1.Link, { "data-selection-invoke": true }, item.name); };
            }
            else if (column.key === 'key') {
                column.columnActionsMode = DetailsList_1.ColumnActionsMode.disabled;
                column.onRender = function (item) { return (React.createElement(Link_1.Link, { className: classNames.linkField, href: "https://microsoft.com", target: "_blank", rel: "noopener" }, item.key)); };
                column.minWidth = 90;
                column.maxWidth = 90;
            }
        });
        return columns;
    };
    return DetailsListAdvancedExample;
}(React.Component));
exports.DetailsListAdvancedExample = DetailsListAdvancedExample;
function _copyAndSort(items, columnKey, isSortedDescending) {
    var key = columnKey;
    return items.slice(0).sort(function (a, b) { return ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1); });
}
//# sourceMappingURL=DetailsList.Advanced.Example.js.map