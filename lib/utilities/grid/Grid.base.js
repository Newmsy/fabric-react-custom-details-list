import { __assign, __extends } from "tslib";
import * as React from 'react';
import { getId, toMatrix, classNamesFunction, getNativeProps, htmlElementProperties, initializeComponentRef, } from '../../Utilities';
import { FocusZone } from '../../FocusZone';
var getClassNames = classNamesFunction();
var GridBase = /** @class */ (function (_super) {
    __extends(GridBase, _super);
    function GridBase(props) {
        var _this = _super.call(this, props) || this;
        initializeComponentRef(_this);
        _this._id = props.id || getId();
        return _this;
    }
    GridBase.prototype.render = function () {
        var _this = this;
        var props = this.props;
        var items = props.items, columnCount = props.columnCount, onRenderItem = props.onRenderItem, 
        // tslint:disable:deprecation
        _a = props.ariaPosInSet, 
        // tslint:disable:deprecation
        ariaPosInSet = _a === void 0 ? props.positionInSet : _a, _b = props.ariaSetSize, ariaSetSize = _b === void 0 ? props.setSize : _b, 
        // tslint:enable:deprecation
        styles = props.styles, doNotContainWithinFocusZone = props.doNotContainWithinFocusZone;
        var htmlProps = getNativeProps(this.props, htmlElementProperties, 
        // avoid applying onBlur on the table if it's being used in the FocusZone
        doNotContainWithinFocusZone ? [] : ['onBlur']);
        var classNames = getClassNames(styles, { theme: this.props.theme });
        // Array to store the cells in the correct row index
        var rowsOfItems = toMatrix(items, columnCount);
        var content = (React.createElement("table", __assign({ "aria-posinset": ariaPosInSet, "aria-setsize": ariaSetSize, id: this._id, role: "grid" }, htmlProps, { className: classNames.root }),
            React.createElement("tbody", null, rowsOfItems.map(function (rows, rowIndex) {
                return (React.createElement("tr", { role: 'row', key: _this._id + '-' + rowIndex + '-row' }, rows.map(function (cell, cellIndex) {
                    return (React.createElement("td", { role: 'presentation', key: _this._id + '-' + cellIndex + '-cell', className: classNames.tableCell }, onRenderItem(cell, cellIndex)));
                })));
            }))));
        // Create the table/grid
        return doNotContainWithinFocusZone ? (content) : (React.createElement(FocusZone, { isCircularNavigation: this.props.shouldFocusCircularNavigate, className: classNames.focusedContainer, onBlur: this.props.onBlur }, content));
    };
    return GridBase;
}(React.Component));
export { GridBase };
//# sourceMappingURL=Grid.base.js.map