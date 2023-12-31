define(["require", "exports", "react", "./examples/Toggle.Basic.Example", "./examples/Toggle.CustomLabel.Example"], function (require, exports, React, Toggle_Basic_Example_1, Toggle_CustomLabel_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToggleBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Toggle/examples/Toggle.Basic.Example.tsx');
    var ToggleCustomLabelExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Toggle/examples/Toggle.CustomLabel.Example.tsx');
    exports.TogglePageProps = {
        title: 'Toggle',
        componentName: 'Toggle',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Toggle',
        examples: [
            {
                title: 'Basic Toggles',
                code: ToggleBasicExampleCode,
                view: React.createElement(Toggle_Basic_Example_1.ToggleBasicExample, null),
            },
            {
                title: 'Toggles with Custom Labels',
                code: ToggleCustomLabelExampleCode,
                view: React.createElement(Toggle_CustomLabel_Example_1.ToggleCustomLabelExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Toggle/docs/ToggleOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Toggle/docs/ToggleDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Toggle/docs/ToggleDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
        allowNativeProps: true,
        nativePropsElement: 'input',
    };
});
//# sourceMappingURL=Toggle.doc.js.map