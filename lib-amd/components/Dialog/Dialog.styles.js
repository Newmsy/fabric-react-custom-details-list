define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-Dialog',
    };
    exports.getStyles = function (props) {
        var _a;
        var className = props.className, containerClassName = props.containerClassName, // tslint:disable-line:deprecation
        _b = props.dialogDefaultMinWidth, // tslint:disable-line:deprecation
        dialogDefaultMinWidth = _b === void 0 ? '288px' : _b, _c = props.dialogDefaultMaxWidth, dialogDefaultMaxWidth = _c === void 0 ? '340px' : _c, hidden = props.hidden, theme = props.theme;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        return {
            root: [classNames.root, theme.fonts.medium, className],
            main: [
                {
                    width: dialogDefaultMinWidth,
                    outline: '3px solid transparent',
                    selectors: (_a = {},
                        _a["@media (min-width: " + Styling_1.ScreenWidthMinMedium + "px)"] = {
                            width: 'auto',
                            maxWidth: dialogDefaultMaxWidth,
                            minWidth: dialogDefaultMinWidth,
                        },
                        _a),
                },
                !hidden && { display: 'flex' },
                containerClassName,
            ],
        };
    };
});
//# sourceMappingURL=Dialog.styles.js.map