define(["require", "exports", "react", "./examples/SwatchColorPicker.Basic.Example"], function (require, exports, React, SwatchColorPicker_Basic_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SwatchColorPickerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/examples/SwatchColorPicker.Basic.Example.tsx');
    exports.SwatchColorPickerPageProps = {
        title: 'SwatchColorPicker',
        componentName: 'SwatchColorPicker',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/SwatchColorPicker',
        examples: [
            {
                title: 'SwatchColorPicker',
                code: SwatchColorPickerBasicExampleCode,
                view: React.createElement(SwatchColorPicker_Basic_Example_1.SwatchColorPickerBasicExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/docs/SwatchColorPickerOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/docs/SwatchColorPickerDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/docs/SwatchColorPickerDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=SwatchColorPicker.doc.js.map