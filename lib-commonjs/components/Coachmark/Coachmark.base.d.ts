import * as React from 'react';
import { RectangleEdge } from '../../utilities/positioning';
import { ICoachmark, ICoachmarkProps } from './Coachmark.types';
export declare const COACHMARK_ATTRIBUTE_NAME = "data-coachmarkid";
/**
 * An interface for the cached dimensions of entity inner host.
 */
export interface IEntityRect {
    width: number;
    height: number;
}
export interface ICoachmarkState {
    /**
     * Is the Coachmark currently collapsed into
     * a tear drop shape
     */
    isCollapsed: boolean;
    /**
     * Enables/Disables the beacon that radiates
     * from the center of the coachmark.
     */
    isBeaconAnimating: boolean;
    /**
     * Is the teaching bubble currently retreiving the
     * original dimensions of the hosted entity.
     */
    isMeasuring: boolean;
    /**
     * Is the Coachmark done measuring the hosted entity
     */
    isMeasured: boolean;
    /**
     * Cached width and height of _entityInnerHostElement
     */
    entityInnerHostRect: IEntityRect;
    /**
     * Is the mouse in proximity of the default target element
     */
    isMouseInProximity: boolean;
    /**
     * The left position of the beak
     */
    beakLeft?: string;
    /**
     * The right position of the beak
     */
    beakTop?: string;
    /**
     * The right position of the beak
     */
    beakRight?: string;
    /**
     * The bottom position of the beak
     */
    beakBottom?: string;
    /**
     * Alignment edge of callout in relation to target
     */
    targetAlignment?: RectangleEdge;
    /**
     * Position of Coachmark/TeachingBubble in relation to target
     */
    targetPosition?: RectangleEdge;
    /**
     * Transform origin of teaching bubble callout
     */
    transformOrigin?: string;
    /**
     * ARIA alert text to read aloud with Narrator once the Coachmark is mounted
     */
    alertText?: string;
}
export declare class CoachmarkBase extends React.Component<ICoachmarkProps, ICoachmarkState> implements ICoachmark {
    static defaultProps: Partial<ICoachmarkProps>;
    private _async;
    private _events;
    /**
     * The cached HTMLElement reference to the Entity Inner Host
     * element.
     */
    private _entityHost;
    private _entityInnerHostElement;
    private _translateAnimationContainer;
    private _ariaAlertContainer;
    private _childrenContainer;
    private _positioningContainer;
    /**
     * The target element the mouse would be in
     * proximity to
     */
    private _targetElementRect;
    constructor(props: ICoachmarkProps);
    private readonly _beakDirection;
    render(): JSX.Element;
    UNSAFE_componentWillReceiveProps(newProps: ICoachmarkProps): void;
    shouldComponentUpdate(newProps: ICoachmarkProps, newState: ICoachmarkState): boolean;
    componentDidUpdate(prevProps: ICoachmarkProps, prevState: ICoachmarkState): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    dismiss: (ev?: Event | React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement> | undefined) => void;
    private _addListeners;
    private _dismissOnLostFocus;
    private _onKeyDown;
    private _onFocusHandler;
    private _onPositioned;
    private _getBounds;
    private _setBeakPosition;
    private _openCoachmark;
    private _addProximityHandler;
    private _setTargetElementRect;
    private _isInsideElement;
}
