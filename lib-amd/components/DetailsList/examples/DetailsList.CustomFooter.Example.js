define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/DetailsList"], function (require, exports, tslib_1, React, DetailsList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DetailsListCustomFooterExample = /** @class */ (function (_super) {
        tslib_1.__extends(DetailsListCustomFooterExample, _super);
        function DetailsListCustomFooterExample(props) {
            var _this = _super.call(this, props) || this;
            _this._items = [];
            for (var i = 0; i < 5; i++) {
                _this._items.push({
                    key: i,
                    name: 'Item ' + i,
                    value: i,
                });
            }
            _this._columns = [
                { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
                { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
            ];
            return _this;
        }
        DetailsListCustomFooterExample.prototype.render = function () {
            return (React.createElement(DetailsList_1.DetailsList, { items: this._items, columns: this._columns, setKey: "set", layoutMode: DetailsList_1.DetailsListLayoutMode.justified, selectionPreservedOnEmptyClick: true, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", checkButtonAriaLabel: "Row checkbox", onRenderDetailsFooter: this._onRenderDetailsFooter }));
        };
        DetailsListCustomFooterExample.prototype._onRenderDetailsFooter = function (detailsFooterProps) {
            return (React.createElement(DetailsList_1.DetailsRow, tslib_1.__assign({}, detailsFooterProps, { columns: detailsFooterProps.columns, item: {}, itemIndex: -1, groupNestingDepth: detailsFooterProps.groupNestingDepth, selectionMode: DetailsList_1.SelectionMode.single, selection: detailsFooterProps.selection, onRenderItemColumn: _renderDetailsFooterItemColumn, onRenderCheck: _onRenderCheckForFooterRow })));
        };
        return DetailsListCustomFooterExample;
    }(React.Component));
    exports.DetailsListCustomFooterExample = DetailsListCustomFooterExample;
    var _renderDetailsFooterItemColumn = function (item, index, column) {
        if (column) {
            return (React.createElement("div", null,
                React.createElement("b", null, column.name)));
        }
        return undefined;
    };
    var detailsRowCheckStyles = { root: { visibility: 'hidden' } };
    var _onRenderCheckForFooterRow = function (props) {
        return React.createElement(DetailsList_1.DetailsRowCheck, tslib_1.__assign({}, props, { styles: detailsRowCheckStyles, selected: true }));
    };
});
//# sourceMappingURL=DetailsList.CustomFooter.Example.js.map