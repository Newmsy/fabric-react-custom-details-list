define(["require", "exports", "react", "office-ui-fabric-react/lib/Dialog", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Styling", "office-ui-fabric-react/lib/Toggle", "office-ui-fabric-react/lib/ContextualMenu", "@uifabric/react-hooks"], function (require, exports, React, Dialog_1, Button_1, Styling_1, Toggle_1, ContextualMenu_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dialogStyles = { main: { maxWidth: 450 } };
    var dragOptions = {
        moveMenuItemText: 'Move',
        closeMenuItemText: 'Close',
        menu: ContextualMenu_1.ContextualMenu,
    };
    var screenReaderOnly = Styling_1.mergeStyles(Styling_1.hiddenContentStyle);
    var dialogContentProps = {
        type: Dialog_1.DialogType.normal,
        title: 'Missing Subject',
        closeButtonAriaLabel: 'Close',
        subText: 'Do you want to send this message without a subject?',
    };
    exports.DialogBasicExample = function () {
        var _a = react_hooks_1.useBoolean(true), hideDialog = _a[0], toggleHideDialog = _a[1].toggle;
        var _b = react_hooks_1.useBoolean(false), isDraggable = _b[0], toggleIsDraggable = _b[1].toggle;
        var labelId = react_hooks_1.useId('dialogLabel');
        var subTextId = react_hooks_1.useId('subTextLabel');
        var modalProps = React.useMemo(function () { return ({
            titleAriaId: labelId,
            subtitleAriaId: subTextId,
            isBlocking: false,
            styles: dialogStyles,
            dragOptions: isDraggable ? dragOptions : undefined,
        }); }, [isDraggable]);
        return (React.createElement(React.Fragment, null,
            React.createElement(Toggle_1.Toggle, { label: "Is draggable", onChange: toggleIsDraggable, checked: isDraggable }),
            React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: toggleHideDialog, text: "Open Dialog" }),
            React.createElement("label", { id: labelId, className: screenReaderOnly }, "My sample label"),
            React.createElement("label", { id: subTextId, className: screenReaderOnly }, "My sample description"),
            React.createElement(Dialog_1.Dialog, { hidden: hideDialog, onDismiss: toggleHideDialog, dialogContentProps: dialogContentProps, modalProps: modalProps },
                React.createElement(Dialog_1.DialogFooter, null,
                    React.createElement(Button_1.PrimaryButton, { onClick: toggleHideDialog, text: "Send" }),
                    React.createElement(Button_1.DefaultButton, { onClick: toggleHideDialog, text: "Don't send" })))));
    };
});
//# sourceMappingURL=Dialog.Basic.Example.js.map