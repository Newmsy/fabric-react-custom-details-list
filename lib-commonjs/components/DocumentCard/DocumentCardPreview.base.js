"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Icon_1 = require("../../Icon");
var Image_1 = require("../../Image");
var Link_1 = require("../../Link");
var Utilities_1 = require("../../Utilities");
var LIST_ITEM_COUNT = 3;
var getClassNames = Utilities_1.classNamesFunction();
/**
 * {@docCategory DocumentCard}
 */
var DocumentCardPreviewBase = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentCardPreviewBase, _super);
    function DocumentCardPreviewBase(props) {
        var _this = _super.call(this, props) || this;
        _this._renderPreviewList = function (previewImages) {
            var getOverflowDocumentCountText = _this.props.getOverflowDocumentCountText;
            // Determine how many documents we won't be showing
            var overflowDocumentCount = previewImages.length - LIST_ITEM_COUNT;
            // Determine the overflow text that will be rendered after the preview list.
            var overflowText = overflowDocumentCount
                ? getOverflowDocumentCountText
                    ? getOverflowDocumentCountText(overflowDocumentCount)
                    : '+' + overflowDocumentCount
                : null;
            // Create list items for the documents to be shown
            var fileListItems = previewImages.slice(0, LIST_ITEM_COUNT).map(function (file, fileIndex) { return (React.createElement("li", { key: fileIndex },
                React.createElement(Image_1.Image, { className: _this._classNames.fileListIcon, src: file.iconSrc, role: "presentation", alt: "", width: "16px", height: "16px" }),
                React.createElement(Link_1.Link, tslib_1.__assign({ className: _this._classNames.fileListLink }, (file.linkProps, { href: (file.linkProps && file.linkProps.href) || file.url })), file.name))); });
            return (React.createElement("div", null,
                React.createElement("ul", { className: _this._classNames.fileList }, fileListItems),
                overflowText && React.createElement("span", { className: _this._classNames.fileListOverflowText }, overflowText)));
        };
        Utilities_1.initializeComponentRef(_this);
        return _this;
    }
    DocumentCardPreviewBase.prototype.render = function () {
        var _a = this.props, previewImages = _a.previewImages, styles = _a.styles, theme = _a.theme, className = _a.className;
        var style, preview;
        var isFileList = previewImages.length > 1;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isFileList: isFileList,
        });
        if (previewImages.length > 1) {
            // Render a list of files
            preview = this._renderPreviewList(previewImages);
        }
        else if (previewImages.length === 1) {
            // Render a single preview
            preview = this._renderPreviewImage(previewImages[0]);
            // Override the border color if an accent color was provided
            // tslint:disable:deprecation
            if (previewImages[0].accentColor) {
                style = {
                    borderBottomColor: previewImages[0].accentColor,
                };
            }
            // tslint:enable:deprecation
        }
        return (React.createElement("div", { className: this._classNames.root, style: style }, preview));
    };
    DocumentCardPreviewBase.prototype._renderPreviewImage = function (previewImage) {
        var width = previewImage.width, height = previewImage.height, imageFit = previewImage.imageFit, previewIconProps = previewImage.previewIconProps, previewIconContainerClass = previewImage.previewIconContainerClass;
        if (previewIconProps) {
            return (React.createElement("div", { className: Utilities_1.css(this._classNames.previewIcon, previewIconContainerClass), style: { width: width, height: height } },
                React.createElement(Icon_1.Icon, tslib_1.__assign({}, previewIconProps))));
        }
        var image = (React.createElement(Image_1.Image, { width: width, height: height, imageFit: imageFit, src: previewImage.previewImageSrc, role: "presentation", alt: "" }));
        var icon;
        if (previewImage.iconSrc) {
            icon = React.createElement(Image_1.Image, { className: this._classNames.icon, src: previewImage.iconSrc, role: "presentation", alt: "" });
        }
        return (React.createElement("div", null,
            image,
            icon));
    };
    return DocumentCardPreviewBase;
}(React.Component));
exports.DocumentCardPreviewBase = DocumentCardPreviewBase;
//# sourceMappingURL=DocumentCardPreview.base.js.map