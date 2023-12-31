define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/DetailsList", "@uifabric/example-data", "office-ui-fabric-react/lib/Styling"], function (require, exports, tslib_1, React, DetailsList_1, example_data_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var theme = Styling_1.getTheme();
    var DetailsListCustomRowsExample = /** @class */ (function (_super) {
        tslib_1.__extends(DetailsListCustomRowsExample, _super);
        function DetailsListCustomRowsExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onRenderRow = function (props) {
                var customStyles = {};
                if (props) {
                    if (props.itemIndex % 2 === 0) {
                        // Every other row renders with a different background color
                        customStyles.root = { backgroundColor: theme.palette.themeLighterAlt };
                    }
                    return React.createElement(DetailsList_1.DetailsRow, tslib_1.__assign({}, props, { styles: customStyles }));
                }
                return null;
            };
            _this._items = example_data_1.createListItems(500);
            return _this;
        }
        DetailsListCustomRowsExample.prototype.render = function () {
            return (React.createElement(DetailsList_1.DetailsList, { items: this._items, setKey: "set", onRenderRow: this._onRenderRow, checkButtonAriaLabel: "Row checkbox" }));
        };
        return DetailsListCustomRowsExample;
    }(React.Component));
    exports.DetailsListCustomRowsExample = DetailsListCustomRowsExample;
});
//# sourceMappingURL=DetailsList.CustomRows.Example.js.map