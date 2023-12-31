"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../Utilities");
var Beak_styles_1 = require("./Beak.styles");
var positioning_1 = require("../../../utilities/positioning");
exports.BEAK_HEIGHT = 10;
exports.BEAK_WIDTH = 18;
var Beak = /** @class */ (function (_super) {
    tslib_1.__extends(Beak, _super);
    function Beak(props) {
        var _this = _super.call(this, props) || this;
        Utilities_1.initializeComponentRef(_this);
        return _this;
    }
    Beak.prototype.render = function () {
        var _a = this.props, left = _a.left, top = _a.top, bottom = _a.bottom, right = _a.right, color = _a.color, _b = _a.direction, direction = _b === void 0 ? positioning_1.RectangleEdge.top : _b;
        var svgHeight;
        var svgWidth;
        if (direction === positioning_1.RectangleEdge.top || direction === positioning_1.RectangleEdge.bottom) {
            svgHeight = exports.BEAK_HEIGHT;
            svgWidth = exports.BEAK_WIDTH;
        }
        else {
            svgHeight = exports.BEAK_WIDTH;
            svgWidth = exports.BEAK_HEIGHT;
        }
        var pointOne;
        var pointTwo;
        var pointThree;
        var transform;
        switch (direction) {
            case positioning_1.RectangleEdge.top:
            default:
                pointOne = exports.BEAK_WIDTH / 2 + ", 0";
                pointTwo = exports.BEAK_WIDTH + ", " + exports.BEAK_HEIGHT;
                pointThree = "0, " + exports.BEAK_HEIGHT;
                transform = 'translateY(-100%)';
                break;
            case positioning_1.RectangleEdge.right:
                pointOne = "0, 0";
                pointTwo = exports.BEAK_HEIGHT + ", " + exports.BEAK_HEIGHT;
                pointThree = "0, " + exports.BEAK_WIDTH;
                transform = 'translateX(100%)';
                break;
            case positioning_1.RectangleEdge.bottom:
                pointOne = "0, 0";
                pointTwo = exports.BEAK_WIDTH + ", 0";
                pointThree = exports.BEAK_WIDTH / 2 + ", " + exports.BEAK_HEIGHT;
                transform = 'translateY(100%)';
                break;
            case positioning_1.RectangleEdge.left:
                pointOne = exports.BEAK_HEIGHT + ", 0";
                pointTwo = "0, " + exports.BEAK_HEIGHT;
                pointThree = exports.BEAK_HEIGHT + ", " + exports.BEAK_WIDTH;
                transform = 'translateX(-100%)';
                break;
        }
        var getClassNames = Utilities_1.classNamesFunction();
        var classNames = getClassNames(Beak_styles_1.getStyles, {
            left: left,
            top: top,
            bottom: bottom,
            right: right,
            height: svgHeight + "px",
            width: svgWidth + "px",
            transform: transform,
            color: color,
        });
        return (React.createElement("div", { className: classNames.root, role: "presentation" },
            React.createElement("svg", { height: svgHeight, width: svgWidth, className: classNames.beak },
                React.createElement("polygon", { points: pointOne + ' ' + pointTwo + ' ' + pointThree }))));
    };
    return Beak;
}(React.Component));
exports.Beak = Beak;
//# sourceMappingURL=Beak.js.map