"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var CalloutContent_1 = require("./CalloutContent");
var Layer_1 = require("../../Layer");
var Callout = /** @class */ (function (_super) {
    tslib_1.__extends(Callout, _super);
    function Callout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Callout.prototype.render = function () {
        var _a = this.props, layerProps = _a.layerProps, rest = tslib_1.__rest(_a, ["layerProps"]);
        var content = React.createElement(CalloutContent_1.CalloutContent, tslib_1.__assign({}, rest));
        return this.props.doNotLayer ? content : React.createElement(Layer_1.Layer, tslib_1.__assign({}, layerProps), content);
    };
    return Callout;
}(React.Component));
exports.Callout = Callout;
//# sourceMappingURL=Callout.js.map