"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var KeytipTransitionModifier;
(function (KeytipTransitionModifier) {
    KeytipTransitionModifier[KeytipTransitionModifier["shift"] = Utilities_1.KeyCodes.shift] = "shift";
    KeytipTransitionModifier[KeytipTransitionModifier["ctrl"] = Utilities_1.KeyCodes.ctrl] = "ctrl";
    KeytipTransitionModifier[KeytipTransitionModifier["alt"] = Utilities_1.KeyCodes.alt] = "alt";
    KeytipTransitionModifier[KeytipTransitionModifier["meta"] = Utilities_1.KeyCodes.leftWindow] = "meta";
})(KeytipTransitionModifier = exports.KeytipTransitionModifier || (exports.KeytipTransitionModifier = {}));
/**
 * Tests for equality between two IKeytipTransitionKeys.
 *
 * @param key1 - First IKeytipTransitionKey.
 * @param key2 - Second IKeytipTransitionKey.
 * @returns {boolean} T/F if the transition keys are equal.
 */
function transitionKeysAreEqual(key1, key2) {
    if (key1.key !== key2.key) {
        return false;
    }
    var mod1 = key1.modifierKeys;
    var mod2 = key2.modifierKeys;
    if ((!mod1 && mod2) || (mod1 && !mod2)) {
        // Not equal if one modifier is defined and the other isn't
        return false;
    }
    if (mod1 && mod2) {
        if (mod1.length !== mod2.length) {
            return false;
        }
        // Sort both arrays
        mod1 = mod1.sort();
        mod2 = mod2.sort();
        for (var i = 0; i < mod1.length; i++) {
            if (mod1[i] !== mod2[i]) {
                return false;
            }
        }
    }
    return true;
}
exports.transitionKeysAreEqual = transitionKeysAreEqual;
/**
 * Tests if 'key' is present in 'keys'.
 *
 * @param keys - Array of IKeytipTransitionKey.
 * @param key - IKeytipTransitionKey to find in 'keys'.
 * @returns {boolean} T/F if 'keys' contains 'key'.
 */
function transitionKeysContain(keys, key) {
    return !!Utilities_1.find(keys, function (transitionKey) {
        return transitionKeysAreEqual(transitionKey, key);
    });
}
exports.transitionKeysContain = transitionKeysContain;
//# sourceMappingURL=IKeytipTransitionKey.js.map