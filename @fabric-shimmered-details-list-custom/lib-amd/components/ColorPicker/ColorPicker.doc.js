define(["require", "exports", "react", "./examples/ColorPicker.Basic.Example"], function (require, exports, React, ColorPicker_Basic_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ColorPickerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ColorPicker/examples/ColorPicker.Basic.Example.tsx');
    exports.ColorPickerPageProps = {
        title: 'ColorPicker',
        componentName: 'ColorPicker',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ColorPicker',
        examples: [
            {
                title: 'Default ColorPicker',
                code: ColorPickerBasicExampleCode,
                view: React.createElement(ColorPicker_Basic_Example_1.ColorPickerBasicExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/ColorPicker/docs/ColorPickerOverview.md'),
        bestPractices: '',
        dos: '',
        donts: '',
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=ColorPicker.doc.js.map