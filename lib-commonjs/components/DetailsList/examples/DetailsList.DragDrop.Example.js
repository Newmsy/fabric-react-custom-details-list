"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Link_1 = require("office-ui-fabric-react/lib-commonjs/Link");
var DetailsList_1 = require("office-ui-fabric-react/lib-commonjs/DetailsList");
var MarqueeSelection_1 = require("office-ui-fabric-react/lib-commonjs/MarqueeSelection");
var example_data_1 = require("@uifabric/example-data");
var TextField_1 = require("office-ui-fabric-react/lib-commonjs/TextField");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var theme = Styling_1.getTheme();
var margin = '0 30px 20px 0';
var dragEnterClass = Styling_1.mergeStyles({
    backgroundColor: theme.palette.neutralLight,
});
var controlWrapperClass = Styling_1.mergeStyles({
    display: 'flex',
    flexWrap: 'wrap',
});
var textFieldStyles = {
    root: { margin: margin },
    fieldGroup: { maxWidth: '100px' },
};
var togglesStyles = { root: { margin: margin } };
var DetailsListDragDropExample = /** @class */ (function (_super) {
    tslib_1.__extends(DetailsListDragDropExample, _super);
    function DetailsListDragDropExample(props) {
        var _this = _super.call(this, props) || this;
        _this._handleColumnReorder = function (draggedIndex, targetIndex) {
            var draggedItems = _this.state.columns[draggedIndex];
            var newColumns = tslib_1.__spreadArrays(_this.state.columns);
            // insert before the dropped item
            newColumns.splice(draggedIndex, 1);
            newColumns.splice(targetIndex, 0, draggedItems);
            _this.setState({ columns: newColumns });
        };
        _this._onChangeStartCountText = function (event, text) {
            _this.setState({ frozenColumnCountFromStart: text });
        };
        _this._onChangeEndCountText = function (event, text) {
            _this.setState({ frozenColumnCountFromEnd: text });
        };
        _this._onChangeColumnReorderEnabled = function (ev, checked) {
            _this.setState({ isColumnReorderEnabled: checked });
        };
        _this._onItemInvoked = function (item) {
            alert("Item invoked: " + item.name);
        };
        _this._onRenderItemColumn = function (item, index, column) {
            var key = column.key;
            if (key === 'name') {
                return React.createElement(Link_1.Link, { "data-selection-invoke": true }, item[key]);
            }
            return String(item[key]);
        };
        _this._selection = new DetailsList_1.Selection();
        _this._dragDropEvents = _this._getDragDropEvents();
        _this._draggedIndex = -1;
        var items = example_data_1.createListItems(10, 0);
        _this.state = {
            items: items,
            columns: DetailsList_1.buildColumns(items, true),
            isColumnReorderEnabled: true,
            frozenColumnCountFromStart: '1',
            frozenColumnCountFromEnd: '0',
        };
        return _this;
    }
    DetailsListDragDropExample.prototype.render = function () {
        var _a = this.state, items = _a.items, columns = _a.columns, isColumnReorderEnabled = _a.isColumnReorderEnabled, frozenColumnCountFromStart = _a.frozenColumnCountFromStart, frozenColumnCountFromEnd = _a.frozenColumnCountFromEnd;
        return (React.createElement("div", null,
            React.createElement("div", { className: controlWrapperClass },
                React.createElement(Toggle_1.Toggle, { label: "Enable column reorder", checked: isColumnReorderEnabled, onChange: this._onChangeColumnReorderEnabled, onText: "Enabled", offText: "Disabled", styles: togglesStyles }),
                React.createElement(TextField_1.TextField, { label: "Number of left frozen columns", onGetErrorMessage: this._validateNumber, value: frozenColumnCountFromStart, onChange: this._onChangeStartCountText, styles: textFieldStyles }),
                React.createElement(TextField_1.TextField, { label: "Number of right frozen columns", onGetErrorMessage: this._validateNumber, value: frozenColumnCountFromEnd, onChange: this._onChangeEndCountText, styles: textFieldStyles })),
            React.createElement(MarqueeSelection_1.MarqueeSelection, { selection: this._selection },
                React.createElement(DetailsList_1.DetailsList, { setKey: "items", items: items, columns: columns, selection: this._selection, selectionPreservedOnEmptyClick: true, onItemInvoked: this._onItemInvoked, onRenderItemColumn: this._onRenderItemColumn, dragDropEvents: this._dragDropEvents, columnReorderOptions: this.state.isColumnReorderEnabled ? this._getColumnReorderOptions() : undefined, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", checkButtonAriaLabel: "Row checkbox" }))));
    };
    DetailsListDragDropExample.prototype._getColumnReorderOptions = function () {
        return {
            frozenColumnCountFromStart: parseInt(this.state.frozenColumnCountFromStart, 10),
            frozenColumnCountFromEnd: parseInt(this.state.frozenColumnCountFromEnd, 10),
            handleColumnReorder: this._handleColumnReorder,
        };
    };
    DetailsListDragDropExample.prototype._validateNumber = function (value) {
        return isNaN(Number(value)) ? "The value should be a number, actual is " + value + "." : '';
    };
    DetailsListDragDropExample.prototype._getDragDropEvents = function () {
        var _this = this;
        return {
            canDrop: function (dropContext, dragContext) {
                return true;
            },
            canDrag: function (item) {
                return true;
            },
            onDragEnter: function (item, event) {
                // return string is the css classes that will be added to the entering element.
                return dragEnterClass;
            },
            onDragLeave: function (item, event) {
                return;
            },
            onDrop: function (item, event) {
                if (_this._draggedItem) {
                    _this._insertBeforeItem(item);
                }
            },
            onDragStart: function (item, itemIndex, selectedItems, event) {
                _this._draggedItem = item;
                _this._draggedIndex = itemIndex;
            },
            onDragEnd: function (item, event) {
                _this._draggedItem = undefined;
                _this._draggedIndex = -1;
            },
        };
    };
    DetailsListDragDropExample.prototype._insertBeforeItem = function (item) {
        var draggedItems = this._selection.isIndexSelected(this._draggedIndex)
            ? this._selection.getSelection()
            : [this._draggedItem];
        var insertIndex = this.state.items.indexOf(item);
        var items = this.state.items.filter(function (itm) { return draggedItems.indexOf(itm) === -1; });
        items.splice.apply(items, tslib_1.__spreadArrays([insertIndex, 0], draggedItems));
        this.setState({ items: items });
    };
    return DetailsListDragDropExample;
}(React.Component));
exports.DetailsListDragDropExample = DetailsListDragDropExample;
//# sourceMappingURL=DetailsList.DragDrop.Example.js.map