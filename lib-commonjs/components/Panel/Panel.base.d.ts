import * as React from 'react';
import { IPanel, IPanelProps } from './Panel.types';
declare enum PanelVisibilityState {
    closed = 0,
    animatingOpen = 1,
    open = 2,
    animatingClosed = 3
}
interface IPanelState {
    isFooterSticky?: boolean;
    id?: string;
    visibility: PanelVisibilityState;
}
export declare class PanelBase extends React.Component<IPanelProps, IPanelState> implements IPanel {
    static defaultProps: IPanelProps;
    private _async;
    private _events;
    private _panel;
    private _classNames;
    private _scrollableContent;
    private _animationCallback;
    private _hasCustomNavigation;
    private _headerTextId;
    private _allowTouchBodyScroll;
    static getDerivedStateFromProps(nextProps: Readonly<IPanelProps>, prevState: Readonly<IPanelState>): Partial<IPanelState> | null;
    constructor(props: IPanelProps);
    componentDidMount(): void;
    componentDidUpdate(previousProps: IPanelProps, previousState: IPanelState): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
    open(): void;
    close(): void;
    dismiss: (ev?: React.SyntheticEvent<HTMLElement, Event> | undefined) => void;
    /** isActive is true when panel is open or opening. */
    readonly isActive: boolean;
    private _allowScrollOnPanel;
    private _shouldListenForOuterClick;
    private _onRenderNavigation;
    private _onRenderNavigationContent;
    private _onRenderHeader;
    private _onRenderBody;
    private _onRenderFooter;
    private _updateFooterPosition;
    private _dismissOnOuterClick;
    private _animateTo;
    private _clearExistingAnimationTimer;
    private _onPanelClick;
    private _onTransitionComplete;
}
export {};
