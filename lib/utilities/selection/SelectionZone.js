import { __assign, __extends } from "tslib";
import * as React from 'react';
import { Async, EventGroup, KeyCodes, elementContains, findScrollableParent, getParent, getDocument, getWindow, isElementTabbable, css, initializeComponentRef, FocusRects, } from '../../Utilities';
import { SelectionMode } from './interfaces';
// Selection definitions:
//
// Anchor index: the point from which a range selection starts.
// Focus index: the point from which layout movement originates from.
//
// These two can differ. Tests:
//
// If you start at index 5
// Shift click to index 10
//    The focus is 10, the anchor is 5.
// If you shift click at index 0
//    The anchor remains at 5, the items between 0 and 5 are selected and everything else is cleared.
// If you click index 8
//    The anchor and focus are set to 8.
var SELECTION_DISABLED_ATTRIBUTE_NAME = 'data-selection-disabled';
var SELECTION_INDEX_ATTRIBUTE_NAME = 'data-selection-index';
var SELECTION_TOGGLE_ATTRIBUTE_NAME = 'data-selection-toggle';
var SELECTION_INVOKE_ATTRIBUTE_NAME = 'data-selection-invoke';
var SELECTION_INVOKE_TOUCH_ATTRIBUTE_NAME = 'data-selection-touch-invoke';
var SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME = 'data-selection-all-toggle';
var SELECTION_SELECT_ATTRIBUTE_NAME = 'data-selection-select';
/**
 * {@docCategory Selection}
 */
