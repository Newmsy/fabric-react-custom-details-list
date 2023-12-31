import { __assign } from "tslib";
import * as React from 'react';
import { classNames, MS_ICON } from './Icon.styles';
import { css, getNativeProps, htmlElementProperties, memoizeFunction } from '../../Utilities';
import { getIcon } from '../../Styling';
export var getIconContent = memoizeFunction(function (iconName) {
    var _a = getIcon(iconName) || {
        subset: {},
        code: undefined,
    }, code = _a.code, subset = _a.subset;
    if (!code) {
        return null;
    }
    return {
        children: code,
        iconClassName: subset.className,
        fontFamily: subset.fontFace && subset.fontFace.fontFamily,
    };
}, undefined, true /*ignoreNullOrUndefinedResult */);
/**
 * Fast icon component which only supports font glyphs (not images) and can't be targeted by customizations.
 * To style the icon, use `className` or reference `ms-Icon` in CSS.
 * {@docCategory Icon}
 */
export var FontIcon = function (props) {
    var iconName = props.iconName, className = props.className, _a = props.style, style = _a === void 0 ? {} : _a;
    var iconContent = getIconContent(iconName) || {};
    var iconClassName = iconContent.iconClassName, children = iconContent.children, fontFamily = iconContent.fontFamily;
    var nativeProps = getNativeProps(props, htmlElementProperties);
    var containerProps = props['aria-label']
        ? {}
        : {
            role: 'presentation',
            'aria-hidden': true,
        };
    return (React.createElement("i", __assign({ "data-icon-name": iconName }, containerProps, nativeProps, { className: css(MS_ICON, classNames.root, iconClassName, !iconName && classNames.placeholder, className), 
        // Apply the font family this way to ensure it doesn't get overridden by Fabric Core ms-Icon styles
        // https://github.com/microsoft/fluentui/issues/10449
        style: __assign({ fontFamily: fontFamily }, style) }), children));
};
/**
 * Memoized helper for rendering a FontIcon.
 * @param iconName - The name of the icon to use from the icon font.
 * @param className - Class name for styling the icon.
 * @param ariaLabel - Label for the icon for the benefit of screen readers.
 * {@docCategory Icon}
 */
export var getFontIcon = memoizeFunction(function (iconName, className, ariaLabel) {
    return FontIcon({ iconName: iconName, className: className, 'aria-label': ariaLabel });
});
//# sourceMappingURL=FontIcon.js.map