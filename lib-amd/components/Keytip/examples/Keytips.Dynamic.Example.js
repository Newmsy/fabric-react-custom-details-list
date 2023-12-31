define(["require", "exports", "react", "office-ui-fabric-react/lib/Button"], function (require, exports, React, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var buttonOneKeytipProps = {
        content: 'GG1',
        keySequences: ['gg1'],
        hasDynamicChildren: true,
    };
    var buttonTwoKeytipProps = {
        content: 'GG2',
        keySequences: ['gg2'],
        hasDynamicChildren: true,
    };
    exports.KeytipsDynamicExample = function () {
        var _a = React.useState('Button 1'), currButton = _a[0], setCurrButton = _a[1];
        var startSequence = currButton === 'Button 1' ? 'gg1' : 'gg2';
        var onClick = function (ev) { return setCurrButton(ev.target.id); };
        var buttonThreeKeytipProps = React.useMemo(function () { return ({
            content: 'GG3',
            keySequences: [startSequence, 'gg3'],
        }); }, [startSequence]);
        return (React.createElement(React.Fragment, null,
            React.createElement("p", null, "There is another special case where controls on the page will change other controls down the chain in the keytip sequence. Take the case below; clicking Button 1 and Button 2 will update the text of Button3. Triggering the keytip for Button 1 or Button 2 will then also change the keytip sequence of Button 3, because it can be both a child of Button 1 or Button 2. For this to work fully, Button 1 and Button 2 should have `hasDynamicChildren: true` in their keytip props"),
            React.createElement(Button_1.DefaultButton, { id: "Button 1", text: "Button 1", onClick: onClick, keytipProps: buttonOneKeytipProps }),
            React.createElement(Button_1.DefaultButton, { id: "Button 2", text: "Button 2", onClick: onClick, keytipProps: buttonTwoKeytipProps }),
            React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { text: 'Button 3, active button is: ' + currButton, keytipProps: buttonThreeKeytipProps }))));
    };
});
//# sourceMappingURL=Keytips.Dynamic.Example.js.map