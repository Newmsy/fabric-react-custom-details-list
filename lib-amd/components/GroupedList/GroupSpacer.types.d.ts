import { IStyle, ITheme } from '../../Styling';
import { IStyleFunctionOrObject } from '../../Utilities';
/**
 * {@docCategory GroupedList}
 */
export interface IGroupSpacerProps {
    /**
     * Theme from Higher Order Component
     *
     * @deprecated unused, to be removed in 7.0
     */
    theme?: ITheme;
    /**
     * Style function to be passed in to override the themed or default styles
     *
     * @deprecated unused, to be removed in 7.0
     */
    styles?: IStyleFunctionOrObject<IGroupSpacerStyleProps, IGroupSpacerStyles>;
    /** Count of spacer(s) */
    count: number;
    /** How much to indent */
    indentWidth?: number;
}
/**
 * {@docCategory GroupedList}
 * @deprecated unused, to be removed in 7.0. Use {@link IGroupSpacerProps.indentWidth}
 */
export declare type IGroupSpacerStyleProps = Required<Pick<IGroupSpacerProps, 'theme'>> & {
    width?: number;
};
/**
 * {@docCategory GroupedList}
 * @deprecated unused, to be removed in 7.0.
 */
export interface IGroupSpacerStyles {
    root: IStyle;
}
