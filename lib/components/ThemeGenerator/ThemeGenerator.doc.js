import { __assign, __extends } from "tslib";
import * as React from 'react';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { getContrastRatio, isDark } from 'office-ui-fabric-react/lib/utilities/color/shades';
import { ThemeGenerator, themeRulesStandardCreator, BaseSlots, FabricSlots, } from 'office-ui-fabric-react/lib/ThemeGenerator';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { ColorPicker } from 'office-ui-fabric-react/lib/ColorPicker';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { TeachingBubbleBasicExample } from '../../components/TeachingBubble/examples/TeachingBubble.Basic.Example';
import { TextFieldBasicExample } from '../TextField/examples/TextField.Basic.Example';
import { ToggleBasicExample } from '../../components/Toggle/examples/Toggle.Basic.Example';
import { ProgressIndicatorBasicExample } from '../ProgressIndicator/examples/ProgressIndicator.Basic.Example';
import { Async } from '@uifabric/utilities';
var ThemeGeneratorPage = /** @class */ (function (_super) {
    __extends(ThemeGeneratorPage, _super);
    function ThemeGeneratorPage(props) {
        var _this = _super.call(this, props) || this;
        _this._colorPickerOnDismiss = function () {
            _this.setState({ colorPickerVisible: false });
        };
        _this._semanticSlotRuleChanged = function (slotRule, ev, color) {
            if (_this._semanticSlotColorChangeTimeout) {
                clearTimeout(_this._semanticSlotColorChangeTimeout);
            }
            _this._semanticSlotColorChangeTimeout = _this._async.setTimeout(function () {
                var themeRules = _this.state.themeRules;
                ThemeGenerator.setSlot(slotRule, color.str, isDark(themeRules[BaseSlots[BaseSlots.backgroundColor]].color), true, true);
                _this.setState({ themeRules: themeRules }, _this._makeNewTheme);
            }, 20);
            // 20ms is low enough that you can slowly drag to change color and see that theme,
            // but high enough that quick changes don't get bogged down by a million changes inbetween
        };
        _this._onSwatchClick = function (slotRule, ev) {
            var _a = _this.state, colorPickerSlotRule = _a.colorPickerSlotRule, colorPickerElement = _a.colorPickerElement;
            if (colorPickerSlotRule !== null &&
                colorPickerSlotRule !== undefined &&
                !!colorPickerElement &&
                colorPickerSlotRule === slotRule &&
                colorPickerElement === ev.target) {
                // same one, close it
                _this.setState({ colorPickerVisible: false, colorPickerSlotRule: null, colorPickerElement: null });
            }
            else {
                // new one, open it
                _this.setState({
                    colorPickerVisible: true,
                    colorPickerSlotRule: slotRule,
                    colorPickerElement: ev.target,
                });
            }
        };
        _this._slotWidget = function (slotRule) {
            return (React.createElement("div", { key: slotRule.name, className: "ms-themer-slot" },
                _this._colorSquareSwatchWidget(slotRule),
                React.createElement("div", null,
                    React.createElement("div", null, slotRule.name),
                    !slotRule.isCustomized ? React.createElement("div", null,
                        "Inherits from: ",
                        slotRule.inherits.name) : React.createElement("div", null, "Customized"))));
        };
        _this._fabricSlotWidget = function (fabricSlot) {
            return _this._slotWidget(_this.state.themeRules[FabricSlots[fabricSlot]]);
        };
        _this._accessibilityRow = function (foreground, background) {
            var themeRules = _this.state.themeRules;
            var bgc = themeRules[FabricSlots[background]].color;
            var fgc = themeRules[FabricSlots[foreground]].color;
            var contrastRatio = getContrastRatio(bgc, fgc);
            var contrastRatioString = String(contrastRatio);
            contrastRatioString = contrastRatioString.substr(0, contrastRatioString.indexOf('.') + 3);
            if (contrastRatio < 4.5) {
                contrastRatioString = '**' + contrastRatioString + '**';
            }
            return (React.createElement("tr", { key: String(foreground) + String(background) },
                React.createElement("td", { style: { backgroundColor: bgc.str, color: fgc.str } }, "How vexingly quick daft zebras jump."),
                React.createElement("td", null, contrastRatioString),
                React.createElement("td", null, FabricSlots[foreground] + ' + ' + FabricSlots[background])));
        };
        _this._accessibilityTableBody = function () {
            var accessibilityRows = [
                _this._accessibilityRow(FabricSlots.neutralPrimary, FabricSlots.white),
                // primary color also needs to be accessible, this is also strong variant default
                _this._accessibilityRow(FabricSlots.white, FabricSlots.themePrimary),
                _this._accessibilityRow(FabricSlots.neutralPrimary, FabricSlots.neutralLighter),
                _this._accessibilityRow(FabricSlots.themeDark, FabricSlots.neutralLighter),
                _this._accessibilityRow(FabricSlots.neutralPrimary, FabricSlots.themeLighter),
            ]; // neutral variant with primary color
            // these are the text and primary colors on top of the soft variant, whose bg depends on invertedness of
            // the original theme
            if (!isDark(_this.state.themeRules[BaseSlots[BaseSlots.backgroundColor]].color)) {
                // is not inverted
                accessibilityRows.push(_this._accessibilityRow(FabricSlots.neutralPrimary, FabricSlots.themeLighterAlt), _this._accessibilityRow(FabricSlots.themeDarkAlt, FabricSlots.themeLighterAlt));
            }
            else {
                // is inverted
                accessibilityRows.push(_this._accessibilityRow(FabricSlots.neutralPrimary, FabricSlots.themeLight), _this._accessibilityRow(FabricSlots.themeDarkAlt, FabricSlots.themeLight));
            }
            return React.createElement("tbody", null, accessibilityRows);
        };
        _this._outputSection = function () {
            var themeRules = _this.state.themeRules;
            // strip out the unnecessary shade slots from the final output theme
            var abridgedTheme = {};
            for (var ruleName in themeRules) {
                if (themeRules.hasOwnProperty(ruleName)) {
                    if (ruleName.indexOf('ColorShade') === -1 &&
                        ruleName !== 'primaryColor' &&
                        ruleName !== 'backgroundColor' &&
                        ruleName !== 'foregroundColor' &&
                        ruleName.indexOf('body') === -1) {
                        abridgedTheme[ruleName] = themeRules[ruleName];
                    }
                }
            }
            return (React.createElement("div", null,
                React.createElement("h2", { id: "Output" }, "Output"),
                React.createElement("div", { className: 'ms-themer-output-root' },
                    React.createElement("div", null,
                        React.createElement("h3", null, "JSON"),
                        React.createElement("textarea", { readOnly: true, spellCheck: false, value: JSON.stringify(ThemeGenerator.getThemeAsJson(abridgedTheme), void 0, 2) })),
                    React.createElement("div", null,
                        React.createElement("h3", null, "SASS"),
                        React.createElement("textarea", { readOnly: true, spellCheck: false, value: ThemeGenerator.getThemeAsSass(abridgedTheme) })),
                    React.createElement("div", null,
                        React.createElement("h3", null, "PowerShell"),
                        React.createElement("textarea", { readOnly: true, spellCheck: false, value: ThemeGenerator.getThemeForPowerShell(abridgedTheme) })))));
        };
        _this._makeNewTheme = function () {
            var themeAsJson = ThemeGenerator.getThemeAsJson(_this.state.themeRules);
            console.log('New theme...', themeAsJson);
            var finalTheme = loadTheme(__assign({ palette: themeAsJson }, { isInverted: isDark(_this.state.themeRules[BaseSlots[BaseSlots.backgroundColor]].color) }));
            var root = document.querySelector('.App-content');
            if (root) {
                root.style.backgroundColor = finalTheme.semanticColors.bodyBackground;
                root.style.color = finalTheme.semanticColors.bodyText;
            }
            document.body.style.backgroundColor = finalTheme.semanticColors.bodyBackground;
            document.body.style.color = finalTheme.semanticColors.bodyText;
            console.log('New theme:', finalTheme);
        };
        _this._baseColorSlotPicker = function (baseSlot, title) {
            var colorChangeTimeout;
            var onChange = function (ev, newColor) {
                if (colorChangeTimeout) {
                    clearTimeout(colorChangeTimeout);
                }
                colorChangeTimeout = _this._async.setTimeout(function () {
                    var themeRules = _this.state.themeRules;
                    var currentIsDark = isDark(themeRules[BaseSlots[BaseSlots.backgroundColor]].color);
                    ThemeGenerator.setSlot(themeRules[BaseSlots[baseSlot]], newColor.str, currentIsDark, true, true);
                    if (currentIsDark !== isDark(themeRules[BaseSlots[BaseSlots.backgroundColor]].color)) {
                        // isInverted got swapped, so need to refresh slots with new shading rules
                        ThemeGenerator.insureSlots(themeRules, !currentIsDark);
                    }
                    _this.setState({ themeRules: themeRules }, _this._makeNewTheme);
                }, 20);
                // 20ms is low enough that you can slowly drag to change color and see that theme,
                // but high enough that quick changes don't get bogged down by a million changes inbetween
            };
            return (React.createElement("div", { className: "ms-themer-paletteSlot", key: baseSlot },
                React.createElement("h3", null, title),
                React.createElement("div", null,
                    React.createElement(ColorPicker, { key: 'baseslotcolorpicker' + baseSlot, color: _this.state.themeRules[BaseSlots[baseSlot]].color.str, onChange: onChange })),
                React.createElement("div", { className: "ms-themer-swatchBg", style: { backgroundColor: _this.state.themeRules[BaseSlots[baseSlot]].color.str } },
                    React.createElement("div", { className: "ms-themer-swatch", style: { backgroundColor: _this.state.themeRules[BaseSlots[baseSlot]].color.str } }),
                    [
                        _this._colorSquareSwatchWidget(_this.state.themeRules[BaseSlots[baseSlot] + 'Shade1']),
                        _this._colorSquareSwatchWidget(_this.state.themeRules[BaseSlots[baseSlot] + 'Shade2']),
                        _this._colorSquareSwatchWidget(_this.state.themeRules[BaseSlots[baseSlot] + 'Shade3']),
                        _this._colorSquareSwatchWidget(_this.state.themeRules[BaseSlots[baseSlot] + 'Shade4']),
                        _this._colorSquareSwatchWidget(_this.state.themeRules[BaseSlots[baseSlot] + 'Shade5']),
                        _this._colorSquareSwatchWidget(_this.state.themeRules[BaseSlots[baseSlot] + 'Shade6']),
                        _this._colorSquareSwatchWidget(_this.state.themeRules[BaseSlots[baseSlot] + 'Shade7']),
                        _this._colorSquareSwatchWidget(_this.state.themeRules[BaseSlots[baseSlot] + 'Shade8']),
                    ])));
        };
        _this._async = new Async(_this);
        var themeRules = themeRulesStandardCreator();
        ThemeGenerator.insureSlots(themeRules, isDark(themeRules[BaseSlots[BaseSlots.backgroundColor]].color));
        _this.state = {
            themeRules: themeRules,
            colorPickerSlotRule: null,
            colorPickerElement: null,
            colorPickerVisible: false,
        };
        return _this;
    }
    ThemeGeneratorPage.prototype.componentWillUnmount = function () {
        // remove temp styles
        var root = document.querySelector('.App-content');
        if (root) {
            root.style.backgroundColor = '';
            root.style.color = '';
        }
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        // and apply the default theme to overwrite any existing custom theme
        loadTheme({});
        this._async.dispose();
    };
    ThemeGeneratorPage.prototype.render = function () {
        var _a = this.state, colorPickerVisible = _a.colorPickerVisible, colorPickerSlotRule = _a.colorPickerSlotRule, colorPickerElement = _a.colorPickerElement;
        var fabricThemeSlots = [
            this._fabricSlotWidget(FabricSlots.themeDarker),
            this._fabricSlotWidget(FabricSlots.themeDark),
            this._fabricSlotWidget(FabricSlots.themeDarkAlt),
            this._fabricSlotWidget(FabricSlots.themePrimary),
            this._fabricSlotWidget(FabricSlots.themeSecondary),
            this._fabricSlotWidget(FabricSlots.themeTertiary),
            this._fabricSlotWidget(FabricSlots.themeLight),
            this._fabricSlotWidget(FabricSlots.themeLighter),
            this._fabricSlotWidget(FabricSlots.themeLighterAlt),
        ];
        var fabricNeutralForegroundSlots = [
            this._fabricSlotWidget(FabricSlots.black),
            this._fabricSlotWidget(FabricSlots.neutralDark),
            this._fabricSlotWidget(FabricSlots.neutralPrimary),
            this._fabricSlotWidget(FabricSlots.neutralPrimaryAlt),
            this._fabricSlotWidget(FabricSlots.neutralSecondary),
            this._fabricSlotWidget(FabricSlots.neutralTertiary),
        ];
        var fabricNeutralBackgroundSlots = [
            this._fabricSlotWidget(FabricSlots.neutralTertiaryAlt),
            this._fabricSlotWidget(FabricSlots.neutralQuaternary),
            this._fabricSlotWidget(FabricSlots.neutralQuaternaryAlt),
            this._fabricSlotWidget(FabricSlots.neutralLight),
            this._fabricSlotWidget(FabricSlots.neutralLighter),
            this._fabricSlotWidget(FabricSlots.neutralLighterAlt),
            this._fabricSlotWidget(FabricSlots.white),
        ];
        var stylingUrl = 'https://github.com/microsoft/fluentui/tree/master/packages/styling';
        return (React.createElement("div", { className: "ms-themer" },
            React.createElement("div", { className: "overview" },
                React.createElement("h2", { id: "Overview" }, "Overview"),
                React.createElement("p", null,
                    "This tool helps you easily create all the shades and slots for a custom theme. The theme can be used by Fabric React's styling package, see the",
                    ' ',
                    React.createElement("a", { className: 'themeGeneratorPageLink', href: stylingUrl }, "documentation"),
                    ".",
                    React.createElement("br", null),
                    "As you modify one of the three base colors, the theme will update automatically based on predefined rules. You can modify each individual slot below as well.")),
            colorPickerVisible && colorPickerSlotRule && colorPickerElement && (React.createElement(Callout, { key: colorPickerSlotRule.name, gapSpace: 10, target: colorPickerElement, setInitialFocus: true, onDismiss: this._colorPickerOnDismiss },
                React.createElement(ColorPicker, { color: colorPickerSlotRule.color.str, onChange: this._semanticSlotRuleChanged.bind(this, colorPickerSlotRule) }))),
            React.createElement("div", { style: { display: 'flex' } }, [
                this._baseColorSlotPicker(BaseSlots.primaryColor, 'Primary theme color'),
                this._baseColorSlotPicker(BaseSlots.foregroundColor, 'Body text color'),
                this._baseColorSlotPicker(BaseSlots.backgroundColor, 'Body background color'),
            ]),
            React.createElement("br", null),
            this._outputSection(),
            React.createElement("br", null),
            React.createElement("h2", { id: "Fabric palette" }, "Fabric palette"),
            React.createElement("p", null, "The original Fabric palette slots. These are raw colors with no prescriptive uses. Each one is a shade or tint of a base color."),
            React.createElement("div", { className: 'ms-themer-fabricPalette-root' },
                React.createElement("div", null, fabricThemeSlots),
                React.createElement("div", null,
                    React.createElement("p", null, "generally used for text and foregrounds"),
                    fabricNeutralForegroundSlots),
                React.createElement("div", null,
                    React.createElement("p", null, "generally used for backgrounds"),
                    fabricNeutralBackgroundSlots)),
            React.createElement("br", null),
            React.createElement("h2", { id: "Samples" }, "Samples"),
            React.createElement("div", { style: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } },
                React.createElement("div", { className: "ms-themer-example" },
                    React.createElement(TextFieldBasicExample, null)),
                React.createElement("div", { className: "ms-themer-example" },
                    React.createElement(ToggleBasicExample, null),
                    React.createElement(ChoiceGroup, { options: [
                            {
                                key: 'A',
                                text: 'Option A',
                            },
                            {
                                key: 'B',
                                text: 'Option B',
                                checked: true,
                            },
                        ], label: "Pick one", required: true }),
                    React.createElement(ChoiceGroup, { options: [
                            {
                                key: 'C',
                                text: 'Option C',
                                disabled: true,
                            },
                            {
                                key: 'D',
                                text: 'Option D',
                                checked: true,
                                disabled: true,
                            },
                        ], label: "Pick one", required: true })),
                React.createElement("div", { className: "ms-themer-example" },
                    React.createElement(TeachingBubbleBasicExample, null),
                    React.createElement("br", null),
                    React.createElement(ProgressIndicatorBasicExample, null))),
            React.createElement("h2", { id: "Accessibility" }, "Accessibility"),
            React.createElement("p", null, "Each pair of colors below should produce legible text and have a minimum contrast ratio of 4.5."),
            React.createElement("table", { className: "ms-themer-accessibilityTable" },
                React.createElement("thead", null,
                    React.createElement("td", null, "Sample text"),
                    React.createElement("td", null, "Contrast ratio"),
                    React.createElement("td", null, "Slot pair")),
                this._accessibilityTableBody())));
    };
    ThemeGeneratorPage.prototype._colorSquareSwatchWidget = function (slotRule) {
        return (React.createElement("div", { key: slotRule.name, className: "ms-themer-swatch", style: { backgroundColor: slotRule.color.str }, onClick: this._onSwatchClick.bind(this, slotRule) }));
    };
    return ThemeGeneratorPage;
}(React.Component));
export { ThemeGeneratorPage };
//# sourceMappingURL=ThemeGenerator.doc.js.map