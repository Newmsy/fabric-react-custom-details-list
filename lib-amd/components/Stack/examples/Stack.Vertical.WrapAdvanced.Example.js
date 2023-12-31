define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Dropdown", "office-ui-fabric-react/lib/Slider", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Styling"], function (require, exports, tslib_1, React, Dropdown_1, Slider_1, Stack_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Non-mutating styles definition
    var itemStyles = {
        alignItems: 'center',
        background: Styling_1.DefaultPalette.themePrimary,
        color: Styling_1.DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        width: 50,
    };
    var VerticalStackWrapAdvancedExampleContent = function (props) {
        var stackWidth = props.stackWidth, containerHeight = props.containerHeight, overflow = props.overflow, horizontalAlignment = props.horizontalAlignment, verticalAlignment = props.verticalAlignment;
        // Mutating styles definition
        var stackStyles = {
            root: {
                background: Styling_1.DefaultPalette.themeTertiary,
                overflow: overflow,
                width: stackWidth + "%",
            },
        };
        var containerStyles = { height: containerHeight };
        return (React.createElement("div", { style: containerStyles },
            React.createElement(Stack_1.Stack, { wrap: true, horizontalAlign: horizontalAlignment, verticalAlign: verticalAlignment, styles: stackStyles, tokens: wrapStackTokens },
                React.createElement("span", { style: itemStyles }, "1"),
                React.createElement("span", { style: itemStyles }, "2"),
                React.createElement("span", { style: itemStyles }, "3"),
                React.createElement("span", { style: itemStyles }, "4"),
                React.createElement("span", { style: itemStyles }, "5"))));
    };
    // Tokens definition
    var sectionStackTokens = { childrenGap: 10 };
    var wrapStackTokens = { childrenGap: 20 };
    var VerticalStackWrapAdvancedExample = /** @class */ (function (_super) {
        tslib_1.__extends(VerticalStackWrapAdvancedExample, _super);
        function VerticalStackWrapAdvancedExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                stackWidth: 100,
                containerHeight: 420,
                horizontalAlignment: 'start',
                verticalAlignment: 'start',
                overflow: 'visible',
            };
            _this._horizontalAlignmentOptions = [
                { key: 'start', text: 'Left' },
                { key: 'center', text: 'Center' },
                { key: 'end', text: 'Right' },
            ];
            _this._verticalAlignmentOptions = [
                { key: 'start', text: 'Top' },
                { key: 'center', text: 'Center' },
                { key: 'end', text: 'Bottom' },
                { key: 'space-around', text: 'Space around' },
                { key: 'space-between', text: 'Space between' },
                { key: 'space-evenly', text: 'Space evenly' },
            ];
            _this._overflowOptions = [
                { key: 'visible', text: 'Visible' },
                { key: 'auto', text: 'Auto' },
                { key: 'hidden', text: 'Hidden' },
            ];
            _this._onWidthChange = function (value) {
                _this.setState({ stackWidth: value });
            };
            _this._onHeightChange = function (value) {
                _this.setState({ containerHeight: value });
            };
            _this._onHorizontalAlignChange = function (ev, option) {
                _this.setState({ horizontalAlignment: option.key });
            };
            _this._onVerticalAlignChange = function (ev, option) {
                _this.setState({ verticalAlignment: option.key });
            };
            _this._onOverflowChange = function (ev, option) {
                _this.setState({ overflow: option.key });
            };
            return _this;
        }
        VerticalStackWrapAdvancedExample.prototype.render = function () {
            var _a = this.state, overflow = _a.overflow, horizontalAlignment = _a.horizontalAlignment, verticalAlignment = _a.verticalAlignment;
            return (React.createElement(Stack_1.Stack, { tokens: sectionStackTokens },
                React.createElement(Stack_1.Stack, { horizontal: true },
                    React.createElement(Stack_1.Stack.Item, { grow: true },
                        React.createElement(Slider_1.Slider, { label: "Stack height:", min: 1, max: 420, step: 1, defaultValue: 420, showValue: true, onChange: this._onHeightChange })),
                    React.createElement(Stack_1.Stack.Item, { grow: true },
                        React.createElement(Slider_1.Slider, { label: "Container width:", min: 1, max: 100, step: 1, defaultValue: 100, showValue: true, onChange: this._onWidthChange }))),
                React.createElement(Stack_1.Stack, { horizontal: true, tokens: wrapStackTokens },
                    React.createElement(Stack_1.Stack.Item, { grow: true },
                        React.createElement(Dropdown_1.Dropdown, { selectedKey: horizontalAlignment, placeholder: "Select Horizontal Alignment", label: "Horizontal alignment:", options: this._horizontalAlignmentOptions, onChange: this._onHorizontalAlignChange })),
                    React.createElement(Stack_1.Stack.Item, { grow: true },
                        React.createElement(Dropdown_1.Dropdown, { selectedKey: verticalAlignment, placeholder: "Select Vertical Alignment", label: "Vertical alignment:", options: this._verticalAlignmentOptions, onChange: this._onVerticalAlignChange })),
                    React.createElement(Stack_1.Stack.Item, { grow: true },
                        React.createElement(Dropdown_1.Dropdown, { selectedKey: overflow, placeholder: "Select Overflow", label: "Overflow:", options: this._overflowOptions, onChange: this._onOverflowChange }))),
                React.createElement(VerticalStackWrapAdvancedExampleContent, tslib_1.__assign({}, this.state))));
        };
        return VerticalStackWrapAdvancedExample;
    }(React.Component));
    exports.VerticalStackWrapAdvancedExample = VerticalStackWrapAdvancedExample;
});
//# sourceMappingURL=Stack.Vertical.WrapAdvanced.Example.js.map