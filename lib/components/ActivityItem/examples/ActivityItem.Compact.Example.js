import { __assign } from "tslib";
import * as React from 'react';
import { ActivityItem, mergeStyleSets, Icon } from 'office-ui-fabric-react';
import { TestImages } from '@uifabric/example-data';
var classNames = mergeStyleSets({
    exampleRoot: {
        marginTop: '20px',
    },
    nameText: {
        fontWeight: 'bold',
    },
});
export var ActivityItemCompactExample = function () {
    var activityItemExamples = [
        {
            key: 1,
            activityDescription: [
                React.createElement("span", { key: 1, className: classNames.nameText }, "Tahlia Whittle"),
                React.createElement("span", { key: 2 }, " edited this file"),
            ],
            activityPersonas: [{ imageUrl: TestImages.personaFemale }],
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
                { imageUrl: TestImages.personaMale },
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
            activityIcon: React.createElement(Icon, { iconName: 'Add' }),
            isCompact: true,
        },
        {
            key: 4,
            activityDescription: [
                React.createElement("span", { key: 1, className: classNames.nameText }, "Chuan Rojumanong"),
                React.createElement("span", { key: 2 }, " shared this file"),
            ],
            activityIcon: React.createElement(Icon, { iconName: 'Share' }),
            isCompact: true,
        },
    ];
    return (React.createElement("div", null, activityItemExamples.map(function (item) { return (React.createElement(ActivityItem, __assign({}, item, { key: item.key, className: classNames.exampleRoot }))); })));
};
//# sourceMappingURL=ActivityItem.Compact.Example.js.map