define(["require", "exports", "react", "office-ui-fabric-react/lib/FocusZone", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Dropdown", "office-ui-fabric-react/lib/List", "office-ui-fabric-react/lib/TextField", "@uifabric/example-data", "office-ui-fabric-react/lib/Styling", "@uifabric/react-hooks"], function (require, exports, React, FocusZone_1, Button_1, Dropdown_1, List_1, TextField_1, example_data_1, Styling_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var evenItemHeight = 25;
    var oddItemHeight = 50;
    var numberOfItemsOnPage = 10;
    var theme = Styling_1.getTheme();
    var dropdownOptions = [
        { key: 'auto', text: 'Auto' },
        { key: 'top', text: 'Top' },
        { key: 'bottom', text: 'Bottom' },
        { key: 'center', text: 'Center' },
    ];
    var styles = Styling_1.mergeStyleSets({
        container: {
            overflow: 'auto',
            maxHeight: 400,
            border: '1px solid #CCC',
            marginTop: 20,
            selectors: {
                '.ms-List-cell:nth-child(odd)': {
                    height: 50,
                    lineHeight: 50,
                    background: theme.palette.neutralLighter,
                },
                '.ms-List-cell:nth-child(even)': {
                    height: 25,
                    lineHeight: 25,
                },
            },
        },
        itemContent: [
            theme.fonts.medium,
            Styling_1.normalize,
            {
                position: 'relative',
                boxSizing: 'border-box',
                display: 'block',
                borderLeft: '3px solid ' + theme.palette.themePrimary,
                paddingLeft: 27,
            },
        ],
    });
    var onRenderCell = function (item, index) {
        return (React.createElement("div", { "data-is-focusable": true },
            React.createElement("div", { className: styles.itemContent },
                index,
                " \u00A0 ",
                item.name)));
    };
    exports.ListScrollingExample = function () {
        var items = react_hooks_1.useConst(function () { return example_data_1.createListItems(5000); });
        var _a = React.useState(0), selectedIndex = _a[0], setSelectedIndex = _a[1];
        var _b = React.useState(List_1.ScrollToMode.auto), scrollToMode = _b[0], setScrollToMode = _b[1];
        var listRef = React.useRef(null);
        var scroll = function (index, propScrollToMode) {
            var _a;
            var updatedSelectedIndex = Math.min(Math.max(index, 0), items.length - 1);
            setSelectedIndex(updatedSelectedIndex);
            setScrollToMode(propScrollToMode);
            (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.scrollToIndex(updatedSelectedIndex, function (idx) { return (idx % 2 === 0 ? evenItemHeight : oddItemHeight); }, scrollToMode);
        };
        var getPageHeight = function (idx) {
            var h = 0;
            for (var i = idx; i < idx + numberOfItemsOnPage; ++i) {
                var isEvenRow = i % 2 === 0;
                h += isEvenRow ? evenItemHeight : oddItemHeight;
            }
            return h;
        };
        var scrollRelative = function (delta) {
            return function () {
                scroll(selectedIndex + delta, scrollToMode);
            };
        };
        var onChangeText = function (ev, value) {
            scroll(parseInt(value, 10) || 0, scrollToMode);
        };
        var onDropdownChange = function (event, option) {
            var scrollMode = scrollToMode;
            switch (option.key) {
                case 'auto':
                    scrollMode = List_1.ScrollToMode.auto;
                    break;
                case 'top':
                    scrollMode = List_1.ScrollToMode.top;
                    break;
                case 'bottom':
                    scrollMode = List_1.ScrollToMode.bottom;
                    break;
                case 'center':
                    scrollMode = List_1.ScrollToMode.center;
                    break;
            }
            scroll(selectedIndex, scrollMode);
        };
        return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.vertical },
            React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { onClick: scrollRelative(-10) }, "-10"),
                React.createElement(Button_1.DefaultButton, { onClick: scrollRelative(-1) }, "-1"),
                React.createElement(Button_1.DefaultButton, { onClick: scrollRelative(1) }, "+1"),
                React.createElement(Button_1.DefaultButton, { onClick: scrollRelative(10) }, "+10")),
            React.createElement(Dropdown_1.Dropdown, { placeholder: "Select an Option", label: "Scroll To Mode:", ariaLabel: "Scroll To Mode", defaultSelectedKey: 'auto', options: dropdownOptions, onChange: onDropdownChange }),
            React.createElement("div", null,
                "Scroll item index:",
                React.createElement(TextField_1.TextField, { value: selectedIndex.toString(10), onChange: onChangeText })),
            React.createElement("div", { className: styles.container, "data-is-scrollable": true },
                React.createElement(List_1.List, { componentRef: listRef, items: items, getPageHeight: getPageHeight, onRenderCell: onRenderCell }))));
    };
});
//# sourceMappingURL=List.Scrolling.Example.js.map