define(["require", "exports", "tslib", "react", "../../../Utilities", "../CardCallout/CardCallout"], function (require, exports, tslib_1, React, Utilities_1, CardCallout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var PlainCardBase = /** @class */ (function (_super) {
        tslib_1.__extends(PlainCardBase, _super);
        function PlainCardBase(props) {
            var _this = _super.call(this, props) || this;
            _this._onKeyDown = function (ev) {
                if (ev.which === Utilities_1.KeyCodes.escape) {
                    _this.props.onLeave && _this.props.onLeave(ev);
                }
            };
            Utilities_1.initializeComponentRef(_this);
            return _this;
        }
        PlainCardBase.prototype.render = function () {
            var _a = this.props, styles = _a.styles, theme = _a.theme, className = _a.className;
            this._classNames = getClassNames(styles, {
                theme: theme,
                className: className,
            });
            var content = (React.createElement("div", { onMouseEnter: this.props.onEnter, onMouseLeave: this.props.onLeave, onKeyDown: this._onKeyDown }, this.props.onRenderPlainCard(this.props.renderData)));
            return React.createElement(CardCallout_1.CardCallout, tslib_1.__assign({}, this.props, { content: content, className: this._classNames.root }));
        };
        return PlainCardBase;
    }(React.Component));
    exports.PlainCardBase = PlainCardBase;
});
//# sourceMappingURL=PlainCard.base.js.map