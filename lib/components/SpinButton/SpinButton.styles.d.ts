import { ITheme } from '../../Styling';
import { IButtonStyles } from '../../Button';
import { ISpinButtonStyles } from './SpinButton.types';
export declare const getArrowButtonStyles: (theme: ITheme, isUpArrow: boolean, customSpecificArrowStyles?: Partial<IButtonStyles> | undefined) => IButtonStyles;
export declare const getStyles: (theme: ITheme, customStyles?: Partial<ISpinButtonStyles> | undefined) => ISpinButtonStyles;
