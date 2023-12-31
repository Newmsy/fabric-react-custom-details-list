"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Image_1 = require("office-ui-fabric-react/lib-commonjs/Image");
var Label_1 = require("office-ui-fabric-react/lib-commonjs/Label");
exports.ImageNoneExample = function () {
    var imageProps = {
        src: 'http://placehold.it/500x250',
        imageFit: Image_1.ImageFit.none,
        width: 350,
        height: 150,
    };
    return (React.createElement("div", null,
        React.createElement("p", null, "By setting the imageFit property to \"none\", the image will remain at its natural size, even if the frame is made larger or smaller by setting the width and height props."),
        React.createElement(Label_1.Label, null, "The image is larger than the frame, so it is cropped to fit. The image is positioned at the upper left of the frame."),
        React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { alt: 'Example of the image fit value "none" on an image larger than the frame.' })),
        React.createElement("br", null),
        React.createElement(Label_1.Label, null, "The image is smaller than the frame, so there is empty space within the frame. The image is positioned at the upper left of the frame."),
        React.createElement(Image_1.Image, tslib_1.__assign({}, imageProps, { src: "http://placehold.it/100x100", alt: 'Example of the image fit value "none" on an image smaller than the frame.' }))));
};
//# sourceMappingURL=Image.None.Example.js.map