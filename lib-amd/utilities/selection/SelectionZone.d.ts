import * as React from 'react';
import { ISelection, SelectionMode, IObjectWithKey } from './interfaces';
/**
 * {@docCategory Selection}
 */
export interface ISelectionZone {
    /**
     * Method to ignore subsequent focus.
     */
    ignoreNextFocus: () => void;
}
/**
 * {@docCategory Selection}
 */
export interface ISelectionZoneProps extends React.ClassAttributes<SelectionZone> {
    /**
     * Reference to the component interface.
     */
    componentRef?: () => void;
    /**
     * Required {@link ISelection} instance bound to the {@link SelectionZone}.
     */
    selection: ISelection;
    /**
     * @deprecated No longer in use, focus is now managed by {@link FocusZone}.
     */
    layout?: {};
    /**
     * The mode of Selection, where the value is one of
     * 'none', 'single', or 'multiple'.
     *
     * @defaultvalue {@link SelectionMode.multiple}
     */
    selectionMode?: SelectionMode;
    /**
     * If true, selection is preserved on outer click.
     */
    selectionPreservedOnEmptyClick?: boolean;
    /**
     * If true, disables automatic selection on input elements.
     */
    disableAutoSelectOnInputElements?: boolean;
    /**
     * If true, modal selection is enabled on touch event.
     */
    enterModalOnTouch?: boolean;
    /**
     * Determines whether elements with the attribute `data-selection-touch-invoke` should be used as invocation targets
     * for an item if the user is using touch.
     *
     * @defaultvalue false
     */
    enableTouchInvocationTarget?: boolean;
    /**
     * Determines if an item is selected on focus.
     *
     * @defaultvalue true
     */
    isSelectedOnFocus?: boolean;
    /**
     * Optional callback for when an item is
     * invoked via ENTER or double-click.
     */
    onItemInvoked?: (item?: IObjectWithKey, index?: number, ev?: Event) => void;
    /**
     * Optional callback for when an
     * item's contextual menu action occurs.
     */
    onItemContextMenu?: (item?: any, index?: number, ev?: Event) => void | boolean;
}
/**
 * {@docCategory Selection}
 */
export interface ISelectionZoneState {
    isModal: boolean | undefined;
}
/**
 * {@docCategory Selection}
 */
export declare class SelectionZone extends React.Component<ISelectionZoneProps, ISelectionZoneState> {
    static defaultProps: {
        isSelectedOnFocus: boolean;
        selectionMode: SelectionMode;
    };
    private _async;
    private _events;
    private _root;
    private _isCtrlPressed;
    private _isShiftPressed;
    private _isMetaPressed;
    private _isTabPressed;
    private _shouldHandleFocus;
    private _shouldHandleFocusTimeoutId;
    private _isTouch;
    private _isTouchTimeoutId;
    static getDerivedStateFromProps(nextProps: ISelectionZoneProps, prevState: ISelectionZoneState): ISelectionZoneState;
    constructor(props: ISelectionZoneProps);
    componentDidMount(): void;
    render(): JSX.Element;
    componentDidUpdate(previousProps: ISelectionZoneProps): void;
    componentWillUnmount(): void;
    /**
     * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
     * react to the event. Note that focus events in IE \<= 11 will occur asynchronously after .focus() has
     * been called on an element, so we need a flag to store the idea that we will bypass the "next"
     * focus event that occurs. This method does that.
     */
    ignoreNextFocus: () => void;
    private _onSelectionChange;
    private _onMouseDownCapture;
    /**
     * When we focus an item, for single/multi select scenarios, we should try to select it immediately
     * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
     * specially.
     */
    private _onFocus;
    private _onMouseDown;
    private _onTouchStartCapture;
    private _onClick;
    private _onContextMenu;
    private _isSelectionDisabled;
    /**
     * In multi selection, if you double click within an item's root (but not within the invoke element or
     * input elements), we should execute the invoke handler.
     */
    private _onDoubleClick;
    private _onKeyDownCapture;
    private _onKeyDown;
    private _onToggleAllClick;
    private _onToggleClick;
    private _onInvokeClick;
    private _onItemSurfaceClick;
    private _onInvokeMouseDown;
    /**
     * To avoid high startup cost of traversing the DOM on component mount,
     * defer finding the scrollable parent until a click interaction.
     *
     * The styles will probably already calculated since we're running in a click handler,
     * so this is less likely to cause layout thrashing then doing it in mount.
     */
    private _findScrollParentAndTryClearOnEmptyClick;
    private _tryClearOnEmptyClick;
    private _clearAndSelectIndex;
    /**
     * We need to track the modifier key states so that when focus events occur, which do not contain
     * modifier states in the Event object, we know how to behave.
     */
    private _updateModifiers;
    private _findItemRoot;
    private _getItemIndex;
    private _shouldAutoSelect;
    private _hasAttribute;
    private _isInputElement;
    private _isNonHandledClick;
    private _handleNextFocus;
    private _setIsTouch;
    private _getSelectionMode;
}
