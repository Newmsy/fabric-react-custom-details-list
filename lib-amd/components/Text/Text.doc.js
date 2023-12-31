define(["require", "exports", "react", "./examples/Text.Ramp.Example", "./examples/Text.Wrap.Example", "./examples/Text.Block.Example"], function (require, exports, React, Text_Ramp_Example_1, Text_Wrap_Example_1, Text_Block_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextRampExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Text/examples/Text.Ramp.Example.tsx');
    var TextWrapExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Text/examples/Text.Wrap.Example.tsx');
    var TextBlockExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Text/examples/Text.Block.Example.tsx');
    exports.TextPageProps = {
        title: 'Text',
        componentName: 'Text',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Text',
        examples: [
            {
                title: 'Text Ramp Example',
                code: TextRampExampleCode,
                view: React.createElement(Text_Ramp_Example_1.TextRampExample, null),
            },
            {
                title: 'Text Wrap Example',
                code: TextWrapExampleCode,
                view: React.createElement(Text_Wrap_Example_1.TextWrapExample, null),
            },
            {
                title: 'Text Block Example',
                code: TextBlockExampleCode,
                view: React.createElement(Text_Block_Example_1.TextBlockExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Text/docs/TextOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Text/docs/TextDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Text/docs/TextDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=Text.doc.js.map