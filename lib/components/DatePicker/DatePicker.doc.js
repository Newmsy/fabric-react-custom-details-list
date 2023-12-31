import * as React from 'react';
import { DatePickerBasicExample } from './examples/DatePicker.Basic.Example';
import { DatePickerDisabledExample } from './examples/DatePicker.Disabled.Example';
import { DatePickerWeekNumbersExample } from './examples/DatePicker.WeekNumbers.Example';
import { DatePickerRequiredExample } from './examples/DatePicker.Required.Example';
import { DatePickerInputExample } from './examples/DatePicker.Input.Example';
import { DatePickerFormatExample } from './examples/DatePicker.Format.Example';
import { DatePickerBoundedExample } from './examples/DatePicker.Bounded.Example';
var DatePickerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.Basic.Example.tsx');
var DatePickerDisabledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.Disabled.Example.tsx');
var DatePickerWeekNumbersExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.WeekNumbers.Example.tsx');
var DatePickerRequiredExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.Required.Example.tsx');
var DatePickerInputExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.Input.Example.tsx');
var DatePickerFormatExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.Format.Example.tsx');
var DatePickerBoundedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DatePicker/examples/DatePicker.Bounded.Example.tsx');
export var DatePickerPageProps = {
    title: 'DatePicker',
    componentName: 'DatePicker',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/DatePicker',
    examples: [
        {
            title: 'Default DatePicker',
            code: DatePickerBasicExampleCode,
            view: React.createElement(DatePickerBasicExample, null),
        },
        {
            title: 'Disabled DatePicker',
            code: DatePickerDisabledExampleCode,
            view: React.createElement(DatePickerDisabledExample, null),
        },
        {
            title: 'DatePicker with week numbers',
            code: DatePickerWeekNumbersExampleCode,
            view: React.createElement(DatePickerWeekNumbersExample, null),
        },
        {
            title: 'DatePicker with required field',
            code: DatePickerRequiredExampleCode,
            view: React.createElement(DatePickerRequiredExample, null),
        },
        {
            title: 'DatePicker allows input date string',
            code: DatePickerInputExampleCode,
            view: React.createElement(DatePickerInputExample, null),
        },
        {
            title: 'DatePicker allows dates to be formatted',
            code: DatePickerFormatExampleCode,
            view: React.createElement(DatePickerFormatExample, null),
        },
        {
            title: 'DatePicker with date boundary (minDate, maxDate)',
            code: DatePickerBoundedExampleCode,
            view: React.createElement(DatePickerBoundedExample, null),
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