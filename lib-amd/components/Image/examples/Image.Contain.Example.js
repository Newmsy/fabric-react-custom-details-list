define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Image", "office-ui-fabric-react/lib/Label"], function (require, exports, tslib_1, React, Image_1, Label_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImageContainExample = function () {
        var imageProps = {
            src: 'http://placehold.it/700x300',
            imageFit: Image_1.ImageFit.contain,
        };
        return (React.createElement("div", null,
            React.createElement("p", null, "Setting the imageFit property to \"contain\" will scale the image up or down to fit the frame, while maintaining its natural aspect ratio and without cropping the image."),
            React.createElement(Label_1.Label, null, "The image has a wider aspect ratio (more landscape) than the frame, so the image is scaled to fit the width and centered in the available vertical space."),
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { alt: 'Example of the image fit value "contain" on an image wider than the frame.', width: 200, height: 200 })),
            React.createElement("br", null),
            React.createElement(Label_1.Label, null, "The image has a taller aspect ratio (more portrait) than the frame, so the image is scaled to fit the height and centered in the available horizontal space."),
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { alt: 'Example of the image fit value "contain" on an image taller than the frame.', width: 300, height: 50 }))));
    };
});
//# sourceMappingURL=Image.Contain.Example.js.map