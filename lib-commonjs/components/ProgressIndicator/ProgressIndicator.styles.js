"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../Styling");
var Utilities_1 = require("../../Utilities");
var GlobalClassNames = {
    root: 'ms-ProgressIndicator',
    itemName: 'ms-ProgressIndicator-itemName',
    itemDescription: 'ms-ProgressIndicator-itemDescription',
    itemProgress: 'ms-ProgressIndicator-itemProgress',
    progressTrack: 'ms-ProgressIndicator-progressTrack',
    progressBar: 'ms-ProgressIndicator-progressBar',
};
var IndeterminateProgress = Utilities_1.memoizeFunction(function () {
    return Styling_1.keyframes({
        '0%': {
            left: '-30%',
        },
        '100%': {
            left: '100%',
        },
    });
});
var IndeterminateProgressRTL = Utilities_1.memoizeFunction(function () {
    return Styling_1.keyframes({
        '100%': {
            right: '-30%',
        },
        '0%': {
            right: '100%',
        },
    });
});
exports.getStyles = function (props) {
    var _a, _b, _c;
    var isRTL = Utilities_1.getRTL(props.theme);
    var className = props.className, indeterminate = props.indeterminate, theme = props.theme, _d = props.barHeight, barHeight = _d === void 0 ? 2 : _d;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    var marginBetweenText = 8;
    var textHeight = 18;
    var progressTrackColor = palette.neutralLight;
    return {
        root: [classNames.root, fonts.medium, className],
        itemName: [
            classNames.itemName,
            Styling_1.noWrap,
            {
                color: semanticColors.bodyText,
                paddingTop: marginBetweenText / 2,
                lineHeight: textHeight + 2,
            },
        ],
        itemDescription: [
            classNames.itemDescription,
            {
                color: semanticColors.bodySubtext,
                fontSize: fonts.small.fontSize,
                lineHeight: textHeight,
            },
        ],
        itemProgress: [
            classNames.itemProgress,
            {
                position: 'relative',
                overflow: 'hidden',
                height: barHeight,
                padding: marginBetweenText + "px 0",
            },
        ],
        progressTrack: [
            classNames.progressTrack,
            {
                position: 'absolute',
                width: '100%',
                height: barHeight,
                backgroundColor: progressTrackColor,
                selectors: (_a = {},
                    _a[Styling_1.HighContrastSelector] = {
                        borderBottom: '1px solid WindowText',
                    },
                    _a),
            },
        ],
        progressBar: [
            {
                backgroundColor: palette.themePrimary,
                height: barHeight,
                position: 'absolute',
                transition: 'width .3s ease',
                width: 0,
                selectors: (_b = {},
                    _b[Styling_1.HighContrastSelector] = {
                        backgroundColor: 'highlight',
                    },
                    _b),
            },
            indeterminate
                ? {
                    position: 'absolute',
                    minWidth: '33%',
                    background: "linear-gradient(to right, " + progressTrackColor + " 0%, " +
                        (palette.themePrimary + " 50%, " + progressTrackColor + " 100%)"),
                    animation: (isRTL ? IndeterminateProgressRTL() : IndeterminateProgress()) + " 3s infinite",
                    selectors: (_c = {},
                        _c[Styling_1.HighContrastSelector] = {
                            background: "highlight",
                        },
                        _c),
                }
                : {
                    transition: 'width .15s linear',
                },
            classNames.progressBar,
        ],
    };
};
//# sourceMappingURL=ProgressIndicator.styles.js.map