define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-DocumentCardLogo',
    };
    exports.getStyles = function (props) {
        var theme = props.theme, className = props.className;
        var palette = theme.palette, fonts = theme.fonts;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        return {
            root: [
                classNames.root,
                {
                    // tslint:disable-next-line:deprecation
                    fontSize: fonts.xxLargePlus.fontSize,
                    color: palette.themePrimary,
                    display: 'block',
                    padding: '16px 16px 0 16px',
                },
                className,
            ],
        };
    };
});
//# sourceMappingURL=DocumentCardLogo.styles.js.map