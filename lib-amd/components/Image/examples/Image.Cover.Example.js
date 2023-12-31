define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Image", "office-ui-fabric-react/lib/Label"], function (require, exports, tslib_1, React, Image_1, Label_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImageCoverExample = function () {
        var imageProps = {
            src: 'http://placehold.it/500x500',
            imageFit: Image_1.ImageFit.cover,
        };
        return (React.createElement("div", null,
            React.createElement("p", null, "Setting the imageFit property to \"cover\" will cause the image to scale up or down proportionally, while cropping from either the top and bottom or sides to completely fill the frame."),
            React.createElement(Label_1.Label, null, "The image has a wider aspect ratio (more landscape) than the frame, so the image is scaled to fit the height and the sides are cropped evenly."),
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { alt: 'Example of the image fit value "cover" on an image wider than the frame.', width: 150, height: 250 })),
            React.createElement("br", null),
            React.createElement(Label_1.Label, null, "The image has a taller aspect ratio (more portrait) than the frame, so the image is scaled to fit the width and the top and bottom are cropped evenly."),
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { alt: 'Example of the image fit value "cover" on an image taller than the frame.', width: 250, height: 150 }))));
    };
});
//# sourceMappingURL=Image.Cover.Example.js.map