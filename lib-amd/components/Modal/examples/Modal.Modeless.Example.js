define(["require", "exports", "react", "@uifabric/react-hooks", "office-ui-fabric-react"], function (require, exports, React, react_hooks_1, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dragOptions = {
        moveMenuItemText: 'Move',
        closeMenuItemText: 'Close',
        menu: office_ui_fabric_react_1.ContextualMenu,
    };
    var cancelIcon = { iconName: 'Cancel' };
    exports.ModalModelessExample = function () {
        var _a = react_hooks_1.useBoolean(false), isModalOpen = _a[0], _b = _a[1], showModal = _b.setTrue, hideModal = _b.setFalse;
        var _c = react_hooks_1.useBoolean(false), isDraggable = _c[0], toggleIsDraggable = _c[1].toggle;
        // Use useId() to ensure that the IDs are unique on the page.
        // (It's also okay to use plain strings and manually ensure uniqueness.)
        var titleId = react_hooks_1.useId('title');
        return (React.createElement("div", null,
            React.createElement(office_ui_fabric_react_1.Toggle, { styles: toggleStyles, label: "Is draggable", inlineLabel: true, onChange: toggleIsDraggable, checked: isDraggable, disabled: isModalOpen }),
            React.createElement(office_ui_fabric_react_1.DefaultButton, { secondaryText: "Opens the Sample Modal", onClick: showModal, text: "Open Modal" }),
            React.createElement(office_ui_fabric_react_1.Modal, { titleAriaId: titleId, isOpen: isModalOpen, onDismiss: hideModal, isModeless: true, containerClassName: contentStyles.container, dragOptions: isDraggable ? dragOptions : undefined },
                React.createElement("div", { className: contentStyles.header },
                    React.createElement("span", { id: titleId }, "Lorem Ipsum"),
                    React.createElement(office_ui_fabric_react_1.IconButton, { styles: iconButtonStyles, iconProps: cancelIcon, ariaLabel: "Close popup modal", onClick: hideModal })),
                React.createElement("div", { className: contentStyles.body },
                    React.createElement("p", null,
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In a odio eget enim porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis ac, luctus vel eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et ante. Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend efficitur.",
                        ' ')))));
    };
    var theme = office_ui_fabric_react_1.getTheme();
    var contentStyles = office_ui_fabric_react_1.mergeStyleSets({
        container: {
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'stretch',
        },
        header: [
            // tslint:disable-next-line:deprecation
            theme.fonts.xLargePlus,
            {
                flex: '1 1 auto',
                borderTop: "4px solid " + theme.palette.themePrimary,
                color: theme.palette.neutralPrimary,
                display: 'flex',
                alignItems: 'center',
                fontWeight: office_ui_fabric_react_1.FontWeights.semibold,
                padding: '12px 12px 14px 24px',
            },
        ],
        body: {
            flex: '4 4 auto',
            padding: '0 24px 24px 24px',
            overflowY: 'hidden',
            selectors: {
                p: { margin: '14px 0' },
                'p:first-child': { marginTop: 0 },
                'p:last-child': { marginBottom: 0 },
            },
        },
    });
    var toggleStyles = { root: { marginBottom: '20px' } };
    var iconButtonStyles = {
        root: {
            color: theme.palette.neutralPrimary,
            marginLeft: 'auto',
            marginTop: '4px',
            marginRight: '2px',
        },
        rootHovered: {
            color: theme.palette.neutralDark,
        },
    };
});
//# sourceMappingURL=Modal.Modeless.Example.js.map