import * as React from 'react';
import { IColorPickerProps, IColorPicker } from './ColorPicker.types';
import { IColor } from '../../utilities/color/interfaces';
declare type ColorComponent = keyof Pick<IColor, 'r' | 'g' | 'b' | 'a' | 't' | 'hex'>;
export interface IColorPickerState {
    /** Most recently selected color */
    color: IColor;
    /** Color component currently being edited via a text field (if intermediate value is invalid) */
    editingColor?: {
        /** Which color component is being edited */
        component: ColorComponent;
        /** Currently entered value, which is not valid */
        value: string;
    };
}
/**
 * {@docCategory ColorPicker}
 */
export declare class ColorPickerBase extends React.Component<IColorPickerProps, IColorPickerState> implements IColorPicker {
    static defaultProps: Partial<IColorPickerProps>;
    private _textChangeHandlers;
    /**
     * Strings displayed in the UI as text field labels (these are in a separate object for convenient
     * indexing by short color component name).
     */
    private _textLabels;
    /** Strings besides red/green/blue/alpha/hex, with defaults for all values except the deprecated `hue` */
    private _strings;
    constructor(props: IColorPickerProps);
    readonly color: IColor;
    componentDidUpdate(prevProps: Readonly<IColorPickerProps>, prevState: Readonly<IColorPickerState>): void;
    render(): JSX.Element;
    private _getDisplayValue;
    private _onSVChanged;
    private _onHChanged;
    /** Callback for when the alpha/transparency slider changes */
    private _onATChanged;
    private _onTextChange;
    private _onBlur;
    /**
     * Update the displayed color and call change handlers if appropriate.
     * @param ev - Event if call was triggered by an event (undefined if triggered by props change)
     * @param newColor - Updated color
     */
    private _updateColor;
}
export {};
