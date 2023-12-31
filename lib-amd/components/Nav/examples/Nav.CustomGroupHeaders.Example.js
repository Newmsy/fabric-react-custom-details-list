define(["require", "exports", "react", "office-ui-fabric-react/lib/Nav"], function (require, exports, React, Nav_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var navLinkGroups = [
        {
            name: 'Pages',
            links: [
                { name: 'Activity', url: 'http://msn.com', key: 'key1', target: '_blank' },
                { name: 'News', url: 'http://msn.com', key: 'key2', target: '_blank' },
            ],
        },
        {
            name: 'More pages',
            links: [
                { name: 'Settings', url: 'http://msn.com', key: 'key3', target: '_blank' },
                { name: 'Notes', url: 'http://msn.com', key: 'key4', target: '_blank' },
            ],
        },
    ];
    exports.NavCustomGroupHeadersExample = function () {
        return (React.createElement(Nav_1.Nav, { onRenderGroupHeader: _onRenderGroupHeader, ariaLabel: "Nav example with custom group headers", groups: navLinkGroups }));
    };
    function _onRenderGroupHeader(group) {
        return React.createElement("h3", null, group.name);
    }
});
//# sourceMappingURL=Nav.CustomGroupHeaders.Example.js.map