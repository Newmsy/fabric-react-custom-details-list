import * as React from 'react';
import { IColorRectangleProps, IColorRectangle } from './ColorRectangle.types';
import { IColor } from '../../../utilities/color/interfaces';
export interface IColorRectangleState {
    color: IColor;
}
/**
 * {@docCategory ColorPicker}
 */
export declare class ColorRectangleBase extends React.Component<IColorRectangleProps, IColorRectangleState> implements IColorRectangle {
    static defaultProps: Partial<IColorRectangleProps>;
    private _disposables;
    private _root;
    private _isAdjustingSaturation;
    private _descriptionId;
    constructor(props: IColorRectangleProps);
    readonly color: IColor;
    componentDidUpdate(prevProps: Readonly<IColorRectangleProps>, prevState: Readonly<IColorRectangleState>): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _onKeyDown;
    private _updateColor;
    private _onMouseDown;
    private _onMouseMove;
    private _disposeListeners;
}
/**
 * Exported for testing only.
 * @internal
 */
export declare function _getNewColor(ev: MouseEvent | React.MouseEvent, prevColor: IColor, root: HTMLElement): IColor | undefined;
