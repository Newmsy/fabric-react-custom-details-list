"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Styling_1 = require("../../Styling");
var Utilities_1 = require("../../Utilities");
var GlobalClassNames = {
    root: 'ms-Breadcrumb',
    list: 'ms-Breadcrumb-list',
    listItem: 'ms-Breadcrumb-listItem',
    chevron: 'ms-Breadcrumb-chevron',
    overflow: 'ms-Breadcrumb-overflow',
    overflowButton: 'ms-Breadcrumb-overflowButton',
    itemLink: 'ms-Breadcrumb-itemLink',
    item: 'ms-Breadcrumb-item',
};
var SingleLineTextStyle = {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
};
var overflowButtonFontSize = 16;
var chevronSmallFontSize = 8;
var itemLineHeight = 36;
var itemFontSize = 18;
var MinimumScreenSelector = Styling_1.getScreenSelector(0, Styling_1.ScreenWidthMaxSmall);
var MediumScreenSelector = Styling_1.getScreenSelector(Styling_1.ScreenWidthMinMedium, Styling_1.ScreenWidthMaxMedium);
exports.getStyles = function (props) {
    var _a, _b, _c, _d;
    var className = props.className, theme = props.theme;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    // Tokens
    var itemBackgroundHoveredColor = semanticColors.menuItemBackgroundHovered;
    var itemBackgroundPressedColor = semanticColors.menuItemBackgroundPressed;
    var itemTextColor = palette.neutralSecondary;
    var itemTextFontWeight = Styling_1.FontWeights.regular;
    var itemTextHoveredOrPressedColor = palette.neutralPrimary;
    var itemLastChildTextColor = palette.neutralPrimary;
    var itemLastChildTextFontWeight = Styling_1.FontWeights.semibold;
    var chevronButtonColor = palette.neutralSecondary;
    var overflowButtonColor = palette.neutralSecondary;
    var lastChildItemStyles = {
        fontWeight: itemLastChildTextFontWeight,
        color: itemLastChildTextColor,
    };
    var itemStateSelectors = {
        ':hover': {
            color: itemTextHoveredOrPressedColor,
            backgroundColor: itemBackgroundHoveredColor,
            cursor: 'pointer',
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = {
                    color: 'Highlight',
                },
                _a),
        },
        ':active': {
            backgroundColor: itemBackgroundPressedColor,
            color: itemTextHoveredOrPressedColor,
        },
        '&:active:hover': {
            color: itemTextHoveredOrPressedColor,
            backgroundColor: itemBackgroundPressedColor,
        },
        '&:active, &:hover, &:active:hover': {
            textDecoration: 'none',
        },
    };
    var commonItemStyles = {
        color: itemTextColor,
        padding: '0 8px',
        lineHeight: itemLineHeight,
        fontSize: itemFontSize,
        fontWeight: itemTextFontWeight,
    };
    return {
        root: [
            classNames.root,
            fonts.medium,
            {
                margin: '11px 0 1px',
            },
            className,
        ],
        list: [
            classNames.list,
            {
                whiteSpace: 'nowrap',
                padding: 0,
                margin: 0,
                display: 'flex',
                alignItems: 'stretch',
            },
        ],
        listItem: [
            classNames.listItem,
            {
                listStyleType: 'none',
                margin: '0',
                padding: '0',
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
                selectors: {
                    '&:last-child .ms-Breadcrumb-itemLink': lastChildItemStyles,
                    '&:last-child .ms-Breadcrumb-item': lastChildItemStyles,
                },
            },
        ],
        chevron: [
            classNames.chevron,
            {
                color: chevronButtonColor,
                fontSize: fonts.small.fontSize,
                selectors: (_b = {},
                    _b[Styling_1.HighContrastSelector] = {
                        color: 'WindowText',
                        MsHighContrastAdjust: 'none',
                    },
                    _b[MediumScreenSelector] = {
                        fontSize: chevronSmallFontSize,
                    },
                    _b[MinimumScreenSelector] = {
                        fontSize: chevronSmallFontSize,
                    },
                    _b),
            },
        ],
        overflow: [
            classNames.overflow,
            {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
            },
        ],
        overflowButton: [
            classNames.overflowButton,
            Styling_1.getFocusStyle(theme),
            SingleLineTextStyle,
            {
                fontSize: overflowButtonFontSize,
                color: overflowButtonColor,
                height: '100%',
                cursor: 'pointer',
                selectors: tslib_1.__assign(tslib_1.__assign({}, itemStateSelectors), (_c = {}, _c[MinimumScreenSelector] = {
                    padding: '4px 6px',
                }, _c[MediumScreenSelector] = {
                    fontSize: fonts.mediumPlus.fontSize,
                }, _c)),
            },
        ],
        itemLink: [
            classNames.itemLink,
            Styling_1.getFocusStyle(theme),
            SingleLineTextStyle,
            tslib_1.__assign(tslib_1.__assign({}, commonItemStyles), { selectors: tslib_1.__assign((_d = { ':focus': {
                            color: palette.neutralDark,
                        } }, _d["." + Utilities_1.IsFocusVisibleClassName + " &:focus"] = {
                    outline: "none",
                }, _d), itemStateSelectors) }),
        ],
        item: [
            classNames.item,
            tslib_1.__assign(tslib_1.__assign({}, commonItemStyles), { selectors: {
                    ':hover': {
                        cursor: 'default',
                    },
                } }),
        ],
    };
};
//# sourceMappingURL=Breadcrumb.styles.js.map