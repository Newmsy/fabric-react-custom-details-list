define(["require", "exports", "react", "./examples/Selection.Basic.Example"], function (require, exports, React, Selection_Basic_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectionBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/utilities/selection/examples/Selection.Basic.Example.tsx');
    exports.SelectionPageProps = {
        title: 'Selection',
        componentName: 'SelectionExample',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/utilities/selection',
        examples: [
            {
                title: 'Basic Selection Example',
                code: SelectionBasicExampleCode,
                view: React.createElement(Selection_Basic_Example_1.SelectionBasicExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/utilities/selection/docs/SelectionOverview.md'),
        isHeaderVisible: true,
    };
});
//# sourceMappingURL=Selection.doc.js.map