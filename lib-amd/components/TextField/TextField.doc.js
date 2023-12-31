define(["require", "exports", "react", "./examples/TextField.Basic.Example", "./examples/TextField.Borderless.Example", "./examples/TextField.CustomRender.Example", "./examples/TextField.ErrorMessage.Example", "./examples/TextField.Multiline.Example", "./examples/TextField.Controlled.Example", "./examples/TextField.PrefixAndSuffix.Example", "./examples/TextField.Styled.Example", "./examples/TextField.Masked.Example"], function (require, exports, React, TextField_Basic_Example_1, TextField_Borderless_Example_1, TextField_CustomRender_Example_1, TextField_ErrorMessage_Example_1, TextField_Multiline_Example_1, TextField_Controlled_Example_1, TextField_PrefixAndSuffix_Example_1, TextField_Styled_Example_1, TextField_Masked_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextFieldBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TextField/examples/TextField.Basic.Example.tsx');
    var TextFieldBorderlessExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TextField/examples/TextField.Borderless.Example.tsx');
    var TextFieldCustomRenderExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TextField/examples/TextField.CustomRender.Example.tsx');
    var TextFieldErrorMessageExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TextField/examples/TextField.ErrorMessage.Example.tsx');
    var TextFieldMultilineExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TextField/examples/TextField.Multiline.Example.tsx');
    var TextFieldControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TextField/examples/TextField.Controlled.Example.tsx');
    var TextFieldPrefixAndSuffixExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TextField/examples/TextField.PrefixAndSuffix.Example.tsx');
    var TextFieldStyledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TextField/examples/TextField.Styled.Example.tsx');
    var TextFieldMaskedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TextField/examples/TextField.Masked.Example.tsx');
    exports.TextFieldPageProps = {
        title: 'TextField',
        componentName: 'TextField',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/TextField',
        examples: [
            {
                title: 'Basic TextFields',
                code: TextFieldBasicExampleCode,
                view: React.createElement(TextField_Basic_Example_1.TextFieldBasicExample, null),
            },
            {
                title: 'Controlled TextFields',
                code: TextFieldControlledExampleCode,
                view: React.createElement(TextField_Controlled_Example_1.TextFieldControlledExample, null),
            },
            {
                title: 'Multiline TextField',
                code: TextFieldMultilineExampleCode,
                view: React.createElement(TextField_Multiline_Example_1.TextFieldMultilineExample, null),
            },
            {
                title: 'Underlined and borderless TextFields',
                code: TextFieldBorderlessExampleCode,
                view: React.createElement(TextField_Borderless_Example_1.TextFieldBorderlessExample, null),
            },
            {
                title: 'Customizable Masked TextField',
                code: TextFieldMaskedExampleCode,
                view: React.createElement(TextField_Masked_Example_1.TextFieldMaskedExample, null),
            },
            {
                title: 'TextField with prefix and/or suffix',
                code: TextFieldPrefixAndSuffixExampleCode,
                view: React.createElement(TextField_PrefixAndSuffix_Example_1.TextFieldPrefixAndSuffixExample, null),
            },
            {
                title: 'TextFields with custom rendering',
                code: TextFieldCustomRenderExampleCode,
                view: React.createElement(TextField_CustomRender_Example_1.TextFieldCustomRenderExample, null),
            },
            {
                title: 'TextField error message variations',
                code: TextFieldErrorMessageExampleCode,
                view: React.createElement(TextField_ErrorMessage_Example_1.TextFieldErrorMessageExample, null),
            },
            {
                title: 'TextField subcomponent styling',
                code: TextFieldStyledExampleCode,
                view: React.createElement(TextField_Styled_Example_1.TextFieldStyledExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/TextField/docs/TextFieldOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/TextField/docs/TextFieldDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/TextField/docs/TextFieldDonts.md'),
        isHeaderVisible: false,
        isFeedbackVisible: true,
        allowNativeProps: true,
        nativePropsElement: ['input', 'textarea'],
    };
});
//# sourceMappingURL=TextField.doc.js.map