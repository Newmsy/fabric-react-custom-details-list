import { __extends } from "tslib";
import * as React from 'react';
import { css, getId } from '../../Utilities';
import { CommandButton } from '../../Button';
var GridCell = /** @class */ (function (_super) {
    __extends(GridCell, _super);
    function GridCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onClick = function () {
            var _a = _this.props, onClick = _a.onClick, disabled = _a.disabled, item = _a.item;
            if (onClick && !disabled) {
                onClick(item);
            }
        };
        _this._onMouseEnter = function (ev) {
            var _a = _this.props, onHover = _a.onHover, disabled = _a.disabled, item = _a.item, onMouseEnter = _a.onMouseEnter;
            var didUpdateOnEnter = onMouseEnter && onMouseEnter(ev);
            if (!didUpdateOnEnter && onHover && !disabled) {
                onHover(item);
            }
        };
        _this._onMouseMove = function (ev) {
            var _a = _this.props, onHover = _a.onHover, disabled = _a.disabled, item = _a.item, onMouseMove = _a.onMouseMove;
            var didUpdateOnMove = onMouseMove && onMouseMove(ev);
            if (!didUpdateOnMove && onHover && !disabled) {
                onHover(item);
            }
        };
        _this._onMouseLeave = function (ev) {
            var _a = _this.props, onHover = _a.onHover, disabled = _a.disabled, onMouseLeave = _a.onMouseLeave;
            var didUpdateOnLeave = onMouseLeave && onMouseLeave(ev);
            if (!didUpdateOnLeave && onHover && !disabled) {
                onHover();
            }
        };
        _this._onFocus = function () {
            var _a = _this.props, onFocus = _a.onFocus, disabled = _a.disabled, item = _a.item;
            if (onFocus && !disabled) {
                onFocus(item);
            }
        };
        return _this;
    }
    GridCell.prototype.render = function () {
        var _a;
        var _b = this.props, item = _b.item, id = _b.id, className = _b.className, role = _b.role, selected = _b.selected, disabled = _b.disabled, onRenderItem = _b.onRenderItem, cellDisabledStyle = _b.cellDisabledStyle, cellIsSelectedStyle = _b.cellIsSelectedStyle, index = _b.index, label = _b.label, getClassNames = _b.getClassNames;
        return (React.createElement(CommandButton, { id: id, "data-index": index, "data-is-focusable": true, disabled: disabled, className: css(className, (_a = {},
                _a['' + cellIsSelectedStyle] = selected,
                _a['' + cellDisabledStyle] = disabled,
                _a)), onClick: this._onClick, onMouseEnter: this._onMouseEnter, onMouseMove: this._onMouseMove, onMouseLeave: this._onMouseLeave, onFocus: this._onFocus, role: role, "aria-selected": selected, ariaLabel: label, title: label, getClassNames: getClassNames }, onRenderItem(item)));
    };
    GridCell.defaultProps = {
        disabled: false,
        id: getId('gridCell'),
    };
    return GridCell;
}(React.Component));
export { GridCell };
//# sourceMappingURL=GridCell.js.map