define(["require", "exports", "../../Styling", "../../Utilities", "../DetailsList/DetailsRow.styles", "../DetailsList/DetailsRowCheck.styles", "./GroupSpacer"], function (require, exports, Styling_1, Utilities_1, DetailsRow_styles_1, DetailsRowCheck_styles_1, GroupSpacer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-GroupHeader',
        compact: 'ms-GroupHeader--compact',
        check: 'ms-GroupHeader-check',
        dropIcon: 'ms-GroupHeader-dropIcon',
        expand: 'ms-GroupHeader-expand',
        isCollapsed: 'is-collapsed',
        title: 'ms-GroupHeader-title',
        isSelected: 'is-selected',
        iconTag: 'ms-Icon--Tag',
        group: 'ms-GroupedList-group',
        isDropping: 'is-dropping',
    };
    var beziers = {
        easeOutCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
        easeOutSine: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
        easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
    };
    var DEFAULT_GROUP_HEADER_HEIGHT = 48;
    var COMPACT_GROUP_HEADER_HEIGHT = 40;
    exports.getStyles = function (props) {
        var _a, _b, _c, _d, _e;
        var theme = props.theme, className = props.className, selected = props.selected, isCollapsed = props.isCollapsed, compact = props.compact;
        // padding from the source to align GroupHeader title with DetailsRow's first cell.
        var cellLeftPadding = DetailsRow_styles_1.DEFAULT_CELL_STYLE_PROPS.cellLeftPadding;
        var finalRowHeight = compact ? COMPACT_GROUP_HEADER_HEIGHT : DEFAULT_GROUP_HEADER_HEIGHT;
        var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        var checkExpandResetStyles = [
            Styling_1.getFocusStyle(theme),
            {
                cursor: 'default',
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                padding: 0,
            },
        ];
        return {
            root: [
                classNames.root,
                Styling_1.getFocusStyle(theme),
                theme.fonts.medium,
                {
                    // keep the border for height but color it so it's invisible.
                    borderBottom: "1px solid " + semanticColors.listBackground,
                    cursor: 'default',
                    userSelect: 'none',
                    selectors: (_a = {
                            ':hover': {
                                background: semanticColors.listItemBackgroundHovered,
                                color: semanticColors.actionLinkHovered,
                            }
                        },
                        _a["&:hover ." + classNames.check] = {
                            opacity: 1,
                        },
                        _a["." + Utilities_1.IsFocusVisibleClassName + " &:focus ." + classNames.check] = {
                            opacity: 1,
                        },
                        _a[":global(." + classNames.group + "." + classNames.isDropping + ")"] = {
                            selectors: (_b = {},
                                _b["& > ." + classNames.root + " ." + classNames.dropIcon] = {
                                    transition: "transform " + Styling_1.AnimationVariables.durationValue4 + " " + beziers.easeOutCirc + " " +
                                        ("opacity " + Styling_1.AnimationVariables.durationValue1 + " " + beziers.easeOutSine),
                                    transitionDelay: Styling_1.AnimationVariables.durationValue3,
                                    opacity: 1,
                                    transform: "rotate(0.2deg) scale(1);",
                                },
                                _b["." + classNames.check] = {
                                    opacity: 0,
                                },
                                _b),
                        },
                        _a),
                },
                selected && [
                    classNames.isSelected,
                    {
                        background: semanticColors.listItemBackgroundChecked,
                        selectors: (_c = {
                                ':hover': {
                                    background: semanticColors.listItemBackgroundCheckedHovered,
                                }
                            },
                            _c["" + classNames.check] = {
                                opacity: 1,
                            },
                            _c),
                    },
                ],
                compact && [classNames.compact, { border: 'none' }],
                className,
            ],
            groupHeaderContainer: [
                {
                    display: 'flex',
                    alignItems: 'center',
                    height: finalRowHeight,
                },
            ],
            headerCount: [
                {
                    padding: '0px 4px',
                },
            ],
            check: [
                classNames.check,
                checkExpandResetStyles,
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // paddingTop and marginTop brought from the DetailsRow.styles.ts with explanation below.
                    // Ensure that the check cell covers the top border of the cell.
                    // This ensures the click target does not leave a spot which would
                    // cause other items to be deselected.
                    paddingTop: 1,
                    marginTop: -1,
                    opacity: 0,
                    width: DetailsRowCheck_styles_1.CHECK_CELL_WIDTH,
                    height: finalRowHeight,
                    selectors: (_d = {},
                        _d["." + Utilities_1.IsFocusVisibleClassName + " &:focus"] = {
                            opacity: 1,
                        },
                        _d),
                },
            ],
            expand: [
                classNames.expand,
                checkExpandResetStyles,
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: fonts.small.fontSize,
                    width: GroupSpacer_1.SPACER_WIDTH,
                    height: finalRowHeight,
                    color: selected ? palette.neutralPrimary : palette.neutralSecondary,
                    selectors: {
                        ':hover': {
                            backgroundColor: selected ? palette.neutralQuaternary : palette.neutralLight,
                        },
                        ':active': {
                            backgroundColor: selected ? palette.neutralTertiaryAlt : palette.neutralQuaternaryAlt,
                        },
                    },
                },
            ],
            expandIsCollapsed: [
                isCollapsed
                    ? [
                        classNames.isCollapsed,
                        {
                            transform: 'rotate(0deg)',
                            transformOrigin: '50% 50%',
                            transition: 'transform .1s linear',
                        },
                    ]
                    : {
                        transform: 'rotate(90deg)',
                        transformOrigin: '50% 50%',
                        transition: 'transform .1s linear',
                    },
            ],
            title: [
                classNames.title,
                {
                    paddingLeft: cellLeftPadding,
                    fontSize: compact ? fonts.medium.fontSize : fonts.mediumPlus.fontSize,
                    fontWeight: isCollapsed ? Styling_1.FontWeights.regular : Styling_1.FontWeights.semibold,
                    cursor: 'pointer',
                    outline: 0,
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                },
            ],
            dropIcon: [
                classNames.dropIcon,
                {
                    position: 'absolute',
                    left: -26,
                    fontSize: Styling_1.IconFontSizes.large,
                    color: palette.neutralSecondary,
                    transition: "transform " + Styling_1.AnimationVariables.durationValue2 + " " + beziers.easeInBack + ", " +
                        ("opacity " + Styling_1.AnimationVariables.durationValue4 + " " + beziers.easeOutSine),
                    opacity: 0,
                    transform: 'rotate(0.2deg) scale(0.65)',
                    transformOrigin: '10px 10px',
                    selectors: (_e = {},
                        _e[":global(." + classNames.iconTag + ")"] = {
                            position: 'absolute',
                        },
                        _e),
                },
            ],
        };
    };
});
//# sourceMappingURL=GroupHeader.styles.js.map