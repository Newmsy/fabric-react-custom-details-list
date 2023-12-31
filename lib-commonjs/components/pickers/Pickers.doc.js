"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Picker_CustomResult_Example_1 = require("./examples/Picker.CustomResult.Example");
var TagPicker_Basic_Example_1 = require("./examples/TagPicker.Basic.Example");
var TagPickerExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/examples/TagPicker.Basic.Example.tsx');
var PickerCustomResultExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/examples/Picker.CustomResult.Example.tsx');
exports.PickersPageProps = {
    title: 'Pickers',
    componentName: 'Pickers',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Pickers',
    examples: [
        {
            title: 'Tag Picker',
            code: TagPickerExampleCode,
            view: React.createElement(TagPicker_Basic_Example_1.TagPickerBasicExample, null),
        },
        {
            title: 'Custom Picker (Document Picker)',
            code: PickerCustomResultExampleCode,
            view: React.createElement(Picker_CustomResult_Example_1.PickerCustomResultExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/pickers/docs/PickersOverview.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=Pickers.doc.js.map