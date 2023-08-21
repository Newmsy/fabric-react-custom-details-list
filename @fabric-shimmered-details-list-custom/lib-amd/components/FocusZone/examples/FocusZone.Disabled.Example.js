define(["require", "exports", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/FocusZone", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Stack"], function (require, exports, React, Button_1, FocusZone_1, TextField_1, Stack_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var textFieldStyles = { root: { width: 200 } };
    exports.FocusZoneDisabledExample = function () {
        var tokens = { childrenGap: 20 };
        return (React.createElement(Stack_1.Stack, { tokens: tokens, horizontalAlign: "start" },
            React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.horizontal },
                React.createElement(Stack_1.Stack, { tokens: tokens, horizontal: true, verticalAlign: "center" },
                    React.createElement("span", null, "Enabled FocusZone: "),
                    React.createElement(Button_1.DefaultButton, null, "Button 1"),
                    React.createElement(Button_1.DefaultButton, null, "Button 2"),
                    React.createElement(TextField_1.TextField, { placeholder: "FocusZone TextField", styles: textFieldStyles, ariaLabel: "FocusZone TextField" }),
                    React.createElement(Button_1.DefaultButton, null, "Button 3"))),
            React.createElement(Button_1.DefaultButton, null, "Tabbable Element 1"),
            React.createElement(FocusZone_1.FocusZone, { disabled: true },
                React.createElement(Stack_1.Stack, { tokens: tokens, horizontal: true, verticalAlign: "center" },
                    React.createElement("span", null, "Disabled FocusZone: "),
                    React.createElement(Button_1.DefaultButton, null, "Button 1"),
                    React.createElement(Button_1.DefaultButton, null, "Button 2"))),
            React.createElement(TextField_1.TextField, { placeholder: "Tabbable Element 2", ariaLabel: "Tabbable Element 2" })));
    };
});
//# sourceMappingURL=FocusZone.Disabled.Example.js.map