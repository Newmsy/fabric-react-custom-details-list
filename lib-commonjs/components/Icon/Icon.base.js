"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Icon_types_1 = require("./Icon.types");
var Image_1 = require("../Image/Image");
var Image_types_1 = require("../Image/Image.types");
var Utilities_1 = require("../../Utilities");
var FontIcon_1 = require("./FontIcon");
var getClassNames = Utilities_1.classNamesFunction({
    // Icon is used a lot by other components.
    // It's likely to see expected cases which pass different className to the Icon.
    // Therefore setting a larger cache size.
    cacheSize: 100,
});
var IconBase = /** @class */ (function (_super) {
    tslib_1.__extends(IconBase, _super);
    function IconBase(props) {
        var _this = _super.call(this, props) || this;
        _this.onImageLoadingStateChange = function (state) {
            if (_this.props.imageProps && _this.props.imageProps.onLoadingStateChange) {
                _this.props.imageProps.onLoadingStateChange(state);
            }
            if (state === Image_types_1.ImageLoadState.error) {
                _this.setState({ imageLoadError: true });
            }
        };
        _this.state = {
            imageLoadError: false,
        };
        return _this;
    }
    IconBase.prototype.render = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, iconName = _a.iconName, imageErrorAs = _a.imageErrorAs, theme = _a.theme;
        var isPlaceholder = typeof iconName === 'string' && iconName.length === 0;
        var isImage = 
        // tslint:disable-next-line:deprecation
        !!this.props.imageProps || this.props.iconType === Icon_types_1.IconType.image || this.props.iconType === Icon_types_1.IconType.Image;
        var iconContent = FontIcon_1.getIconContent(iconName) || {};
        var iconClassName = iconContent.iconClassName, children = iconContent.children;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            iconClassName: iconClassName,
            isImage: isImage,
            isPlaceholder: isPlaceholder,
        });
        var RootType = isImage ? 'span' : 'i';
        var nativeProps = Utilities_1.getNativeProps(this.props, Utilities_1.htmlElementProperties, [
            'aria-label',
        ]);
        var imageLoadError = this.state.imageLoadError;
        var imageProps = tslib_1.__assign(tslib_1.__assign({}, this.props.imageProps), { onLoadingStateChange: this.onImageLoadingStateChange });
        var ImageType = (imageLoadError && imageErrorAs) || Image_1.Image;
        // tslint:disable-next-line:deprecation
        var ariaLabel = this.props['aria-label'] || this.props.ariaLabel;
        var containerProps = ariaLabel
            ? {
                'aria-label': ariaLabel,
            }
            : {
                'aria-hidden': this.props['aria-labelledby'] || imageProps['aria-labelledby'] ? false : true,
            };
        return (React.createElement(RootType, tslib_1.__assign({ "data-icon-name": iconName }, containerProps, nativeProps, { className: classNames.root }), isImage ? React.createElement(ImageType, tslib_1.__assign({}, imageProps)) : children));
    };
    return IconBase;
}(React.Component));
exports.IconBase = IconBase;
//# sourceMappingURL=Icon.base.js.map