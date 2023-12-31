define(["require", "exports", "../../Utilities", "./Icon.base", "./Icon.styles"], function (require, exports, Utilities_1, Icon_base_1, Icon_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Legacy Icon component which can be targeted by customization. It's recommended to use `FontIcon`
     * or `ImageIcon` instead, especially in scenarios where rendering performance is important.
     * {@docCategory Icon}
     */
    exports.Icon = Utilities_1.styled(Icon_base_1.IconBase, Icon_styles_1.getStyles, undefined, {
        scope: 'Icon',
    }, true);
});
//# sourceMappingURL=Icon.js.map