import * as React from 'react';
import { IBreadcrumbProps, IBreadcrumbData } from './Breadcrumb.types';
/** @deprecated Use IBreadcrumbData */
export declare type IBreadCrumbData = IBreadcrumbData;
/**
 * {@docCategory Breadcrumb}
 */
export declare class BreadcrumbBase extends React.Component<IBreadcrumbProps, any> {
    static defaultProps: IBreadcrumbProps;
    private _classNames;
    private _focusZone;
    constructor(props: IBreadcrumbProps);
    /**
     * Sets focus to the first breadcrumb link.
     */
    focus(): void;
    render(): JSX.Element;
    private _onReduceData;
    private _onRenderBreadcrumb;
    private _onRenderItem;
    private _onBreadcrumbClicked;
    /**
     * Validate incoming props
     * @param props - Props to validate
     */
    private _validateProps;
}
