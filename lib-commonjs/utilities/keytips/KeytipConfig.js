"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Builds a map of ID -> IKeytipProps
 *
 * @param config - IKeytipConfig object
 * @returns {IKeytipConfigMap} - Config map
 */
function buildKeytipConfigMap(config) {
    var configMap = {};
    for (var _i = 0, _a = config.keytips; _i < _a.length; _i++) {
        var keytip = _a[_i];
        constructKeytip(configMap, [], keytip);
    }
    return configMap;
}
exports.buildKeytipConfigMap = buildKeytipConfigMap;
/**
 * Constructs a keytip from an IKeytipConfigItem and puts it in the configMap
 *
 * @param configMap - IKeytipConfigMap to store the keytip in
 * @param parentSequence - string of the parent keytip
 * @param keytip - IKeytipConfigItem data
 */
function constructKeytip(configMap, parentSequence, keytip) {
    // Compute full key sequence
    var sequence = keytip.sequence ? keytip.sequence : keytip.content.toLocaleLowerCase();
    var keytipSequence = parentSequence.concat(sequence);
    // Save props in configMap
    var keytipProps = tslib_1.__assign(tslib_1.__assign({}, keytip.optionalProps), { keySequences: keytipSequence, content: keytip.content });
    configMap[keytip.id] = keytipProps;
    if (keytip.children) {
        for (var _i = 0, _a = keytip.children; _i < _a.length; _i++) {
            var child = _a[_i];
            // Create keytips for all children
            constructKeytip(configMap, keytipSequence, child);
        }
    }
}
exports.constructKeytip = constructKeytip;
//# sourceMappingURL=KeytipConfig.js.map