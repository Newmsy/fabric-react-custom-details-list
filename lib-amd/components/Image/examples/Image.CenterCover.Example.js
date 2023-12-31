define(["require", "exports", "tslib", "office-ui-fabric-react/lib/Image", "office-ui-fabric-react/lib/Label", "react"], function (require, exports, tslib_1, Image_1, Label_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImageCenterCoverExample = function () {
        var imageProps = {
            imageFit: Image_1.ImageFit.centerCover,
            width: 200,
            height: 200,
        };
        return (React.createElement("div", null,
            React.createElement("p", null, "Setting the imageFit property to \"centerCover\" will cause the image to scale up or down proportionally. Images smaller than their frame will be rendered as \"ImageFit.center\", while images larger than both the frame's height and width will render as \"ImageFit.cover\"."),
            React.createElement(Label_1.Label, null, "The image is smaller than the frame, so it's centered and rendered at its natural size."),
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/100x150", alt: 'Example of the image fit value "centerCover" on an image smaller than the frame.' })),
            React.createElement("br", null),
            React.createElement(Label_1.Label, null, "The image has a wider aspect ratio (more landscape) than the frame but is not as tall as the frame, so it's rendered at its natural size while cropping the sides."),
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/300x100", alt: 'Example of the image fit value "centerCover" on an image wider than the frame.' })),
            React.createElement("br", null),
            React.createElement(Label_1.Label, null, "The image has a taller aspect ratio (more portrait) than the frame but is not as wide as the frame, so it's rendered at its natural size while cropping the top and bottom."),
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/100x300", alt: 'Example of the image fit value "centerCover" on an image taller than the frame.' })),
            React.createElement("br", null),
            React.createElement(Label_1.Label, null, "These images are taller and wider than the frame, so they grow just enough to \"cover\" the frame area."),
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/400x500", alt: 'Example of the image fit value "centerCover" on an image taller and wider than the frame.' })),
            React.createElement("br", null),
            React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/500x400", alt: 'Example of the image fit value "centerCover" on an image taller and wider than the frame.' }))));
    };
});
//# sourceMappingURL=Image.CenterCover.Example.js.map