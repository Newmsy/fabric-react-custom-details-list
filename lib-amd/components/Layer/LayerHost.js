define(["require", "exports", "tslib", "react", "../../Utilities", "./Layer.notification"], function (require, exports, tslib_1, React, Utilities_1, Layer_notification_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LayerHost = /** @class */ (function (_super) {
        tslib_1.__extends(LayerHost, _super);
        function LayerHost() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LayerHost.prototype.shouldComponentUpdate = function () {
            return false;
        };
        LayerHost.prototype.componentDidMount = function () {
            Layer_notification_1.notifyHostChanged(this.props.id);
        };
        LayerHost.prototype.componentWillUnmount = function () {
            Layer_notification_1.notifyHostChanged(this.props.id);
        };
        LayerHost.prototype.render = function () {
            return React.createElement("div", tslib_1.__assign({}, this.props, { className: Utilities_1.css('ms-LayerHost', this.props.className) }));
        };
        return LayerHost;
    }(React.Component));
    exports.LayerHost = LayerHost;
});
//# sourceMappingURL=LayerHost.js.map