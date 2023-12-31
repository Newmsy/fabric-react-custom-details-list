import { __assign } from "tslib";
import { keyframes, getGlobalClassNames, hiddenContentStyle, HighContrastSelector, getEdgeChromiumNoHighContrastAdjustSelector, } from '../../Styling';
import { getRTL, memoizeFunction } from '../../Utilities';
var GlobalClassNames = {
    root: 'ms-Shimmer-container',
    shimmerWrapper: 'ms-Shimmer-shimmerWrapper',
    shimmerGradient: 'ms-Shimmer-shimmerGradient',
    dataWrapper: 'ms-Shimmer-dataWrapper',
};
var BACKGROUND_OFF_SCREEN_POSITION = '100%';
var shimmerAnimation = memoizeFunction(function () {
    return keyframes({
        '0%': {
            transform: "translateX(-" + BACKGROUND_OFF_SCREEN_POSITION + ")",
        },
        '100%': {
            transform: "translateX(" + BACKGROUND_OFF_SCREEN_POSITION + ")",
        },
    });
});
var shimmerAnimationRTL = memoizeFunction(function () {
    return keyframes({
        '100%': {
            transform: "translateX(-" + BACKGROUND_OFF_SCREEN_POSITION + ")",
        },
        '0%': {
            transform: "translateX(" + BACKGROUND_OFF_SCREEN_POSITION + ")",
        },
    });
});
export function getStyles(props) {
    var _a;
    var isDataLoaded = props.isDataLoaded, className = props.className, theme = props.theme, transitionAnimationInterval = props.transitionAnimationInterval, shimmerColor = props.shimmerColor, shimmerWaveColor = props.shimmerWaveColor;
    var semanticColors = theme.semanticColors;
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
    var isRTL = getRTL(theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                position: 'relative',
                height: 'auto',
            },
            className,
        ],
        shimmerWrapper: [
            classNames.shimmerWrapper,
            {
                position: 'relative',
                overflow: 'hidden',
                transform: 'translateZ(0)',
                backgroundColor: shimmerColor || semanticColors.disabledBackground,
                transition: "opacity " + transitionAnimationInterval + "ms",
                selectors: __assign((_a = { '> *': {
                            transform: 'translateZ(0)',
                        } }, _a[HighContrastSelector] = {
                    background: "WindowText\n                        linear-gradient(\n                          to right,\n                          transparent 0%,\n                          Window 50%,\n                          transparent 100%)\n                        0 0 / 90% 100%\n                        no-repeat",
                }, _a), getEdgeChromiumNoHighContrastAdjustSelector()),
            },
            isDataLoaded && {
                opacity: '0',
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
        ],
        shimmerGradient: [
            classNames.shimmerGradient,
            {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: (shimmerColor || semanticColors.disabledBackground) + "\n                      linear-gradient(\n                        to right,\n                        " + (shimmerColor || semanticColors.disabledBackground) + " 0%,\n                        " + (shimmerWaveColor || semanticColors.bodyDivider) + " 50%,\n                        " + (shimmerColor || semanticColors.disabledBackground) + " 100%)\n                      0 0 / 90% 100%\n                      no-repeat",
                transform: "translateX(-" + BACKGROUND_OFF_SCREEN_POSITION + ")",
                animationDuration: '2s',
                animationTimingFunction: 'ease-in-out',
                animationDirection: 'normal',
                animationIterationCount: 'infinite',
                animationName: isRTL ? shimmerAnimationRTL() : shimmerAnimation(),
            },
        ],
        dataWrapper: [
            classNames.dataWrapper,
            {
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                opacity: '0',
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                transition: "opacity " + transitionAnimationInterval + "ms",
            },
            isDataLoaded && {
                opacity: '1',
                position: 'static',
            },
        ],
        screenReaderText: hiddenContentStyle,
    };
}
//# sourceMappingURL=Shimmer.styles.js.map