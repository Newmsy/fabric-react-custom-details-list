import * as React from 'react';
import { IComboBoxProps, IComboBox, IComboBoxOption } from './ComboBox.types';
export declare class VirtualizedComboBox extends React.Component<IComboBoxProps, {}> implements IComboBox {
    /** The combo box element */
    private _comboBox;
    /** The virtualized list element */
    private _list;
    constructor(props: IComboBoxProps);
    /**
     * All selected options
     */
    readonly selectedOptions: IComboBoxOption[];
    dismissMenu(): void;
    focus(shouldOpenOnFocus?: boolean, useFocusAsync?: boolean): boolean;
    render(): JSX.Element;
    protected _onRenderList: (props: IComboBoxProps) => JSX.Element;
    protected _onScrollToItem: (itemIndex: number) => void;
}
