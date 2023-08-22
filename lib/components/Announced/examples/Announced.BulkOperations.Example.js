import { __extends, __spreadArrays } from "tslib";
import * as React from 'react';
import { Announced } from 'office-ui-fabric-react/lib/Announced';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { Selection } from 'office-ui-fabric-react/lib/Selection';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { mergeStyles, getTheme } from 'office-ui-fabric-react/lib/Styling';
var _items = [];
var theme = getTheme();
var dragEnterClass = mergeStyles({
    backgroundColor: theme.palette.neutralLight,
});
var _columns = ['Name', 'Modified', 'Modified By', 'File Size'].map(function (name) {
    var fieldName = name.replace(' ', '').toLowerCase();
    return {
        fieldName: fieldName,
        name: name,
        key: fieldName,
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
    };
});
var _names = [
    'Annie Lindqvist',
    'Aaron Reid',
    'Alex Lundberg',
    'Roko Kolar',
    'Christian Bergqvist',
    'Valentina Lovric',
    'Makenzie Sharett',
];
function getMockDateString() {
    return 'Thu Jan 05 2017‌';
}
var AnnouncedBulkOperationsExample = /** @class */ (function (_super) {
    __extends(AnnouncedBulkOperationsExample, _super);
    function AnnouncedBulkOperationsExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onItemInvoked = function (item) {
            alert("Item invoked: " + item.name);
        };
        _this._onRenderItemColumn = function (item, index, column) {
            if (column.key === 'name') {
                return React.createElement(Link, { "data-selection-invoke": true }, item[column.key]);
            }
            return item[column.key];
        };
        _this._selection = new Selection();
        _this._dragDropEvents = _this._getDragDropEvents();
        _this._draggedIndex = -1;
        if (_items.length === 0) {
            for (var i = 0; i < 20; i++) {
                _items.push({
                    key: 'item-' + i,
                    name: 'Item ' + i,
                    modified: getMockDateString(),
                    modifiedby: _names[Math.floor(Math.random() * _names.length)],
                    filesize: Math.floor(Math.random() * 30).toString() + ' MB',
                });
            }
        }
        _this.state = {
            items: _items,
            numberOfItems: 0,
        };
        return _this;
    }
    AnnouncedBulkOperationsExample.prototype.render = function () {
        var items = this.state.items;
        var stackTokens = { childrenGap: 10 };
        return (React.createElement(Stack, { tokens: stackTokens },
            React.createElement(Text, null, "Turn on Narrator and drag and drop the items."),
            React.createElement(Text, null, "Note: This example is to showcase the concept of copying, uploading, or moving many items and not fully illustrative of the real world scenario."),
            this._renderAnnounced(),
            React.createElement(MarqueeSelection, { selection: this._selection },
                React.createElement(DetailsList, { setKey: "items", items: items, columns: _columns, selection: this._selection, selectionPreservedOnEmptyClick: true, onItemInvoked: this._onItemInvoked, onRenderItemColumn: this._onRenderItemColumn, dragDropEvents: this._dragDropEvents, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items" }))));
    };
    AnnouncedBulkOperationsExample.prototype._renderAnnounced = function () {
        var numberOfItems = this.state.numberOfItems;
        if (numberOfItems > 0) {
            return (React.createElement(Announced, { message: numberOfItems + " item" + (numberOfItems === 1 ? '' : 's') + " moved", "aria-live": 'assertive' }));
        }
    };
    AnnouncedBulkOperationsExample.prototype._getDragDropEvents = function () {
        var _this = this;
        return {
            canDrop: function () { return true; },
            canDrag: function () { return true; },
            // return string is the css class that will be added to the entering element.
            onDragEnter: function () { return dragEnterClass; },
            onDragLeave: function () { return undefined; },
            onDrop: function (item) {
                if (_this._draggedItem && item) {
                    _this._insertBeforeItem(item);
                }
            },
            onDragStart: function (item, itemIndex) {
                _this._draggedItem = item;
                _this._draggedIndex = itemIndex;
            },
            onDragEnd: function () {
                _this._draggedItem = undefined;
                _this._draggedIndex = -1;
            },
        };
    };
    AnnouncedBulkOperationsExample.prototype._insertBeforeItem = function (item) {
        var draggedItems = this._selection.isIndexSelected(this._draggedIndex)
            ? this._selection.getSelection()
            : [this._draggedItem];
        var items = this.state.items.filter(function (currentItem) { return draggedItems.indexOf(currentItem) === -1; });
        var insertIndex = items.indexOf(item);
        // if dragging/dropping on itself, index will be 0.
        if (insertIndex === -1) {
            insertIndex = 0;
        }
        items.splice.apply(items, __spreadArrays([insertIndex, 0], draggedItems));
        this.setState({ items: items, numberOfItems: draggedItems.length });
    };
    return AnnouncedBulkOperationsExample;
}(React.Component));
export { AnnouncedBulkOperationsExample };
//# sourceMappingURL=Announced.BulkOperations.Example.js.map