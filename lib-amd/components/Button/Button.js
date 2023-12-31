define(["require", "exports", "tslib", "react", "../../Utilities", "./Button.types", "./DefaultButton/DefaultButton", "./ActionButton/ActionButton", "./CompoundButton/CompoundButton", "./IconButton/IconButton", "./PrimaryButton/PrimaryButton"], function (require, exports, tslib_1, React, Utilities_1, Button_types_1, DefaultButton_1, ActionButton_1, CompoundButton_1, IconButton_1, PrimaryButton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * This class is deprecated. Use the individual *Button components instead.
     * @deprecated Use the individual *Button components instead.
     * {@docCategory Button}
     */
    var Button = /** @class */ (function (_super) {
        tslib_1.__extends(Button, _super);
        function Button(props) {
            var _this = _super.call(this, props) || this;
            Utilities_1.warn("The Button component has been deprecated. Use specific variants instead. " +
                "(PrimaryButton, DefaultButton, IconButton, ActionButton, etc.)");
            return _this;
        }
        Button.prototype.render = function () {
            var props = this.props;
            // tslint:disable-next-line:deprecation
            switch (props.buttonType) {
                case Button_types_1.ButtonType.command:
                    return React.createElement(ActionButton_1.ActionButton, tslib_1.__assign({}, props));
                case Button_types_1.ButtonType.compound:
                    return React.createElement(CompoundButton_1.CompoundButton, tslib_1.__assign({}, props));
                case Button_types_1.ButtonType.icon:
                    return React.createElement(IconButton_1.IconButton, tslib_1.__assign({}, props));
                case Button_types_1.ButtonType.primary:
                    return React.createElement(PrimaryButton_1.PrimaryButton, tslib_1.__assign({}, props));
                default:
                    return React.createElement(DefaultButton_1.DefaultButton, tslib_1.__assign({}, props));
            }
        };
        return Button;
    }(React.Component));
    exports.Button = Button;
});
//# sourceMappingURL=Button.js.map