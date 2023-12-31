define(["require", "exports", "tslib", "react", "office-ui-fabric-react", "@uifabric/example-data"], function (require, exports, tslib_1, React, office_ui_fabric_react_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var classNames = office_ui_fabric_react_1.mergeStyleSets({
        exampleRoot: {
            marginTop: '20px',
        },
        nameText: {
            fontWeight: 'bold',
        },
    });
    exports.ActivityItemPersonaExample = function () {
        // tslint:disable:jsx-no-lambda
        var activityItemExamples = [
            {
                key: 1,
                activityDescription: [
                    React.createElement(office_ui_fabric_react_1.Link, { key: 1, className: classNames.nameText, onClick: function () {
                            alert('A name was clicked.');
                        } }, "Jack Howden"),
                    React.createElement("span", { key: 2 }, " renamed "),
                    React.createElement("span", { key: 3, className: classNames.nameText }, "DocumentTitle.docx"),
                ],
                activityPersonas: [{ imageUrl: example_data_1.TestImages.personaMale }],
                comments: 'Hello, this is the text of my basic comment!',
                timeStamp: '23m ago',
            },
            {
                key: 2,
                activityDescription: [
                    React.createElement(office_ui_fabric_react_1.Link, { key: 1, className: classNames.nameText, onClick: function () {
                            alert('A name was clicked.');
                        } }, "Javiera M\u00E1rquez"),
                    React.createElement("span", { key: 2 }, " and "),
                    React.createElement(office_ui_fabric_react_1.Link, { key: 3, className: classNames.nameText, onClick: function () {
                            alert('A name was clicked.');
                        } }, "Amelia Poval\u0456y"),
                    React.createElement("span", { key: 4 }, " edited "),
                    React.createElement(office_ui_fabric_react_1.Link, { key: 5, className: classNames.nameText, onClick: function () {
                            alert('A document was clicked.');
                        } }, "SpreadsheetTitle.xlsx"),
                ],
                activityPersonas: [{ imageInitials: 'JM', text: 'Javiera Márquez' }, { imageUrl: example_data_1.TestImages.personaFemale }],
                timeStamp: '9:27 am',
            },
            {
                key: 3,
                activityDescription: [
                    React.createElement(office_ui_fabric_react_1.Link, { key: 1, className: classNames.nameText, onClick: function () {
                            alert('A name was clicked.');
                        } }, "Robert Larsson"),
                    React.createElement("span", { key: 2 }, " and "),
                    React.createElement(office_ui_fabric_react_1.Link, { key: 3, className: classNames.nameText, onClick: function () {
                            alert('A name was clicked.');
                        } }, "2 others"),
                    React.createElement("span", { key: 4 }, " commented "),
                ],
                activityPersonas: [
                    { imageInitials: 'RL', text: 'Robert Larsson' },
                    { imageUrl: example_data_1.TestImages.personaMale },
                    { imageUrl: example_data_1.TestImages.personaFemale },
                ],
                timeStamp: '3 days ago',
            },
            {
                key: 4,
                activityDescription: [
                    React.createElement(office_ui_fabric_react_1.Link, { key: 1, className: classNames.nameText, onClick: function () {
                            alert('A name was clicked.');
                        } }, "Jin Cheng"),
                    React.createElement("span", { key: 2 }, " and "),
                    React.createElement(office_ui_fabric_react_1.Link, { key: 3, className: classNames.nameText, onClick: function () {
                            alert('A name was clicked.');
                        } }, "5 others"),
                    React.createElement("span", { key: 4 }, " edited this file"),
                ],
                activityPersonas: [
                    { imageInitials: 'JC', text: 'Jin Cheng' },
                    { imageUrl: example_data_1.TestImages.personaMale },
                    { imageInitials: 'AL', text: 'Annie Lindqvist' },
                    { imageUrl: example_data_1.TestImages.personaFemale },
                    { imageUrl: example_data_1.TestImages.personaMale },
                    { imageUrl: example_data_1.TestImages.personaMale },
                ],
                timeStamp: 'August 3, 2017',
            },
        ];
        return (React.createElement("div", null, activityItemExamples.map(function (item) { return (React.createElement(office_ui_fabric_react_1.ActivityItem, tslib_1.__assign({}, item, { key: item.key, className: classNames.exampleRoot }))); })));
    };
});
//# sourceMappingURL=ActivityItem.Persona.Example.js.map