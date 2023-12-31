define(["require", "exports", "react", "./examples/Dropdown.Basic.Example", "./examples/Dropdown.Controlled.Example", "./examples/Dropdown.ControlledMulti.Example", "./examples/Dropdown.Custom.Example", "./examples/Dropdown.Error.Example", "./examples/Dropdown.Required.Example"], function (require, exports, React, Dropdown_Basic_Example_1, Dropdown_Controlled_Example_1, Dropdown_ControlledMulti_Example_1, Dropdown_Custom_Example_1, Dropdown_Error_Example_1, Dropdown_Required_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DropdownBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dropdown/examples/Dropdown.Basic.Example.tsx');
    var DropdownControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dropdown/examples/Dropdown.Controlled.Example.tsx');
    var DropdownControlledMultiExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dropdown/examples/Dropdown.ControlledMulti.Example.tsx');
    var DropdownCustomExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dropdown/examples/Dropdown.Custom.Example.tsx');
    var DropdownErrorExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dropdown/examples/Dropdown.Error.Example.tsx');
    var DropdownRequiredExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dropdown/examples/Dropdown.Required.Example.tsx');
    exports.DropdownPageProps = {
        title: 'Dropdown',
        componentName: 'Dropdown',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Dropdown',
        examples: [
            {
                title: 'Basic Dropdowns',
                code: DropdownBasicExampleCode,
                view: React.createElement(Dropdown_Basic_Example_1.DropdownBasicExample, null),
            },
            {
                title: 'Controlled single-select Dropdown',
                code: DropdownControlledExampleCode,
                view: React.createElement(Dropdown_Controlled_Example_1.DropdownControlledExample, null),
            },
            {
                title: 'Controlled multi-select Dropdown',
                code: DropdownControlledMultiExampleCode,
                view: React.createElement(Dropdown_ControlledMulti_Example_1.DropdownControlledMultiExample, null),
            },
            {
                title: 'Customized Dropdown',
                code: DropdownCustomExampleCode,
                view: React.createElement(Dropdown_Custom_Example_1.DropdownCustomExample, null),
            },
            {
                title: 'Dropdown with error message',
                code: DropdownErrorExampleCode,
                view: React.createElement(Dropdown_Error_Example_1.DropdownErrorExample, null),
            },
            {
                title: 'Required Dropdown',
                code: DropdownRequiredExampleCode,
                view: (React.createElement(React.Fragment, null,
                    React.createElement("p", null, "This example also demonstrates how to programmatically set focus on and open a Dropdown."),
                    React.createElement(Dropdown_Required_Example_1.DropdownRequiredExample, null))),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Dropdown/docs/DropdownOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Dropdown/docs/DropdownDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Dropdown/docs/DropdownDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
        allowNativeProps: true,
    };
});
//# sourceMappingURL=Dropdown.doc.js.map