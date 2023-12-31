define(["require", "exports", "tslib", "../../Styling", "../../Utilities"], function (require, exports, tslib_1, Styling_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var globalClassNames = {
        root: 'ms-TeachingBubble',
        body: 'ms-TeachingBubble-body',
        bodyContent: 'ms-TeachingBubble-bodycontent',
        closeButton: 'ms-TeachingBubble-closebutton',
        content: 'ms-TeachingBubble-content',
        footer: 'ms-TeachingBubble-footer',
        header: 'ms-TeachingBubble-header',
        headerIsCondensed: 'ms-TeachingBubble-header--condensed',
        headerIsSmall: 'ms-TeachingBubble-header--small',
        headerIsLarge: 'ms-TeachingBubble-header--large',
        headline: 'ms-TeachingBubble-headline',
        image: 'ms-TeachingBubble-image',
        primaryButton: 'ms-TeachingBubble-primaryButton',
        secondaryButton: 'ms-TeachingBubble-secondaryButton',
        subText: 'ms-TeachingBubble-subText',
        // TODO: Button global class name usage should be converted to a styles function once
        //        Button supports JS styling, which means these button names can be removed.
        button: 'ms-Button',
        buttonLabel: 'ms-Button-label',
    };
    var opacityFadeIn = Utilities_1.memoizeFunction(function () {
        return Styling_1.keyframes({
            '0%': {
                opacity: 0,
                animationTimingFunction: Styling_1.AnimationVariables.easeFunction1,
                transform: 'scale3d(.90,.90,.90)',
            },
            '100%': {
                opacity: 1,
                transform: 'scale3d(1,1,1)',
            },
        });
    });
    var rootStyle = function (isWide, calloutProps) {
        var _a = calloutProps || {}, calloutWidth = _a.calloutWidth, calloutMaxWidth = _a.calloutMaxWidth;
        return [
            {
                display: 'block',
                maxWidth: 364,
                border: 0,
                outline: 'transparent',
                width: calloutWidth || 'calc(100% + 1px)',
                animationName: "" + opacityFadeIn(),
                animationDuration: '300ms',
                animationTimingFunction: 'linear',
                animationFillMode: 'both',
            },
            isWide && {
                maxWidth: calloutMaxWidth || 456,
            },
        ];
    };
    var headerStyle = function (classNames, hasCondensedHeadline, hasSmallHeadline) {
        if (hasCondensedHeadline) {
            return [
                classNames.headerIsCondensed,
                {
                    marginBottom: 14,
                },
            ];
        }
        return [
            hasSmallHeadline && classNames.headerIsSmall,
            !hasSmallHeadline && classNames.headerIsLarge,
            {
                selectors: {
                    ':not(:last-child)': {
                        marginBottom: 14,
                    },
                },
            },
        ];
    };
    exports.getStyles = function (props) {
        var _a, _b, _c;
        var hasCondensedHeadline = props.hasCondensedHeadline, hasSmallHeadline = props.hasSmallHeadline, hasCloseButton = props.hasCloseButton, hasHeadline = props.hasHeadline, isWide = props.isWide, primaryButtonClassName = props.primaryButtonClassName, secondaryButtonClassName = props.secondaryButtonClassName, theme = props.theme, _d = props.calloutProps, calloutProps = _d === void 0 ? { className: undefined, theme: theme } : _d;
        var hasLargeHeadline = !hasCondensedHeadline && !hasSmallHeadline;
        var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
        var classNames = Styling_1.getGlobalClassNames(globalClassNames, theme);
        return {
            root: [classNames.root, fonts.medium, calloutProps.className],
            body: [
                classNames.body,
                hasCloseButton && !hasHeadline && { marginRight: 24 },
                {
                    selectors: {
                        ':not(:last-child)': {
                            marginBottom: 20,
                        },
                    },
                },
            ],
            bodyContent: [
                classNames.bodyContent,
                {
                    padding: '20px 24px 20px 24px',
                },
            ],
            closeButton: [
                classNames.closeButton,
                {
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    margin: '15px 15px 0 0',
                    borderRadius: 0,
                    color: palette.white,
                    fontSize: fonts.small.fontSize,
                    selectors: {
                        ':hover': {
                            background: palette.themeDarkAlt,
                            color: palette.white,
                        },
                        ':active': {
                            background: palette.themeDark,
                            color: palette.white,
                        },
                        ':focus': {
                            border: "1px solid " + semanticColors.variantBorder,
                        },
                    },
                },
            ],
            content: tslib_1.__spreadArrays([
                classNames.content
            ], rootStyle(isWide), [
                isWide && {
                    display: 'flex',
                },
            ]),
            footer: [
                classNames.footer,
                {
                    display: 'flex',
                    flex: 'auto',
                    alignItems: 'center',
                    color: palette.white,
                    selectors: (_a = {},
                        // TODO: global class name usage should be converted to a styles function once Button supports JS styling
                        _a["." + classNames.button + ":not(:first-child)"] = {
                            marginLeft: 10,
                        },
                        _a),
                },
            ],
            header: tslib_1.__spreadArrays([
                classNames.header
            ], headerStyle(classNames, hasCondensedHeadline, hasSmallHeadline), [
                hasCloseButton && { marginRight: 24 },
                (hasCondensedHeadline || hasSmallHeadline) && [
                    fonts.medium,
                    {
                        fontWeight: Styling_1.FontWeights.semibold,
                    },
                ],
            ]),
            headline: [
                classNames.headline,
                {
                    margin: 0,
                    color: palette.white,
                    fontWeight: Styling_1.FontWeights.semibold,
                },
                hasLargeHeadline && [
                    {
                        fontSize: fonts.xLarge.fontSize,
                    },
                ],
            ],
            imageContent: [
                classNames.header,
                classNames.image,
                isWide && {
                    display: 'flex',
                    alignItems: 'center',
                    maxWidth: 154,
                },
            ],
            primaryButton: [
                classNames.primaryButton,
                primaryButtonClassName,
                {
                    backgroundColor: palette.white,
                    borderColor: palette.white,
                    color: palette.themePrimary,
                    whiteSpace: 'nowrap',
                    selectors: (_b = {},
                        // TODO: global class name usage should be converted to a styles function once Button supports JS styling
                        _b["." + classNames.buttonLabel] = fonts.medium,
                        _b[':hover'] = {
                            backgroundColor: palette.themeLighter,
                            borderColor: palette.themeLighter,
                            color: palette.themePrimary,
                        },
                        _b[':focus'] = {
                            backgroundColor: palette.themeLighter,
                            borderColor: palette.white,
                        },
                        _b[':active'] = {
                            backgroundColor: palette.white,
                            borderColor: palette.white,
                            color: palette.themePrimary,
                        },
                        _b),
                },
            ],
            secondaryButton: [
                classNames.secondaryButton,
                secondaryButtonClassName,
                {
                    backgroundColor: palette.themePrimary,
                    borderColor: palette.white,
                    whiteSpace: 'nowrap',
                    selectors: (_c = {},
                        // TODO: global class name usage should be converted to a styles function once Button supports JS styling
                        _c["." + classNames.buttonLabel] = [
                            fonts.medium,
                            {
                                color: palette.white,
                            },
                        ],
                        _c['&:hover, &:focus'] = {
                            backgroundColor: palette.themeDarkAlt,
                            borderColor: palette.white,
                        },
                        _c[':active'] = {
                            backgroundColor: palette.themePrimary,
                            borderColor: palette.white,
                        },
                        _c),
                },
            ],
            subText: [
                classNames.subText,
                {
                    margin: 0,
                    fontSize: fonts.medium.fontSize,
                    color: palette.white,
                    fontWeight: Styling_1.FontWeights.regular,
                },
            ],
            subComponentStyles: {
                callout: {
                    root: tslib_1.__spreadArrays(rootStyle(isWide, calloutProps), [fonts.medium]),
                    beak: [
                        {
                            background: palette.themePrimary,
                        },
                    ],
                    calloutMain: [
                        {
                            background: palette.themePrimary,
                        },
                    ],
                },
            },
        };
    };
});
//# sourceMappingURL=TeachingBubble.styles.js.map