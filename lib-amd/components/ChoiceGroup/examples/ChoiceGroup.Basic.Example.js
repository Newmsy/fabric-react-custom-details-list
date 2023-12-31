define(["require", "exports", "react", "office-ui-fabric-react/lib/ChoiceGroup"], function (require, exports, React, ChoiceGroup_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var options = [
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C', disabled: true },
        { key: 'D', text: 'Option D' },
    ];
    exports.ChoiceGroupBasicExample = function () {
        return React.createElement(ChoiceGroup_1.ChoiceGroup, { defaultSelectedKey: "B", options: options, onChange: _onChange, label: "Pick one", required: true });
    };
    function _onChange(ev, option) {
        console.dir(option);
    }
});
//# sourceMappingURL=ChoiceGroup.Basic.Example.js.map