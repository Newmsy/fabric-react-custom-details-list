import { __assign } from "tslib";
import * as React from 'react';
import { DocumentCard, DocumentCardActivity, DocumentCardTitle, DocumentCardLogo, DocumentCardStatus, } from 'office-ui-fabric-react/lib/DocumentCard';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { TestImages } from '@uifabric/example-data';
var conversationTileClass = mergeStyles({ height: 182 });
var people = [
    { name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale },
    { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
    { name: 'Aaron Reid', profileImageSrc: TestImages.personaMale },
    { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
    { name: 'Greta Lundberg', profileImageSrc: TestImages.personaFemale },
    { name: 'Maor Sharitt', profileImageSrc: TestImages.personaMale },
    { name: 'Velatine Lourvric', profileImageSrc: '', initials: 'VL' },
    { name: 'Kat Larrson', profileImageSrc: TestImages.personaFemale },
];
export var DocumentCardConversationExample = function () {
    var logoProps = {
        logoIcon: 'OutlookLogo',
    };
    var cardStyles = {
        root: { display: 'inline-block', marginRight: 20, width: 320 },
    };
    return (React.createElement("div", null,
        React.createElement(DocumentCard, { "aria-label": 'Document Card with logo, text preview, and status. Conversation about annual report. ' +
                'Content preview. 3 attachments. Sent by Annie Lindqvist and 2 others in March 13, 2018.', styles: cardStyles, onClickHref: "http://bing.com" },
            React.createElement(DocumentCardLogo, __assign({}, logoProps)),
            React.createElement("div", { className: conversationTileClass },
                React.createElement(DocumentCardTitle, { title: "Conversation about annual report: it has a very very long name which should be truncated.", shouldTruncate: true }),
                React.createElement(DocumentCardTitle, { title: 'This is the email content preview which is very very long. The email also has some more content. ' +
                        'The content continues. This is the last.', shouldTruncate: true, showAsSecondaryTitle: true }),
                React.createElement(DocumentCardStatus, { statusIcon: "attach", status: "3 Attachments" })),
            React.createElement(DocumentCardActivity, { activity: "Sent March 13, 2018", people: people.slice(0, 3) })),
        React.createElement(DocumentCard, { "aria-label": 'Document Card with logo, text preview, and status. Further annual report conversation. ' +
                'Content preview. 3 attachments. Sent by Christian Bergqvist and 2 others in March 13, 2018.', styles: cardStyles, onClickHref: "http://bing.com" },
            React.createElement(DocumentCardLogo, __assign({}, logoProps)),
            React.createElement("div", { className: conversationTileClass },
                React.createElement(DocumentCardTitle, { title: "Further annual report conversation" }),
                React.createElement(DocumentCardTitle, { title: "Another email content preview.", showAsSecondaryTitle: true }),
                React.createElement(DocumentCardStatus, { statusIcon: "attach", status: " 3 Attachments" })),
            React.createElement(DocumentCardActivity, { activity: "Sent March 13, 2018", people: people.slice(3, 6) })),
        React.createElement(DocumentCard, { "aria-label": 'Document Card with logo and text preview. Conversation about annual report. Content preview. ' +
                'Sent by Velatine Lourvric and 1 other in March 13, 2018.', styles: cardStyles, onClickHref: "http://bing.com" },
            React.createElement(DocumentCardLogo, __assign({}, logoProps)),
            React.createElement("div", { className: conversationTileClass },
                React.createElement(DocumentCardTitle, { title: "Conversation about annual report", shouldTruncate: true }),
                React.createElement(DocumentCardTitle, { title: "This is the email content preview. It has a second line.", shouldTruncate: true, showAsSecondaryTitle: true })),
            React.createElement(DocumentCardActivity, { activity: "Sent March 13, 2018", people: people.slice(6) }))));
};
//# sourceMappingURL=DocumentCard.Conversation.Example.js.map