define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Checkbox", "office-ui-fabric-react/lib/Dropdown", "office-ui-fabric-react/lib/Slider", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Styling", "office-ui-fabric-react/lib/TextField"], function (require, exports, tslib_1, React, Checkbox_1, Dropdown_1, Slider_1, Stack_1, Styling_1, TextField_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var checkboxStyles = { root: { marginRight: 10 } };
    var VerticalStackConfigureExampleContent = function (props) {
        var numItems = props.numItems, showBoxShadow = props.showBoxShadow, preventOverflow = props.preventOverflow, disableShrink = props.disableShrink, wrap = props.wrap, stackHeight = props.stackHeight, autoHeight = props.autoHeight, childrenGap = props.childrenGap, paddingLeft = props.paddingLeft, paddingRight = props.paddingRight, paddingTop = props.paddingTop, paddingBottom = props.paddingBottom, verticalAlignment = props.verticalAlignment, horizontalAlignment = props.horizontalAlignment, hideEmptyChildren = props.hideEmptyChildren, emptyChildren = props.emptyChildren;
        // Styles definition
        var stackStyles = {
            root: [
                {
                    background: Styling_1.DefaultPalette.themeTertiary,
                    height: autoHeight ? 'auto' : stackHeight,
                    marginLeft: 10,
                    marginRight: 10,
                },
                preventOverflow && {
                    overflow: 'hidden',
                },
            ],
        };
        var stackItemStyles = {
            root: {
                alignItems: 'center',
                background: Styling_1.DefaultPalette.themePrimary,
                boxShadow: showBoxShadow ? "0px 0px 10px 5px " + Styling_1.DefaultPalette.themeDarker : '',
                color: Styling_1.DefaultPalette.white,
                display: 'flex',
                height: 50,
                justifyContent: 'center',
                width: 50,
            },
        };
        // Tokens definition
        var exampleStackTokens = {
            childrenGap: childrenGap + ' ' + 0,
            padding: paddingTop + "px " + paddingRight + "px " + paddingBottom + "px " + paddingLeft + "px",
        };
        return (React.createElement(Stack_1.Stack, { disableShrink: disableShrink, wrap: wrap, verticalAlign: verticalAlignment, horizontalAlign: horizontalAlignment, styles: stackStyles, tokens: exampleStackTokens }, _range(1, numItems).map(function (value, index) {
            if (emptyChildren.indexOf(value.toString()) !== -1) {
                return hideEmptyChildren ? (React.createElement(Stack_1.Stack.Item, { key: index, styles: stackItemStyles })) : (React.createElement("span", { key: index, className: Styling_1.mergeStyles(stackItemStyles.root) }));
            }
            return (React.createElement("span", { key: index, className: Styling_1.mergeStyles(stackItemStyles.root) }, value));
        })));
    };
    function _range(start, end) {
        var result = [];
        for (var i = start; i <= end; i++) {
            result.push(i);
        }
        return result;
    }
    // Non-mutating tokens definition
    var sectionStackTokens = { childrenGap: 10 };
    var configureStackTokens = { childrenGap: 20 };
    var VerticalStackConfigureExample = /** @class */ (function (_super) {
        tslib_1.__extends(VerticalStackConfigureExample, _super);
        function VerticalStackConfigureExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                numItems: 5,
                showBoxShadow: false,
                preventOverflow: false,
                disableShrink: true,
                wrap: false,
                stackHeight: 200,
                autoHeight: true,
                childrenGap: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                verticalAlignment: 'start',
                horizontalAlignment: 'start',
                hideEmptyChildren: false,
                emptyChildren: [],
            };
            _this._verticalAlignmentOptions = [
                { key: 'start', text: 'Top' },
                { key: 'center', text: 'Center' },
                { key: 'end', text: 'Bottom' },
                { key: 'space-around', text: 'Space around' },
                { key: 'space-between', text: 'Space between' },
                { key: 'space-evenly', text: 'Space evenly' },
            ];
            _this._horizontalAlignmentOptions = [
                { key: 'start', text: 'Left' },
                { key: 'center', text: 'Center' },
                { key: 'end', text: 'Right' },
            ];
            _this._onNumItemsChange = function (value) {
                _this.setState({ numItems: value });
            };
            _this._onBoxShadowChange = function (ev, isChecked) {
                _this.setState({ showBoxShadow: isChecked });
            };
            _this._onPreventOverflowChange = function (ev, isChecked) {
                _this.setState({ preventOverflow: isChecked });
            };
            _this._onShrinkItemsChange = function (ev, isChecked) {
                _this.setState({ disableShrink: !isChecked });
            };
            _this._onWrapChange = function (ev, isChecked) {
                _this.setState({ wrap: isChecked });
            };
            _this._onStackHeightChange = function (value) {
                _this.setState({ stackHeight: value });
            };
            _this._onAutoHeightChange = function (ev, isChecked) {
                _this.setState({ autoHeight: isChecked });
            };
            _this._onGapChange = function (value) {
                _this.setState({ childrenGap: value });
            };
            _this._onPaddingLeftChange = function (value) {
                _this.setState({ paddingLeft: value });
            };
            _this._onPaddingRightChange = function (value) {
                _this.setState({ paddingRight: value });
            };
            _this._onPaddingTopChange = function (value) {
                _this.setState({ paddingTop: value });
            };
            _this._onPaddingBottomChange = function (value) {
                _this.setState({ paddingBottom: value });
            };
            _this._onVerticalAlignChange = function (ev, option) {
                _this.setState({ verticalAlignment: option.key });
            };
            _this._onHorizontalAlignChange = function (ev, option) {
                _this.setState({ horizontalAlignment: option.key });
            };
            _this._onHideEmptyChildrenChange = function (ev, isChecked) {
                _this.setState({ hideEmptyChildren: isChecked });
            };
            _this._onEmptyChildrenChange = function (ev, value) {
                if (value === undefined) {
                    return;
                }
                _this.setState({ emptyChildren: value.replace(/,/g, '').split(' ') });
            };
            return _this;
        }
        VerticalStackConfigureExample.prototype.render = function () {
            var _a = this.state, autoHeight = _a.autoHeight, verticalAlignment = _a.verticalAlignment, horizontalAlignment = _a.horizontalAlignment;
            return (React.createElement(Stack_1.Stack, { tokens: sectionStackTokens },
                React.createElement(Stack_1.Stack, { horizontal: true, tokens: configureStackTokens },
                    React.createElement(Stack_1.Stack.Item, { grow: true },
                        React.createElement(Stack_1.Stack, null,
                            React.createElement(Slider_1.Slider, { label: "Number of items:", min: 1, max: 10, step: 1, defaultValue: 5, showValue: true, onChange: this._onNumItemsChange }),
                            React.createElement(Stack_1.Stack, { horizontal: true },
                                React.createElement(Checkbox_1.Checkbox, { label: "Shadow around items", onChange: this._onBoxShadowChange, styles: checkboxStyles }),
                                React.createElement(Checkbox_1.Checkbox, { label: "Prevent item overflow", onChange: this._onPreventOverflowChange, styles: checkboxStyles }),
                                React.createElement(Checkbox_1.Checkbox, { label: "Shrink items", onChange: this._onShrinkItemsChange, styles: checkboxStyles }),
                                React.createElement(Checkbox_1.Checkbox, { label: "Wrap items", onChange: this._onWrapChange })))),
                    React.createElement(Stack_1.Stack.Item, { grow: true },
                        React.createElement(Stack_1.Stack, null,
                            React.createElement(Slider_1.Slider, { label: "Container height:", min: 1, max: 400, step: 1, defaultValue: 200, showValue: true, onChange: this._onStackHeightChange, disabled: autoHeight }),
                            React.createElement(Checkbox_1.Checkbox, { label: "Automatic height (based on items)", defaultChecked: true, onChange: this._onAutoHeightChange })))),
                React.createElement(Stack_1.Stack, { horizontal: true, tokens: configureStackTokens },
                    React.createElement(Stack_1.Stack.Item, { grow: true },
                        React.createElement(Stack_1.Stack, null,
                            React.createElement(Slider_1.Slider, { label: "Vertical gap between items:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onGapChange }),
                            React.createElement(Stack_1.Stack, { horizontal: true, verticalAlign: "end", tokens: configureStackTokens },
                                React.createElement(Stack_1.Stack.Item, { grow: true },
                                    React.createElement(Dropdown_1.Dropdown, { selectedKey: verticalAlignment, placeholder: "Select Vertical Alignment", label: "Vertical alignment:", options: this._verticalAlignmentOptions, onChange: this._onVerticalAlignChange })),
                                React.createElement(Stack_1.Stack.Item, { grow: true },
                                    React.createElement(Dropdown_1.Dropdown, { selectedKey: horizontalAlignment, placeholder: "Select Horizontal Alignment", label: "Horizontal alignment:", options: this._horizontalAlignmentOptions, onChange: this._onHorizontalAlignChange })),
                                React.createElement(Stack_1.Stack.Item, null,
                                    React.createElement(Checkbox_1.Checkbox, { label: "Hide empty children", onChange: this._onHideEmptyChildrenChange })),
                                React.createElement(Stack_1.Stack.Item, { grow: true },
                                    React.createElement(TextField_1.TextField, { label: "List of empty children (e.g. 1 2 3):", onChange: this._onEmptyChildrenChange }))))),
                    React.createElement(Stack_1.Stack.Item, { grow: true },
                        React.createElement(Stack_1.Stack, null,
                            React.createElement(Slider_1.Slider, { label: "Left padding:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onPaddingLeftChange }),
                            React.createElement(Slider_1.Slider, { label: "Right padding:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onPaddingRightChange }))),
                    React.createElement(Stack_1.Stack.Item, { grow: true },
                        React.createElement(Stack_1.Stack, null,
                            React.createElement(Slider_1.Slider, { label: "Top padding:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onPaddingTopChange }),
                            React.createElement(Slider_1.Slider, { label: "Bottom padding:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onPaddingBottomChange })))),
                React.createElement(VerticalStackConfigureExampleContent, tslib_1.__assign({}, this.state))));
        };
        return VerticalStackConfigureExample;
    }(React.Component));
    exports.VerticalStackConfigureExample = VerticalStackConfigureExample;
});
//# sourceMappingURL=Stack.Vertical.Configure.Example.js.map