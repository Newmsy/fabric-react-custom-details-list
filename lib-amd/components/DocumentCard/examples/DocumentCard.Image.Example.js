define(["require", "exports", "react", "office-ui-fabric-react/lib/DocumentCard", "office-ui-fabric-react/lib/Image", "@uifabric/example-data"], function (require, exports, React, DocumentCard_1, Image_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var people = [
        { name: 'Annie Lindqvist', profileImageSrc: example_data_1.TestImages.personaFemale },
        { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
        { name: 'Aaron Reid', profileImageSrc: example_data_1.TestImages.personaMale },
        { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
    ];
    var oneNoteIconProps = {
        iconName: 'OneNoteLogo',
        styles: { root: { color: '#813a7c', fontSize: '120px', width: '120px', height: '120px' } },
    };
    exports.DocumentCardImageExample = function () {
        var cardStyles = {
            root: { display: 'inline-block', marginRight: 20, marginBottom: 20, width: 320 },
        };
        return (React.createElement("div", null,
            React.createElement(DocumentCard_1.DocumentCard, { "aria-label": 'Document Card with image. How to make a good design. ' +
                    'Last modified by Annie Lindqvist and 2 others in March 13, 2018.', styles: cardStyles, onClickHref: "http://bing.com" },
                React.createElement(DocumentCard_1.DocumentCardImage, { height: 150, imageFit: Image_1.ImageFit.cover, imageSrc: example_data_1.TestImages.documentPreviewTwo }),
                React.createElement(DocumentCard_1.DocumentCardDetails, null,
                    React.createElement(DocumentCard_1.DocumentCardTitle, { title: "How to make a good design", shouldTruncate: true })),
                React.createElement(DocumentCard_1.DocumentCardActivity, { activity: "Modified March 13, 2018", people: people.slice(0, 3) })),
            React.createElement(DocumentCard_1.DocumentCard, { "aria-label": 'Document Card with icon. How to make a good design. ' +
                    'Last modified by Christian Bergqvist in January 1, 2019.', styles: cardStyles, onClickHref: "http://bing.com" },
                React.createElement(DocumentCard_1.DocumentCardImage, { height: 150, imageFit: Image_1.ImageFit.cover, iconProps: oneNoteIconProps }),
                React.createElement(DocumentCard_1.DocumentCardDetails, null,
                    React.createElement(DocumentCard_1.DocumentCardTitle, { title: "How to make a good design", shouldTruncate: true })),
                React.createElement(DocumentCard_1.DocumentCardActivity, { activity: "Modified January 1, 2019", people: [people[3]] }))));
    };
});
//# sourceMappingURL=DocumentCard.Image.Example.js.map