"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var DetailsList_1 = require("office-ui-fabric-react/lib-commonjs/DetailsList");
var example_data_1 = require("@uifabric/example-data");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
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
//# sourceMappingURL=DetailsList.CustomRows.Example.js.map