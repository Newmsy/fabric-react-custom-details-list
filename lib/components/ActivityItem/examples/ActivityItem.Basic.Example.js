import { __assign } from "tslib";
import * as React from 'react';
import { ActivityItem, Icon, Link, mergeStyleSets } from 'office-ui-fabric-react';
var classNames = mergeStyleSets({
    exampleRoot: {
        marginTop: '20px',
    },
    nameText: {
        fontWeight: 'bold',
    },
});
export var ActivityItemBasicExample = function () {
    // tslint:disable:jsx-no-lambda
    var activityItemExamples = [
        {
            key: 1,
            activityDescription: [
                React.createElement(Link, { key: 1, className: classNames.nameText, onClick: function () {
                        alert('A name was clicked.');
                    } }, "Philippe Lampros"),
                React.createElement("span", { key: 2 }, " commented"),
            ],
            activityIcon: React.createElement(Icon, { iconName: 'Message' }),
            comments: [
                React.createElement("span", { key: 1 }, "Hello! I am making a comment and mentioning "),
                React.createElement(Link, { key: 2, className: classNames.nameText, onClick: function () {
                        alert('An @mentioned name was clicked.');
                    } }, "@An\u0111ela Debeljak"),
                React.createElement("span", { key: 3 }, " in the text of the comment."),
            ],
            timeStamp: 'Just now',
        },
        {
            key: 2,
            activityDescription: [
                React.createElement(Link, { key: 1, className: classNames.nameText, onClick: function () {
                        alert('A name was clicked.');
                    } }, "Lisha Refai"),
                React.createElement("span", { key: 2 }, " deleted "),
                React.createElement("span", { key: 3, className: classNames.nameText }, "DocumentTitle.docx"),
            ],
            activityIcon: React.createElement(Icon, { iconName: 'Trash' }),
            timeStamp: '2 hours ago',
        },
        {
            key: 3,
            activityDescription: [
                React.createElement(Link, { key: 1, className: classNames.nameText, onClick: function () {
                        alert('A name was clicked.');
                    } }, "Julian Arvidsson"),
                React.createElement("span", { key: 2 }, " moved "),
                React.createElement(Link, { key: 3, className: classNames.nameText, onClick: function () {
                        alert('A document was clicked.');
                    } }, "PresentationTitle.pptx"),
                React.createElement("span", { key: 4 }, " to "),
                React.createElement(Link, { key: 5, className: classNames.nameText, onClick: function () {
                        alert('A folder was clicked.');
                    } }, "Destination Folder"),
            ],
            activityIcon: React.createElement(Icon, { iconName: 'FabricMovetoFolder' }),
            timeStamp: 'Yesterday',
        },
    ];
    return (React.createElement("div", null, activityItemExamples.map(function (item) { return (React.createElement(ActivityItem, __assign({}, item, { key: item.key, className: classNames.exampleRoot }))); })));
};
//# sourceMappingURL=ActivityItem.Basic.Example.js.map