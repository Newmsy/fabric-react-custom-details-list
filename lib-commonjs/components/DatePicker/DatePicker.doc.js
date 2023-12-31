"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DatePicker_Basic_Example_1 = require("./examples/DatePicker.Basic.Example");
var DatePicker_Disabled_Example_1 = require("./examples/DatePicker.Disabled.Example");
var DatePicker_WeekNumbers_Example_1 = require("./examples/DatePicker.WeekNumbers.Example");
var DatePicker_Required_Example_1 = require("./examples/DatePicker.Required.Example");
var DatePicker_Input_Example_1 = require("./examples/DatePicker.Input.Example");
var DatePicker_Format_Example_1 = require("./examples/DatePicker.Format.Example");
var DatePicker_Bounded_Example_1 = require("./examples/DatePicker.Bounded.Example");
var DatePickerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.Basic.Example.tsx');
var DatePickerDisabledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.Disabled.Example.tsx');
var DatePickerWeekNumbersExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.WeekNumbers.Example.tsx');
var DatePickerRequiredExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.Required.Example.tsx');
var DatePickerInputExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.Input.Example.tsx');
var DatePickerFormatExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.Format.Example.tsx');
var DatePickerBoundedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.Bounded.Example.tsx');
exports.DatePickerPageProps = {
    title: 'DatePicker',
    componentName: 'DatePicker',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/DatePicker',
    examples: [
        {
            title: 'Default DatePicker',
            code: DatePickerBasicExampleCode,
            view: React.createElement(DatePicker_Basic_Example_1.DatePickerBasicExample, null),
        },
        {
            title: 'Disabled DatePicker',
            code: DatePickerDisabledExampleCode,
            view: React.createElement(DatePicker_Disabled_Example_1.DatePickerDisabledExample, null),
        },
        {
            title: 'DatePicker with week numbers',
            code: DatePickerWeekNumbersExampleCode,
            view: React.createElement(DatePicker_WeekNumbers_Example_1.DatePickerWeekNumbersExample, null),
        },
        {
            title: 'DatePicker with required field',
            code: DatePickerRequiredExampleCode,
            view: React.createElement(DatePicker_Required_Example_1.DatePickerRequiredExample, null),
        },
        {
            title: 'DatePicker allows input date string',
            code: DatePickerInputExampleCode,
            view: React.createElement(DatePicker_Input_Example_1.DatePickerInputExample, null),
        },
        {
            title: 'DatePicker allows dates to be formatted',
            code: DatePickerFormatExampleCode,
            view: React.createElement(DatePicker_Format_Example_1.DatePickerFormatExample, null),
        },
        {
            title: 'DatePicker with date boundary (minDate, maxDate)',
            code: DatePickerBoundedExampleCode,
            view: React.createElement(DatePicker_Bounded_Example_1.DatePickerBoundedExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/docs/DatePickerOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/docs/DatePickerDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/docs/DatePickerDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=DatePicker.doc.js.map