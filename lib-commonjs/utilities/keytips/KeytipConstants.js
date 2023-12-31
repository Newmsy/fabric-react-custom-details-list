"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KTP_PREFIX = 'ktp';
exports.KTP_SEPARATOR = '-';
exports.KTP_FULL_PREFIX = exports.KTP_PREFIX + exports.KTP_SEPARATOR;
exports.DATAKTP_TARGET = 'data-ktp-target';
exports.DATAKTP_EXECUTE_TARGET = 'data-ktp-execute-target';
exports.KTP_LAYER_ID = 'ktp-layer-id';
exports.KTP_ARIA_SEPARATOR = ', ';
// Events
var KeytipEvents;
(function (KeytipEvents) {
    KeytipEvents.KEYTIP_ADDED = 'keytipAdded';
    KeytipEvents.KEYTIP_REMOVED = 'keytipRemoved';
    KeytipEvents.KEYTIP_UPDATED = 'keytipUpdated';
    KeytipEvents.PERSISTED_KEYTIP_ADDED = 'persistedKeytipAdded';
    KeytipEvents.PERSISTED_KEYTIP_REMOVED = 'persistedKeytipRemoved';
    KeytipEvents.PERSISTED_KEYTIP_EXECUTE = 'persistedKeytipExecute';
    KeytipEvents.ENTER_KEYTIP_MODE = 'enterKeytipMode';
    KeytipEvents.EXIT_KEYTIP_MODE = 'exitKeytipMode';
})(KeytipEvents = exports.KeytipEvents || (exports.KeytipEvents = {}));
//# sourceMappingURL=KeytipConstants.js.map