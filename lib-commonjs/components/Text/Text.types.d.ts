import * as React from 'react';
import { IComponentStyles, IHTMLSlot, ISlotProp, IComponent, IStyleableComponentProps, ISlottableProps } from '../../Foundation';
import { IFontStyles } from '../../Styling';
/**
 * {@docCategory Text}
 */
export declare type ITextComponent = IComponent<ITextProps, ITextTokens, ITextStyles>;
/**
 * {@docCategory Text}
 */
export declare type ITextTokenReturnType = ReturnType<Extract<ITextComponent['tokens'], Function>>;
/**
 * {@docCategory Text}
 */
export declare type ITextStylesReturnType = ReturnType<Extract<ITextComponent['styles'], Function>>;
/**
 * {@docCategory Text}
 */
export declare type ITextSlot = ISlotProp<ITextProps, string>;
/**
 * {@docCategory Text}
 */
export interface ITextSlots {
    root?: IHTMLSlot;
}
/**
 * Inputs to the component
 * {@docCategory Text}
 */
export interface ITextProps extends ISlottableProps<ITextSlots>, IStyleableComponentProps<ITextProps, ITextTokens, ITextStyles>, React.HTMLAttributes<HTMLElement> {
    /**
     * Optionally render the component as another component type or primitive.
     */
    as?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Optional font type for Text.
     */
    variant?: keyof IFontStyles;
    /**
     * Whether the text is displayed as a block element.
     *
     * Note that in order for ellipsis on overflow to work properly,
     * `block` and `nowrap` should be set to true.
     */
    block?: boolean;
    /**
     * Whether the text is not wrapped.
     *
     * Note that in order for ellipsis on overflow to work properly,
     * `block` and `nowrap` should be set to true.
     */
    nowrap?: boolean;
}
/**
 * {@docCategory Text}
 */
export interface ITextTokens {
}
/**
 * {@docCategory Text}
 */
export declare type ITextStyles = IComponentStyles<ITextSlots>;
