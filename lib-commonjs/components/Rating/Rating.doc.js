"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Rating_Basic_Example_1 = require("./examples/Rating.Basic.Example");
var Rating_ButtonControlled_Example_1 = require("./examples/Rating.ButtonControlled.Example");
var RatingBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Rating/examples/Rating.Basic.Example.tsx');
var RatingButtonControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Rating/examples/Rating.ButtonControlled.Example.tsx');
exports.RatingPageProps = {
    title: 'Rating',
    componentName: 'Rating',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Rating',
    examples: [
        {
            title: 'Rating',
            code: RatingBasicExampleCode,
            view: React.createElement(Rating_Basic_Example_1.RatingBasicExample, null),
        },
        {
            title: 'Button Controlled Rating',
            code: RatingButtonControlledExampleCode,
            view: React.createElement(Rating_ButtonControlled_Example_1.RatingButtonControlledExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Rating/docs/RatingOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Rating/docs/RatingDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Rating/docs/RatingDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=Rating.doc.js.map