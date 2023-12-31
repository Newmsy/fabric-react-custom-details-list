"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Separator_styles_1 = require("./Separator.styles");
var Separator_base_1 = require("./Separator.base");
exports.Separator = Utilities_1.styled(Separator_base_1.SeparatorBase, Separator_styles_1.getStyles, undefined, {
    scope: 'Separator',
});
//# sourceMappingURL=Separator.js.map