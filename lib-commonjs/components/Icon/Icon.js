"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Icon_base_1 = require("./Icon.base");
var Icon_styles_1 = require("./Icon.styles");
/**
 * Legacy Icon component which can be targeted by customization. It's recommended to use `FontIcon`
 * or `ImageIcon` instead, especially in scenarios where rendering performance is important.
 * {@docCategory Icon}
 */
exports.Icon = Utilities_1.styled(Icon_base_1.IconBase, Icon_styles_1.getStyles, undefined, {
    scope: 'Icon',
}, true);
//# sourceMappingURL=Icon.js.map