import * as React from 'react';
import { IGroup, IGroupRenderProps, IGroupedListStyles } from './GroupedList.types';
import { IGroupHeaderProps } from './GroupHeader.types';
import { IGroupFooterProps } from './GroupFooter.types';
import { IGroupShowAllProps } from './GroupShowAll.types';
import { IDragDropContext, IDragDropEvents, IDragDropHelper } from '../../utilities/dragdrop/index';
import { IProcessedStyleSet } from '../../Styling';
import { IRenderFunction } from '../../Utilities';
import { ISelection, SelectionMode } from '../../utilities/selection/index';
import { IViewport } from '../../utilities/decorators/withViewport';
import { IListProps } from '../List/index';
export interface IGroupedListSectionProps extends React.ClassAttributes<GroupedListSection> {
    /** GroupedList resolved class names */
    groupedListClassNames?: IProcessedStyleSet<IGroupedListStyles>;
    /**
     * Gets the component ref.
     */
    componentRef?: () => void;
    /** Whether to render in compact mode */
    compact?: boolean;
    /** Map of callback functions related to drag and drop functionality. */
    dragDropEvents?: IDragDropEvents;
    /** helper to manage drag/drop across item rows and groups */
    dragDropHelper?: IDragDropHelper;
    /** Event names and corresponding callbacks that will be registered to the group and the rendered elements */
    eventsToRegister?: {
        eventName: string;
        callback: (context: IDragDropContext, event?: any) => void;
    }[];
    /** Information to pass in to the group footer. */
    footerProps?: IGroupFooterProps;
    /** Grouping item limit. */
    getGroupItemLimit?: (group: IGroup) => number;
    /** Optional grouping instructions. */
    groupIndex?: number;
    /** Optional group nesting level. */
    groupNestingDepth?: number;
    /** Optional grouping instructions. */
    group?: IGroup;
    /** Optional override properties to render groups. */
    groupProps?: IGroupRenderProps;
    /** Information to pass in to the group header. */
    headerProps?: IGroupHeaderProps;
    /** List of items to render. */
    items: any[];
    /** Optional list props to pass to list renderer.  */
    listProps?: IListProps;
    /** Rendering callback to render the group items. */
    onRenderCell: (nestingDepth?: number, item?: any, index?: number) => React.ReactNode;
    /** Optional selection model to track selection state.  */
    selection?: ISelection;
    /** Controls how/if the details list manages selection. */
    selectionMode?: SelectionMode;
    /** Information to pass in to the group Show All footer. */
    showAllProps?: IGroupShowAllProps;
    /** Optional Viewport, provided by the parent component. */
    viewport?: IViewport;
    /** Override for rendering the group header. */
    onRenderGroupHeader?: IRenderFunction<IGroupHeaderProps>;
    /** Override for rendering the group Show All link. */
    onRenderGroupShowAll?: IRenderFunction<IGroupShowAllProps>;
    /** Override for rendering the group footer. */
    onRenderGroupFooter?: IRenderFunction<IGroupFooterProps>;
    /**
     * Optional callback to determine whether the list should be rendered in full, or virtualized.
     * Virtualization will add and remove pages of items as the user scrolls them into the visible range.
     * This benefits larger list scenarios by reducing the DOM on the screen, but can negatively affect performance for
     * smaller lists.
     * The default implementation will virtualize when this callback is not provided.
     */
    onShouldVirtualize?: (props: IListProps) => boolean;
    /** Stores parent group's children. */
    groups?: IGroup[];
}
export interface IGroupedListSectionState {
    isDropping?: boolean;
    isSelected?: boolean;
}
export declare class GroupedListSection extends React.Component<IGroupedListSectionProps, IGroupedListSectionState> {
    private _root;
    private _list;
    private _id;
    private _events;
    private _dragDropSubscription;
    private _droppingClassName;
    constructor(props: IGroupedListSectionProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(previousProps: IGroupedListSectionProps): void;
    render(): JSX.Element;
    forceUpdate(): void;
    forceListUpdate(): void;
    private _onRenderGroupHeader;
    private _onRenderGroupShowAll;
    private _onRenderGroupFooter;
    private _onSelectionChange;
    private _onRenderGroupCell;
    private _onRenderGroup;
    private _renderSubGroup;
    private _returnOne;
    private _getGroupKey;
    /**
     * collect all the data we need to enable drag/drop for a group
     */
    private _getGroupDragDropOptions;
    /**
     * update groupIsDropping state based on the input value, which is used to change style during drag and drop
     *
     * @param newValue - new isDropping state value
     * @param event - the event trigger dropping state change which can be dragenter, dragleave etc
     */
    private _updateDroppingState;
    /**
     * get the correct css class to reflect the dropping state for a given group
     *
     * If the group is the current drop target, return the default dropping class name
     * Otherwise, return '';
     *
     */
    private _getDroppingClassName;
}
