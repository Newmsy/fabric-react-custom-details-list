import * as React from 'react';
import { TextRampExample } from './examples/Text.Ramp.Example';
import { TextWrapExample } from './examples/Text.Wrap.Example';
import { TextBlockExample } from './examples/Text.Block.Example';
var TextRampExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Text/examples/Text.Ramp.Example.tsx');
var TextWrapExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Text/examples/Text.Wrap.Example.tsx');
var TextBlockExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Text/examples/Text.Block.Example.tsx');
export var TextPageProps = {
    title: 'Text',
    componentName: 'Text',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Text',
    examples: [
        {
            title: 'Text Ramp Example',
            code: TextRampExampleCode,
            view: React.createElement(TextRampExample, null),
        },
        {
            title: 'Text Wrap Example',
            code: TextWrapExampleCode,
            view: React.createElement(TextWrapExample, null),
        },
        {
            title: 'Text Block Example',
            code: TextBlockExampleCode,
            view: React.createElement(TextBlockExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Text/docs/TextOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Text/docs/TextDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Text/docs/TextDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=Text.doc.js.map