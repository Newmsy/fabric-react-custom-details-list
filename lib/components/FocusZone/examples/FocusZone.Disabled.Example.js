import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var textFieldStyles = { root: { width: 200 } };
export var FocusZoneDisabledExample = function () {
    var tokens = { childrenGap: 20 };
    return (React.createElement(Stack, { tokens: tokens, horizontalAlign: "start" },
        React.createElement(FocusZone, { direction: FocusZoneDirection.horizontal },
            React.createElement(Stack, { tokens: tokens, horizontal: true, verticalAlign: "center" },
                React.createElement("span", null, "Enabled FocusZone: "),
                React.createElement(DefaultButton, null, "Button 1"),
                React.createElement(DefaultButton, null, "Button 2"),
                React.createElement(TextField, { placeholder: "FocusZone TextField", styles: textFieldStyles, ariaLabel: "FocusZone TextField" }),
                React.createElement(DefaultButton, null, "Button 3"))),
        React.createElement(DefaultButton, null, "Tabbable Element 1"),
        React.createElement(FocusZone, { disabled: true },
            React.createElement(Stack, { tokens: tokens, horizontal: true, verticalAlign: "center" },
                React.createElement("span", null, "Disabled FocusZone: "),
                React.createElement(DefaultButton, null, "Button 1"),
                React.createElement(DefaultButton, null, "Button 2"))),
        React.createElement(TextField, { placeholder: "Tabbable Element 2", ariaLabel: "Tabbable Element 2" })));
};
//# sourceMappingURL=FocusZone.Disabled.Example.js.map