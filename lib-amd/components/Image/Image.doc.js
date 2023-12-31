define(["require", "exports", "react", "./examples/Image.Center.Example", "./examples/Image.CenterContain.Example", "./examples/Image.CenterCover.Example", "./examples/Image.Contain.Example", "./examples/Image.Cover.Example", "./examples/Image.Default.Example", "./examples/Image.MaximizeFrame.Example", "./examples/Image.None.Example", "./ImagePage.global.scss"], function (require, exports, React, Image_Center_Example_1, Image_CenterContain_Example_1, Image_CenterCover_Example_1, Image_Contain_Example_1, Image_Cover_Example_1, Image_Default_Example_1, Image_MaximizeFrame_Example_1, Image_None_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageDefaultExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Image/examples/Image.Default.Example.tsx');
    var ImageCenterExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Image/examples/Image.Center.Example.tsx');
    var ImageContainExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Image/examples/Image.Contain.Example.tsx');
    var ImageCoverExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Image/examples/Image.Cover.Example.tsx');
    var ImageCenterContainExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Image/examples/Image.CenterContain.Example.tsx');
    var ImageCenterCoverExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Image/examples/Image.CenterCover.Example.tsx');
    var ImageNoneExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Image/examples/Image.None.Example.tsx');
    var ImageMaximizeFrameExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Image/examples/Image.MaximizeFrame.Example.tsx');
    exports.ImagePageProps = {
        title: 'Image',
        componentName: 'Image',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Image',
        examples: [
            {
                title: 'ImageFit: Not specified',
                code: ImageDefaultExampleCode,
                view: React.createElement(Image_Default_Example_1.ImageDefaultExample, null),
            },
            {
                title: 'ImageFit: None',
                code: ImageNoneExampleCode,
                view: React.createElement(Image_None_Example_1.ImageNoneExample, null),
            },
            {
                title: 'ImageFit: Center',
                code: ImageCenterExampleCode,
                view: React.createElement(Image_Center_Example_1.ImageCenterExample, null),
            },
            {
                title: 'ImageFit: Contain',
                code: ImageContainExampleCode,
                view: React.createElement(Image_Contain_Example_1.ImageContainExample, null),
            },
            {
                title: 'ImageFit: Cover',
                code: ImageCoverExampleCode,
                view: React.createElement(Image_Cover_Example_1.ImageCoverExample, null),
            },
            {
                title: 'ImageFit: CenterContain',
                code: ImageCenterContainExampleCode,
                view: React.createElement(Image_CenterContain_Example_1.ImageCenterContainExample, null),
            },
            {
                title: 'ImageFit: CenterCover',
                code: ImageCenterCoverExampleCode,
                view: React.createElement(Image_CenterCover_Example_1.ImageCenterCoverExample, null),
            },
            {
                title: 'Maximizing the image frame',
                code: ImageMaximizeFrameExampleCode,
                view: React.createElement(Image_MaximizeFrame_Example_1.ImageMaximizeFrameExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Image/docs/ImageOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Image/docs/ImageDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Image/docs/ImageDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
        allowNativeProps: true,
        nativePropsElement: 'img',
    };
});
//# sourceMappingURL=Image.doc.js.map