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
    exports.ActivityItemCompactExample = function () {
        var activityItemExamples = [
            {
                key: 1,
                activityDescription: [
                    React.createElement("span", { key: 1, className: classNames.nameText }, "Tahlia Whittle"),
                    React.createElement("span", { key: 2 }, " edited this file"),
                ],
                activityPersonas: [{ imageUrl: example_data_1.TestImages.personaFemale }],
                isCompact: true,
            },
            {
                key: 2,
                activityDescription: [
                    React.createElement("span", { key: 1, className: classNames.nameText }, "Patrick Loton"),
                    React.createElement("span", { key: 2 }, " and "),
                    React.createElement("span", { key: 3, className: classNames.nameText },
                        ' ',
                        "6 others"),
                ],
                activityPersonas: [
                    { imageInitials: 'PT', text: 'Robert Larsson' },
                    { imageUrl: example_data_1.TestImages.personaMale },
                    { imageInitials: 'EC', text: 'Eduarda Costa' },
                ],
                isCompact: true,
            },
            {
                key: 3,
                activityDescription: [
                    React.createElement("span", { key: 1, className: classNames.nameText }, "Sabrina De Luca"),
                    React.createElement("span", { key: 2 }, " added this file"),
                ],
                activityIcon: React.createElement(office_ui_fabric_react_1.Icon, { iconName: 'Add' }),
                isCompact: true,
            },
            {
                key: 4,
                activityDescription: [
                    React.createElement("span", { key: 1, className: classNames.nameText }, "Chuan Rojumanong"),
                    React.createElement("span", { key: 2 }, " shared this file"),
                ],
                activityIcon: React.createElement(office_ui_fabric_react_1.Icon, { iconName: 'Share' }),
                isCompact: true,
            },
        ];
        return (React.createElement("div", null, activityItemExamples.map(function (item) { return (React.createElement(office_ui_fabric_react_1.ActivityItem, tslib_1.__assign({}, item, { key: item.key, className: classNames.exampleRoot }))); })));
    };
});
//# sourceMappingURL=ActivityItem.Compact.Example.js.map