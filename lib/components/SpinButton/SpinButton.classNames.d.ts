import { ISpinButtonStyles } from './SpinButton.types';
import { KeyboardSpinDirection } from './SpinButton';
import { Position } from '../../utilities/positioning';
export interface ISpinButtonClassNames {
    root: string;
    labelWrapper: string;
    icon: string;
    label: string;
    spinButtonWrapper: string;
    input: string;
    arrowBox: string;
}
export declare const getClassNames: (styles: ISpinButtonStyles, disabled: boolean, isFocused: boolean, keyboardSpinDirection: KeyboardSpinDirection, labelPosition?: Position, className?: string | undefined) => ISpinButtonClassNames;
