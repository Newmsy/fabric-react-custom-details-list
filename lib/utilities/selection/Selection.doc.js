import * as React from 'react';
import { SelectionBasicExample } from './examples/Selection.Basic.Example';
var SelectionBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/utilities/selection/examples/Selection.Basic.Example.tsx');
export var SelectionPageProps = {
    title: 'Selection',
    componentName: 'SelectionExample',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/utilities/selection',
    examples: [
        {
            title: 'Basic Selection Example',
            code: SelectionBasicExampleCode,
            view: React.createElement(SelectionBasicExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/utilities/selection/docs/SelectionOverview.md'),
    isHeaderVisible: true,
};
//# sourceMappingURL=Selection.doc.js.map