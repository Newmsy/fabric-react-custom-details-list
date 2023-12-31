import * as React from 'react';
import { IDetailsHeaderBaseProps } from './DetailsList.types';
import { CollapseAllVisibility } from '../../GroupedList';
import { SelectAllVisibility, IDetailsHeaderState } from './DetailsHeader.types';
import { IDetailsHeader } from './DetailsHeader.types';
export declare class DetailsHeaderBase extends React.Component<IDetailsHeaderBaseProps, IDetailsHeaderState> implements IDetailsHeader {
    static defaultProps: {
        selectAllVisibility: SelectAllVisibility;
        collapseAllVisibility: CollapseAllVisibility;
        useFastIcons: boolean;
    };
    private _classNames;
    private _rootElement;
    private _events;
    private _rootComponent;
    private _id;
    private _draggedColumnIndex;
    private _dropHintDetails;
    private _dragDropHelper;
    private _currentDropHintIndex;
    private _subscriptionObject;
    private _onDropIndexInfo;
    constructor(props: IDetailsHeaderBaseProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IDetailsHeaderBaseProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    /** Set focus to the active thing in the focus area. */
    focus(): boolean;
    /**
     * Gets column reorder props from this.props. If the calling code is part of setting up or
     * handling drag/drop events, it's safe to assume that this method's return value is defined
     * (because drag/drop handling will only be set up if reorder props are given).
     */
    private _getColumnReorderProps;
    private _getHeaderDragDropOptions;
    private _updateDroppingState;
    private _isValidCurrentDropHintIndex;
    private _onDragOver;
    private _onDrop;
    /**
     * @returns whether or not the "Select All" checkbox column is hidden.
     */
    private _isCheckboxColumnHidden;
    private _updateDragInfo;
    private _resetDropHints;
    private _updateDropHintElement;
    private _getDropHintPositions;
    /**
     * Based on the given cursor position, finds the nearest drop hint and updates the state to make it visible
     */
    private _computeDropHintToBeShown;
    private _isEventOnHeader;
    private _renderColumnSizer;
    private _renderColumnDivider;
    private _renderDropHint;
    private _onRenderColumnHeaderTooltip;
    /**
     * double click on the column sizer will auto ajust column width
     * to fit the longest content among current rendered rows.
     *
     * @param columnIndex - index of the column user double clicked
     * @param ev - mouse double click event
     */
    private _onSizerDoubleClick;
    /**
     * Called when the select all toggle is clicked.
     */
    private _onSelectAllClicked;
    private _onRootMouseDown;
    private _onRootMouseMove;
    private _onRootRef;
    private _onRootKeyDown;
    /**
     * mouse move event handler in the header
     * it will set isSizing state to true when user clicked on the sizer and move the mouse.
     *
     * @param ev - mouse move event
     */
    private _onSizerMouseMove;
    private _onSizerBlur;
    /**
     * mouse up event handler in the header
     * clear the resize related state.
     * This is to ensure we can catch double click event
     *
     * @param ev - mouse up event
     */
    private _onSizerMouseUp;
    private _onSelectionChanged;
    private _onToggleCollapseAll;
}
