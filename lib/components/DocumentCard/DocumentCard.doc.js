import * as React from 'react';
import { DocumentCardBasicExample } from './examples/DocumentCard.Basic.Example';
import { DocumentCardCompactExample } from './examples/DocumentCard.Compact.Example';
import { DocumentCardCompleteExample } from './examples/DocumentCard.Complete.Example';
import { DocumentCardImageExample } from './examples/DocumentCard.Image.Example';
import { DocumentCardConversationExample } from './examples/DocumentCard.Conversation.Example';
var DocumentCardBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/examples/DocumentCard.Basic.Example.tsx');
var DocumentCardCompactExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/examples/DocumentCard.Compact.Example.tsx');
var DocumentCardCompleteExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/examples/DocumentCard.Complete.Example.tsx');
var DocumentCardImageExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/examples/DocumentCard.Image.Example.tsx');
var DocumentCardConversationExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/examples/DocumentCard.Conversation.Example.tsx');
export var DocumentCardPageProps = {
    title: 'DocumentCard',
    componentName: 'DocumentCard',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/DocumentCard',
    examples: [
        {
            title: 'Default DocumentCard',
            code: DocumentCardBasicExampleCode,
            view: (React.createElement(React.Fragment, null,
                React.createElement("p", null, "The default configuration for a card represents a single file, with space to denote the last significant event and the person involved."),
                React.createElement(DocumentCardBasicExample, null))),
        },
        {
            title: 'DocumentCard with compact layout ',
            code: DocumentCardCompactExampleCode,
            view: (React.createElement(React.Fragment, null,
                React.createElement("p", null, "When showing a card on a mobile device or in a narrow layout, you may choose this compact card, which helps the filename remain scannable while giving space for a preview thumbnail."),
                React.createElement("p", null, "This example also shows some features which are usable with either compact or regular cards, such as showing an icon instead of a document preview image."),
                React.createElement(DocumentCardCompactExample, null))),
        },
        {
            title: 'DocumentCard with multiple items, commands, and views',
            code: DocumentCardCompleteExampleCode,
            view: (React.createElement(React.Fragment, null,
                React.createElement("p", null, "This example shows a couple of optional capabilities, including having a card represent multiple items, exposing up to three relevant commands, and showing the number of views in the bottom right corner."),
                React.createElement(DocumentCardCompleteExample, null))),
        },
        {
            title: 'DocumentCard with image or icon',
            code: DocumentCardImageExampleCode,
            view: (React.createElement(React.Fragment, null,
                React.createElement("p", null, "This example shows a simplified method of displaying an image or icon on the DocumentCard."),
                React.createElement(DocumentCardImageExample, null))),
        },
        {
            title: 'Conversation cards with logo, text preview, and status',
            code: DocumentCardConversationExampleCode,
            view: (React.createElement(React.Fragment, null,
                React.createElement("p", null, "This example shows the logo, text preview, and status used for conversation cards."),
                React.createElement(DocumentCardConversationExample, null))),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/docs/DocumentCardOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/docs/DocumentCardDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/docs/DocumentCardDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=DocumentCard.doc.js.map