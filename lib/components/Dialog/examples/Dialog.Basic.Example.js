import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { hiddenContentStyle, mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { useId, useBoolean } from '@uifabric/react-hooks';
var dialogStyles = { main: { maxWidth: 450 } };
var dragOptions = {
    moveMenuItemText: 'Move',
    closeMenuItemText: 'Close',
    menu: ContextualMenu,
};
var screenReaderOnly = mergeStyles(hiddenContentStyle);
var dialogContentProps = {
    type: DialogType.normal,
    title: 'Missing Subject',
    closeButtonAriaLabel: 'Close',
    subText: 'Do you want to send this message without a subject?',
};
export var DialogBasicExample = function () {
    var _a = useBoolean(true), hideDialog = _a[0], toggleHideDialog = _a[1].toggle;
    var _b = useBoolean(false), isDraggable = _b[0], toggleIsDraggable = _b[1].toggle;
    var labelId = useId('dialogLabel');
    var subTextId = useId('subTextLabel');
    var modalProps = React.useMemo(function () { return ({
        titleAriaId: labelId,
        subtitleAriaId: subTextId,
        isBlocking: false,
        styles: dialogStyles,
        dragOptions: isDraggable ? dragOptions : undefined,
    }); }, [isDraggable]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Toggle, { label: "Is draggable", onChange: toggleIsDraggable, checked: isDraggable }),
        React.createElement(DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: toggleHideDialog, text: "Open Dialog" }),
        React.createElement("label", { id: labelId, className: screenReaderOnly }, "My sample label"),
        React.createElement("label", { id: subTextId, className: screenReaderOnly }, "My sample description"),
        React.createElement(Dialog, { hidden: hideDialog, onDismiss: toggleHideDialog, dialogContentProps: dialogContentProps, modalProps: modalProps },
            React.createElement(DialogFooter, null,
                React.createElement(PrimaryButton, { onClick: toggleHideDialog, text: "Send" }),
                React.createElement(DefaultButton, { onClick: toggleHideDialog, text: "Don't send" })))));
};
//# sourceMappingURL=Dialog.Basic.Example.js.map