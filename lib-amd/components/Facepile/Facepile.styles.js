define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-Facepile',
        addButton: 'ms-Facepile-addButton ms-Facepile-itemButton',
        descriptiveOverflowButton: 'ms-Facepile-descriptiveOverflowButton ms-Facepile-itemButton',
        itemButton: 'ms-Facepile-itemButton ms-Facepile-person',
        itemContainer: 'ms-Facepile-itemContainer',
        members: 'ms-Facepile-members',
        member: 'ms-Facepile-member',
        overflowButton: 'ms-Facepile-overflowButton ms-Facepile-itemButton',
    };
    exports.styles = function (props) {
        var className = props.className, theme = props.theme, _a = props.spacingAroundItemButton, spacingAroundItemButton = _a === void 0 ? 2 : _a;
        var palette = theme.palette, fonts = theme.fonts;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        var ItemButtonStyles = {
            textAlign: 'center',
            padding: 0,
            borderRadius: '50%',
            verticalAlign: 'top',
            display: 'inline',
            backgroundColor: 'transparent',
            border: 'none',
            selectors: {
                '&::-moz-focus-inner': {
                    padding: 0,
                    border: 0,
                },
            },
        };
        return {
            root: [
                classNames.root,
                theme.fonts.medium,
                {
                    width: 'auto',
                },
                className,
            ],
            addButton: [
                classNames.addButton,
                Styling_1.getFocusStyle(theme, { inset: -1 }),
                ItemButtonStyles,
                {
                    fontSize: fonts.medium.fontSize,
                    color: palette.white,
                    backgroundColor: palette.themePrimary,
                    marginRight: spacingAroundItemButton * 2 + 'px',
                    selectors: {
                        '&:hover': {
                            backgroundColor: palette.themeDark,
                        },
                        '&:focus': {
                            backgroundColor: palette.themeDark,
                        },
                        '&:active': {
                            backgroundColor: palette.themeDarker,
                        },
                        '&:disabled': {
                            backgroundColor: palette.neutralTertiaryAlt,
                        },
                    },
                },
            ],
            descriptiveOverflowButton: [
                classNames.descriptiveOverflowButton,
                Styling_1.getFocusStyle(theme, { inset: -1 }),
                ItemButtonStyles,
                {
                    fontSize: fonts.small.fontSize,
                    color: palette.neutralSecondary,
                    backgroundColor: palette.neutralLighter,
                    marginLeft: spacingAroundItemButton * 2 + "px",
                },
            ],
            itemButton: [classNames.itemButton, ItemButtonStyles],
            itemContainer: [
                classNames.itemContainer,
                {
                    display: 'flex',
                },
            ],
            members: [
                classNames.members,
                {
                    display: 'flex',
                    overflow: 'hidden',
                    listStyleType: 'none',
                    padding: 0,
                    margin: "-" + spacingAroundItemButton + "px",
                },
            ],
            member: [
                classNames.member,
                {
                    display: 'inline-flex',
                    flex: '0 0 auto',
                    margin: spacingAroundItemButton + "px",
                },
            ],
            overflowButton: [
                classNames.overflowButton,
                Styling_1.getFocusStyle(theme, { inset: -1 }),
                ItemButtonStyles,
                {
                    fontSize: fonts.medium.fontSize,
                    color: palette.neutralSecondary,
                    backgroundColor: palette.neutralLighter,
                    marginLeft: spacingAroundItemButton * 2 + "px",
                },
            ],
            overflowInitialsIcon: [
                {
                    color: palette.neutralPrimary,
                },
            ],
            screenReaderOnly: Styling_1.hiddenContentStyle,
        };
    };
});
//# sourceMappingURL=Facepile.styles.js.map