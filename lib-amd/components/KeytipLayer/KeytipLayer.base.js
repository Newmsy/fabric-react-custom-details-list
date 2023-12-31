define(["require", "exports", "tslib", "react", "./KeytipLayer.styles", "../../Keytip", "../../Layer", "../../Utilities", "../../utilities/keytips/KeytipManager", "./KeytipTree", "../../utilities/keytips/KeytipUtils", "../../utilities/keytips/IKeytipTransitionKey", "../../utilities/keytips/KeytipConstants"], function (require, exports, tslib_1, React, KeytipLayer_styles_1, Keytip_1, Layer_1, Utilities_1, KeytipManager_1, KeytipTree_1, KeytipUtils_1, IKeytipTransitionKey_1, KeytipConstants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Default sequence is Alt-Windows (Alt-Meta) in Windows, Option-Control (Alt-Control) in Mac
    var defaultStartSequence = {
        key: Utilities_1.isMac() ? 'Control' : 'Meta',
        modifierKeys: [IKeytipTransitionKey_1.KeytipTransitionModifier.alt],
    };
    // Default exit sequence is the same as the start sequence
    var defaultExitSequence = defaultStartSequence;
    // Default return sequence is Escape
    var defaultReturnSequence = {
        key: 'Escape',
    };
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * A layer that holds all keytip items
     * {@docCategory Keytips}
     */
    var KeytipLayerBase = /** @class */ (function (_super) {
        tslib_1.__extends(KeytipLayerBase, _super);
        // tslint:disable-next-line:no-any
        function KeytipLayerBase(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this._keytipManager = KeytipManager_1.KeytipManager.getInstance();
            _this._delayedKeytipQueue = [];
            _this._keyHandled = false;
            _this._onDismiss = function (ev) {
                // if we are in keytip mode, then exit keytip mode
                if (_this.state.inKeytipMode) {
                    _this._exitKeytipMode(ev);
                }
            };
            _this._onKeyDown = function (ev) {
                _this._keyHandled = false;
                // using key since which has been deprecated and key is now widely suporrted.
                // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/which
                var key = ev.key;
                switch (key) {
                    case 'Alt':
                        // ALT puts focus in the browser bar, so it should not be used as a key for keytips.
                        // It can be used as a modifier
                        break;
                    case 'Tab':
                    case 'Enter':
                    case 'Spacebar':
                    case ' ':
                    case 'ArrowUp':
                    case 'Up':
                    case 'ArrowDown':
                    case 'Down':
                    case 'ArrowLeft':
                    case 'Left':
                    case 'ArrowRight':
                    case 'Right':
                        if (_this.state.inKeytipMode) {
                            _this._keyHandled = true;
                            _this._exitKeytipMode(ev);
                        }
                        break;
                    default:
                        // Special cases for browser-specific keys that are not at standard
                        // (according to http://www.w3.org/TR/uievents-key/#keys-navigation)
                        if (key === 'Esc') {
                            // Edge: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/5290772/
                            key = 'Escape';
                        }
                        else if (key === 'OS' || key === 'Win') {
                            // Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1232918
                            // Edge: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/
                            // and https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/16424492/
                            key = 'Meta';
                        }
                        var transitionKey = { key: key };
                        transitionKey.modifierKeys = _this._getModifierKey(key, ev);
                        _this.processTransitionInput(transitionKey, ev);
                        break;
                }
            };
            _this._onKeyPress = function (ev) {
                if (_this.state.inKeytipMode && !_this._keyHandled) {
                    // Call processInput
                    _this.processInput(ev.key.toLocaleLowerCase(), ev);
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            };
            _this._onKeytipAdded = function (eventArgs) {
                var keytipProps = eventArgs.keytip;
                var uniqueID = eventArgs.uniqueID;
                _this._keytipTree.addNode(keytipProps, uniqueID);
                _this._setKeytips();
                // Add the keytip to the queue to show later
                if (_this._keytipTree.isCurrentKeytipParent(keytipProps)) {
                    _this._addKeytipToQueue(KeytipUtils_1.sequencesToID(keytipProps.keySequences));
                    // Ensure the child of currentKeytip is successfully added to currentKeytip's children and update it if not.
                    // Note: Added this condition because KeytipTree.addNode was not always reflecting updates made to a parent node
                    // in currentKeytip when that parent is the currentKeytip.
                    if (_this._keytipTree.currentKeytip &&
                        _this._keytipTree.currentKeytip.hasDynamicChildren &&
                        _this._keytipTree.currentKeytip.children.indexOf(keytipProps.id) < 0) {
                        var currNode = _this._keytipTree.getNode(_this._keytipTree.currentKeytip.id);
                        if (currNode) {
                            _this._keytipTree.currentKeytip = currNode;
                        }
                    }
                }
                if (_this._newCurrentKeytipSequences && Utilities_1.arraysEqual(keytipProps.keySequences, _this._newCurrentKeytipSequences)) {
                    _this._triggerKeytipImmediately(keytipProps);
                }
                if (_this._isCurrentKeytipAnAlias(keytipProps)) {
                    var keytipSequence = keytipProps.keySequences;
                    if (keytipProps.overflowSetSequence) {
                        keytipSequence = KeytipUtils_1.mergeOverflows(keytipSequence, keytipProps.overflowSetSequence);
                    }
                    _this._keytipTree.currentKeytip = _this._keytipTree.getNode(KeytipUtils_1.sequencesToID(keytipSequence));
                }
            };
            _this._onKeytipUpdated = function (eventArgs) {
                var keytipProps = eventArgs.keytip;
                var uniqueID = eventArgs.uniqueID;
                _this._keytipTree.updateNode(keytipProps, uniqueID);
                _this._setKeytips();
                if (_this._keytipTree.isCurrentKeytipParent(keytipProps)) {
                    _this._addKeytipToQueue(KeytipUtils_1.sequencesToID(keytipProps.keySequences));
                }
            };
            _this._onKeytipRemoved = function (eventArgs) {
                var keytipProps = eventArgs.keytip;
                var uniqueID = eventArgs.uniqueID;
                // Remove keytip from the delayed queue
                _this._removeKeytipFromQueue(KeytipUtils_1.sequencesToID(keytipProps.keySequences));
                // Remove the node from the Tree
                _this._keytipTree.removeNode(keytipProps, uniqueID);
                _this._setKeytips();
            };
            _this._onPersistedKeytipAdded = function (eventArgs) {
                var keytipProps = eventArgs.keytip;
                var uniqueID = eventArgs.uniqueID;
                _this._keytipTree.addNode(keytipProps, uniqueID, true);
            };
            _this._onPersistedKeytipRemoved = function (eventArgs) {
                var keytipProps = eventArgs.keytip;
                var uniqueID = eventArgs.uniqueID;
                _this._keytipTree.removeNode(keytipProps, uniqueID);
            };
            _this._onPersistedKeytipExecute = function (eventArgs) {
                _this._persistedKeytipExecute(eventArgs.overflowButtonSequences, eventArgs.keytipSequences);
            };
            /**
             * Sets if we are in keytip mode.
             * Note, this sets both the state for the layer as well as
             * the value that the manager will expose externally.
             * @param inKeytipMode - Boolean so set whether we are in keytip mode or not
             */
            _this._setInKeytipMode = function (inKeytipMode) {
                _this.setState({ inKeytipMode: inKeytipMode });
                _this._keytipManager.inKeytipMode = inKeytipMode;
            };
            /**
             * Emits a warning if duplicate keytips are found for the children of the current keytip
             */
            _this._warnIfDuplicateKeytips = function () {
                var duplicateKeytips = _this._getDuplicateIds(_this._keytipTree.getChildren());
                if (duplicateKeytips.length) {
                    Utilities_1.warn('Duplicate keytips found for ' + duplicateKeytips.join(', '));
                }
            };
            /**
             * Returns duplicates among keytip IDs.
             * If the returned array is empty, no duplicates were found.
             *
             * @param keytipIds - Array of keytip IDs to find duplicates for
             * @returns - Array of duplicates that were found. Each duplicate will only be added once to this array.
             */
            _this._getDuplicateIds = function (keytipIds) {
                var seenIds = {};
                return keytipIds.filter(function (keytipId) {
                    seenIds[keytipId] = seenIds[keytipId] ? seenIds[keytipId] + 1 : 1;
                    // Only add the first duplicate keytip seen
                    return seenIds[keytipId] === 2;
                });
            };
            Utilities_1.initializeComponentRef(_this);
            _this._events = new Utilities_1.EventGroup(_this);
            _this._async = new Utilities_1.Async(_this);
            var managerKeytips = tslib_1.__spreadArrays(_this._keytipManager.getKeytips());
            _this.state = {
                inKeytipMode: false,
                // Get the initial set of keytips
                keytips: managerKeytips,
                visibleKeytips: _this._getVisibleKeytips(managerKeytips),
            };
            _this._buildTree();
            _this._currentSequence = '';
            // Add keytip listeners
            _this._events.on(_this._keytipManager, KeytipConstants_1.KeytipEvents.KEYTIP_ADDED, _this._onKeytipAdded);
            _this._events.on(_this._keytipManager, KeytipConstants_1.KeytipEvents.KEYTIP_UPDATED, _this._onKeytipUpdated);
            _this._events.on(_this._keytipManager, KeytipConstants_1.KeytipEvents.KEYTIP_REMOVED, _this._onKeytipRemoved);
            _this._events.on(_this._keytipManager, KeytipConstants_1.KeytipEvents.PERSISTED_KEYTIP_ADDED, _this._onPersistedKeytipAdded);
            _this._events.on(_this._keytipManager, KeytipConstants_1.KeytipEvents.PERSISTED_KEYTIP_REMOVED, _this._onPersistedKeytipRemoved);
            _this._events.on(_this._keytipManager, KeytipConstants_1.KeytipEvents.PERSISTED_KEYTIP_EXECUTE, _this._onPersistedKeytipExecute);
            return _this;
        }
        KeytipLayerBase.prototype.render = function () {
            var _this = this;
            var _a = this.props, content = _a.content, styles = _a.styles;
            var _b = this.state, keytips = _b.keytips, visibleKeytips = _b.visibleKeytips;
            this._classNames = getClassNames(styles, {});
            return (React.createElement(Layer_1.Layer, { styles: KeytipLayer_styles_1.getLayerStyles },
                React.createElement("span", { id: KeytipConstants_1.KTP_LAYER_ID, className: this._classNames.innerContent }, "" + content + KeytipConstants_1.KTP_ARIA_SEPARATOR),
                keytips &&
                    keytips.map(function (keytipProps, index) {
                        return (React.createElement("span", { key: index, id: KeytipUtils_1.sequencesToID(keytipProps.keySequences), className: _this._classNames.innerContent }, keytipProps.keySequences.join(KeytipConstants_1.KTP_ARIA_SEPARATOR)));
                    }),
                visibleKeytips &&
                    visibleKeytips.map(function (visibleKeytipProps) {
                        return React.createElement(Keytip_1.Keytip, tslib_1.__assign({ key: KeytipUtils_1.sequencesToID(visibleKeytipProps.keySequences) }, visibleKeytipProps));
                    })));
        };
        KeytipLayerBase.prototype.componentDidMount = function () {
            // Add window listeners
            this._events.on(window, 'mouseup', this._onDismiss, true /* useCapture */);
            this._events.on(window, 'pointerup', this._onDismiss, true /* useCapture */);
            this._events.on(window, 'resize', this._onDismiss);
            this._events.on(window, 'keydown', this._onKeyDown, true /* useCapture */);
            this._events.on(window, 'keypress', this._onKeyPress, true /* useCapture */);
            this._events.on(window, 'scroll', this._onDismiss, true /* useCapture */);
            // Add keytip listeners
            this._events.on(this._keytipManager, KeytipConstants_1.KeytipEvents.ENTER_KEYTIP_MODE, this._enterKeytipMode);
            this._events.on(this._keytipManager, KeytipConstants_1.KeytipEvents.EXIT_KEYTIP_MODE, this._exitKeytipMode);
        };
        KeytipLayerBase.prototype.componentWillUnmount = function () {
            this._async.dispose();
            this._events.dispose();
        };
        // The below public functions are only public for testing purposes
        // They are not intended to be used in app code by using a KeytipLayer reference
        KeytipLayerBase.prototype.getCurrentSequence = function () {
            return this._currentSequence;
        };
        KeytipLayerBase.prototype.getKeytipTree = function () {
            return this._keytipTree;
        };
        /**
         * Processes an IKeytipTransitionKey entered by the user
         *
         * @param transitionKey - IKeytipTransitionKey received by the layer to process
         */
        KeytipLayerBase.prototype.processTransitionInput = function (transitionKey, ev) {
            var currKtp = this._keytipTree.currentKeytip;
            if (IKeytipTransitionKey_1.transitionKeysContain(this.props.keytipExitSequences, transitionKey) && currKtp) {
                // If key sequence is in 'exit sequences', exit keytip mode
                this._keyHandled = true;
                this._exitKeytipMode(ev);
            }
            else if (IKeytipTransitionKey_1.transitionKeysContain(this.props.keytipReturnSequences, transitionKey)) {
                // If key sequence is in return sequences, move currentKeytip to parent (or if currentKeytip is the root, exit)
                if (currKtp) {
                    this._keyHandled = true;
                    if (currKtp.id === this._keytipTree.root.id) {
                        // We are at the root, exit keytip mode
                        this._exitKeytipMode(ev);
                    }
                    else {
                        // If this keytip has a onReturn prop, we execute the func.
                        if (currKtp.onReturn) {
                            currKtp.onReturn(this._getKtpExecuteTarget(currKtp), this._getKtpTarget(currKtp));
                        }
                        // Reset currentSequence
                        this._currentSequence = '';
                        // Return pointer to its parent
                        this._keytipTree.currentKeytip = this._keytipTree.getNode(currKtp.parent);
                        // Show children keytips of the new currentKeytip
                        this.showKeytips(this._keytipTree.getChildren());
                        this._warnIfDuplicateKeytips();
                    }
                }
            }
            else if (IKeytipTransitionKey_1.transitionKeysContain(this.props.keytipStartSequences, transitionKey) && !currKtp) {
                // If key sequence is in 'entry sequences' and currentKeytip is null, we enter keytip mode
                this._keyHandled = true;
                this._enterKeytipMode();
                this._warnIfDuplicateKeytips();
            }
        };
        /**
         * Processes inputs from the document listener and traverse the keytip tree
         *
         * @param key - Key pressed by the user
         */
        KeytipLayerBase.prototype.processInput = function (key, ev) {
            // Concat the input key with the current sequence
            var currSequence = this._currentSequence + key;
            var currKtp = this._keytipTree.currentKeytip;
            // currentKeytip must be defined, otherwise we haven't entered keytip mode yet
            if (currKtp) {
                var node = this._keytipTree.getExactMatchedNode(currSequence, currKtp);
                if (node) {
                    this._keytipTree.currentKeytip = currKtp = node;
                    var currKtpChildren = this._keytipTree.getChildren();
                    // Execute this node's onExecute if defined
                    if (currKtp.onExecute) {
                        currKtp.onExecute(this._getKtpExecuteTarget(currKtp), this._getKtpTarget(currKtp));
                        // Reset currKtp, this might have changed from the onExecute
                        currKtp = this._keytipTree.currentKeytip;
                    }
                    // To exit keytipMode after executing the keytip it must not have a menu or have dynamic children
                    if (currKtpChildren.length === 0 && !(currKtp.hasDynamicChildren || currKtp.hasMenu)) {
                        this._exitKeytipMode(ev);
                    }
                    else {
                        // Show all children keytips
                        this.showKeytips(currKtpChildren);
                        this._warnIfDuplicateKeytips();
                    }
                    // Clear currentSequence
                    this._currentSequence = '';
                    return;
                }
                var partialNodes = this._keytipTree.getPartiallyMatchedNodes(currSequence, currKtp);
                if (partialNodes.length > 0) {
                    // We found nodes that partially match the sequence, so we show only those
                    // Omit showing persisted nodes here
                    var ids = partialNodes
                        .filter(function (partialNode) {
                        return !partialNode.persisted;
                    })
                        .map(function (partialNode) {
                        return partialNode.id;
                    });
                    this.showKeytips(ids);
                    // Save currentSequence
                    this._currentSequence = currSequence;
                }
            }
        };
        /**
         * Show the given keytips and hide all others
         *
         * @param ids - Keytip IDs to show
         */
        KeytipLayerBase.prototype.showKeytips = function (ids) {
            // Update the visible prop in the manager
            for (var _i = 0, _a = this._keytipManager.getKeytips(); _i < _a.length; _i++) {
                var keytip = _a[_i];
                var keytipId = KeytipUtils_1.sequencesToID(keytip.keySequences);
                if (ids.indexOf(keytipId) >= 0) {
                    keytip.visible = true;
                }
                else if (keytip.overflowSetSequence &&
                    ids.indexOf(KeytipUtils_1.sequencesToID(KeytipUtils_1.mergeOverflows(keytip.keySequences, keytip.overflowSetSequence))) >= 0) {
                    // Check if the ID with the overflow is the keytip we're looking for
                    keytip.visible = true;
                }
                else {
                    keytip.visible = false;
                }
            }
            // Apply the manager changes to the Layer state
            this._setKeytips();
        };
        /**
         * Enters keytip mode for this layer
         */
        KeytipLayerBase.prototype._enterKeytipMode = function () {
            if (this._keytipManager.shouldEnterKeytipMode) {
                if (this._keytipManager.delayUpdatingKeytipChange) {
                    this._buildTree();
                    this._setKeytips();
                }
                this._keytipTree.currentKeytip = this._keytipTree.root;
                // Show children of root
                this.showKeytips(this._keytipTree.getChildren());
                this._setInKeytipMode(true /* inKeytipMode */);
                if (this.props.onEnterKeytipMode) {
                    this.props.onEnterKeytipMode();
                }
            }
        };
        KeytipLayerBase.prototype._buildTree = function () {
            this._keytipTree = new KeytipTree_1.KeytipTree();
            // Add regular and persisted keytips to the tree
            for (var _i = 0, _a = Object.keys(this._keytipManager.keytips); _i < _a.length; _i++) {
                var id = _a[_i];
                var uniqueKeytip = this._keytipManager.keytips[id];
                this._keytipTree.addNode(uniqueKeytip.keytip, uniqueKeytip.uniqueID);
            }
            for (var _b = 0, _c = Object.keys(this._keytipManager.persistedKeytips); _b < _c.length; _b++) {
                var id = _c[_b];
                var uniqueKeytip = this._keytipManager.persistedKeytips[id];
                this._keytipTree.addNode(uniqueKeytip.keytip, uniqueKeytip.uniqueID);
            }
        };
        /**
         * Exits keytip mode for this layer
         */
        KeytipLayerBase.prototype._exitKeytipMode = function (ev) {
            this._keytipTree.currentKeytip = undefined;
            this._currentSequence = '';
            // Hide all keytips
            this.showKeytips([]);
            // Reset the delayed keytips if any
            this._delayedQueueTimeout && this._async.clearTimeout(this._delayedQueueTimeout);
            this._delayedKeytipQueue = [];
            this._setInKeytipMode(false /* inKeytipMode */);
            if (this.props.onExitKeytipMode) {
                this.props.onExitKeytipMode(ev);
            }
        };
        /**
         * Sets the keytips state property
         *
         * @param keytipProps - Keytips to set in this layer
         */
        KeytipLayerBase.prototype._setKeytips = function (keytipProps) {
            if (keytipProps === void 0) { keytipProps = this._keytipManager.getKeytips(); }
            this.setState({ keytips: keytipProps, visibleKeytips: this._getVisibleKeytips(keytipProps) });
        };
        /**
         * Callback function to use for persisted keytips
         *
         * @param overflowButtonSequences - The overflow button sequence to execute
         * @param keytipSequences - The keytip that should become the 'currentKeytip' when it is registered
         */
        KeytipLayerBase.prototype._persistedKeytipExecute = function (overflowButtonSequences, keytipSequences) {
            // Save newCurrentKeytip for later
            this._newCurrentKeytipSequences = keytipSequences;
            // Execute the overflow button's onExecute
            var overflowKeytipNode = this._keytipTree.getNode(KeytipUtils_1.sequencesToID(overflowButtonSequences));
            if (overflowKeytipNode && overflowKeytipNode.onExecute) {
                overflowKeytipNode.onExecute(this._getKtpExecuteTarget(overflowKeytipNode), this._getKtpTarget(overflowKeytipNode));
            }
        };
        KeytipLayerBase.prototype._getVisibleKeytips = function (keytips) {
            // Filter out non-visible keytips and duplicates
            var seenIds = {};
            return keytips.filter(function (keytip) {
                var keytipId = KeytipUtils_1.sequencesToID(keytip.keySequences);
                seenIds[keytipId] = seenIds[keytipId] ? seenIds[keytipId] + 1 : 1;
                return keytip.visible && seenIds[keytipId] === 1;
            });
        };
        /**
         * Gets the ModifierKeyCodes based on the keyboard event
         *
         * @param ev - React.KeyboardEvent
         * @returns List of ModifierKeyCodes that were pressed
         */
        KeytipLayerBase.prototype._getModifierKey = function (key, ev) {
            var modifierKeys = [];
            if (ev.altKey && key !== 'Alt') {
                modifierKeys.push(IKeytipTransitionKey_1.KeytipTransitionModifier.alt);
            }
            if (ev.ctrlKey && key !== 'Control') {
                modifierKeys.push(IKeytipTransitionKey_1.KeytipTransitionModifier.ctrl);
            }
            if (ev.shiftKey && key !== 'Shift') {
                modifierKeys.push(IKeytipTransitionKey_1.KeytipTransitionModifier.shift);
            }
            if (ev.metaKey && key !== 'Meta') {
                modifierKeys.push(IKeytipTransitionKey_1.KeytipTransitionModifier.meta);
            }
            return modifierKeys.length ? modifierKeys : undefined;
        };
        /**
         * Trigger a keytip immediately and set it as the current keytip
         *
         * @param keytipProps - Keytip to trigger immediately
         */
        KeytipLayerBase.prototype._triggerKeytipImmediately = function (keytipProps) {
            // This keytip should become the currentKeytip and should execute right away
            var keytipSequence = tslib_1.__spreadArrays(keytipProps.keySequences);
            if (keytipProps.overflowSetSequence) {
                keytipSequence = KeytipUtils_1.mergeOverflows(keytipSequence, keytipProps.overflowSetSequence);
            }
            // Set currentKeytip
            this._keytipTree.currentKeytip = this._keytipTree.getNode(KeytipUtils_1.sequencesToID(keytipSequence));
            if (this._keytipTree.currentKeytip) {
                // Show all children keytips if any
                var children = this._keytipTree.getChildren();
                if (children.length) {
                    this.showKeytips(children);
                }
                if (this._keytipTree.currentKeytip.onExecute) {
                    this._keytipTree.currentKeytip.onExecute(this._getKtpExecuteTarget(this._keytipTree.currentKeytip), this._getKtpTarget(this._keytipTree.currentKeytip));
                }
            }
            // Unset _newCurrKtpSequences
            this._newCurrentKeytipSequences = undefined;
        };
        KeytipLayerBase.prototype._addKeytipToQueue = function (keytipID) {
            var _this = this;
            // Add keytip
            this._delayedKeytipQueue.push(keytipID);
            // Clear timeout
            this._delayedQueueTimeout && this._async.clearTimeout(this._delayedQueueTimeout);
            // Reset timeout
            this._delayedQueueTimeout = this._async.setTimeout(function () {
                if (_this._delayedKeytipQueue.length) {
                    _this.showKeytips(_this._delayedKeytipQueue);
                    _this._delayedKeytipQueue = [];
                }
            }, 300);
        };
        KeytipLayerBase.prototype._removeKeytipFromQueue = function (keytipID) {
            var _this = this;
            var index = this._delayedKeytipQueue.indexOf(keytipID);
            if (index >= 0) {
                // Remove keytip
                this._delayedKeytipQueue.splice(index, 1);
                // Clear timeout
                this._delayedQueueTimeout && this._async.clearTimeout(this._delayedQueueTimeout);
                // Reset timeout
                this._delayedQueueTimeout = this._async.setTimeout(function () {
                    if (_this._delayedKeytipQueue.length) {
                        _this.showKeytips(_this._delayedKeytipQueue);
                        _this._delayedKeytipQueue = [];
                    }
                }, 300);
            }
        };
        KeytipLayerBase.prototype._getKtpExecuteTarget = function (currKtp) {
            return Utilities_1.getDocument().querySelector(KeytipUtils_1.ktpTargetFromId(currKtp.id));
        };
        KeytipLayerBase.prototype._getKtpTarget = function (currKtp) {
            return Utilities_1.getDocument().querySelector(KeytipUtils_1.ktpTargetFromSequences(currKtp.keySequences));
        };
        /**
         * Returns T/F if the keytipProps keySequences match the currentKeytip, and the currentKeytip is in an overflow well
         * This will make 'keytipProps' the new currentKeytip
         *
         * @param keytipProps - Keytip props to check
         * @returns - T/F if this keytip should become the currentKeytip
         */
        KeytipLayerBase.prototype._isCurrentKeytipAnAlias = function (keytipProps) {
            var currKtp = this._keytipTree.currentKeytip;
            if (currKtp &&
                (currKtp.overflowSetSequence || currKtp.persisted) &&
                Utilities_1.arraysEqual(keytipProps.keySequences, currKtp.keySequences)) {
                return true;
            }
            return false;
        };
        KeytipLayerBase.defaultProps = {
            keytipStartSequences: [defaultStartSequence],
            keytipExitSequences: [defaultExitSequence],
            keytipReturnSequences: [defaultReturnSequence],
            content: '',
        };
        return KeytipLayerBase;
    }(React.Component));
    exports.KeytipLayerBase = KeytipLayerBase;
});
//# sourceMappingURL=KeytipLayer.base.js.map