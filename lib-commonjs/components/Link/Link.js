"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Link_base_1 = require("./Link.base");
var Link_styles_1 = require("./Link.styles");
exports.Link = Utilities_1.styled(Link_base_1.LinkBase, Link_styles_1.getStyles, undefined, {
    scope: 'Link',
});
//# sourceMappingURL=Link.js.map