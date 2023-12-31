"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Modal_base_1 = require("./Modal.base");
var Modal_styles_1 = require("./Modal.styles");
exports.Modal = Utilities_1.styled(Modal_base_1.ModalBase, Modal_styles_1.getStyles, undefined, {
    scope: 'Modal',
});
//# sourceMappingURL=Modal.js.map