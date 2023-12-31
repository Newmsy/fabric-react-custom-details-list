define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/DetailsList"], function (require, exports, tslib_1, React, DetailsList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DetailsListGroupedLargeExample = /** @class */ (function (_super) {
        tslib_1.__extends(DetailsListGroupedLargeExample, _super);
        function DetailsListGroupedLargeExample(props) {
            var _this = _super.call(this, props) || this;
            _this._items = [];
            for (var i = 0; i < 1000; i++) {
                _this._items.push({
                    key: i.toString(),
                    name: 'Item ' + i,
                    value: i.toString(),
                });
            }
            _this._groups = [];
            for (var i = 0; i < 10; i++) {
                _this._groups.push({
                    key: i.toString(),
                    name: i.toString(),
                    startIndex: i * 100,
                    count: 100,
                    level: 0,
                });
            }
            _this._columns = [
                { key: 'name', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
                { key: 'value', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
            ];
            return _this;
        }
        DetailsListGroupedLargeExample.prototype.render = function () {
            return (React.createElement(DetailsList_1.DetailsList, { items: this._items, groups: this._groups, columns: this._columns, ariaLabelForSelectAllCheckbox: "Toggle selection for all items", ariaLabelForSelectionColumn: "Toggle selection", checkButtonAriaLabel: "Row checkbox", onRenderDetailsHeader: this._onRenderDetailsHeader }));
        };
        DetailsListGroupedLargeExample.prototype._onRenderDetailsHeader = function (props) {
            return React.createElement(DetailsList_1.DetailsHeader, tslib_1.__assign({}, props, { ariaLabelForToggleAllGroupsButton: 'Toggle selection' }));
        };
        return DetailsListGroupedLargeExample;
    }(React.Component));
    exports.DetailsListGroupedLargeExample = DetailsListGroupedLargeExample;
});
//# sourceMappingURL=DetailsList.Grouped.Large.Example.js.map