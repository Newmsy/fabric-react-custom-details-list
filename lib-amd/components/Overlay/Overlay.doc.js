define(["require", "exports", "react", "./examples/Overlay.Dark.Example", "./examples/Overlay.Light.Example"], function (require, exports, React, Overlay_Dark_Example_1, Overlay_Light_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OverlayLightExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Overlay/examples/Overlay.Light.Example.tsx');
    var OverlayDarkExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Overlay/examples/Overlay.Dark.Example.tsx');
    exports.OverlayPageProps = {
        title: 'Overlay',
        componentName: 'Overlay',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Overlay',
        examples: [
            {
                title: 'Light',
                code: OverlayLightExampleCode,
                view: React.createElement(Overlay_Light_Example_1.OverlayLightExample, null),
            },
            {
                title: 'Dark',
                code: OverlayDarkExampleCode,
                view: React.createElement(Overlay_Dark_Example_1.OverlayDarkExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Overlay/docs/OverlayOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Overlay/docs/OverlayDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Overlay/docs/OverlayDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
        allowNativeProps: true,
    };
});
//# sourceMappingURL=Overlay.doc.js.map