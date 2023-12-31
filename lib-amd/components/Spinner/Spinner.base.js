define(["require", "exports", "tslib", "react", "./Spinner.types", "../../Utilities"], function (require, exports, tslib_1, React, Spinner_types_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var SpinnerBase = /** @class */ (function (_super) {
        tslib_1.__extends(SpinnerBase, _super);
        function SpinnerBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpinnerBase.prototype.render = function () {
            // tslint:disable-next-line:deprecation
            var _a = this.props, type = _a.type, size = _a.size, ariaLabel = _a.ariaLabel, ariaLive = _a.ariaLive, styles = _a.styles, label = _a.label, theme = _a.theme, className = _a.className, labelPosition = _a.labelPosition;
            var statusMessage = ariaLabel;
            var nativeProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties, ['size']);
            // SpinnerType is deprecated. If someone is still using this property, rather than putting the SpinnerType into the
            // ISpinnerStyleProps, we'll map SpinnerType to its equivalent SpinnerSize and pass that in. Once SpinnerType
            // finally goes away we should delete this.
            var styleSize = size;
            if (styleSize === undefined && type !== undefined) {
                // tslint:disable-next-line:deprecation
                styleSize = type === Spinner_types_1.SpinnerType.large ? Spinner_types_1.SpinnerSize.large : Spinner_types_1.SpinnerSize.medium;
            }
            var classNames = getClassNames(styles, {
                theme: theme,
                size: styleSize,
                className: className,
                labelPosition: labelPosition,
            });
            return (React.createElement("div", tslib_1.__assign({}, nativeProps, { className: classNames.root }),
                React.createElement("div", { className: classNames.circle }),
                label && React.createElement("div", { className: classNames.label }, label),
                statusMessage && (React.createElement("div", { role: "status", "aria-live": ariaLive },
                    React.createElement(Utilities_1.DelayedRender, null,
                        React.createElement("div", { className: classNames.screenReaderText }, statusMessage))))));
        };
        SpinnerBase.defaultProps = {
            size: Spinner_types_1.SpinnerSize.medium,
            ariaLive: 'polite',
            labelPosition: 'bottom',
        };
        return SpinnerBase;
    }(React.Component));
    exports.SpinnerBase = SpinnerBase;
});
//# sourceMappingURL=Spinner.base.js.map