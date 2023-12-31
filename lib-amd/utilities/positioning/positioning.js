define(["require", "exports", "tslib", "../../common/DirectionalHint", "../../Utilities", "./positioning.types"], function (require, exports, tslib_1, DirectionalHint_1, Utilities_1, positioning_types_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Rectangle = /** @class */ (function (_super) {
        tslib_1.__extends(Rectangle, _super);
        function Rectangle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Rectangle;
    }(Utilities_1.Rectangle));
    exports.Rectangle = Rectangle;
    function _createPositionData(targetEdge, alignmentEdge, isAuto) {
        return {
            targetEdge: targetEdge,
            alignmentEdge: alignmentEdge,
            isAuto: isAuto,
        };
    }
    // Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
    var DirectionalDictionary = (_a = {},
        _a[DirectionalHint_1.DirectionalHint.topLeftEdge] = _createPositionData(positioning_types_1.RectangleEdge.top, positioning_types_1.RectangleEdge.left),
        _a[DirectionalHint_1.DirectionalHint.topCenter] = _createPositionData(positioning_types_1.RectangleEdge.top),
        _a[DirectionalHint_1.DirectionalHint.topRightEdge] = _createPositionData(positioning_types_1.RectangleEdge.top, positioning_types_1.RectangleEdge.right),
        _a[DirectionalHint_1.DirectionalHint.topAutoEdge] = _createPositionData(positioning_types_1.RectangleEdge.top, undefined, true),
        _a[DirectionalHint_1.DirectionalHint.bottomLeftEdge] = _createPositionData(positioning_types_1.RectangleEdge.bottom, positioning_types_1.RectangleEdge.left),
        _a[DirectionalHint_1.DirectionalHint.bottomCenter] = _createPositionData(positioning_types_1.RectangleEdge.bottom),
        _a[DirectionalHint_1.DirectionalHint.bottomRightEdge] = _createPositionData(positioning_types_1.RectangleEdge.bottom, positioning_types_1.RectangleEdge.right),
        _a[DirectionalHint_1.DirectionalHint.bottomAutoEdge] = _createPositionData(positioning_types_1.RectangleEdge.bottom, undefined, true),
        _a[DirectionalHint_1.DirectionalHint.leftTopEdge] = _createPositionData(positioning_types_1.RectangleEdge.left, positioning_types_1.RectangleEdge.top),
        _a[DirectionalHint_1.DirectionalHint.leftCenter] = _createPositionData(positioning_types_1.RectangleEdge.left),
        _a[DirectionalHint_1.DirectionalHint.leftBottomEdge] = _createPositionData(positioning_types_1.RectangleEdge.left, positioning_types_1.RectangleEdge.bottom),
        _a[DirectionalHint_1.DirectionalHint.rightTopEdge] = _createPositionData(positioning_types_1.RectangleEdge.right, positioning_types_1.RectangleEdge.top),
        _a[DirectionalHint_1.DirectionalHint.rightCenter] = _createPositionData(positioning_types_1.RectangleEdge.right),
        _a[DirectionalHint_1.DirectionalHint.rightBottomEdge] = _createPositionData(positioning_types_1.RectangleEdge.right, positioning_types_1.RectangleEdge.bottom),
        _a);
    function _isRectangleWithinBounds(rect, boundingRect) {
        if (rect.top < boundingRect.top) {
            return false;
        }
        if (rect.bottom > boundingRect.bottom) {
            return false;
        }
        if (rect.left < boundingRect.left) {
            return false;
        }
        if (rect.right > boundingRect.right) {
            return false;
        }
        return true;
    }
    /**
     * Gets all of the edges of a rectangle that are outside of the given bounds.
     * If there are no out of bounds edges it returns an empty array.
     */
    function _getOutOfBoundsEdges(rect, boundingRect) {
        var outOfBounds = new Array();
        if (rect.top < boundingRect.top) {
            outOfBounds.push(positioning_types_1.RectangleEdge.top);
        }
        if (rect.bottom > boundingRect.bottom) {
            outOfBounds.push(positioning_types_1.RectangleEdge.bottom);
        }
        if (rect.left < boundingRect.left) {
            outOfBounds.push(positioning_types_1.RectangleEdge.left);
        }
        if (rect.right > boundingRect.right) {
            outOfBounds.push(positioning_types_1.RectangleEdge.right);
        }
        return outOfBounds;
    }
    function _getEdgeValue(rect, edge) {
        return rect[positioning_types_1.RectangleEdge[edge]];
    }
    function _setEdgeValue(rect, edge, value) {
        rect[positioning_types_1.RectangleEdge[edge]] = value;
        return rect;
    }
    /**
     * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
     * the itself already contains the other coordinate.
     * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
     */
    function _getCenterValue(rect, edge) {
        var edges = _getFlankingEdges(edge);
        return (_getEdgeValue(rect, edges.positiveEdge) + _getEdgeValue(rect, edges.negativeEdge)) / 2;
    }
    /**
     * Flips the value depending on the edge.
     * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
     * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
     * This is to account for the fact that the coordinates are effectively reveserved in certain cases for the
     * "negative" edges.
     *
     * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2:
     * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
     * If top edge 1 is less than edge 2 then it is out of bounds.
     */
    function _getRelativeEdgeValue(edge, value) {
        if (edge > 0) {
            return value;
        }
        else {
            return value * -1;
        }
    }
    function _getRelativeRectEdgeValue(edge, rect) {
        return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
    }
    function _getRelativeEdgeDifference(rect, hostRect, edge) {
        var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);
        return _getRelativeEdgeValue(edge, edgeDifference);
    }
    /**
     * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
     * For example, if it's a bottom edge it will only change y coordinates.
     */
    function _moveEdge(rect, edge, newValue) {
        var difference = _getEdgeValue(rect, edge) - newValue;
        rect = _setEdgeValue(rect, edge, newValue);
        rect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
        return rect;
    }
    /**
     * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
     */
    function _alignEdges(rect, target, edge, gap) {
        if (gap === void 0) { gap = 0; }
        return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
    }
    /**
     * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
     * For instance if targetEdge is bottom, then the rects top will be moved to match it.
     */
    function _alignOppositeEdges(rect, target, targetEdge, gap) {
        if (gap === void 0) { gap = 0; }
        var oppositeEdge = targetEdge * -1;
        var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);
        return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
    }
    /**
     * Tests to see if the given edge is within the bounds of the given rectangle.
     */
    function _isEdgeInBounds(rect, bounds, edge) {
        var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);
        return adjustedRectValue > _getRelativeRectEdgeValue(edge, bounds);
    }
    /**
     * Attempts to move the rectangle through various sides of the target to find a place to fit.
     * If no fit is found, the original position should be returned.
     */
    function _flipToFit(rect, target, bounding, positionData, gap) {
        if (gap === void 0) { gap = 0; }
        var directions = [
            positioning_types_1.RectangleEdge.left,
            positioning_types_1.RectangleEdge.right,
            positioning_types_1.RectangleEdge.bottom,
            positioning_types_1.RectangleEdge.top,
        ];
        // In RTL page, RectangleEdge.right has a higher priority than RectangleEdge.left, so the order should be updated.
        if (Utilities_1.getRTL()) {
            directions[0] *= -1;
            directions[1] *= -1;
        }
        var currentEstimate = rect;
        var currentEdge = positionData.targetEdge;
        var currentAlignment = positionData.alignmentEdge;
        // Keep switching sides until one is found with enough space.
        // If all sides don't fit then return the unmodified element.
        for (var i = 0; i < 4; i++) {
            if (!_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
                directions.splice(directions.indexOf(currentEdge), 1);
                if (directions.length > 0) {
                    if (directions.indexOf(currentEdge * -1) > -1) {
                        currentEdge = currentEdge * -1;
                    }
                    else {
                        currentAlignment = currentEdge;
                        currentEdge = directions.slice(-1)[0];
                    }
                    currentEstimate = _estimatePosition(rect, target, { targetEdge: currentEdge, alignmentEdge: currentAlignment }, gap);
                }
            }
            else {
                return {
                    elementRectangle: currentEstimate,
                    targetEdge: currentEdge,
                    alignmentEdge: currentAlignment,
                };
            }
        }
        return {
            elementRectangle: rect,
            targetEdge: positionData.targetEdge,
            alignmentEdge: currentAlignment,
        };
    }
    /**
     * Flips only the alignment edge of an element rectangle. This is used instead of nudging the alignment edges
     * into position, when alignTargetEdge is specified.
     */
    function _flipAlignmentEdge(elementEstimate, target, gap, coverTarget) {
        var alignmentEdge = elementEstimate.alignmentEdge, targetEdge = elementEstimate.targetEdge, elementRectangle = elementEstimate.elementRectangle;
        var oppositeEdge = alignmentEdge * -1;
        var newEstimate = _estimatePosition(elementRectangle, target, { targetEdge: targetEdge, alignmentEdge: oppositeEdge }, gap, coverTarget);
        return {
            elementRectangle: newEstimate,
            targetEdge: targetEdge,
            alignmentEdge: oppositeEdge,
        };
    }
    /**
     * Adjusts a element rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
     * then the element will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
     */
    function _adjustFitWithinBounds(element, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
        if (gap === void 0) { gap = 0; }
        var alignmentEdge = positionData.alignmentEdge, alignTargetEdge = positionData.alignTargetEdge;
        var elementEstimate = {
            elementRectangle: element,
            targetEdge: positionData.targetEdge,
            alignmentEdge: alignmentEdge,
        };
        if (!directionalHintFixed && !coverTarget) {
            elementEstimate = _flipToFit(element, target, bounding, positionData, gap);
        }
        var outOfBounds = _getOutOfBoundsEdges(element, bounding);
        if (alignTargetEdge) {
            // The edge opposite to the alignment edge might be out of bounds.
            // Flip alignment to see if we can get it within bounds.
            if (elementEstimate.alignmentEdge && outOfBounds.indexOf(elementEstimate.alignmentEdge * -1) > -1) {
                var flippedElementEstimate = _flipAlignmentEdge(elementEstimate, target, gap, coverTarget);
                if (_isRectangleWithinBounds(flippedElementEstimate.elementRectangle, bounding)) {
                    return flippedElementEstimate;
                }
                else {
                    // If the flipped elements edges are still out of bounds, try nudging it.
                    elementEstimate = _alignOutOfBoundsEdges(_getOutOfBoundsEdges(flippedElementEstimate.elementRectangle, bounding), elementEstimate, bounding);
                }
            }
        }
        else {
            elementEstimate = _alignOutOfBoundsEdges(outOfBounds, elementEstimate, bounding);
        }
        return elementEstimate;
    }
    /**
     * Iterates through a list of out of bounds edges and tries to nudge and align them.
     * @param outOfBoundsEdges - Array of edges that are out of bounds
     * @param elementEstimate - The current element positioning estimate
     * @param bounding - The current bounds
     */
    function _alignOutOfBoundsEdges(outOfBoundsEdges, elementEstimate, bounding) {
        for (var _i = 0, outOfBoundsEdges_1 = outOfBoundsEdges; _i < outOfBoundsEdges_1.length; _i++) {
            var direction = outOfBoundsEdges_1[_i];
            elementEstimate.elementRectangle = _alignEdges(elementEstimate.elementRectangle, bounding, direction);
        }
        return elementEstimate;
    }
    /**
     * Moves the middle point on an edge to the point given.
     * Only moves in one direction. For instance if a bottom edge is passed in, then
     * the bottom edge will be moved in the x axis to match the point.
     */
    function _centerEdgeToPoint(rect, edge, point) {
        var positiveEdge = _getFlankingEdges(edge).positiveEdge;
        var elementMiddle = _getCenterValue(rect, edge);
        var distanceToMiddle = elementMiddle - _getEdgeValue(rect, positiveEdge);
        return _moveEdge(rect, positiveEdge, point - distanceToMiddle);
    }
    /**
     * Moves the element rectangle to be appropriately positioned relative to a given target.
     * Does not flip or adjust the element.
     */
    function _estimatePosition(elementToPosition, target, positionData, gap, coverTarget) {
        if (gap === void 0) { gap = 0; }
        var estimatedElementPosition;
        var alignmentEdge = positionData.alignmentEdge, targetEdge = positionData.targetEdge;
        var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
        estimatedElementPosition = coverTarget
            ? _alignEdges(elementToPosition, target, targetEdge, gap)
            : _alignOppositeEdges(elementToPosition, target, targetEdge, gap);
        // if no alignment edge is provided it's supposed to be centered.
        if (!alignmentEdge) {
            var targetMiddlePoint = _getCenterValue(target, targetEdge);
            estimatedElementPosition = _centerEdgeToPoint(estimatedElementPosition, elementEdge, targetMiddlePoint);
        }
        else {
            estimatedElementPosition = _alignEdges(estimatedElementPosition, target, alignmentEdge);
        }
        return estimatedElementPosition;
    }
    /**
     * Returns the non-opposite edges of the target edge.
     * For instance if bottom is passed in then left and right will be returned.
     */
    function _getFlankingEdges(edge) {
        if (edge === positioning_types_1.RectangleEdge.top || edge === positioning_types_1.RectangleEdge.bottom) {
            return {
                positiveEdge: positioning_types_1.RectangleEdge.left,
                negativeEdge: positioning_types_1.RectangleEdge.right,
            };
        }
        else {
            return {
                positiveEdge: positioning_types_1.RectangleEdge.top,
                negativeEdge: positioning_types_1.RectangleEdge.bottom,
            };
        }
    }
    /**
     * Retrieve the final value for the return edge of elementRectangle. If the elementRectangle is closer to one side
     * of the bounds versus the other, the return edge is flipped to grow inward.
     */
    function _finalizeReturnEdge(elementRectangle, returnEdge, bounds) {
        if (bounds &&
            Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge)) >
                Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge * -1))) {
            return returnEdge * -1;
        }
        return returnEdge;
    }
    /**
     * Finalizes the element positon based on the hostElement. Only returns the
     * rectangle values to position such that they are anchored to the target.
     * This helps prevent resizing from looking very strange.
     * For instance, if the target edge is top and aligned with the left side then
     * the bottom and left values are returned so as the callou shrinks it shrinks towards that corner.
     */
    function _finalizeElementPosition(elementRectangle, hostElement, targetEdge, bounds, alignmentEdge, coverTarget, doNotFinalizeReturnEdge) {
        var returnValue = {};
        var hostRect = _getRectangleFromElement(hostElement);
        var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
        var elementEdgeString = positioning_types_1.RectangleEdge[elementEdge];
        var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
        if (!doNotFinalizeReturnEdge) {
            returnEdge = _finalizeReturnEdge(elementRectangle, returnEdge, bounds);
        }
        returnValue[elementEdgeString] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge);
        returnValue[positioning_types_1.RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge);
        return returnValue;
    }
    // Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
    // We still want to position the beak based on it's midpoint which does not change. It will
    // be at (beakwidth / 2, beakwidth / 2)
    function _calculateActualBeakWidthInPixels(beakWidth) {
        return Math.sqrt(beakWidth * beakWidth * 2);
    }
    /**
     * Returns the appropriate IPositionData based on the props altered for RTL.
     * If directionalHintForRTL is passed in that is used if the page is RTL.
     * If directionalHint is specified, no directionalHintForRTL is available, and the page is RTL, the hint will be
     * flipped (e.g. bottomLeftEdge would become bottomRightEdge).
     *
     * If there is no directionalHint passed in, bottomAutoEdge is chosen automatically.
     */
    function _getPositionData(directionalHint, directionalHintForRTL, previousPositions) {
        if (directionalHint === void 0) { directionalHint = DirectionalHint_1.DirectionalHint.bottomAutoEdge; }
        if (previousPositions) {
            return {
                alignmentEdge: previousPositions.alignmentEdge,
                isAuto: previousPositions.isAuto,
                targetEdge: previousPositions.targetEdge,
            };
        }
        var positionInformation = tslib_1.__assign({}, DirectionalDictionary[directionalHint]);
        if (Utilities_1.getRTL()) {
            // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
            if (positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0) {
                positionInformation.alignmentEdge = positionInformation.alignmentEdge * -1;
            }
            return directionalHintForRTL !== undefined ? DirectionalDictionary[directionalHintForRTL] : positionInformation;
        }
        return positionInformation;
    }
    /**
     * Get's the alignment data for the given information. This only really matters if the positioning is Auto.
     * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
     * the center of the page.
     */
    function _getAlignmentData(positionData, target, boundingRect, coverTarget, alignTargetEdge) {
        if (positionData.isAuto) {
            positionData.alignmentEdge = getClosestEdge(positionData.targetEdge, target, boundingRect);
        }
        positionData.alignTargetEdge = alignTargetEdge;
        return positionData;
    }
    function getClosestEdge(targetEdge, target, boundingRect) {
        var targetCenter = _getCenterValue(target, targetEdge);
        var boundingCenter = _getCenterValue(boundingRect, targetEdge);
        var _a = _getFlankingEdges(targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
        if (targetCenter <= boundingCenter) {
            return positiveEdge;
        }
        else {
            return negativeEdge;
        }
    }
    function _positionElementWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
        var estimatedElementPosition = _estimatePosition(elementToPosition, target, positionData, gap, coverTarget);
        if (_isRectangleWithinBounds(estimatedElementPosition, bounding)) {
            return {
                elementRectangle: estimatedElementPosition,
                targetEdge: positionData.targetEdge,
                alignmentEdge: positionData.alignmentEdge,
            };
        }
        else {
            return _adjustFitWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget);
        }
    }
    function _finalizeBeakPosition(elementPosition, positionedBeak, bounds) {
        var targetEdge = elementPosition.targetEdge * -1;
        // The "host" element that we will use to help position the beak.
        var actualElement = new Rectangle(0, elementPosition.elementRectangle.width, 0, elementPosition.elementRectangle.height);
        var returnValue = {};
        var returnEdge = _finalizeReturnEdge(elementPosition.elementRectangle, elementPosition.alignmentEdge ? elementPosition.alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge, bounds);
        returnValue[positioning_types_1.RectangleEdge[targetEdge]] = _getEdgeValue(positionedBeak, targetEdge);
        returnValue[positioning_types_1.RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(positionedBeak, actualElement, returnEdge);
        return {
            elementPosition: tslib_1.__assign({}, returnValue),
            closestEdge: getClosestEdge(elementPosition.targetEdge, positionedBeak, actualElement),
            targetEdge: targetEdge,
        };
    }
    function _positionBeak(beakWidth, elementPosition) {
        var target = elementPosition.targetRectangle;
        /**
         * Note about beak positioning: The actual beak width only matters for getting the gap between the callout and
         * target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8,
         * then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels
         * away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.
         */
        var _a = _getFlankingEdges(elementPosition.targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
        var beakTargetPoint = _getCenterValue(target, elementPosition.targetEdge);
        var elementBounds = new Rectangle(beakWidth / 2, elementPosition.elementRectangle.width - beakWidth / 2, beakWidth / 2, elementPosition.elementRectangle.height - beakWidth / 2);
        var beakPosition = new Rectangle(0, beakWidth, 0, beakWidth);
        beakPosition = _moveEdge(beakPosition, elementPosition.targetEdge * -1, -beakWidth / 2);
        beakPosition = _centerEdgeToPoint(beakPosition, elementPosition.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(positiveEdge, elementPosition.elementRectangle));
        if (!_isEdgeInBounds(beakPosition, elementBounds, positiveEdge)) {
            beakPosition = _alignEdges(beakPosition, elementBounds, positiveEdge);
        }
        else if (!_isEdgeInBounds(beakPosition, elementBounds, negativeEdge)) {
            beakPosition = _alignEdges(beakPosition, elementBounds, negativeEdge);
        }
        return beakPosition;
    }
    function _getRectangleFromElement(element) {
        var clientRect = element.getBoundingClientRect();
        return new Rectangle(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
    }
    function _getRectangleFromIRect(rect) {
        return new Rectangle(rect.left, rect.right, rect.top, rect.bottom);
    }
    function _getTargetRect(bounds, target) {
        var targetRectangle;
        if (target) {
            if (!!target.preventDefault) {
                var ev = target;
                targetRectangle = new Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
            }
            else if (!!target.getBoundingClientRect) {
                targetRectangle = _getRectangleFromElement(target);
                // HTMLImgElements can have x and y values. The check for it being a point must go last.
            }
            else {
                var point = target;
                // tslint:disable-next-line:deprecation
                var left = point.left || point.x;
                // tslint:disable-next-line:deprecation
                var top_1 = point.top || point.y;
                targetRectangle = new Rectangle(left, left, top_1, top_1);
            }
            if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
                var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
                for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
                    var direction = outOfBounds_1[_i];
                    targetRectangle[positioning_types_1.RectangleEdge[direction]] = bounds[positioning_types_1.RectangleEdge[direction]];
                }
            }
        }
        else {
            targetRectangle = new Rectangle(0, 0, 0, 0);
        }
        return targetRectangle;
    }
    /**
     * If max height is less than zero it returns the bounds height instead.
     */
    function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds, coverTarget) {
        var maxHeight = 0;
        var directionalHint = DirectionalDictionary[targetEdge];
        // If cover target is set, then the max height should be calculated using the opposite of the target edge since
        // that's the direction that the callout will expand in.
        // For instance, if the directionalhint is bottomLeftEdge then the callout will position so it's bottom edge
        // is aligned with the bottom of the target and expand up towards the top of the screen and the calculated max height
        // is (bottom of target) - (top of screen) - gapSpace.
        var target = coverTarget ? directionalHint.targetEdge * -1 : directionalHint.targetEdge;
        if (target === positioning_types_1.RectangleEdge.top) {
            maxHeight = _getEdgeValue(targetRectangle, directionalHint.targetEdge) - bounds.top - gapSpace;
        }
        else if (target === positioning_types_1.RectangleEdge.bottom) {
            maxHeight = bounds.bottom - _getEdgeValue(targetRectangle, directionalHint.targetEdge) - gapSpace;
        }
        else {
            maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
        }
        return maxHeight > 0 ? maxHeight : bounds.height;
    }
    function _positionElementRelative(props, elementToPosition, boundingRect, previousPositions) {
        var gap = props.gapSpace ? props.gapSpace : 0;
        var targetRect = _getTargetRect(boundingRect, props.target);
        var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL, previousPositions), targetRect, boundingRect, props.coverTarget, props.alignTargetEdge);
        var positionedElement = _positionElementWithinBounds(_getRectangleFromElement(elementToPosition), targetRect, boundingRect, positionData, gap, props.directionalHintFixed, props.coverTarget);
        return tslib_1.__assign(tslib_1.__assign({}, positionedElement), { targetRectangle: targetRect });
    }
    function _finalizePositionData(positionedElement, hostElement, bounds, coverTarget, doNotFinalizeReturnEdge) {
        var finalizedElement = _finalizeElementPosition(positionedElement.elementRectangle, hostElement, positionedElement.targetEdge, bounds, positionedElement.alignmentEdge, coverTarget, doNotFinalizeReturnEdge);
        return {
            elementPosition: finalizedElement,
            targetEdge: positionedElement.targetEdge,
            alignmentEdge: positionedElement.alignmentEdge,
        };
    }
    function _positionElement(props, hostElement, elementToPosition, previousPositions) {
        var boundingRect = props.bounds
            ? _getRectangleFromIRect(props.bounds)
            : new Rectangle(0, window.innerWidth - Utilities_1.getScrollbarWidth(), 0, window.innerHeight);
        var positionedElement = _positionElementRelative(props, elementToPosition, boundingRect, previousPositions);
        return _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget);
    }
    function _positionCallout(props, hostElement, callout, previousPositions, doNotFinalizeReturnEdge) {
        var beakWidth = props.isBeakVisible ? props.beakWidth || 0 : 0;
        var gap = _calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
        var positionProps = props;
        positionProps.gapSpace = gap;
        var boundingRect = props.bounds
            ? _getRectangleFromIRect(props.bounds)
            : new Rectangle(0, window.innerWidth - Utilities_1.getScrollbarWidth(), 0, window.innerHeight);
        var positionedElement = _positionElementRelative(positionProps, callout, boundingRect, previousPositions);
        var beakPositioned = _positionBeak(beakWidth, positionedElement);
        var finalizedBeakPosition = _finalizeBeakPosition(positionedElement, beakPositioned, boundingRect);
        return tslib_1.__assign(tslib_1.__assign({}, _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget, doNotFinalizeReturnEdge)), { beakPosition: finalizedBeakPosition });
    }
    function _positionCard(props, hostElement, callout, previousPositions) {
        return _positionCallout(props, hostElement, callout, previousPositions, true);
    }
    // END PRIVATE FUNCTIONS
    /* tslint:disable:variable-name */
    exports.__positioningTestPackage = {
        _finalizePositionData: _finalizePositionData,
        _finalizeBeakPosition: _finalizeBeakPosition,
        _calculateActualBeakWidthInPixels: _calculateActualBeakWidthInPixels,
        _positionElementWithinBounds: _positionElementWithinBounds,
        _positionBeak: _positionBeak,
        _getPositionData: _getPositionData,
        _getMaxHeightFromTargetRectangle: _getMaxHeightFromTargetRectangle,
    };
    /* tslint:enable:variable-name */
    /**
     * Used to position an element relative to the given positioning props.
     * If positioning has been completed before, previousPositions can be passed to ensure that the positioning element
     * repositions based on its previous targets rather than starting with directionalhint.
     */
    function positionElement(props, hostElement, elementToPosition, previousPositions) {
        return _positionElement(props, hostElement, elementToPosition, previousPositions);
    }
    exports.positionElement = positionElement;
    function positionCallout(props, hostElement, elementToPosition, previousPositions) {
        return _positionCallout(props, hostElement, elementToPosition, previousPositions);
    }
    exports.positionCallout = positionCallout;
    function positionCard(props, hostElement, elementToPosition, previousPositions) {
        return _positionCard(props, hostElement, elementToPosition, previousPositions);
    }
    exports.positionCard = positionCard;
    /**
     * Get's the maximum height that a rectangle can have in order to fit below or above a target.
     * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
     * of the target given.
     * If no bounds are provided then the window is treated as the bounds.
     */
    function getMaxHeight(target, targetEdge, gapSpace, bounds, coverTarget) {
        if (gapSpace === void 0) { gapSpace = 0; }
        var mouseTarget = target;
        var elementTarget = target;
        var pointTarget = target;
        var targetRect;
        var boundingRectangle = bounds
            ? _getRectangleFromIRect(bounds)
            : new Rectangle(0, window.innerWidth - Utilities_1.getScrollbarWidth(), 0, window.innerHeight);
        // tslint:disable-next-line:deprecation
        var left = pointTarget.left || pointTarget.x;
        // tslint:disable-next-line:deprecation
        var top = pointTarget.top || pointTarget.y;
        if (!!mouseTarget.stopPropagation) {
            targetRect = new Rectangle(mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
        }
        else if (left !== undefined && top !== undefined) {
            targetRect = new Rectangle(left, left, top, top);
        }
        else {
            targetRect = _getRectangleFromElement(elementTarget);
        }
        return _getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle, coverTarget);
    }
    exports.getMaxHeight = getMaxHeight;
    /**
     * Returns the opposite edge of the given RectangleEdge.
     */
    function getOppositeEdge(edge) {
        return edge * -1;
    }
    exports.getOppositeEdge = getOppositeEdge;
    function _getBoundsFromTargetWindow(target, targetWindow) {
        var segments = undefined;
        if (targetWindow.getWindowSegments) {
            segments = targetWindow.getWindowSegments();
        }
        // Identify if we're dealing with single screen scenarios.
        if (segments === undefined || segments.length <= 1) {
            return {
                top: 0,
                left: 0,
                right: targetWindow.innerWidth,
                bottom: targetWindow.innerHeight,
                width: targetWindow.innerWidth,
                height: targetWindow.innerHeight,
            };
        }
        // Logic for determining dual screen scenarios.
        var x = 0;
        var y = 0;
        // If the target is an Element get coordinates for its center.
        if (target !== null && !!target.getBoundingClientRect) {
            var clientRect = target.getBoundingClientRect();
            x = (clientRect.left + clientRect.right) / 2;
            y = (clientRect.top + clientRect.bottom) / 2;
        }
        // If the target is not null get x-axis and y-axis coordinates directly.
        else if (target !== null) {
            // tslint:disable-next-line:deprecation
            x = target.left || target.x;
            // tslint:disable-next-line:deprecation
            y = target.top || target.y;
        }
        var bounds = { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
        // Define which window segment are the coordinates in and calculate bounds based on that.
        for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
            var segment = segments_1[_i];
            if (x && segment.left <= x && segment.right >= x && y && segment.top <= y && segment.bottom >= y) {
                bounds = {
                    top: segment.top,
                    left: segment.left,
                    right: segment.right,
                    bottom: segment.bottom,
                    width: segment.width,
                    height: segment.height,
                };
            }
        }
        return bounds;
    }
    function getBoundsFromTargetWindow(target, targetWindow) {
        return _getBoundsFromTargetWindow(target, targetWindow);
    }
    exports.getBoundsFromTargetWindow = getBoundsFromTargetWindow;
});
//# sourceMappingURL=positioning.js.map