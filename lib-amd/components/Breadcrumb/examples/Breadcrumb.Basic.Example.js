define(["require", "exports", "react", "office-ui-fabric-react/lib/Breadcrumb", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/Tooltip", "office-ui-fabric-react/lib/Icon"], function (require, exports, React, Breadcrumb_1, Label_1, Tooltip_1, Icon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var labelStyles = {
        root: { margin: '10px 0', selectors: { '&:not(:first-child)': { marginTop: 24 } } },
    };
    var items = [
        { text: 'Files', key: 'Files', onClick: _onBreadcrumbItemClicked },
        { text: 'Folder 1', key: 'f1', onClick: _onBreadcrumbItemClicked },
        { text: 'Folder 2', key: 'f2', onClick: _onBreadcrumbItemClicked },
        { text: 'Folder 3', key: 'f3', onClick: _onBreadcrumbItemClicked },
        { text: 'Folder 4 (non-clickable)', key: 'f4' },
        { text: 'Folder 5', key: 'f5', onClick: _onBreadcrumbItemClicked, isCurrentItem: true },
    ];
    var itemsWithHref = [
        // Normally each breadcrumb would have a unique href, but to make the navigation less disruptive
        // in the example, it uses the breadcrumb page as the href for all the items
        { text: 'Files', key: 'Files', href: '#/controls/web/breadcrumb' },
        { text: 'Folder 1', key: 'f1', href: '#/controls/web/breadcrumb' },
        { text: 'Folder 2', key: 'f2', href: '#/controls/web/breadcrumb' },
        { text: 'Folder 3', key: 'f3', href: '#/controls/web/breadcrumb' },
        { text: 'Folder 4 (non-clickable)', key: 'f4' },
        { text: 'Folder 5', key: 'f5', href: '#/controls/web/breadcrumb', isCurrentItem: true },
    ];
    var itemsWithHeading = [
        { text: 'Files', key: 'Files', onClick: _onBreadcrumbItemClicked },
        { text: 'Folder 1', key: 'd1', onClick: _onBreadcrumbItemClicked },
        // Generally, only the last item should ever be a heading.
        // It would typically be h1 or h2, but we're using h4 here to better fit the structure of the page.
        { text: 'Folder 2', key: 'd2', isCurrentItem: true, as: 'h4' },
    ];
    exports.BreadcrumbBasicExample = function () {
        return (React.createElement("div", null,
            React.createElement(Label_1.Label, { styles: labelStyles }, "With items rendered as buttons"),
            React.createElement(Breadcrumb_1.Breadcrumb, { items: items, maxDisplayedItems: 3, ariaLabel: "Breadcrumb with items rendered as buttons", overflowAriaLabel: "More links" }),
            React.createElement(Label_1.Label, { styles: labelStyles }, "With items rendered as links"),
            React.createElement(Breadcrumb_1.Breadcrumb, { items: itemsWithHref, maxDisplayedItems: 3, ariaLabel: "Breadcrumb with items rendered as links", overflowAriaLabel: "More links" }),
            React.createElement(Label_1.Label, { styles: labelStyles }, "With last item rendered as heading"),
            React.createElement(Breadcrumb_1.Breadcrumb, { items: itemsWithHeading, ariaLabel: "With last item rendered as heading", overflowAriaLabel: "More links" }),
            React.createElement(Label_1.Label, { styles: labelStyles }, "With custom rendered divider and overflow icon"),
            React.createElement(Breadcrumb_1.Breadcrumb, { items: itemsWithHeading, maxDisplayedItems: 3, ariaLabel: "With custom rendered divider and overflow icon", dividerAs: _getCustomDivider, onRenderOverflowIcon: _getCustomOverflowIcon, overflowAriaLabel: "More links" })));
    };
    function _onBreadcrumbItemClicked(ev, item) {
        console.log("Breadcrumb item with key \"" + item.key + "\" has been clicked.");
    }
    function _getCustomDivider(dividerProps) {
        var tooltipText = dividerProps.item ? dividerProps.item.text : '';
        return (React.createElement(Tooltip_1.TooltipHost, { content: "Show " + tooltipText + " contents", calloutProps: { gapSpace: 0 } },
            React.createElement("span", { "aria-hidden": "true", style: { cursor: 'pointer', padding: 5 } }, "/")));
    }
    function _getCustomOverflowIcon() {
        return React.createElement(Icon_1.Icon, { iconName: 'ChevronDown' });
    }
});
//# sourceMappingURL=Breadcrumb.Basic.Example.js.map