define(["require", "exports", "react", "office-ui-fabric-react/lib/Separator", "office-ui-fabric-react/lib/Styling", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Text"], function (require, exports, React, Separator_1, Styling_1, Stack_1, Text_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stackTokens = { childrenGap: 12 };
    var HorizontalSeparatorStack = function (props) { return (React.createElement(React.Fragment, null, React.Children.map(props.children, function (child) {
        return React.createElement(Stack_1.Stack, { tokens: stackTokens }, child);
    }))); };
    var VerticalSeparatorStack = function (props) { return (React.createElement(Stack_1.Stack, { horizontal: true, horizontalAlign: "space-evenly" }, React.Children.map(props.children, function (child) {
        return (React.createElement(Stack_1.Stack, { horizontalAlign: "center", tokens: stackTokens }, child));
    }))); };
    var verticalStyle = Styling_1.mergeStyles({
        height: '200px',
    });
    var content = 'Today';
    exports.SeparatorBasicExample = function () { return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
        React.createElement(HorizontalSeparatorStack, null,
            React.createElement(React.Fragment, null,
                React.createElement(Text_1.Text, null, "Horizontal center aligned"),
                React.createElement(Separator_1.Separator, null, content)),
            React.createElement(React.Fragment, null,
                React.createElement(Text_1.Text, null, "Horizontal start aligned"),
                React.createElement(Separator_1.Separator, { alignContent: "start" }, content)),
            React.createElement(React.Fragment, null,
                React.createElement(Text_1.Text, null, "Horizontal end aligned"),
                React.createElement(Separator_1.Separator, { alignContent: "end" }, content)),
            React.createElement(React.Fragment, null,
                React.createElement(Text_1.Text, null, "Empty horizontal"),
                React.createElement(Separator_1.Separator, null))),
        React.createElement(VerticalSeparatorStack, null,
            React.createElement(React.Fragment, null,
                React.createElement(Text_1.Text, null, "Vertical center aligned"),
                React.createElement(Stack_1.Stack.Item, { className: verticalStyle },
                    React.createElement(Separator_1.Separator, { vertical: true }, content))),
            React.createElement(React.Fragment, null,
                React.createElement(Text_1.Text, null, "Vertical start aligned"),
                React.createElement(Stack_1.Stack.Item, { className: verticalStyle },
                    React.createElement(Separator_1.Separator, { vertical: true, alignContent: "start" }, content))),
            React.createElement(React.Fragment, null,
                React.createElement(Text_1.Text, null, "Vertical end aligned"),
                React.createElement(Stack_1.Stack.Item, { className: verticalStyle },
                    React.createElement(Separator_1.Separator, { vertical: true }, content))),
            React.createElement(React.Fragment, null,
                React.createElement(Text_1.Text, null, "Empty vertical"),
                React.createElement(Stack_1.Stack.Item, { className: verticalStyle },
                    React.createElement(Separator_1.Separator, { vertical: true })))))); };
});
//# sourceMappingURL=Separator.Basic.Example.js.map