import * as React from 'react';
import { IMessageBarProps } from './MessageBar.types';
export interface IMessageBarState {
    labelId?: string;
    showContent?: boolean;
    expandSingleLine?: boolean;
}
export declare class MessageBarBase extends React.Component<IMessageBarProps, IMessageBarState> {
    static defaultProps: IMessageBarProps;
    private ICON_MAP;
    private _classNames;
    constructor(props: IMessageBarProps);
    render(): JSX.Element;
    private _getActionsDiv;
    private _getDismissDiv;
    private _getDismissSingleLine;
    private _getExpandSingleLine;
    private _getIconSpan;
    private _renderMultiLine;
    private _renderSingleLine;
    private _renderInnerText;
    private _getRegionProps;
    private _getClassNames;
    private _getAnnouncementPriority;
    private _onClick;
}
