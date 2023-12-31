define(["require", "exports", "react", "office-ui-fabric-react/lib/Text", "office-ui-fabric-react/lib/Stack"], function (require, exports, React, Text_1, Stack_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tokens = {
        sectionStack: {
            childrenGap: 10,
        },
        headingStack: {
            childrenGap: 5,
        },
    };
    exports.TextWrapExample = function () { return (React.createElement(Stack_1.Stack, { tokens: tokens.sectionStack },
        React.createElement(Stack_1.Stack, { tokens: tokens.headingStack },
            React.createElement(Text_1.Text, { variant: 'large', block: true }, "Wrap (Default)"),
            React.createElement(Text_1.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),
        React.createElement(Stack_1.Stack, { tokens: tokens.headingStack },
            React.createElement(Text_1.Text, { variant: 'large', block: true }, "No Wrap"),
            React.createElement(Text_1.Text, { nowrap: true }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))); };
});
//# sourceMappingURL=Text.Wrap.Example.js.map