"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("../../Button");
var Utilities_1 = require("../../Utilities");
var FacepileButton_styles_1 = require("./FacepileButton.styles");
var FacepileButton = /** @class */ (function (_super) {
    tslib_1.__extends(FacepileButton, _super);
    function FacepileButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacepileButton.prototype.render = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, rest = tslib_1.__rest(_a, ["className", "styles"]);
        var customStyles = FacepileButton_styles_1.getStyles(this.props.theme, className, styles);
        return (React.createElement(Button_1.BaseButton, tslib_1.__assign({}, rest, { variantClassName: "ms-Button--facepile", styles: customStyles, onRenderDescription: Utilities_1.nullRender })));
    };
    FacepileButton = tslib_1.__decorate([
        Utilities_1.customizable('FacepileButton', ['theme', 'styles'], true)
    ], FacepileButton);
    return FacepileButton;
}(React.Component));
exports.FacepileButton = FacepileButton;
//# sourceMappingURL=FacepileButton.js.map