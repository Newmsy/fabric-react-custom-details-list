define(["require", "exports", "tslib", "../../Utilities", "../../utilities/keytips/KeytipConstants"], function (require, exports, tslib_1, Utilities_1, KeytipConstants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * This class is responsible for handling registering, updating, and unregistering of keytips
     */
    var KeytipManager = /** @class */ (function () {
        function KeytipManager() {
            this.keytips = {};
            this.persistedKeytips = {};
            this.sequenceMapping = {};
            // This is (and should be) updated and kept in sync
            // with the inKeytipMode in KeytipLayer.
            this.inKeytipMode = false;
            // Boolean that gets checked before entering keytip mode by the KeytipLayer
            // Used for an override in special cases (e.g. Disable entering keytip mode when a modal is shown)
            this.shouldEnterKeytipMode = true;
            // Boolean to indicate whether to delay firing an event to update subscribers of
            // keytip data changed.
            this.delayUpdatingKeytipChange = false;
        }
        /**
         * Static function to get singleton KeytipManager instance
         *
         * @returns {KeytipManager} Singleton KeytipManager instance
         */
        KeytipManager.getInstance = function () {
            return this._instance;
        };
        /**
         * Initialization code to set set parameters to define
         * how the KeytipManager handles keytip data.
         *
         * @param delayUpdatingKeytipChange - T/F if we should delay notifiying keytip subscribers
         * of keytip changes
         */
        KeytipManager.prototype.init = function (delayUpdatingKeytipChange) {
            this.delayUpdatingKeytipChange = delayUpdatingKeytipChange;
        };
        /**
         * Registers a keytip
         *
         * @param keytipProps - Keytip to register
         * @param persisted - T/F if this keytip should be persisted, default is false
         * @returns {string} Unique ID for this keytip
         */
        KeytipManager.prototype.register = function (keytipProps, persisted) {
            if (persisted === void 0) { persisted = false; }
            var props = keytipProps;
            if (!persisted) {
                // Add the overflowSetSequence if necessary
                props = this.addParentOverflow(keytipProps);
                this.sequenceMapping[props.keySequences.toString()] = props;
            }
            // Create a unique keytip
            var uniqueKeytip = this._getUniqueKtp(props);
            // Add to dictionary
            persisted
                ? (this.persistedKeytips[uniqueKeytip.uniqueID] = uniqueKeytip)
                : (this.keytips[uniqueKeytip.uniqueID] = uniqueKeytip);
            // We only want to add something new if we are currently showing keytip mode
            if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
                var event_1 = persisted ? KeytipConstants_1.KeytipEvents.PERSISTED_KEYTIP_ADDED : KeytipConstants_1.KeytipEvents.KEYTIP_ADDED;
                Utilities_1.EventGroup.raise(this, event_1, {
                    keytip: props,
                    uniqueID: uniqueKeytip.uniqueID,
                });
            }
            return uniqueKeytip.uniqueID;
        };
        /**
         * Update a keytip
         *
         * @param keytipProps - Keytip to update
         * @param uniqueID - Unique ID of this keytip
         */
        KeytipManager.prototype.update = function (keytipProps, uniqueID) {
            var newKeytipProps = this.addParentOverflow(keytipProps);
            var uniqueKeytip = this._getUniqueKtp(newKeytipProps, uniqueID);
            var oldKeyTip = this.keytips[uniqueID];
            if (oldKeyTip) {
                // Update everything except 'visible'
                uniqueKeytip.keytip.visible = oldKeyTip.keytip.visible;
                // Update keytip in this.keytips
                this.keytips[uniqueID] = uniqueKeytip;
                // Update the sequence to be up to date
                delete this.sequenceMapping[oldKeyTip.keytip.keySequences.toString()];
                this.sequenceMapping[uniqueKeytip.keytip.keySequences.toString()] = uniqueKeytip.keytip;
                // Raise event only if we are currently in keytip mode
                if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
                    Utilities_1.EventGroup.raise(this, KeytipConstants_1.KeytipEvents.KEYTIP_UPDATED, {
                        keytip: uniqueKeytip.keytip,
                        uniqueID: uniqueKeytip.uniqueID,
                    });
                }
            }
        };
        /**
         * Unregisters a keytip
         *
         * @param keytipToRemove - IKeytipProps of the keytip to remove
         * @param uniqueID - Unique ID of this keytip
         * @param persisted - T/F if this keytip should be persisted, default is false
         */
        KeytipManager.prototype.unregister = function (keytipToRemove, uniqueID, persisted) {
            if (persisted === void 0) { persisted = false; }
            persisted ? delete this.persistedKeytips[uniqueID] : delete this.keytips[uniqueID];
            !persisted && delete this.sequenceMapping[keytipToRemove.keySequences.toString()];
            var event = persisted ? KeytipConstants_1.KeytipEvents.PERSISTED_KEYTIP_REMOVED : KeytipConstants_1.KeytipEvents.KEYTIP_REMOVED;
            // Update keytips only if we're in keytip mode
            if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
                Utilities_1.EventGroup.raise(this, event, {
                    keytip: keytipToRemove,
                    uniqueID: uniqueID,
                });
            }
        };
        /**
         * Manual call to enter keytip mode
         */
        KeytipManager.prototype.enterKeytipMode = function () {
            Utilities_1.EventGroup.raise(this, KeytipConstants_1.KeytipEvents.ENTER_KEYTIP_MODE);
        };
        /**
         * Manual call to exit keytip mode
         */
        KeytipManager.prototype.exitKeytipMode = function () {
            Utilities_1.EventGroup.raise(this, KeytipConstants_1.KeytipEvents.EXIT_KEYTIP_MODE);
        };
        /**
         * Gets all IKeytipProps from this.keytips
         *
         * @returns {IKeytipProps[]} All keytips stored in the manager
         */
        KeytipManager.prototype.getKeytips = function () {
            var _this = this;
            return Object.keys(this.keytips).map(function (key) { return _this.keytips[key].keytip; });
        };
        /**
         * Adds the overflowSetSequence to the keytipProps if its parent keytip also has it
         *
         * @param keytipProps - Keytip props to add overflowSetSequence to if necessary
         * @returns {IKeytipProps} - Modified keytip props, if needed to be modified
         */
        KeytipManager.prototype.addParentOverflow = function (keytipProps) {
            var fullSequence = tslib_1.__spreadArrays(keytipProps.keySequences);
            fullSequence.pop();
            if (fullSequence.length !== 0) {
                var parentKeytip = this.sequenceMapping[fullSequence.toString()];
                if (parentKeytip && parentKeytip.overflowSetSequence) {
                    return tslib_1.__assign(tslib_1.__assign({}, keytipProps), { overflowSetSequence: parentKeytip.overflowSetSequence });
                }
            }
            return keytipProps;
        };
        /**
         * Public function to bind for overflow items that have a submenu
         *
         * @param overflowButtonSequences
         * @param keytipSequences
         */
        KeytipManager.prototype.menuExecute = function (overflowButtonSequences, keytipSequences) {
            Utilities_1.EventGroup.raise(this, KeytipConstants_1.KeytipEvents.PERSISTED_KEYTIP_EXECUTE, {
                overflowButtonSequences: overflowButtonSequences,
                keytipSequences: keytipSequences,
            });
        };
        /**
         * Creates an IUniqueKeytip object
         *
         * @param keytipProps - IKeytipProps
         * @param uniqueID - Unique ID, will default to the next unique ID if not passed
         * @returns {IUniqueKeytip} IUniqueKeytip object
         */
        KeytipManager.prototype._getUniqueKtp = function (keytipProps, uniqueID) {
            if (uniqueID === void 0) { uniqueID = Utilities_1.getId(); }
            return { keytip: tslib_1.__assign({}, keytipProps), uniqueID: uniqueID };
        };
        KeytipManager._instance = new KeytipManager();
        return KeytipManager;
    }());
    exports.KeytipManager = KeytipManager;
});
//# sourceMappingURL=KeytipManager.js.map