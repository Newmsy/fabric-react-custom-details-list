"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var DocumentCard_1 = require("office-ui-fabric-react/lib-commonjs/DocumentCard");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var example_data_1 = require("@uifabric/example-data");
var conversationTileClass = Styling_1.mergeStyles({ height: 182 });
var people = [
    { name: 'Annie Lindqvist', profileImageSrc: example_data_1.TestImages.personaFemale },
    { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
    { name: 'Aaron Reid', profileImageSrc: example_data_1.TestImages.personaMale },
    { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
    { name: 'Greta Lundberg', profileImageSrc: example_data_1.TestImages.personaFemale },
    { name: 'Maor Sharitt', profileImageSrc: example_data_1.TestImages.personaMale },
    { name: 'Velatine Lourvric', profileImageSrc: '', initials: 'VL' },
    { name: 'Kat Larrson', profileImageSrc: example_data_1.TestImages.personaFemale },
];
exports.DocumentCardConversationExample = function () {
    var logoProps = {
        logoIcon: 'OutlookLogo',
    };
    var cardStyles = {
        root: { display: 'inline-block', marginRight: 20, width: 320 },
    };
    return (React.createElement("div", null,
        React.createElement(DocumentCard_1.DocumentCard, { "aria-label": 'Document Card with logo, text preview, and status. Conversation about annual report. ' +
                'Content preview. 3 attachments. Sent by Annie Lindqvist and 2 others in March 13, 2018.', styles: cardStyles, onClickHref: "http://bing.com" },
            React.createElement(DocumentCard_1.DocumentCardLogo, tslib_1.__assign({}, logoProps)),
            React.createElement("div", { className: conversationTileClass },
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: "Conversation about annual report: it has a very very long name which should be truncated.", shouldTruncate: true }),
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: 'This is the email content preview which is very very long. The email also has some more content. ' +
                        'The content continues. This is the last.', shouldTruncate: true, showAsSecondaryTitle: true }),
                React.createElement(DocumentCard_1.DocumentCardStatus, { statusIcon: "attach", status: "3 Attachments" })),
            React.createElement(DocumentCard_1.DocumentCardActivity, { activity: "Sent March 13, 2018", people: people.slice(0, 3) })),
        React.createElement(DocumentCard_1.DocumentCard, { "aria-label": 'Document Card with logo, text preview, and status. Further annual report conversation. ' +
                'Content preview. 3 attachments. Sent by Christian Bergqvist and 2 others in March 13, 2018.', styles: cardStyles, onClickHref: "http://bing.com" },
            React.createElement(DocumentCard_1.DocumentCardLogo, tslib_1.__assign({}, logoProps)),
            React.createElement("div", { className: conversationTileClass },
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: "Further annual report conversation" }),
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: "Another email content preview.", showAsSecondaryTitle: true }),
                React.createElement(DocumentCard_1.DocumentCardStatus, { statusIcon: "attach", status: " 3 Attachments" })),
            React.createElement(DocumentCard_1.DocumentCardActivity, { activity: "Sent March 13, 2018", people: people.slice(3, 6) })),
        React.createElement(DocumentCard_1.DocumentCard, { "aria-label": 'Document Card with logo and text preview. Conversation about annual report. Content preview. ' +
                'Sent by Velatine Lourvric and 1 other in March 13, 2018.', styles: cardStyles, onClickHref: "http://bing.com" },
            React.createElement(DocumentCard_1.DocumentCardLogo, tslib_1.__assign({}, logoProps)),
            React.createElement("div", { className: conversationTileClass },
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: "Conversation about annual report", shouldTruncate: true }),
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: "This is the email content preview. It has a second line.", shouldTruncate: true, showAsSecondaryTitle: true })),
            React.createElement(DocumentCard_1.DocumentCardActivity, { activity: "Sent March 13, 2018", people: people.slice(6) }))));
};
//# sourceMappingURL=DocumentCard.Conversation.Example.js.map