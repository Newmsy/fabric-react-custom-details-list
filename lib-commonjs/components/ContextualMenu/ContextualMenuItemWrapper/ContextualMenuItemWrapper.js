"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../Utilities");
var ContextualMenuItemWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuItemWrapper, _super);
    function ContextualMenuItemWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this._onItemMouseEnter = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(item, ev, ev.currentTarget);
            }
        };
        _this._onItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClickBase = _a.onItemClickBase;
            if (onItemClickBase) {
                onItemClickBase(item, ev, ev.currentTarget);
            }
        };
        _this._onItemMouseLeave = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseLeave = _a.onItemMouseLeave;
            if (onItemMouseLeave) {
                onItemMouseLeave(item, ev);
            }
        };
        _this._onItemKeyDown = function (ev) {
            var _a = _this.props, item = _a.item, onItemKeyDown = _a.onItemKeyDown;
            if (onItemKeyDown) {
                onItemKeyDown(item, ev);
            }
        };
        _this._onItemMouseMove = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(item, ev, ev.currentTarget);
            }
        };
        _this._getSubMenuId = function (item) {
            var getSubMenuId = _this.props.getSubMenuId;
            if (getSubMenuId) {
                return getSubMenuId(item);
            }
        };
        _this._getSubmenuTarget = function () {
            return undefined;
        };
        Utilities_1.initializeComponentRef(_this);
        return _this;
    }
    ContextualMenuItemWrapper.prototype.shouldComponentUpdate = function (newProps) {
        return !Utilities_1.shallowCompare(newProps, this.props);
    };
    return ContextualMenuItemWrapper;
}(React.Component));
exports.ContextualMenuItemWrapper = ContextualMenuItemWrapper;
//# sourceMappingURL=ContextualMenuItemWrapper.js.map