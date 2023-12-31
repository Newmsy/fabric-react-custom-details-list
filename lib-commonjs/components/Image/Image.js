"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Image_base_1 = require("./Image.base");
var Image_styles_1 = require("./Image.styles");
exports.Image = Utilities_1.styled(Image_base_1.ImageBase, Image_styles_1.getStyles, undefined, {
    scope: 'Image',
}, true);
//# sourceMappingURL=Image.js.map