"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spinner_types_1 = require("./Spinner.types");
var Styling_1 = require("../../Styling");
var Utilities_1 = require("../../Utilities");
var GlobalClassNames = {
    root: 'ms-Spinner',
    circle: 'ms-Spinner-circle',
    label: 'ms-Spinner-label',
};
var spinAnimation = Utilities_1.memoizeFunction(function () {
    return Styling_1.keyframes({
        '0%': {
            transform: 'rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(360deg)',
        },
    });
});
exports.getStyles = function (props) {
    var _a;
    var theme = props.theme, size = props.size, className = props.className, labelPosition = props.labelPosition;
    var palette = theme.palette;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            },
            labelPosition === 'top' && {
                flexDirection: 'column-reverse',
            },
            labelPosition === 'right' && {
                flexDirection: 'row',
            },
            labelPosition === 'left' && {
                flexDirection: 'row-reverse',
            },
            className,
        ],
        circle: [
            classNames.circle,
            {
                boxSizing: 'border-box',
                borderRadius: '50%',
                border: '1.5px solid ' + palette.themeLight,
                borderTopColor: palette.themePrimary,
                animationName: spinAnimation(),
                animationDuration: '1.3s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'cubic-bezier(.53,.21,.29,.67)',
                selectors: (_a = {},
                    _a[Styling_1.HighContrastSelector] = {
                        borderTopColor: 'Highlight',
                    },
                    _a),
            },
            size === Spinner_types_1.SpinnerSize.xSmall && [
                'ms-Spinner--xSmall',
                {
                    width: 12,
                    height: 12,
                },
            ],
            size === Spinner_types_1.SpinnerSize.small && [
                'ms-Spinner--small',
                {
                    width: 16,
                    height: 16,
                },
            ],
            size === Spinner_types_1.SpinnerSize.medium && [
                'ms-Spinner--medium',
                {
                    width: 20,
                    height: 20,
                },
            ],
            size === Spinner_types_1.SpinnerSize.large && [
                'ms-Spinner--large',
                {
                    width: 28,
                    height: 28,
                },
            ],
        ],
        label: [
            classNames.label,
            theme.fonts.small,
            {
                color: palette.themePrimary,
                margin: '8px 0 0',
                textAlign: 'center',
            },
            labelPosition === 'top' && {
                margin: '0 0 8px',
            },
            labelPosition === 'right' && {
                margin: '0 0 0 8px',
            },
            labelPosition === 'left' && {
                margin: '0 8px 0 0',
            },
        ],
        screenReaderText: Styling_1.hiddenContentStyle,
    };
};
//# sourceMappingURL=Spinner.styles.js.map