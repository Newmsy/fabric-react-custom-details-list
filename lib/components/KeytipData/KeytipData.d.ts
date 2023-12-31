import * as React from 'react';
import { IRenderComponent } from '../../Utilities';
import { IKeytipDataProps } from './KeytipData.types';
/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 * {@docCategory Keytips}
 */
export declare class KeytipData extends React.Component<IKeytipDataProps & IRenderComponent<{}>, {}> {
    private _uniqueId;
    private _keytipManager;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: IKeytipDataProps & IRenderComponent<{}>): void;
    render(): JSX.Element;
    private _getKtpProps;
    /**
     * Gets the aria- and data- attributes to attach to the component
     * @param keytipProps - props for Keytip
     * @param describedByPrepend - ariaDescribedBy value to prepend
     */
    private _getKtpAttrs;
}
