"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_hooks_1 = require("@uifabric/react-hooks");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var dragOptions = {
    moveMenuItemText: 'Move',
    closeMenuItemText: 'Close',
    menu: office_ui_fabric_react_1.ContextualMenu,
};
var cancelIcon = { iconName: 'Cancel' };
exports.ModalBasicExample = function () {
    var _a = react_hooks_1.useBoolean(false), isModalOpen = _a[0], _b = _a[1], showModal = _b.setTrue, hideModal = _b.setFalse;
    var _c = react_hooks_1.useBoolean(false), isDraggable = _c[0], toggleIsDraggable = _c[1].toggle;
    // Use useId() to ensure that the IDs are unique on the page.
    // (It's also okay to use plain strings and manually ensure uniqueness.)
    var titleId = react_hooks_1.useId('title');
    return (React.createElement("div", null,
        React.createElement(office_ui_fabric_react_1.Toggle, { styles: toggleStyles, label: "Is draggable", inlineLabel: true, onChange: toggleIsDraggable, checked: isDraggable }),
        React.createElement(office_ui_fabric_react_1.DefaultButton, { onClick: showModal, text: "Open Modal" }),
        React.createElement(office_ui_fabric_react_1.Modal, { titleAriaId: titleId, isOpen: isModalOpen, onDismiss: hideModal, isBlocking: false, containerClassName: contentStyles.container, dragOptions: isDraggable ? dragOptions : undefined },
            React.createElement("div", { className: contentStyles.header },
                React.createElement("span", { id: titleId }, "Lorem Ipsum"),
                React.createElement(office_ui_fabric_react_1.IconButton, { styles: iconButtonStyles, iconProps: cancelIcon, ariaLabel: "Close popup modal", onClick: hideModal })),
            React.createElement("div", { className: contentStyles.body },
                React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In a odio eget enim porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis ac, luctus vel eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et ante. Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend efficitur."),
                React.createElement("p", null, "Mauris at nunc eget lectus lobortis facilisis et eget magna. Vestibulum venenatis augue sapien, rhoncus faucibus magna semper eget. Proin rutrum libero sagittis sapien aliquet auctor. Suspendisse tristique a magna at facilisis. Duis rhoncus feugiat magna in rutrum. Suspendisse semper, dolor et vestibulum lacinia, nunc felis malesuada ex, nec hendrerit justo ex et massa. Quisque quis mollis nulla. Nam commodo est ornare, rhoncus odio eu, pharetra tellus. Nunc sed velit mi."),
                React.createElement("p", null, "Sed condimentum ultricies turpis convallis pharetra. Sed sagittis quam pharetra luctus porttitor. Cras vel consequat lectus. Sed nec fringilla urna, a aliquet libero. Aenean sed nisl purus. Vivamus vulputate felis et odio efficitur suscipit. Ut volutpat dictum lectus, ac rutrum massa accumsan at. Sed pharetra auctor finibus. In augue libero, commodo vitae nisi non, sagittis convallis ante. Phasellus malesuada eleifend mollis. Curabitur ultricies leo ac metus venenatis elementum."),
                React.createElement("p", null, "Aenean egestas quam ut erat commodo blandit. Mauris ante nisl, pellentesque sed venenatis nec, aliquet sit amet enim. Praesent vitae diam non diam aliquet tristique non ut arcu. Pellentesque et ultrices eros. Fusce diam metus, mattis eu luctus nec, facilisis vel erat. Nam a lacus quis tellus gravida euismod. Nulla sed sem eget tortor cursus interdum. Sed vehicula tristique ultricies. Aenean libero purus, mollis quis massa quis, eleifend dictum massa. Fusce eu sapien sit amet odio lacinia placerat. Mauris varius risus sed aliquet cursus. Aenean lectus magna, tincidunt sit amet sodales a, volutpat ac leo. Morbi nisl sapien, tincidunt sit amet mauris quis, sollicitudin auctor est."),
                React.createElement("p", null, "Nam id mi justo. Nam vehicula vulputate augue, ac pretium enim rutrum ultricies. Sed aliquet accumsan varius. Quisque ac auctor ligula. Fusce fringilla, odio et dignissim iaculis, est lacus ultrices risus, vitae condimentum enim urna eu nunc. In risus est, mattis non suscipit at, mattis ut ante. Maecenas consectetur urna vel erat maximus, non molestie massa consequat. Duis a feugiat nibh. Sed a hendrerit diam, a mattis est. In augue dolor, faucibus vel metus at, convallis rhoncus dui.")))));
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
//# sourceMappingURL=Modal.Basic.Example.js.map