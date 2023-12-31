import * as React from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
var tokens = {
    sectionStack: {
        childrenGap: 10,
    },
    headingStack: {
        childrenGap: 5,
    },
};
export var TextWrapExample = function () { return (React.createElement(Stack, { tokens: tokens.sectionStack },
    React.createElement(Stack, { tokens: tokens.headingStack },
        React.createElement(Text, { variant: 'large', block: true }, "Wrap (Default)"),
        React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),
    React.createElement(Stack, { tokens: tokens.headingStack },
        React.createElement(Text, { variant: 'large', block: true }, "No Wrap"),
        React.createElement(Text, { nowrap: true }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))); };
//# sourceMappingURL=Text.Wrap.Example.js.map