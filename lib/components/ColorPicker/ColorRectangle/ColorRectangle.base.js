import { __extends } from "tslib";
import * as React from 'react';
import { classNamesFunction, on, initializeComponentRef, KeyCodes, getId } from '../../../Utilities';
import { MAX_COLOR_SATURATION, MAX_COLOR_VALUE } from '../../../utilities/color/consts';
import { getFullColorString } from '../../../utilities/color/getFullColorString';
import { updateSV } from '../../../utilities/color/updateSV';
import { clamp } from '../../../utilities/color/clamp';
var getClassNames = classNamesFunction();
/**
 * {@docCategory ColorPicker}
 */
var ColorRectangleBase = /** @class */ (function (_super) {
    __extends(ColorRectangleBase, _super);
    function ColorRectangleBase(props) {
        var _this = _super.call(this, props) || this;
        _this._disposables = [];
        _this._root = React.createRef();
        _this._isAdjustingSaturation = true;
        _this._descriptionId = getId('ColorRectangle-description');
        _this._onKeyDown = function (ev) {
            var color = _this.state.color;
            var s = color.s, v = color.v;
            var increment = ev.shiftKey ? 10 : 1;
            // Intentionally DO NOT flip the color picker in RTL: its orientation is not very meaningful,
            // and getting all the math and styles flipped correctly is tricky
            switch (ev.which) {
                case KeyCodes.up: {
                    _this._isAdjustingSaturation = false;
                    v += increment; // V = 100 (lightest) is at the top
                    break;
                }
                case KeyCodes.down: {
                    _this._isAdjustingSaturation = false;
                    v -= increment; // V = 0 (darkest) is at the bottom
                    break;
                }
                case KeyCodes.left: {
                    _this._isAdjustingSaturation = true;
                    s -= increment;
                    break;
                }
                case KeyCodes.right: {
                    _this._isAdjustingSaturation = true;
                    s += increment;
                    break;
                }
                default:
                    return;
            }
            _this._updateColor(ev, updateSV(color, clamp(s, MAX_COLOR_SATURATION), clamp(v, MAX_COLOR_VALUE)));
        };
        _this._onMouseDown = function (ev) {
            _this._disposables.push(on(window, 'mousemove', _this._onMouseMove, true), on(window, 'mouseup', _this._disposeListeners, true));
            _this._onMouseMove(ev);
        };
        _this._onMouseMove = function (ev) {
            if (!_this._root.current) {
                return;
            }
            // Leaving the following commented code which is sometimes necessary for debugging:
            // If the primary button (1) isn't pressed, the user is no longer dragging, so turn off
            // the event handlers and exit.
            // tslint:disable-next-line:no-bitwise
            // if (!(ev.buttons & 1)) {
            //   this._disposeListeners();
            //   return;
            // }
            var newColor = _getNewColor(ev, _this.state.color, _this._root.current);
            if (newColor) {
                _this._updateColor(ev, newColor);
            }
        };
        _this._disposeListeners = function () {
            _this._disposables.forEach(function (dispose) { return dispose(); });
            _this._disposables = [];
        };
        initializeComponentRef(_this);
        _this.state = { color: props.color };
        return _this;
    }
    Object.defineProperty(ColorRectangleBase.prototype, "color", {
        get: function () {
            return this.state.color;
        },
        enumerable: true,
        configurable: true
    });
    ColorRectangleBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        // if props changed (as opposed to a state update), set the value
        // TODO: switch to strict controlled pattern instead
        if (prevProps !== this.props && this.props.color) {
            this.setState({ color: this.props.color });
        }
    };
    ColorRectangleBase.prototype.componentWillUnmount = function () {
        this._disposeListeners();
    };
    ColorRectangleBase.prototype.render = function () {
        var _a = this.props, minSize = _a.minSize, theme = _a.theme, className = _a.className, styles = _a.styles, ariaValueFormat = _a.ariaValueFormat, ariaLabel = _a.ariaLabel, ariaDescription = _a.ariaDescription;
        var color = this.state.color;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            minSize: minSize,
        });
        var valueText = ariaValueFormat.replace('{0}', String(color.s)).replace('{1}', String(color.v));
        return (React.createElement("div", { ref: this._root, tabIndex: 0, className: classNames.root, style: { backgroundColor: getFullColorString(color) }, onMouseDown: this._onMouseDown, onKeyDown: this._onKeyDown, role: "slider", "aria-valuetext": valueText, "aria-valuenow": this._isAdjustingSaturation ? color.s : color.v, "aria-valuemin": 0, "aria-valuemax": MAX_COLOR_VALUE, "aria-label": ariaLabel, "aria-describedby": this._descriptionId, "data-is-focusable": true },
            React.createElement("div", { className: classNames.description, id: this._descriptionId }, ariaDescription),
            React.createElement("div", { className: classNames.light }),
            React.createElement("div", { className: classNames.dark }),
            React.createElement("div", { className: classNames.thumb, style: { left: color.s + '%', top: MAX_COLOR_VALUE - color.v + '%', backgroundColor: color.str } })));
    };
    ColorRectangleBase.prototype._updateColor = function (ev, color) {
        var onChange = this.props.onChange;
        var oldColor = this.state.color;
        if (color.s === oldColor.s && color.v === oldColor.v) {
            return; // no change
        }
        if (onChange) {
            onChange(ev, color);
        }
        if (!ev.defaultPrevented) {
            this.setState({ color: color });
            ev.preventDefault();
        }
    };
    ColorRectangleBase.defaultProps = {
        minSize: 220,
        ariaLabel: 'Saturation and brightness',
        ariaValueFormat: 'Saturation {0} brightness {1}',
        ariaDescription: 'Use left and right arrow keys to set saturation. Use up and down arrow keys to set brightness.',
    };
    return ColorRectangleBase;
}(React.Component));
export { ColorRectangleBase };
/**
 * Exported for testing only.
 * @internal
 */
export function _getNewColor(ev, prevColor, root) {
    var rectSize = root.getBoundingClientRect();
    var sPercentage = (ev.clientX - rectSize.left) / rectSize.width;
    var vPercentage = (ev.clientY - rectSize.top) / rectSize.height;
    return updateSV(prevColor, clamp(Math.round(sPercentage * MAX_COLOR_SATURATION), MAX_COLOR_SATURATION), clamp(Math.round(MAX_COLOR_VALUE - vPercentage * MAX_COLOR_VALUE), MAX_COLOR_VALUE));
}
//# sourceMappingURL=ColorRectangle.base.js.map