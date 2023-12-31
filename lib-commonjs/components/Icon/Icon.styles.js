"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../Styling");
/** Class names used in themeable and non-themeable Icon components */
exports.classNames = Styling_1.mergeStyleSets({
    root: {
        display: 'inline-block',
    },
    placeholder: [
        'ms-Icon-placeHolder',
        {
            width: '1em',
        },
    ],
    image: [
        'ms-Icon-imageContainer',
        {
            overflow: 'hidden',
        },
    ],
});
/** Class name used only in non-themeable Icon components */
exports.MS_ICON = 'ms-Icon';
exports.getStyles = function (props) {
    var className = props.className, iconClassName = props.iconClassName, isPlaceholder = props.isPlaceholder, isImage = props.isImage, styles = props.styles;
    return {
        root: [
            isPlaceholder && exports.classNames.placeholder,
            exports.classNames.root,
            isImage && exports.classNames.image,
            iconClassName,
            className,
            styles && styles.root,
            // tslint:disable-next-line:deprecation
            styles && styles.imageContainer,
        ],
    };
};
//# sourceMappingURL=Icon.styles.js.map