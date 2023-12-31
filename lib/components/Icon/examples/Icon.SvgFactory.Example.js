import * as React from 'react';
import * as ReactIcons from '@fluentui/react-icons';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
var classes = mergeStyleSets({
    root: {
        selectors: {
            '> *': {
                height: 50,
                width: 50,
                marginRight: 25,
            },
        },
    },
    cell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '80px',
        float: 'left',
    },
    code: {
        background: '#f2f2f2',
        borderRadius: '4px',
        padding: '4px',
    },
    navigationText: {
        width: 100,
        margin: '0 5px',
    },
});
var icons = Object.keys(ReactIcons).reduce(function (acc, exportName) {
    if (!!ReactIcons[exportName].displayName) {
        acc.push(ReactIcons[exportName]);
    }
    return acc;
}, []);
var numOfIcons = icons.length;
var numOfPages = parseInt((numOfIcons / 100).toString(), 10) + (numOfIcons % 100 > 0 ? 1 : 0);
export var IconSvgFactoryExample = function () {
    var _a = React.useState(1), page = _a[0], setPage = _a[1];
    var nextPage = function () { return setPage(page + 1); };
    var prevPage = function () { return setPage(page - 1); };
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement(PrimaryButton, { onClick: prevPage, disabled: page === 1 }, "Prev"),
            React.createElement("span", { className: classes.navigationText },
                "Page ",
                page,
                " of ",
                numOfPages),
            React.createElement(PrimaryButton, { onClick: nextPage, disabled: page === numOfPages }, "Next")),
        React.createElement("div", { className: classes.root }, icons.slice((page - 1) * 100, (page - 1) * 100 + 100).map(function (Icon) { return (React.createElement("div", { key: Icon.displayName, className: classes.cell },
            React.createElement(Icon, null),
            React.createElement("br", null),
            React.createElement("code", { className: classes.code }, Icon.displayName))); }))));
};
//# sourceMappingURL=Icon.SvgFactory.Example.js.map