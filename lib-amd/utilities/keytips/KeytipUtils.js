define(["require", "exports", "tslib", "./KeytipConstants", "../../Utilities"], function (require, exports, tslib_1, KeytipConstants_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Converts a whole set of KeySequences into one keytip ID, which will be the ID for the last keytip sequence specified
     * keySequences should not include the initial keytip 'start' sequence.
     *
     * @param keySequences - Full path of IKeySequences for one keytip.
     * @returns {string} String to use for the keytip ID.
     */
    function sequencesToID(keySequences) {
        return keySequences.reduce(function (prevValue, keySequence) {
            return prevValue + KeytipConstants_1.KTP_SEPARATOR + keySequence.split('').join(KeytipConstants_1.KTP_SEPARATOR);
        }, KeytipConstants_1.KTP_PREFIX);
    }
    exports.sequencesToID = sequencesToID;
    /**
     * Merges an overflow sequence with a key sequence.
     *
     * @param keySequences - Full sequence for one keytip.
     * @param overflowKeySequences - Full overflow keytip sequence.
     * @returns {string[]} Sequence that will be used by the keytip when in the overflow.
     */
    function mergeOverflows(keySequences, overflowKeySequences) {
        var overflowSequenceLen = overflowKeySequences.length;
        var overflowSequence = tslib_1.__spreadArrays(overflowKeySequences).pop();
        var newKeySequences = tslib_1.__spreadArrays(keySequences);
        return Utilities_1.addElementAtIndex(newKeySequences, overflowSequenceLen - 1, overflowSequence);
    }
    exports.mergeOverflows = mergeOverflows;
    /**
     * Constructs the data-ktp-target attribute selector from a full key sequence.
     *
     * @param keySequences - Full string[] for a Keytip.
     * @returns {string} String selector to use to query for the keytip target.
     */
    function ktpTargetFromSequences(keySequences) {
        return '[' + KeytipConstants_1.DATAKTP_TARGET + '="' + sequencesToID(keySequences) + '"]';
    }
    exports.ktpTargetFromSequences = ktpTargetFromSequences;
    /**
     * Constructs the data-ktp-execute-target attribute selector from a keytip ID.
     *
     * @param keytipId - ID of the Keytip.
     * @returns {string} String selector to use to query for the keytip execute target.
     */
    function ktpTargetFromId(keytipId) {
        return '[' + KeytipConstants_1.DATAKTP_EXECUTE_TARGET + '="' + keytipId + '"]';
    }
    exports.ktpTargetFromId = ktpTargetFromId;
    /**
     * Gets the aria-describedby value to put on the component with this keytip.
     *
     * @param keySequences - KeySequences of the keytip.
     * @returns {string} The aria-describedby value to set on the component with this keytip.
     */
    function getAriaDescribedBy(keySequences) {
        var describedby = ' ' + KeytipConstants_1.KTP_LAYER_ID;
        if (!keySequences.length) {
            // Return just the layer ID
            return describedby;
        }
        return describedby + ' ' + sequencesToID(keySequences);
    }
    exports.getAriaDescribedBy = getAriaDescribedBy;
});
//# sourceMappingURL=KeytipUtils.js.map