var SelectionZone = /** @class */ (function (_super) {
    __extends(SelectionZone, _super);
    function SelectionZone(props) {
        var _this = _super.call(this, props) || this;
        _this._root = React.createRef();
        /**
         * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
         * react to the event. Note that focus events in IE \<= 11 will occur asynchronously after .focus() has
         * been called on an element, so we need a flag to store the idea that we will bypass the "next"
         * focus event that occurs. This method does that.
         */
        _this.ignoreNextFocus = function () {
            _this._handleNextFocus(false);
        };
        _this._onSelectionChange = function () {
            var selection = _this.props.selection;
            var isModal = selection.isModal && selection.isModal();
            _this.setState({
                isModal: isModal,
            });
        };
        _this._onMouseDownCapture = function (ev) {
            var target = ev.target;
            if (document.activeElement !== target && !elementContains(document.activeElement, target)) {
                _this.ignoreNextFocus();
                return;
            }
            if (!elementContains(target, _this._root.current)) {
                return;
            }
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                    _this.ignoreNextFocus();
                    break;
                }
                target = getParent(target);
            }
        };
        /**
         * When we focus an item, for single/multi select scenarios, we should try to select it immediately
         * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
         * specially.
         */
        _this._onFocus = function (ev) {
            var target = ev.target;
            var selection = _this.props.selection;
            var isToggleModifierPressed = _this._isCtrlPressed || _this._isMetaPressed;
            var selectionMode = _this._getSelectionMode();
            if (_this._shouldHandleFocus && selectionMode !== SelectionMode.none) {
                var isToggle = _this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME);
                var itemRoot = _this._findItemRoot(target);
                if (!isToggle && itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    if (isToggleModifierPressed) {
                        // set anchor only.
                        selection.setIndexSelected(index, selection.isIndexSelected(index), true);
                        if (_this.props.enterModalOnTouch && _this._isTouch && selection.setModal) {
                            selection.setModal(true);
                            _this._setIsTouch(false);
                        }
                    }
                    else {
                        if (_this.props.isSelectedOnFocus) {
                            _this._onItemSurfaceClick(ev, index);
                        }
                    }
                }
            }
            _this._handleNextFocus(false);
        };
        _this._onMouseDown = function (ev) {
            _this._updateModifiers(ev);
            var target = ev.target;
            var itemRoot = _this._findItemRoot(target);
            // No-op if selection is disabled
            if (_this._isSelectionDisabled(target)) {
                return;
            }
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                    break;
                }
                else if (itemRoot) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if (_this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if ((target === itemRoot || _this._shouldAutoSelect(target)) &&
                        !_this._isShiftPressed &&
                        !_this._isCtrlPressed &&
                        !_this._isMetaPressed) {
                        _this._onInvokeMouseDown(ev, _this._getItemIndex(itemRoot));
                        break;
                    }
                    else if (_this.props.disableAutoSelectOnInputElements &&
                        (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT')) {
                        return;
                    }
                }
                target = getParent(target);
            }
        };
        _this._onTouchStartCapture = function (ev) {
            _this._setIsTouch(true);
        };
        _this._onClick = function (ev) {
            var _a = _this.props.enableTouchInvocationTarget, enableTouchInvocationTarget = _a === void 0 ? false : _a;
            _this._updateModifiers(ev);
            var target = ev.target;
            var itemRoot = _this._findItemRoot(target);
            var isSelectionDisabled = _this._isSelectionDisabled(target);
            while (target !== _this._root.current) {
                if (_this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                    if (!isSelectionDisabled) {
                        _this._onToggleAllClick(ev);
                    }
                    break;
                }
                else if (itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        if (!isSelectionDisabled) {
                            if (_this._isShiftPressed) {
                                _this._onItemSurfaceClick(ev, index);
                            }
                            else {
                                _this._onToggleClick(ev, index);
                            }
                        }
                        break;
                    }
                    else if ((_this._isTouch &&
                        enableTouchInvocationTarget &&
                        _this._hasAttribute(target, SELECTION_INVOKE_TOUCH_ATTRIBUTE_NAME)) ||
                        _this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        // Items should be invokable even if selection is disabled.
                        _this._onInvokeClick(ev, index);
                        break;
                    }
                    else if (target === itemRoot) {
                        if (!isSelectionDisabled) {
                            _this._onItemSurfaceClick(ev, index);
                        }
                        break;
                    }
                    else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT') {
                        return;
                    }
                }
                target = getParent(target);
            }
        };
        _this._onContextMenu = function (ev) {
            var target = ev.target;
            var _a = _this.props, onItemContextMenu = _a.onItemContextMenu, selection = _a.selection;
            if (onItemContextMenu) {
                var itemRoot = _this._findItemRoot(target);
                if (itemRoot) {
                    var index = _this._getItemIndex(itemRoot);
                    _this._onInvokeMouseDown(ev, index);
                    var skipPreventDefault = onItemContextMenu(selection.getItems()[index], index, ev.nativeEvent);
                    // In order to keep back compat, if the value here is undefined, then we should still
                    // call preventDefault(). Only in the case where true is explicitly returned should
                    // the call be skipped.
                    if (!skipPreventDefault) {
                        ev.preventDefault();
                    }
                }
            }
        };
        /**
         * In multi selection, if you double click within an item's root (but not within the invoke element or
         * input elements), we should execute the invoke handler.
         */
        _this._onDoubleClick = function (ev) {
            var target = ev.target;
            var onItemInvoked = _this.props.onItemInvoked;
            var itemRoot = _this._findItemRoot(target);
            if (itemRoot && onItemInvoked && !_this._isInputElement(target)) {
                var index = _this._getItemIndex(itemRoot);
                while (target !== _this._root.current) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME) ||
                        _this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                        break;
                    }
                    else if (target === itemRoot) {
                        _this._onInvokeClick(ev, index);
                        break;
                    }
                    target = getParent(target);
                }
                target = getParent(target);
            }
        };
        _this._onKeyDownCapture = function (ev) {
            _this._updateModifiers(ev);
            _this._handleNextFocus(true);
        };
        _this._onKeyDown = function (ev) {
            _this._updateModifiers(ev);
            var target = ev.target;
            var isSelectionDisabled = _this._isSelectionDisabled(target);
            var selection = _this.props.selection;
            var isSelectAllKey = ev.which === KeyCodes.a && (_this._isCtrlPressed || _this._isMetaPressed);
            var isClearSelectionKey = ev.which === KeyCodes.escape;
            // Ignore key downs from input elements.
            if (_this._isInputElement(target)) {
                // A key was pressed while an item in this zone was focused.
                return;
            }
            var selectionMode = _this._getSelectionMode();
            // If ctrl-a is pressed, select all (if all are not already selected.)
            if (isSelectAllKey && selectionMode === SelectionMode.multiple && !selection.isAllSelected()) {
                if (!isSelectionDisabled) {
                    selection.setAllSelected(true);
                }
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            // If escape is pressed, clear selection (if any are selected.)
            if (isClearSelectionKey && selection.getSelectedCount() > 0) {
                if (!isSelectionDisabled) {
                    selection.setAllSelected(false);
                }
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            var itemRoot = _this._findItemRoot(target);
            // If a key was pressed within an item, we should treat "enters" as invokes and "space" as toggle
            if (itemRoot) {
                var index = _this._getItemIndex(itemRoot);
                while (target !== _this._root.current) {
                    if (_this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                        // For toggle elements, assuming they are rendered as buttons, they will generate a click event,
                        // so we can no-op for any keydowns in this case.
                        break;
                    }
                    else if (_this._shouldAutoSelect(target)) {
                        if (!isSelectionDisabled) {
                            // If the event went to an element which should trigger auto-select, select it and then let
                            // the default behavior kick in.
                            _this._onInvokeMouseDown(ev, index);
                        }
                        break;
                    }
                    else if ((ev.which === KeyCodes.enter || ev.which === KeyCodes.space) &&
                        (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT')) {
                        return false;
                    }
                    else if (target === itemRoot) {
                        if (ev.which === KeyCodes.enter) {
                            // Items should be invokable even if selection is disabled.
                            _this._onInvokeClick(ev, index);
                            ev.preventDefault();
                            return;
                        }
                        else if (ev.which === KeyCodes.space) {
                            if (!isSelectionDisabled) {
                                _this._onToggleClick(ev, index);
                            }
                            ev.preventDefault();
                            return;
                        }
                        break;
                    }
                    target = getParent(target);
                }
            }
        };
        _this._events = new EventGroup(_this);
        _this._async = new Async(_this);
        initializeComponentRef(_this);
        var selection = _this.props.selection;
        // Reflect the initial modal state of selection into the state.
        var isModal = selection.isModal && selection.isModal();
        _this.state = {
            isModal: isModal,
        };
        return _this;
    }
    SelectionZone.getDerivedStateFromProps = function (nextProps, prevState) {
        var isModal = nextProps.selection.isModal && nextProps.selection.isModal();
        return __assign(__assign({}, prevState), { isModal: isModal });
    };
    SelectionZone.prototype.componentDidMount = function () {
        var win = getWindow(this._root.current);
        // Track the latest modifier keys globally.
        this._events.on(win, 'keydown, keyup', this._updateModifiers, true);
        this._events.on(document, 'click', this._findScrollParentAndTryClearOnEmptyClick);
        this._events.on(document.body, 'touchstart', this._onTouchStartCapture, true);
        this._events.on(document.body, 'touchend', this._onTouchStartCapture, true);
        // Subscribe to the selection to keep modal state updated.
        this._events.on(this.props.selection, 'change', this._onSelectionChange);
    };
    SelectionZone.prototype.render = function () {
        var isModal = this.state.isModal;
        return (React.createElement("div", { className: css('ms-SelectionZone', {
                'ms-SelectionZone--modal': !!isModal,
            }), ref: this._root, onKeyDown: this._onKeyDown, onMouseDown: this._onMouseDown, onKeyDownCapture: this._onKeyDownCapture, onClick: this._onClick, role: "presentation", onDoubleClick: this._onDoubleClick, onContextMenu: this._onContextMenu, onMouseDownCapture: this._onMouseDownCapture, onFocusCapture: this._onFocus, "data-selection-is-modal": isModal ? true : undefined },
            this.props.children,
            React.createElement(FocusRects, null)));
    };
    SelectionZone.prototype.componentDidUpdate = function (previousProps) {
        var selection = this.props.selection;
        if (selection !== previousProps.selection) {
            // Whenever selection changes, update the subscripton to keep modal state updated.
            this._events.off(previousProps.selection);
            this._events.on(selection, 'change', this._onSelectionChange);
        }
    };
    SelectionZone.prototype.componentWillUnmount = function () {
        this._events.dispose();
        this._async.dispose();
    };
    SelectionZone.prototype._isSelectionDisabled = function (target) {
        if (this._getSelectionMode() === SelectionMode.none) {
            return true;
        }
        while (target !== this._root.current) {
            if (this._hasAttribute(target, SELECTION_DISABLED_ATTRIBUTE_NAME)) {
                return true;
            }
            target = getParent(target);
        }
        return false;
    };
    SelectionZone.prototype._onToggleAllClick = function (ev) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === SelectionMode.multiple) {
            selection.toggleAllSelected();
            ev.stopPropagation();
            ev.preventDefault();
        }
    };
    SelectionZone.prototype._onToggleClick = function (ev, index) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        selection.setChangeEvents(false);
        if (this.props.enterModalOnTouch && this._isTouch && !selection.isIndexSelected(index) && selection.setModal) {
            selection.setModal(true);
            this._setIsTouch(false);
        }
        if (selectionMode === SelectionMode.multiple) {
            selection.toggleIndexSelected(index);
        }
        else if (selectionMode === SelectionMode.single) {
            var isSelected = selection.isIndexSelected(index);
            var isModal = selection.isModal && selection.isModal();
            selection.setAllSelected(false);
            selection.setIndexSelected(index, !isSelected, true);
            if (isModal && selection.setModal) {
                // Since the above call to setAllSelected(false) clears modal state,
                // restore it. This occurs because the SelectionMode of the Selection
                // may differ from the SelectionZone.
                selection.setModal(true);
            }
        }
        else {
            selection.setChangeEvents(true);
            return;
        }
        selection.setChangeEvents(true);
        ev.stopPropagation();
        // NOTE: ev.preventDefault is not called for toggle clicks, because this will kill the browser behavior
        // for checkboxes if you use a checkbox for the toggle.
    };
    SelectionZone.prototype._onInvokeClick = function (ev, index) {
        var _a = this.props, selection = _a.selection, onItemInvoked = _a.onItemInvoked;
        if (onItemInvoked) {
            onItemInvoked(selection.getItems()[index], index, ev.nativeEvent);
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    SelectionZone.prototype._onItemSurfaceClick = function (ev, index) {
        var selection = this.props.selection;
        var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === SelectionMode.multiple) {
            if (this._isShiftPressed && !this._isTabPressed) {
                selection.selectToIndex(index, !isToggleModifierPressed);
            }
            else if (isToggleModifierPressed) {
                selection.toggleIndexSelected(index);
            }
            else {
                this._clearAndSelectIndex(index);
            }
        }
        else if (selectionMode === SelectionMode.single) {
            this._clearAndSelectIndex(index);
        }
    };
    SelectionZone.prototype._onInvokeMouseDown = function (ev, index) {
        var selection = this.props.selection;
        // Only do work if item is not selected.
        if (selection.isIndexSelected(index)) {
            return;
        }
        this._clearAndSelectIndex(index);
    };
    /**
     * To avoid high startup cost of traversing the DOM on component mount,
     * defer finding the scrollable parent until a click interaction.
     *
     * The styles will probably already calculated since we're running in a click handler,
     * so this is less likely to cause layout thrashing then doing it in mount.
     */
    SelectionZone.prototype._findScrollParentAndTryClearOnEmptyClick = function (ev) {
        var scrollParent = findScrollableParent(this._root.current);
        // unbind this handler and replace binding with a binding on the actual scrollable parent
        this._events.off(document, 'click', this._findScrollParentAndTryClearOnEmptyClick);
        this._events.on(scrollParent, 'click', this._tryClearOnEmptyClick);
        // If we clicked inside the scrollable parent, call through to the handler on this click.
        if ((scrollParent && ev.target instanceof Node && scrollParent.contains(ev.target)) || scrollParent === ev.target) {
            this._tryClearOnEmptyClick(ev);
        }
    };
    SelectionZone.prototype._tryClearOnEmptyClick = function (ev) {
        if (!this.props.selectionPreservedOnEmptyClick && this._isNonHandledClick(ev.target)) {
            this.props.selection.setAllSelected(false);
        }
    };
    SelectionZone.prototype._clearAndSelectIndex = function (index) {
        var selection = this.props.selection;
        var isAlreadySingleSelected = selection.getSelectedCount() === 1 && selection.isIndexSelected(index);
        if (!isAlreadySingleSelected) {
            var isModal = selection.isModal && selection.isModal();
            selection.setChangeEvents(false);
            selection.setAllSelected(false);
            selection.setIndexSelected(index, true, true);
            if (isModal || (this.props.enterModalOnTouch && this._isTouch)) {
                if (selection.setModal) {
                    selection.setModal(true);
                }
                if (this._isTouch) {
                    this._setIsTouch(false);
                }
            }
            selection.setChangeEvents(true);
        }
    };
    /**
     * We need to track the modifier key states so that when focus events occur, which do not contain
     * modifier states in the Event object, we know how to behave.
     */
    SelectionZone.prototype._updateModifiers = function (ev) {
        this._isShiftPressed = ev.shiftKey;
        this._isCtrlPressed = ev.ctrlKey;
        this._isMetaPressed = ev.metaKey;
        var keyCode = ev.keyCode;
        this._isTabPressed = keyCode ? keyCode === KeyCodes.tab : false;
    };
    SelectionZone.prototype._findItemRoot = function (target) {
        var selection = this.props.selection;
        while (target !== this._root.current) {
            var indexValue = target.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME);
            var index = Number(indexValue);
            if (indexValue !== null && index >= 0 && index < selection.getItems().length) {
                break;
            }
            target = getParent(target);
        }
        if (target === this._root.current) {
            return undefined;
        }
        return target;
    };
    SelectionZone.prototype._getItemIndex = function (itemRoot) {
        return Number(itemRoot.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME));
    };
    SelectionZone.prototype._shouldAutoSelect = function (element) {
        return this._hasAttribute(element, SELECTION_SELECT_ATTRIBUTE_NAME);
    };
    SelectionZone.prototype._hasAttribute = function (element, attributeName) {
        var isToggle = false;
        while (!isToggle && element !== this._root.current) {
            isToggle = element.getAttribute(attributeName) === 'true';
            element = getParent(element);
        }
        return isToggle;
    };
    SelectionZone.prototype._isInputElement = function (element) {
        return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
    };
    SelectionZone.prototype._isNonHandledClick = function (element) {
        var doc = getDocument();
        if (doc && element) {
            while (element && element !== doc.documentElement) {
                if (isElementTabbable(element)) {
                    return false;
                }
                element = getParent(element);
            }
        }
        return true;
    };
    SelectionZone.prototype._handleNextFocus = function (handleFocus) {
        var _this = this;
        if (this._shouldHandleFocusTimeoutId) {
            this._async.clearTimeout(this._shouldHandleFocusTimeoutId);
            this._shouldHandleFocusTimeoutId = undefined;
        }
        this._shouldHandleFocus = handleFocus;
        if (handleFocus) {
            this._async.setTimeout(function () {
                _this._shouldHandleFocus = false;
            }, 100);
        }
    };
    SelectionZone.prototype._setIsTouch = function (isTouch) {
        var _this = this;
        if (this._isTouchTimeoutId) {
            this._async.clearTimeout(this._isTouchTimeoutId);
            this._isTouchTimeoutId = undefined;
        }
        this._isTouch = true;
        if (isTouch) {
            this._async.setTimeout(function () {
                _this._isTouch = false;
            }, 300);
        }
    };
    SelectionZone.prototype._getSelectionMode = function () {
        var selection = this.props.selection;
        var _a = this.props.selectionMode, selectionMode = _a === void 0 ? selection ? selection.mode : SelectionMode.none : _a;
        return selectionMode;
    };
    SelectionZone.defaultProps = {
        isSelectedOnFocus: true,
        selectionMode: SelectionMode.multiple,
    };
    return SelectionZone;
}(React.Component));
export { SelectionZone };
//# sourceMappingURL=SelectionZone.js.map