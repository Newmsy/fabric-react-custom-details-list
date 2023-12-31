define(["require", "exports", "tslib", "react", "../../../Utilities", "../../../utilities/color/clamp", "../../../utilities/color/consts"], function (require, exports, tslib_1, React, Utilities_1, clamp_1, consts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory ColorPicker}
     */
    var ColorSliderBase = /** @class */ (function (_super) {
        tslib_1.__extends(ColorSliderBase, _super);
        function ColorSliderBase(props) {
            var _this = _super.call(this, props) || this;
            _this._disposables = [];
            _this._root = React.createRef();
            _this._onKeyDown = function (ev) {
                var currentValue = _this.value;
                var maxValue = _this._maxValue;
                var increment = ev.shiftKey ? 10 : 1;
                // Intentionally DO NOT flip the color picker in RTL: its orientation is not very meaningful,
                // and getting all the math and styles flipped correctly is tricky
                switch (ev.which) {
                    case Utilities_1.KeyCodes.left: {
                        currentValue -= increment;
                        break;
                    }
                    case Utilities_1.KeyCodes.right: {
                        currentValue += increment;
                        break;
                    }
                    case Utilities_1.KeyCodes.home: {
                        currentValue = 0;
                        break;
                    }
                    case Utilities_1.KeyCodes.end: {
                        currentValue = maxValue;
                        break;
                    }
                    default: {
                        return;
                    }
                }
                _this._updateValue(ev, clamp_1.clamp(currentValue, maxValue));
            };
            _this._onMouseDown = function (ev) {
                var win = Utilities_1.getWindow(_this);
                if (win) {
                    _this._disposables.push(Utilities_1.on(win, 'mousemove', _this._onMouseMove, true), Utilities_1.on(win, 'mouseup', _this._disposeListeners, true));
                }
                _this._onMouseMove(ev);
            };
            _this._onMouseMove = function (ev) {
                if (!_this._root.current) {
                    return;
                }
                var maxValue = _this._maxValue;
                var rectSize = _this._root.current.getBoundingClientRect();
                var currentPercentage = (ev.clientX - rectSize.left) / rectSize.width;
                var newValue = clamp_1.clamp(Math.round(currentPercentage * maxValue), maxValue);
                _this._updateValue(ev, newValue);
            };
            _this._disposeListeners = function () {
                _this._disposables.forEach(function (dispose) { return dispose(); });
                _this._disposables = [];
            };
            Utilities_1.initializeComponentRef(_this);
            Utilities_1.warnDeprecations('ColorSlider', props, {
                thumbColor: 'styles.sliderThumb',
                overlayStyle: 'overlayColor',
                isAlpha: 'type',
                maxValue: 'type',
                minValue: 'type',
            });
            // tslint:disable-next-line:deprecation
            if (_this._type !== 'hue' && !(props.overlayColor || props.overlayStyle)) {
                Utilities_1.warn("ColorSlider: 'overlayColor' is required when 'type' is \"alpha\" or \"transparency\"");
            }
            _this.state = {
                currentValue: props.value || 0,
            };
            return _this;
        }
        Object.defineProperty(ColorSliderBase.prototype, "value", {
            get: function () {
                return this.state.currentValue;
            },
            enumerable: true,
            configurable: true
        });
        ColorSliderBase.prototype.componentDidUpdate = function (prevProps, prevState) {
            // if props changed (as opposed to a state update), set the value
            // TODO: switch to strict controlled pattern instead
            if (prevProps !== this.props && this.props.value !== undefined) {
                this.setState({ currentValue: this.props.value });
            }
        };
        ColorSliderBase.prototype.componentWillUnmount = function () {
            this._disposeListeners();
        };
        ColorSliderBase.prototype.render = function () {
            var type = this._type;
            var maxValue = this._maxValue;
            var _a = this.props, 
            // tslint:disable-next-line:deprecation
            overlayStyle = _a.overlayStyle, overlayColor = _a.overlayColor, theme = _a.theme, className = _a.className, styles = _a.styles, _b = _a.ariaLabel, ariaLabel = _b === void 0 ? type : _b;
            var currentValue = this.value;
            var classNames = getClassNames(styles, {
                theme: theme,
                className: className,
                type: type,
            });
            var currentPercentage = (100 * currentValue) / maxValue;
            return (React.createElement("div", { ref: this._root, className: classNames.root, tabIndex: 0, onKeyDown: this._onKeyDown, onMouseDown: this._onMouseDown, role: "slider", "aria-valuenow": currentValue, "aria-valuetext": String(currentValue), "aria-valuemin": 0, "aria-valuemax": maxValue, "aria-label": ariaLabel, "data-is-focusable": true },
                !!(overlayColor || overlayStyle) && (React.createElement("div", { className: classNames.sliderOverlay, 
                    // this isn't included in getStyles because it may change frequently
                    style: overlayColor
                        ? {
                            background: type === 'transparency'
                                ? "linear-gradient(to right, #" + overlayColor + ", transparent)"
                                : "linear-gradient(to right, transparent, #" + overlayColor + ")",
                        }
                        : overlayStyle })),
                React.createElement("div", { className: classNames.sliderThumb, style: { left: currentPercentage + '%' } })));
        };
        Object.defineProperty(ColorSliderBase.prototype, "_type", {
            get: function () {
                // tslint:disable-next-line:deprecation
                var _a = this.props, isAlpha = _a.isAlpha, _b = _a.type, type = _b === void 0 ? isAlpha ? 'alpha' : 'hue' : _b;
                return type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorSliderBase.prototype, "_maxValue", {
            get: function () {
                return this._type === 'hue' ? consts_1.MAX_COLOR_HUE : consts_1.MAX_COLOR_ALPHA;
            },
            enumerable: true,
            configurable: true
        });
        ColorSliderBase.prototype._updateValue = function (ev, newValue) {
            if (newValue === this.value) {
                return;
            }
            var onChange = this.props.onChange;
            if (onChange) {
                onChange(ev, newValue);
            }
            if (!ev.defaultPrevented) {
                this.setState({
                    currentValue: newValue,
                });
                ev.preventDefault();
            }
        };
        ColorSliderBase.defaultProps = {
            value: 0,
        };
        return ColorSliderBase;
    }(React.Component));
    exports.ColorSliderBase = ColorSliderBase;
});
//# sourceMappingURL=ColorSlider.base.js.map