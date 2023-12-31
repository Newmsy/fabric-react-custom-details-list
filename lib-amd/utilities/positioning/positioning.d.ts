import { DirectionalHint } from '../../common/DirectionalHint';
import { Rectangle as FullRectangle, IRectangle } from '../../Utilities';
import { IPositionDirectionalHintData, IPositionedData, Point, ICalloutPositionedInfo, ICalloutBeakPositionedInfo, IPositionProps, RectangleEdge } from './positioning.types';
export declare class Rectangle extends FullRectangle {
    [key: string]: number | boolean | any;
}
/**
 * Do not call methods from this directly, use either positionCallout or positionElement or make another function that
 * utilizes them.
 * START Private functions and interfaces
 */
export interface IElementPosition {
    elementRectangle: Rectangle;
    targetEdge: RectangleEdge;
    alignmentEdge: RectangleEdge | undefined;
}
export interface IElementPositionInfo extends IElementPosition {
    targetRectangle: Rectangle;
}
declare function _calculateActualBeakWidthInPixels(beakWidth: number): number;
/**
 * Returns the appropriate IPositionData based on the props altered for RTL.
 * If directionalHintForRTL is passed in that is used if the page is RTL.
 * If directionalHint is specified, no directionalHintForRTL is available, and the page is RTL, the hint will be
 * flipped (e.g. bottomLeftEdge would become bottomRightEdge).
 *
 * If there is no directionalHint passed in, bottomAutoEdge is chosen automatically.
 */
declare function _getPositionData(directionalHint?: DirectionalHint, directionalHintForRTL?: DirectionalHint, previousPositions?: IPositionDirectionalHintData): IPositionDirectionalHintData;
declare function _positionElementWithinBounds(elementToPosition: Rectangle, target: Rectangle, bounding: Rectangle, positionData: IPositionDirectionalHintData, gap: number, directionalHintFixed?: boolean, coverTarget?: boolean): IElementPosition;
declare function _finalizeBeakPosition(elementPosition: IElementPosition, positionedBeak: Rectangle, bounds?: Rectangle): ICalloutBeakPositionedInfo;
declare function _positionBeak(beakWidth: number, elementPosition: IElementPositionInfo): Rectangle;
/**
 * If max height is less than zero it returns the bounds height instead.
 */
declare function _getMaxHeightFromTargetRectangle(targetRectangle: Rectangle, targetEdge: DirectionalHint, gapSpace: number, bounds: Rectangle, coverTarget?: boolean): number;
declare function _finalizePositionData(positionedElement: IElementPosition, hostElement: HTMLElement, bounds?: Rectangle, coverTarget?: boolean, doNotFinalizeReturnEdge?: boolean): IPositionedData;
export declare const __positioningTestPackage: {
    _finalizePositionData: typeof _finalizePositionData;
    _finalizeBeakPosition: typeof _finalizeBeakPosition;
    _calculateActualBeakWidthInPixels: typeof _calculateActualBeakWidthInPixels;
    _positionElementWithinBounds: typeof _positionElementWithinBounds;
    _positionBeak: typeof _positionBeak;
    _getPositionData: typeof _getPositionData;
    _getMaxHeightFromTargetRectangle: typeof _getMaxHeightFromTargetRectangle;
};
/**
 * Used to position an element relative to the given positioning props.
 * If positioning has been completed before, previousPositions can be passed to ensure that the positioning element
 * repositions based on its previous targets rather than starting with directionalhint.
 */
export declare function positionElement(props: IPositionProps, hostElement: HTMLElement, elementToPosition: HTMLElement, previousPositions?: IPositionedData): IPositionedData;
export declare function positionCallout(props: IPositionProps, hostElement: HTMLElement, elementToPosition: HTMLElement, previousPositions?: ICalloutPositionedInfo): ICalloutPositionedInfo;
export declare function positionCard(props: IPositionProps, hostElement: HTMLElement, elementToPosition: HTMLElement, previousPositions?: ICalloutPositionedInfo): ICalloutPositionedInfo;
/**
 * Get's the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
export declare function getMaxHeight(target: Element | MouseEvent | Point, targetEdge: DirectionalHint, gapSpace?: number, bounds?: IRectangle, coverTarget?: boolean): number;
/**
 * Returns the opposite edge of the given RectangleEdge.
 */
export declare function getOppositeEdge(edge: RectangleEdge): RectangleEdge;
/**
 * Window with typings for experimental features regarding Dual Screen devices.
 */
interface IWindowWithSegments extends Window {
    getWindowSegments?: () => DOMRect[];
}
export declare function getBoundsFromTargetWindow(target: Element | MouseEvent | Point | null, targetWindow: IWindowWithSegments): IRectangle;
export {};
