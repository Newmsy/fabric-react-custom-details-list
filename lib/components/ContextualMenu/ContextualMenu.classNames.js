import { getDividerClassNames } from '../Divider/VerticalDivider.classNames';
import { getMenuItemStyles } from './ContextualMenu.cnstyles';
import { mergeStyleSets, getGlobalClassNames, getScreenSelector, ScreenWidthMaxMedium } from '../../Styling';
import { memoizeFunction, IsFocusVisibleClassName } from '../../Utilities';
var CONTEXTUAL_SPLIT_MENU_MINWIDTH = '28px';
var MediumScreenSelector = getScreenSelector(0, ScreenWidthMaxMedium);
export var getSplitButtonVerticalDividerClassNames = memoizeFunction(
// tslint:disable:deprecation
function (theme) {
    var _a;
    return mergeStyleSets(getDividerClassNames(theme), {
        // tslint:enable:deprecation
        wrapper: {
            position: 'absolute',
            right: 28,
            selectors: (_a = {},
                _a[MediumScreenSelector] = {
                    right: 32,
                },
                _a),
        },
        divider: {
            height: 16,
            width: 1,
        },
    });
});
var GlobalClassNames = {
    item: 'ms-ContextualMenu-item',
    divider: 'ms-ContextualMenu-divider',
    root: 'ms-ContextualMenu-link',
    isChecked: 'is-checked',
    isExpanded: 'is-expanded',
    isDisabled: 'is-disabled',
    linkContent: 'ms-ContextualMenu-linkContent',
    linkContentMenu: 'ms-ContextualMenu-linkContent',
    icon: 'ms-ContextualMenu-icon',
    iconColor: 'ms-ContextualMenu-iconColor',
    checkmarkIcon: 'ms-ContextualMenu-checkmarkIcon',
    subMenuIcon: 'ms-ContextualMenu-submenuIcon',
    label: 'ms-ContextualMenu-itemText',
    secondaryText: 'ms-ContextualMenu-secondaryText',
    splitMenu: 'ms-ContextualMenu-splitMenu',
};
/**
 * @deprecated To be removed in 7.0.
 * @internal
 * This is a package-internal method that has been depended on.
 * It is being kept in this form for backwards compatibility.
 * It should be cleaned up in 7.0.
 *
 * TODO: Audit perf. impact of and potentially remove memoizeFunction.
 * https://github.com/microsoft/fluentui/issues/5534
 */
export var getItemClassNames = memoizeFunction(function (theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className) {
    var _a, _b, _c, _d;
    var styles = getMenuItemStyles(theme);
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
    return mergeStyleSets({
        item: [classNames.item, styles.item, itemClassName],
        divider: [classNames.divider, styles.divider, dividerClassName],
        root: [
            classNames.root,
            styles.root,
            checked && [classNames.isChecked, styles.rootChecked],
            isAnchorLink && styles.anchorLink,
            expanded && [classNames.isExpanded, styles.rootExpanded],
            disabled && [classNames.isDisabled, styles.rootDisabled],
            !disabled &&
                !expanded && [
                {
                    selectors: (_a = {
                            ':hover': styles.rootHovered,
                            ':active': styles.rootPressed
                        },
                        _a["." + IsFocusVisibleClassName + " &:focus, ." + IsFocusVisibleClassName + " &:focus:hover"] = styles.rootFocused,
                        _a["." + IsFocusVisibleClassName + " &:hover"] = { background: 'inherit;' },
                        _a),
                },
            ],
            className,
        ],
        splitPrimary: [
            styles.root,
            {
                width: "calc(100% - " + CONTEXTUAL_SPLIT_MENU_MINWIDTH + ")",
            },
            checked && ['is-checked', styles.rootChecked],
            (disabled || primaryDisabled) && ['is-disabled', styles.rootDisabled],
            !(disabled || primaryDisabled) &&
                !checked && [
                {
                    selectors: (_b = {
                            ':hover': styles.rootHovered
                        },
                        // when hovering over the splitPrimary also affect the splitMenu
                        _b[":hover ~ ." + classNames.splitMenu] = styles.rootHovered,
                        _b[':active'] = styles.rootPressed,
                        _b["." + IsFocusVisibleClassName + " &:focus, ." + IsFocusVisibleClassName + " &:focus:hover"] = styles.rootFocused,
                        _b["." + IsFocusVisibleClassName + " &:hover"] = { background: 'inherit;' },
                        _b),
                },
            ],
        ],
        splitMenu: [
            classNames.splitMenu,
            styles.root,
            {
                flexBasis: '0',
                padding: '0 8px',
                minWidth: CONTEXTUAL_SPLIT_MENU_MINWIDTH,
            },
            expanded && ['is-expanded', styles.rootExpanded],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !expanded && [
                {
                    selectors: (_c = {
                            ':hover': styles.rootHovered,
                            ':active': styles.rootPressed
                        },
                        _c["." + IsFocusVisibleClassName + " &:focus, ." + IsFocusVisibleClassName + " &:focus:hover"] = styles.rootFocused,
                        _c["." + IsFocusVisibleClassName + " &:hover"] = { background: 'inherit;' },
                        _c),
                },
            ],
        ],
        anchorLink: styles.anchorLink,
        linkContent: [classNames.linkContent, styles.linkContent],
        linkContentMenu: [
            classNames.linkContentMenu,
            styles.linkContent,
            {
                justifyContent: 'center',
            },
        ],
        icon: [
            classNames.icon,
            knownIcon && styles.iconColor,
            styles.icon,
            iconClassName,
            disabled && [classNames.isDisabled, styles.iconDisabled],
        ],
        iconColor: styles.iconColor,
        checkmarkIcon: [classNames.checkmarkIcon, knownIcon && styles.checkmarkIcon, styles.icon, iconClassName],
        subMenuIcon: [
            classNames.subMenuIcon,
            styles.subMenuIcon,
            subMenuClassName,
            expanded && { color: theme.palette.neutralPrimary },
            disabled && [styles.iconDisabled],
        ],
        label: [classNames.label, styles.label],
        secondaryText: [classNames.secondaryText, styles.secondaryText],
        splitContainer: [
            styles.splitButtonFlexContainer,
            !disabled &&
                !checked && [
                {
                    selectors: (_d = {},
                        _d["." + IsFocusVisibleClassName + " &:focus, ." + IsFocusVisibleClassName + " &:focus:hover"] = styles.rootFocused,
                        _d),
                },
            ],
        ],
    });
});
/**
 * Wrapper function for generating ContextualMenuItem classNames which adheres to
 * the getStyles API, but invokes memoized className generator function with
 * primitive values.
 *
 * @param props the ContextualMenuItem style props used to generate its styles.
 */
export var getItemStyles = function (props) {
    var theme = props.theme, disabled = props.disabled, expanded = props.expanded, checked = props.checked, isAnchorLink = props.isAnchorLink, knownIcon = props.knownIcon, itemClassName = props.itemClassName, dividerClassName = props.dividerClassName, iconClassName = props.iconClassName, subMenuClassName = props.subMenuClassName, primaryDisabled = props.primaryDisabled, className = props.className;
    // tslint:disable-next-line:deprecation
    return getItemClassNames(theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className);
};
//# sourceMappingURL=ContextualMenu.classNames.js.map