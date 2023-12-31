import { __extends } from "tslib";
import * as React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { Check } from 'office-ui-fabric-react/lib/Check';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { Selection, SelectionMode, SelectionZone } from 'office-ui-fabric-react/lib/Selection';
import { createListItems } from '@uifabric/example-data';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
var commonStyles = {
    display: 'inline-block',
    cursor: 'default',
    boxSizing: 'border-box',
    verticalAlign: 'top',
    background: 'none',
    backgroundColor: 'transparent',
    border: 'none',
};
var classNames = mergeStyleSets({
    item: {
        selectors: {
            '&:hover': { background: '#eee' },
        },
    },
    // Overwrites the default style for Button
    check: [commonStyles, { padding: '11px 8px' }],
    cell: [
        commonStyles,
        {
            overflow: 'hidden',
            height: 36,
            padding: 8,
        },
    ],
});
var ITEM_COUNT = 100;
/**
 * The SelectionItemExample controls and displays the selection state of a single item
 */
var SelectionItemExample = function (props) {
    var item = props.item, itemIndex = props.itemIndex, selection = props.selection;
    var isSelected = false;
    if (selection && itemIndex !== undefined) {
        isSelected = selection.isIndexSelected(itemIndex);
    }
    return (React.createElement("div", { className: classNames.item, "data-is-focusable": true, "data-selection-index": itemIndex },
        selection && selection.canSelectItem(item) && selection.mode !== SelectionMode.none && (React.createElement("div", { className: classNames.check, "data-is-focusable": true, "data-selection-toggle": true },
            React.createElement(Check, { checked: isSelected }))),
        React.createElement("span", { className: classNames.cell }, item.name),
        React.createElement("a", { className: classNames.cell, href: "https://bing.com", target: "_blank" }, "Link that avoids selection"),
        React.createElement("a", { className: classNames.cell, "data-selection-select": true, href: "https://bing.com", target: "_blank" }, "Link that selects first")));
};
/**
 * The SelectionBasicExample controls the selection state of all items
 */
var SelectionBasicExample = /** @class */ (function (_super) {
    __extends(SelectionBasicExample, _super);
    function SelectionBasicExample(props) {
        var _this = _super.call(this, props) || this;
        _this._alertItem = function (item) {
            alert('item invoked: ' + item.name);
        };
        _this._onSelectionChanged = function () {
            if (_this._hasMounted) {
                _this.forceUpdate();
            }
        };
        _this._onToggleSelectAll = function () {
            var selection = _this.state.selection;
            selection.toggleAllSelected();
        };
        _this._onSelectionModeChanged = function (ev, menuItem) {
            _this.setState(function (previousState) {
                var newSelection = new Selection({
                    onSelectionChanged: _this._onSelectionChanged,
                    canSelectItem: previousState.canSelect === 'vowels' ? _this._canSelectItem : undefined,
                    selectionMode: menuItem.data,
                });
                newSelection.setItems(previousState.items, false);
                return {
                    selection: newSelection,
                };
            });
        };
        _this._onCanSelectChanged = function (ev, menuItem) {
            var canSelectItem = menuItem.data === 'vowels' ? _this._canSelectItem : undefined;
            _this.setState(function (previousState) {
                var newSelection = new Selection({
                    onSelectionChanged: _this._onSelectionChanged,
                    canSelectItem: canSelectItem,
                    selectionMode: previousState.selection.mode,
                });
                newSelection.setItems(previousState.items, false);
                return {
                    selection: newSelection,
                    canSelect: menuItem.data === 'vowels' ? 'vowels' : 'all',
                };
            });
        };
        _this._canSelectItem = function (item) {
            return /^[aeiou]/.test(item.name || '');
        };
        _this._getCommandItems = function (selectionMode, canSelect) {
            return [
                {
                    key: 'selectionMode',
                    text: 'Selection Mode',
                    items: [
                        {
                            key: SelectionMode[SelectionMode.none],
                            name: 'None',
                            canCheck: true,
                            checked: selectionMode === SelectionMode.none,
                            onClick: _this._onSelectionModeChanged,
                            data: SelectionMode.none,
                        },
                        {
                            key: SelectionMode[SelectionMode.single],
                            name: 'Single select',
                            canCheck: true,
                            checked: selectionMode === SelectionMode.single,
                            onClick: _this._onSelectionModeChanged,
                            data: SelectionMode.single,
                        },
                        {
                            key: SelectionMode[SelectionMode.multiple],
                            name: 'Multi select',
                            canCheck: true,
                            checked: selectionMode === SelectionMode.multiple,
                            onClick: _this._onSelectionModeChanged,
                            data: SelectionMode.multiple,
                        },
                    ],
                },
                {
                    key: 'selectAll',
                    text: 'Select All',
                    iconProps: { iconName: 'CheckMark' },
                    onClick: _this._onToggleSelectAll,
                },
                {
                    key: 'allowCanSelect',
                    text: 'Choose selectable items',
                    items: [
                        {
                            key: 'all',
                            name: 'All items',
                            canCheck: true,
                            checked: canSelect === 'all',
                            onClick: _this._onCanSelectChanged,
                            data: 'all',
                        },
                        {
                            key: 'a',
                            name: 'Names starting with vowels',
                            canCheck: true,
                            checked: canSelect === 'vowels',
                            onClick: _this._onCanSelectChanged,
                            data: 'vowels',
                        },
                    ],
                },
            ];
        };
        _this._hasMounted = false;
        // Memoizing this means that given the same parameters, it will return the same array of command objects
        // (performance optimization)
        _this._getCommandItems = memoizeFunction(_this._getCommandItems);
        _this.state = {
            items: createListItems(ITEM_COUNT),
            selection: new Selection({ onSelectionChanged: _this._onSelectionChanged }),
            selectionMode: SelectionMode.multiple,
            canSelect: 'all',
        };
        _this.state.selection.setItems(_this.state.items, false);
        return _this;
    }
    SelectionBasicExample.prototype.componentDidMount = function () {
        this._hasMounted = true;
    };
    SelectionBasicExample.prototype.render = function () {
        var _a = this.state, items = _a.items, selection = _a.selection, canSelect = _a.canSelect;
        return (React.createElement("div", { className: "ms-SelectionBasicExample" },
            React.createElement(CommandBar, { items: this._getCommandItems(selection.mode, canSelect) }),
            React.createElement(MarqueeSelection, { selection: selection, isEnabled: selection.mode === SelectionMode.multiple },
                React.createElement(SelectionZone, { selection: selection, onItemInvoked: this._alertItem }, items.map(function (item, index) { return (React.createElement(SelectionItemExample, { key: item.key, item: item, itemIndex: index, selection: selection })); })))));
    };
    return SelectionBasicExample;
}(React.Component));
export { SelectionBasicExample };
//# sourceMappingURL=Selection.Basic.Example.js.map