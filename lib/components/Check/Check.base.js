import * as React from 'react';
import { Icon, FontIcon } from '../../Icon';
import { classNamesFunction } from '../../Utilities';
var getClassNames = classNamesFunction();
export var CheckBase = function (props) {
    var _a = props.checked, checked = _a === void 0 ? false : _a, className = props.className, theme = props.theme, styles = props.styles, _b = props.useFastIcons, useFastIcons = _b === void 0 ? true : _b;
    var classNames = getClassNames(styles, { theme: theme, className: className, checked: checked });
    var IconComponent = useFastIcons ? FontIcon : Icon;
    return (React.createElement("div", { className: classNames.root },
        React.createElement(IconComponent, { iconName: "CircleRing", className: classNames.circle }),
        React.createElement(IconComponent, { iconName: "StatusCircleCheckmark", className: classNames.check })));
};
//# sourceMappingURL=Check.base.js.map