define(["require", "exports", "react", "./examples/VerticalDivider.Basic.Example", "./examples/VerticalDivider.Custom.Example"], function (require, exports, React, VerticalDivider_Basic_Example_1, VerticalDivider_Custom_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VerticalDividerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Divider/examples/VerticalDivider.Basic.Example.tsx');
    var VerticalDividerCustomExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Divider/examples/VerticalDivider.Custom.Example.tsx');
    exports.DividerPageProps = {
        title: 'Divider',
        componentName: 'Divider',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Divider',
        examples: [
            {
                title: 'Vertical Divider',
                code: VerticalDividerBasicExampleCode,
                view: React.createElement(VerticalDivider_Basic_Example_1.VerticalDividerBasicExample, null),
            },
            {
                title: 'Custom Vertical Divider',
                code: VerticalDividerCustomExampleCode,
                view: React.createElement(VerticalDivider_Custom_Example_1.VerticalDividerCustomExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Divider/docs/DividerOverview.md'),
        bestPractices: require('!raw-loader!office-ui-fabric-react/src/components/Divider/docs/DividerBestPractices.md'),
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Divider/docs/DividerDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Divider/docs/DividerDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=Divider.doc.js.map