"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Link_Basic_Example_1 = require("./examples/Link.Basic.Example");
var LinkBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Link/examples/Link.Basic.Example.tsx');
exports.LinkPageProps = {
    title: 'Link',
    componentName: 'Link',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Link',
    examples: [
        {
            title: 'Link',
            code: LinkBasicExampleCode,
            view: React.createElement(Link_Basic_Example_1.LinkBasicExample, null),
            styles: function (_a) {
                var theme = _a.theme;
                // UHF overrides. :( These are here rather than in the example because they're not necessary
                // under normal circumstances, and including them in the example makes it more confusing.
                return {
                    root: {
                        selectors: {
                            '.ms-Link': {
                                color: theme.palette.themePrimary,
                                margin: 0,
                                padding: 0,
                                overflow: 'inherit',
                                textOverflow: 'inherit',
                                selectors: {
                                    ':active, :hover, :active:hover': {
                                        color: theme.palette.themeDarker,
                                    },
                                    ':focus': {
                                        color: theme.palette.themePrimary,
                                    },
                                },
                            },
                            '.ms-Link.is-disabled': {
                                color: theme.palette.neutralTertiary,
                                pointerEvents: 'none',
                                cursor: 'default',
                            },
                        },
                    },
                };
            },
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Link/docs/LinkOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Link/docs/LinkDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Link/docs/LinkDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
    allowNativeProps: true,
    nativePropsElement: ['a', 'button'],
};
//# sourceMappingURL=Link.doc.js.map