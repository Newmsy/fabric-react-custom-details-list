define(["require", "exports", "tslib", "react", "../../../Utilities", "../Shimmer.types", "../ShimmerLine/ShimmerLine", "../ShimmerGap/ShimmerGap", "../ShimmerCircle/ShimmerCircle"], function (require, exports, tslib_1, React, Utilities_1, Shimmer_types_1, ShimmerLine_1, ShimmerGap_1, ShimmerCircle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory Shimmer}
     */
    exports.ShimmerElementsGroupBase = function (props) {
        var styles = props.styles, _a = props.width, width = _a === void 0 ? 'auto' : _a, shimmerElements = props.shimmerElements, _b = props.rowHeight, rowHeight = _b === void 0 ? findMaxElementHeight(shimmerElements || []) : _b, _c = props.flexWrap, flexWrap = _c === void 0 ? false : _c, theme = props.theme, backgroundColor = props.backgroundColor;
        var classNames = getClassNames(styles, {
            theme: theme,
            flexWrap: flexWrap,
        });
        return (React.createElement("div", { style: { width: width }, className: classNames.root }, getRenderedElements(shimmerElements, backgroundColor, rowHeight)));
    };
    function getRenderedElements(shimmerElements, backgroundColor, rowHeight) {
        var renderedElements = shimmerElements ? (shimmerElements.map(function (element, index) {
            var type = element.type, filteredElem = tslib_1.__rest(element, ["type"]);
            var verticalAlign = filteredElem.verticalAlign, height = filteredElem.height;
            var styles = getElementStyles(verticalAlign, type, height, backgroundColor, rowHeight);
            switch (element.type) {
                case Shimmer_types_1.ShimmerElementType.circle:
                    return React.createElement(ShimmerCircle_1.ShimmerCircle, tslib_1.__assign({ key: index }, filteredElem, { styles: styles }));
                case Shimmer_types_1.ShimmerElementType.gap:
                    return React.createElement(ShimmerGap_1.ShimmerGap, tslib_1.__assign({ key: index }, filteredElem, { styles: styles }));
                case Shimmer_types_1.ShimmerElementType.line:
                    return React.createElement(ShimmerLine_1.ShimmerLine, tslib_1.__assign({ key: index }, filteredElem, { styles: styles }));
            }
        })) : (React.createElement(ShimmerLine_1.ShimmerLine, { height: Shimmer_types_1.ShimmerElementsDefaultHeights.line }));
        return renderedElements;
    }
    var getElementStyles = Utilities_1.memoizeFunction(function (verticalAlign, elementType, elementHeight, backgroundColor, rowHeight) {
        var dif = rowHeight && elementHeight ? rowHeight - elementHeight : 0;
        var borderStyle;
        if (!verticalAlign || verticalAlign === 'center') {
            borderStyle = {
                borderBottomWidth: (dif ? Math.floor(dif / 2) : 0) + "px",
                borderTopWidth: (dif ? Math.ceil(dif / 2) : 0) + "px",
            };
        }
        else if (verticalAlign && verticalAlign === 'top') {
            borderStyle = {
                borderBottomWidth: dif + "px",
                borderTopWidth: "0px",
            };
        }
        else if (verticalAlign && verticalAlign === 'bottom') {
            borderStyle = {
                borderBottomWidth: "0px",
                borderTopWidth: dif + "px",
            };
        }
        if (backgroundColor) {
            switch (elementType) {
                case Shimmer_types_1.ShimmerElementType.circle:
                    return {
                        root: tslib_1.__assign(tslib_1.__assign({}, borderStyle), { borderColor: backgroundColor }),
                        svg: { fill: backgroundColor },
                    };
                case Shimmer_types_1.ShimmerElementType.gap:
                    return {
                        root: tslib_1.__assign(tslib_1.__assign({}, borderStyle), { borderColor: backgroundColor, backgroundColor: backgroundColor }),
                    };
                case Shimmer_types_1.ShimmerElementType.line:
                    return {
                        root: tslib_1.__assign(tslib_1.__assign({}, borderStyle), { borderColor: backgroundColor }),
                        topLeftCorner: { fill: backgroundColor },
                        topRightCorner: { fill: backgroundColor },
                        bottomLeftCorner: { fill: backgroundColor },
                        bottomRightCorner: { fill: backgroundColor },
                    };
            }
        }
        return {
            root: borderStyle,
        };
    });
    /**
     * User should not worry to provide which of the elements is the highest so we do the calculation for him.
     * Plus if user forgot to specify the height we assign their defaults.
     */
    function findMaxElementHeight(shimmerElements) {
        var shimmerElementsDefaulted = shimmerElements.map(function (element) {
            switch (element.type) {
                case Shimmer_types_1.ShimmerElementType.circle:
                    if (!element.height) {
                        element.height = Shimmer_types_1.ShimmerElementsDefaultHeights.circle;
                    }
                case Shimmer_types_1.ShimmerElementType.line:
                    if (!element.height) {
                        element.height = Shimmer_types_1.ShimmerElementsDefaultHeights.line;
                    }
                case Shimmer_types_1.ShimmerElementType.gap:
                    if (!element.height) {
                        element.height = Shimmer_types_1.ShimmerElementsDefaultHeights.gap;
                    }
            }
            return element;
        });
        var rowHeight = shimmerElementsDefaulted.reduce(function (acc, next) {
            return next.height ? (next.height > acc ? next.height : acc) : acc;
        }, 0);
        return rowHeight;
    }
});
//# sourceMappingURL=ShimmerElementsGroup.base.js.map