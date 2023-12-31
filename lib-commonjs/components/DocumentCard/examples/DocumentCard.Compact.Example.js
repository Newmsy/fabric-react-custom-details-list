"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var DocumentCard_1 = require("office-ui-fabric-react/lib-commonjs/DocumentCard");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var example_data_1 = require("@uifabric/example-data");
var stackTokens = { childrenGap: 20 };
var theme = Styling_1.getTheme();
var palette = theme.palette, fonts = theme.fonts;
var people = [
    { name: 'Annie Lindqvist', profileImageSrc: example_data_1.TestImages.personaFemale },
    { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
    { name: 'Aaron Reid', profileImageSrc: example_data_1.TestImages.personaMale },
    { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
];
var previewPropsUsingIcon = {
    previewImages: [
        {
            previewIconProps: {
                iconName: 'OpenFile',
                styles: { root: { fontSize: fonts.superLarge.fontSize, color: palette.white } },
            },
            width: 144,
        },
    ],
    styles: { previewIcon: { backgroundColor: palette.themePrimary } },
};
var previewProps = {
    getOverflowDocumentCountText: function (overflowCount) { return "+" + overflowCount + " more"; },
    previewImages: [
        {
            name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: example_data_1.TestImages.documentPreview,
            iconSrc: example_data_1.TestImages.iconPpt,
            width: 144,
        },
        {
            name: 'New Contoso Collaboration for Conference Presentation Draft',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: example_data_1.TestImages.documentPreviewTwo,
            iconSrc: example_data_1.TestImages.iconPpt,
            width: 144,
        },
        {
            name: 'Spec Sheet for design',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: example_data_1.TestImages.documentPreviewThree,
            iconSrc: example_data_1.TestImages.iconPpt,
            width: 144,
        },
        {
            name: 'Contoso Marketing Presentation',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: example_data_1.TestImages.documentPreview,
            iconSrc: example_data_1.TestImages.iconPpt,
            width: 144,
        },
    ],
};
var previewOutlookUsingIcon = {
    previewImages: [
        {
            previewIconProps: {
                iconName: 'OutlookLogo',
                styles: {
                    root: {
                        fontSize: fonts.superLarge.fontSize,
                        color: '#0078d7',
                        backgroundColor: palette.neutralLighterAlt,
                    },
                },
            },
            width: 144,
        },
    ],
    styles: {
        previewIcon: { backgroundColor: palette.neutralLighterAlt },
    },
};
exports.DocumentCardCompactExample = function () {
    return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
        React.createElement(DocumentCard_1.DocumentCard, { "aria-label": "Document Card with document preview. Revenue stream proposal fiscal year 2016 version 2.\n      Created by Roko Kolar a few minutes ago", type: DocumentCard_1.DocumentCardType.compact, onClickHref: "http://bing.com" },
            React.createElement(DocumentCard_1.DocumentCardPreview, { previewImages: [previewProps.previewImages[0]] }),
            React.createElement(DocumentCard_1.DocumentCardDetails, null,
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: "Revenue stream proposal fiscal year 2016 version02.pptx", shouldTruncate: true }),
                React.createElement(DocumentCard_1.DocumentCardActivity, { activity: "Created a few minutes ago", people: [people[1]] }))),
        React.createElement(DocumentCard_1.DocumentCard, { "aria-label": 'Document Card with folder or site activity. 4 files were uploaded. ' +
                'Created by Annie Lindqvist a few minutes ago', type: DocumentCard_1.DocumentCardType.compact, onClickHref: "http://bing.com" },
            React.createElement(DocumentCard_1.DocumentCardPreview, tslib_1.__assign({}, previewProps)),
            React.createElement(DocumentCard_1.DocumentCardDetails, null,
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: "4 files were uploaded", shouldTruncate: true }),
                React.createElement(DocumentCard_1.DocumentCardActivity, { activity: "Created a few minutes ago", people: [people[0]] }))),
        React.createElement(DocumentCard_1.DocumentCard, { "aria-label": "Document Card with icon. View and share files. Created by Aaron Reid a few minutes ago", type: DocumentCard_1.DocumentCardType.compact, onClickHref: "http://bing.com" },
            React.createElement(DocumentCard_1.DocumentCardPreview, tslib_1.__assign({}, previewPropsUsingIcon)),
            React.createElement(DocumentCard_1.DocumentCardDetails, null,
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: "View and share files", shouldTruncate: true }),
                React.createElement(DocumentCard_1.DocumentCardActivity, { activity: "Created a few minutes ago", people: [people[2]] }))),
        React.createElement(DocumentCard_1.DocumentCard, { "aria-label": 'Document Card with email conversation. Conversation about takeaways from annual SharePoint conference. ' +
                'Sent by Christian Bergqvist a few minutes ago', type: DocumentCard_1.DocumentCardType.compact, onClickHref: "http://bing.com" },
            React.createElement(DocumentCard_1.DocumentCardPreview, tslib_1.__assign({}, previewOutlookUsingIcon)),
            React.createElement(DocumentCard_1.DocumentCardDetails, null,
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: "Conversation about takeaways from annual SharePoint conference", shouldTruncate: true }),
                React.createElement(DocumentCard_1.DocumentCardActivity, { activity: "Sent a few minutes ago", people: [people[3]] })))));
};
//# sourceMappingURL=DocumentCard.Compact.Example.js.map