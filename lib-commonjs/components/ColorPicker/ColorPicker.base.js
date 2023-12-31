"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var TextField_1 = require("../../TextField");
var ColorRectangle_1 = require("./ColorRectangle/ColorRectangle");
var ColorSlider_1 = require("./ColorSlider/ColorSlider");
var consts_1 = require("../../utilities/color/consts");
var getColorFromString_1 = require("../../utilities/color/getColorFromString");
var getColorFromRGBA_1 = require("../../utilities/color/getColorFromRGBA");
var clamp_1 = require("../../utilities/color/clamp");
var updateA_1 = require("../../utilities/color/updateA");
var updateT_1 = require("../../utilities/color/updateT");
var updateH_1 = require("../../utilities/color/updateH");
var correctRGB_1 = require("../../utilities/color/correctRGB");
var correctHex_1 = require("../../utilities/color/correctHex");
var ColorRectangle_base_1 = require("./ColorRectangle/ColorRectangle.base");
var getClassNames = Utilities_1.classNamesFunction();
var allColorComponents = ['hex', 'r', 'g', 'b', 'a', 't'];
/**
 * {@docCategory ColorPicker}
 */
var ColorPickerBase = /** @class */ (function (_super) {
    tslib_1.__extends(ColorPickerBase, _super);
    function ColorPickerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onSVChanged = function (ev, color) {
            _this._updateColor(ev, color);
        };
        _this._onHChanged = function (ev, h) {
            _this._updateColor(ev, updateH_1.updateH(_this.state.color, h));
        };
        /** Callback for when the alpha/transparency slider changes */
        _this._onATChanged = function (ev, value) {
            var updater = _this.props.alphaType === 'transparency' ? updateT_1.updateT : updateA_1.updateA;
            _this._updateColor(ev, updater(_this.state.color, Math.round(value)));
        };
        _this._onBlur = function (event) {
            var _a;
            var _b = _this.state, color = _b.color, editingColor = _b.editingColor;
            if (!editingColor) {
                return;
            }
            // If there was an intermediate incorrect value (such as too large or empty), correct it.
            var value = editingColor.value, component = editingColor.component;
            var isHex = component === 'hex';
            var isAlpha = component === 'a';
            var isTransparency = component === 't';
            var minLength = isHex ? consts_1.MIN_HEX_LENGTH : consts_1.MIN_RGBA_LENGTH;
            if (value.length >= minLength && (isHex || !isNaN(Number(value)))) {
                // Real value. Clamp to appropriate length (hex) or range (rgba).
                var newColor = void 0;
                if (isHex) {
                    newColor = getColorFromString_1.getColorFromString('#' + correctHex_1.correctHex(value));
                }
                else if (isAlpha || isTransparency) {
                    var updater = isAlpha ? updateA_1.updateA : updateT_1.updateT;
                    newColor = updater(color, clamp_1.clamp(Number(value), consts_1.MAX_COLOR_ALPHA));
                }
                else {
                    newColor = getColorFromRGBA_1.getColorFromRGBA(correctRGB_1.correctRGB(tslib_1.__assign(tslib_1.__assign({}, color), (_a = {}, _a[component] = Number(value), _a))));
                }
                // Update state and call onChange
                _this._updateColor(event, newColor);
            }
            else {
                // Intermediate value was an empty string or too short (hex only).
                // Just clear the intermediate state and revert to the previous value.
                _this.setState({ editingColor: undefined });
            }
        };
        Utilities_1.initializeComponentRef(_this);
        var strings = props.strings; // always defined since it's in defaultProps
        Utilities_1.warnDeprecations('ColorPicker', props, {
            hexLabel: 'strings.hex',
            redLabel: 'strings.red',
            greenLabel: 'strings.green',
            blueLabel: 'strings.blue',
            alphaLabel: 'strings.alpha',
            alphaSliderHidden: 'alphaType',
        });
        // tslint:disable-next-line:deprecation
        if (strings.hue) {
            // warnDeprecations can't handle nested deprecated props
            Utilities_1.warn("ColorPicker property 'strings.hue' was used but has been deprecated. Use 'strings.hueAriaLabel' instead.");
        }
        _this.state = {
            color: _getColorFromProps(props) || getColorFromString_1.getColorFromString('#ffffff'),
        };
        _this._textChangeHandlers = {};
        for (var _i = 0, allColorComponents_1 = allColorComponents; _i < allColorComponents_1.length; _i++) {
            var component = allColorComponents_1[_i];
            _this._textChangeHandlers[component] = _this._onTextChange.bind(_this, component);
        }
        var defaultStrings = ColorPickerBase.defaultProps.strings;
        _this._textLabels = {
            // tslint:disable:deprecation
            r: props.redLabel || strings.red || defaultStrings.red,
            g: props.greenLabel || strings.green || defaultStrings.green,
            b: props.blueLabel || strings.blue || defaultStrings.blue,
            a: props.alphaLabel || strings.alpha || defaultStrings.alpha,
            hex: props.hexLabel || strings.hex || defaultStrings.hex,
            t: strings.transparency || defaultStrings.transparency,
        };
        _this._strings = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, defaultStrings), { 
            // these aria labels default to the visible labels
            alphaAriaLabel: _this._textLabels.a, transparencyAriaLabel: _this._textLabels.t }), strings);
        return _this;
    }
    Object.defineProperty(ColorPickerBase.prototype, "color", {
        get: function () {
            return this.state.color;
        },
        enumerable: true,
        configurable: true
    });
    ColorPickerBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        // if props changed (as opposed to a state update), update the color
        if (prevProps !== this.props) {
            var color = _getColorFromProps(this.props);
            if (color) {
                this._updateColor(undefined, color);
            }
        }
    };
    ColorPickerBase.prototype.render = function () {
        var _this = this;
        var props = this.props;
        var strings = this._strings;
        var textLabels = this._textLabels;
        var theme = props.theme, className = props.className, styles = props.styles, alphaType = props.alphaType, 
        // tslint:disable-next-line:deprecation
        _a = props.alphaSliderHidden, 
        // tslint:disable-next-line:deprecation
        alphaSliderHidden = _a === void 0 ? alphaType === 'none' : _a;
        var color = this.state.color;
        var useTransparency = alphaType === 'transparency';
        var colorComponents = ['hex', 'r', 'g', 'b', useTransparency ? 't' : 'a'];
        var atValue = useTransparency ? color.t : color.a;
        var atLabel = useTransparency ? textLabels.t : textLabels.a;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            alphaType: alphaType,
        });
        var selectedColorAriaParts = [textLabels.r, color.r, textLabels.g, color.g, textLabels.b, color.b];
        if (!alphaSliderHidden && typeof atValue === 'number') {
            selectedColorAriaParts.push(atLabel, atValue + "%");
        }
        var ariaLabel = strings.rootAriaLabelFormat.replace('{0}', selectedColorAriaParts.join(' '));
        return (React.createElement("div", { className: classNames.root, role: "group", "aria-label": ariaLabel },
            React.createElement("div", { className: classNames.panel },
                React.createElement(ColorRectangle_1.ColorRectangle, { color: color, onChange: this._onSVChanged, ariaLabel: strings.svAriaLabel, ariaDescription: strings.svAriaDescription, ariaValueFormat: strings.svAriaValueFormat, className: classNames.colorRectangle }),
                React.createElement("div", { className: classNames.flexContainer },
                    React.createElement("div", { className: classNames.flexSlider },
                        React.createElement(ColorSlider_1.ColorSlider, { className: "is-hue", type: "hue", 
                            // tslint:disable-next-line:deprecation
                            ariaLabel: strings.hue || strings.hueAriaLabel, value: color.h, onChange: this._onHChanged }),
                        !alphaSliderHidden && (React.createElement(ColorSlider_1.ColorSlider, { className: "is-alpha", type: alphaType, ariaLabel: useTransparency ? strings.transparencyAriaLabel : strings.alphaAriaLabel, overlayColor: color.hex, value: atValue, onChange: this._onATChanged }))),
                    props.showPreview && (React.createElement("div", { className: classNames.flexPreviewBox },
                        React.createElement("div", { className: classNames.colorSquare + ' is-preview', style: {
                                backgroundColor: color.str,
                            } })))),
                React.createElement("table", { className: classNames.table, role: "group", cellPadding: "0", cellSpacing: "0" },
                    React.createElement("thead", null,
                        React.createElement("tr", { className: classNames.tableHeader },
                            React.createElement("td", { className: classNames.tableHexCell }, textLabels.hex),
                            React.createElement("td", null, textLabels.r),
                            React.createElement("td", null, textLabels.g),
                            React.createElement("td", null, textLabels.b),
                            !alphaSliderHidden && React.createElement("td", { className: classNames.tableAlphaCell }, atLabel))),
                    React.createElement("tbody", null,
                        React.createElement("tr", null, colorComponents.map(function (comp) {
                            if ((comp === 'a' || comp === 't') && alphaSliderHidden) {
                                return null;
                            }
                            return (React.createElement("td", { key: comp },
                                React.createElement(TextField_1.TextField, { className: classNames.input, onChange: _this._textChangeHandlers[comp], onBlur: _this._onBlur, value: _this._getDisplayValue(comp), spellCheck: false, ariaLabel: textLabels[comp], autoComplete: "off" })));
                        })))))));
    };
    ColorPickerBase.prototype._getDisplayValue = function (component) {
        var _a = this.state, color = _a.color, editingColor = _a.editingColor;
        if (editingColor && editingColor.component === component) {
            return editingColor.value;
        }
        if (component === 'hex') {
            return color[component] || '';
        }
        else if (typeof color[component] === 'number' && !isNaN(color[component])) {
            return String(color[component]);
        }
        return '';
    };
    ColorPickerBase.prototype._onTextChange = function (component, event, newValue) {
        var _a;
        var color = this.state.color;
        var isHex = component === 'hex';
        var isAlpha = component === 'a';
        var isTransparency = component === 't';
        newValue = (newValue || '').substr(0, isHex ? consts_1.MAX_HEX_LENGTH : consts_1.MAX_RGBA_LENGTH);
        // Ignore what the user typed if it contains invalid characters
        var validCharsRegex = isHex ? consts_1.HEX_REGEX : consts_1.RGBA_REGEX;
        if (!validCharsRegex.test(newValue)) {
            return;
        }
        // Determine if the entry is valid (different methods for hex, alpha, and RGB)
        var isValid;
        if (newValue === '') {
            // Empty string is obviously not valid
            isValid = false;
        }
        else if (isHex) {
            // Technically hex values of length 3 are also valid, but committing the value here would
            // cause it to be automatically converted to a value of length 6, which may not be what the
            // user wanted if they're not finished typing. (Values of length 3 will be committed on blur.)
            isValid = newValue.length === consts_1.MAX_HEX_LENGTH;
        }
        else if (isAlpha || isTransparency) {
            isValid = Number(newValue) <= consts_1.MAX_COLOR_ALPHA;
        }
        else {
            isValid = Number(newValue) <= consts_1.MAX_COLOR_RGB;
        }
        if (!isValid) {
            // If the new value is an empty string or other invalid value, save that to display.
            // (if the user still hasn't entered anything on blur, the last value is restored)
            this.setState({ editingColor: { component: component, value: newValue } });
        }
        else if (String(color[component]) === newValue) {
            // If the new value is the same as the current value, mostly ignore it.
            // Exception is that if the user was previously editing the value (but hadn't yet entered
            // a new valid value), we should clear the intermediate value.
            if (this.state.editingColor) {
                this.setState({ editingColor: undefined });
            }
        }
        else {
            // Should be a valid color. Update the value.
            var newColor = isHex
                ? getColorFromString_1.getColorFromString('#' + newValue)
                : isTransparency
                    ? updateT_1.updateT(color, Number(newValue))
                    : getColorFromRGBA_1.getColorFromRGBA(tslib_1.__assign(tslib_1.__assign({}, color), (_a = {}, _a[component] = Number(newValue), _a)));
            this._updateColor(event, newColor);
        }
    };
    /**
     * Update the displayed color and call change handlers if appropriate.
     * @param ev - Event if call was triggered by an event (undefined if triggered by props change)
     * @param newColor - Updated color
     */
    ColorPickerBase.prototype._updateColor = function (ev, newColor) {
        if (!newColor) {
            return;
        }
        var _a = this.state, color = _a.color, editingColor = _a.editingColor;
        // For black or white, the hue can change without changing the string.
        var isDifferentColor = newColor.h !== color.h || newColor.str !== color.str;
        if (isDifferentColor || editingColor) {
            // If ev is undefined, it's an update from props (which should be unconditionally respected
            // and not call onChange).
            if (ev && this.props.onChange) {
                this.props.onChange(ev, newColor);
                if (ev.defaultPrevented) {
                    return;
                }
            }
            this.setState({ color: newColor, editingColor: undefined });
        }
    };
    ColorPickerBase.defaultProps = {
        alphaType: 'alpha',
        strings: {
            rootAriaLabelFormat: 'Color picker, {0} selected.',
            hex: 'Hex',
            red: 'Red',
            green: 'Green',
            blue: 'Blue',
            alpha: 'Alpha',
            transparency: 'Transparency',
            hueAriaLabel: 'Hue',
            svAriaLabel: ColorRectangle_base_1.ColorRectangleBase.defaultProps.ariaLabel,
            svAriaValueFormat: ColorRectangle_base_1.ColorRectangleBase.defaultProps.ariaValueFormat,
            svAriaDescription: ColorRectangle_base_1.ColorRectangleBase.defaultProps.ariaDescription,
        },
    };
    return ColorPickerBase;
}(React.Component));
exports.ColorPickerBase = ColorPickerBase;
function _getColorFromProps(props) {
    var color = props.color;
    return typeof color === 'string' ? getColorFromString_1.getColorFromString(color) : color;
}
//# sourceMappingURL=ColorPicker.base.js.map