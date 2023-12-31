import * as React from 'react';
import { IGridCellProps } from './GridCell.types';
export declare class GridCell<T, P extends IGridCellProps<T>> extends React.Component<P, {}> {
    static defaultProps: {
        disabled: boolean;
        id: string;
    };
    render(): JSX.Element;
    private _onClick;
    private _onMouseEnter;
    private _onMouseMove;
    private _onMouseLeave;
    private _onFocus;
}
