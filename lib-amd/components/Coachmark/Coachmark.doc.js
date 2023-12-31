define(["require", "exports", "react", "./examples/Coachmark.Basic.Example"], function (require, exports, React, Coachmark_Basic_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CoachmarkBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Coachmark/examples/Coachmark.Basic.Example.tsx');
    exports.CoachmarkPageProps = {
        title: 'Coachmark',
        componentName: 'Coachmark',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Coachmark',
        examples: [
            {
                title: 'Coachmark Basic',
                code: CoachmarkBasicExampleCode,
                view: React.createElement(Coachmark_Basic_Example_1.CoachmarkBasicExample, null),
                isScrollable: false,
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Coachmark/docs/CoachmarkOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Coachmark/docs/CoachmarkDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Coachmark/docs/CoachmarkDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=Coachmark.doc.js.map