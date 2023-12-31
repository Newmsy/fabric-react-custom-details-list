import { __assign } from "tslib";
import * as React from 'react';
import { ActivityItem, Link, mergeStyleSets } from 'office-ui-fabric-react';
import { TestImages } from '@uifabric/example-data';
var classNames = mergeStyleSets({
    exampleRoot: {
        marginTop: '20px',
    },
    nameText: {
        fontWeight: 'bold',
    },
});
export var ActivityItemPersonaExample = function () {
    // tslint:disable:jsx-no-lambda
    var activityItemExamples = [
        {
            key: 1,
            activityDescription: [
                React.createElement(Link, { key: 1, className: classNames.nameText, onClick: function () {
                        alert('A name was clicked.');
                    } }, "Jack Howden"),
                React.createElement("span", { key: 2 }, " renamed "),
                React.createElement("span", { key: 3, className: classNames.nameText }, "DocumentTitle.docx"),
            ],
            activityPersonas: [{ imageUrl: TestImages.personaMale }],
            comments: 'Hello, this is the text of my basic comment!',
            timeStamp: '23m ago',
        },
        {
            key: 2,
            activityDescription: [
                React.createElement(Link, { key: 1, className: classNames.nameText, onClick: function () {
                        alert('A name was clicked.');
                    } }, "Javiera M\u00E1rquez"),
                React.createElement("span", { key: 2 }, " and "),
                React.createElement(Link, { key: 3, className: classNames.nameText, onClick: function () {
                        alert('A name was clicked.');
                    } }, "Amelia Poval\u0456y"),
                React.createElement("span", { key: 4 }, " edited "),
                React.createElement(Link, { key: 5, className: classNames.nameText, onClick: function () {
                        alert('A document was clicked.');
                    } }, "SpreadsheetTitle.xlsx"),
            ],
            activityPersonas: [{ imageInitials: 'JM', text: 'Javiera Márquez' }, { imageUrl: TestImages.personaFemale }],
            timeStamp: '9:27 am',
        },
        {
            key: 3,
            activityDescription: [
                React.createElement(Link, { key: 1, className: classNames.nameText, onClick: function () {
                        alert('A name was clicked.');
                    } }, "Robert Larsson"),
                React.createElement("span", { key: 2 }, " and "),
                React.createElement(Link, { key: 3, className: classNames.nameText, onClick: function () {
                        alert('A name was clicked.');
                    } }, "2 others"),
                React.createElement("span", { key: 4 }, " commented "),
            ],
            activityPersonas: [
                { imageInitials: 'RL', text: 'Robert Larsson' },
                { imageUrl: TestImages.personaMale },
                { imageUrl: TestImages.personaFemale },
            ],
            timeStamp: '3 days ago',
        },
        {
            key: 4,
            activityDescription: [
                React.createElement(Link, { key: 1, className: classNames.nameText, onClick: function () {
                        alert('A name was clicked.');
                    } }, "Jin Cheng"),
                React.createElement("span", { key: 2 }, " and "),
                React.createElement(Link, { key: 3, className: classNames.nameText, onClick: function () {
                        alert('A name was clicked.');
                    } }, "5 others"),
                React.createElement("span", { key: 4 }, " edited this file"),
            ],
            activityPersonas: [
                { imageInitials: 'JC', text: 'Jin Cheng' },
                { imageUrl: TestImages.personaMale },
                { imageInitials: 'AL', text: 'Annie Lindqvist' },
                { imageUrl: TestImages.personaFemale },
                { imageUrl: TestImages.personaMale },
                { imageUrl: TestImages.personaMale },
            ],
            timeStamp: 'August 3, 2017',
        },
    ];
    return (React.createElement("div", null, activityItemExamples.map(function (item) { return (React.createElement(ActivityItem, __assign({}, item, { key: item.key, className: classNames.exampleRoot }))); })));
};
//# sourceMappingURL=ActivityItem.Persona.Example.js.map