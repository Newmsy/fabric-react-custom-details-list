import { HighContrastSelector, focusClear, getGlobalClassNames } from '../../Styling';
function getBeakStyle(beakWidth) {
    return {
        height: beakWidth,
        width: beakWidth,
    };
}
var GlobalClassNames = {
    container: 'ms-Callout-container',
    root: 'ms-Callout',
    beak: 'ms-Callout-beak',
    beakCurtain: 'ms-Callout-beakCurtain',
    calloutMain: 'ms-Callout-main',
};
export var getStyles = function (props) {
    var _a;
    var theme = props.theme, className = props.className, overflowYHidden = props.overflowYHidden, calloutWidth = props.calloutWidth, beakWidth = props.beakWidth, backgroundColor = props.backgroundColor, calloutMaxWidth = props.calloutMaxWidth;
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
    var semanticColors = theme.semanticColors, effects = theme.effects;
    return {
        container: [
            classNames.container,
            {
                position: 'relative',
            },
        ],
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                position: 'absolute',
                boxSizing: 'border-box',
                borderRadius: effects.roundedCorner2,
                boxShadow: effects.elevation16,
                selectors: (_a = {},
                    _a[HighContrastSelector] = {
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'WindowText',
                    },
                    _a),
            },
            focusClear(),
            className,
            !!calloutWidth && { width: calloutWidth },
            !!calloutMaxWidth && { maxWidth: calloutMaxWidth },
        ],
        beak: [
            classNames.beak,
            {
                position: 'absolute',
                backgroundColor: semanticColors.menuBackground,
                boxShadow: 'inherit',
                border: 'inherit',
                boxSizing: 'border-box',
                transform: 'rotate(45deg)',
            },
            getBeakStyle(beakWidth),
            backgroundColor && {
                backgroundColor: backgroundColor,
            },
        ],
        beakCurtain: [
            classNames.beakCurtain,
            {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: semanticColors.menuBackground,
                borderRadius: effects.roundedCorner2,
            },
        ],
        calloutMain: [
            classNames.calloutMain,
            {
                backgroundColor: semanticColors.menuBackground,
                overflowX: 'hidden',
                overflowY: 'auto',
                position: 'relative',
                borderRadius: effects.roundedCorner2,
            },
            overflowYHidden && {
                overflowY: 'hidden',
            },
            backgroundColor && {
                backgroundColor: backgroundColor,
            },
        ],
    };
};
//# sourceMappingURL=CalloutContent.styles.js.map