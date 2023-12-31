"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var ExpandingCard_types_1 = require("./ExpandingCard.types");
var CardCallout_1 = require("./CardCallout/CardCallout");
var getClassNames = Utilities_1.classNamesFunction();
var ExpandingCardBase = /** @class */ (function (_super) {
    tslib_1.__extends(ExpandingCardBase, _super);
    function ExpandingCardBase(props) {
        var _this = _super.call(this, props) || this;
        _this._expandedElem = React.createRef();
        _this._onKeyDown = function (ev) {
            if (ev.which === Utilities_1.KeyCodes.escape) {
                _this.props.onLeave && _this.props.onLeave(ev);
            }
        };
        _this._onRenderCompactCard = function () {
            return React.createElement("div", { className: _this._classNames.compactCard }, _this.props.onRenderCompactCard(_this.props.renderData));
        };
        _this._onRenderExpandedCard = function () {
            // firstFrameRendered helps in initially setting height of expanded card to 1px, even if mode prop is set to
            // ExpandingCardMode.expanded on first render. This is to make sure transition animation takes place.
            !_this.state.firstFrameRendered &&
                _this._async.requestAnimationFrame(function () {
                    _this.setState({
                        firstFrameRendered: true,
                    });
                });
            return (React.createElement("div", { className: _this._classNames.expandedCard, ref: _this._expandedElem },
                React.createElement("div", { className: _this._classNames.expandedCardScroll }, _this.props.onRenderExpandedCard && _this.props.onRenderExpandedCard(_this.props.renderData))));
        };
        _this._checkNeedsScroll = function () {
            var expandedCardHeight = _this.props.expandedCardHeight;
            _this._async.requestAnimationFrame(function () {
                if (_this._expandedElem.current && _this._expandedElem.current.scrollHeight >= expandedCardHeight) {
                    _this.setState({
                        needsScroll: true,
                    });
                }
            });
        };
        _this._async = new Utilities_1.Async(_this);
        Utilities_1.initializeComponentRef(_this);
        _this.state = {
            firstFrameRendered: false,
            needsScroll: false,
        };
        return _this;
    }
    ExpandingCardBase.prototype.componentDidMount = function () {
        this._checkNeedsScroll();
    };
    ExpandingCardBase.prototype.componentWillUnmount = function () {
        this._async.dispose();
    };
    ExpandingCardBase.prototype.render = function () {
        var _a = this.props, styles = _a.styles, compactCardHeight = _a.compactCardHeight, expandedCardHeight = _a.expandedCardHeight, theme = _a.theme, mode = _a.mode, className = _a.className;
        var _b = this.state, needsScroll = _b.needsScroll, firstFrameRendered = _b.firstFrameRendered;
        var finalHeight = compactCardHeight + expandedCardHeight;
        this._classNames = getClassNames(styles, {
            theme: theme,
            compactCardHeight: compactCardHeight,
            className: className,
            expandedCardHeight: expandedCardHeight,
            needsScroll: needsScroll,
            expandedCardFirstFrameRendered: mode === ExpandingCard_types_1.ExpandingCardMode.expanded && firstFrameRendered,
        });
        var content = (React.createElement("div", { onMouseEnter: this.props.onEnter, onMouseLeave: this.props.onLeave, onKeyDown: this._onKeyDown },
            this._onRenderCompactCard(),
            this._onRenderExpandedCard()));
        return (React.createElement(CardCallout_1.CardCallout, tslib_1.__assign({}, this.props, { content: content, finalHeight: finalHeight, className: this._classNames.root })));
    };
    ExpandingCardBase.defaultProps = {
        compactCardHeight: 156,
        expandedCardHeight: 384,
        directionalHintFixed: true,
    };
    return ExpandingCardBase;
}(React.Component));
exports.ExpandingCardBase = ExpandingCardBase;
//# sourceMappingURL=ExpandingCard.base.js.map