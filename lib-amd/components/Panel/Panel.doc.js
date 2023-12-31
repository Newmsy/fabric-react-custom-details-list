define(["require", "exports", "react", "./examples/Panel.Basic.Example", "./examples/Panel.ConfirmDismiss.Example", "./examples/Panel.Controlled.Example", "./examples/Panel.Footer.Example", "./examples/Panel.Navigation.Example", "./examples/Panel.HandleDismissTarget.Example", "./examples/Panel.HiddenOnDismiss.Example", "./examples/Panel.LightDismiss.Example", "./examples/Panel.LightDismissCustom.Example", "./examples/Panel.NonModal.Example", "./examples/Panel.Sizes.Example"], function (require, exports, React, Panel_Basic_Example_1, Panel_ConfirmDismiss_Example_1, Panel_Controlled_Example_1, Panel_Footer_Example_1, Panel_Navigation_Example_1, Panel_HandleDismissTarget_Example_1, Panel_HiddenOnDismiss_Example_1, Panel_LightDismiss_Example_1, Panel_LightDismissCustom_Example_1, Panel_NonModal_Example_1, Panel_Sizes_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PanelBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Panel/examples/Panel.Basic.Example.tsx');
    var PanelSizesExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Panel/examples/Panel.Sizes.Example.tsx');
    var PanelConfirmDismissExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Panel/examples/Panel.ConfirmDismiss.Example.tsx');
    var PanelControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Panel/examples/Panel.Controlled.Example.tsx');
    var PanelHiddenOnDismissExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Panel/examples/Panel.HiddenOnDismiss.Example.tsx');
    var PanelLightDismissExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Panel/examples/Panel.LightDismiss.Example.tsx');
    var PanelLightDismissCustomExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Panel/examples/Panel.LightDismissCustom.Example.tsx');
    var PanelNonModalExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Panel/examples/Panel.NonModal.Example.tsx');
    var PanelFooterExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Panel/examples/Panel.Footer.Example.tsx');
    var PanelNavigationExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Panel/examples/Panel.Navigation.Example.tsx');
    var PanelHandleDismissTargetExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Panel/examples/Panel.HandleDismissTarget.Example.tsx');
    exports.PanelPageProps = {
        title: 'Panel',
        componentName: 'Panel',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Panel',
        examples: [
            {
                title: 'Basic',
                code: PanelBasicExampleCode,
                view: React.createElement(Panel_Basic_Example_1.PanelBasicExample, null),
            },
            {
                title: 'Size options',
                code: PanelSizesExampleCode,
                view: React.createElement(Panel_Sizes_Example_1.PanelSizesExample, null),
            },
            {
                title: 'Panel - Footer',
                code: PanelFooterExampleCode,
                view: React.createElement(Panel_Footer_Example_1.PanelFooterExample, null),
            },
            {
                title: 'Light dismiss',
                code: PanelLightDismissExampleCode,
                view: React.createElement(Panel_LightDismiss_Example_1.PanelLightDismissExample, null),
            },
            {
                title: 'Hidden on dismiss',
                code: PanelHiddenOnDismissExampleCode,
                view: React.createElement(Panel_HiddenOnDismiss_Example_1.PanelHiddenOnDismissExample, null),
            },
            {
                title: 'Controlled visibility',
                code: PanelControlledExampleCode,
                view: React.createElement(Panel_Controlled_Example_1.PanelControlledExample, null),
            },
            {
                title: 'Confirm dismiss',
                code: PanelConfirmDismissExampleCode,
                view: React.createElement(Panel_ConfirmDismiss_Example_1.PanelConfirmDismissExample, null),
            },
            {
                title: 'Confirm light dismiss',
                code: PanelLightDismissCustomExampleCode,
                view: React.createElement(Panel_LightDismissCustom_Example_1.PanelLightDismissCustomExample, null),
            },
            {
                title: 'Non-modal',
                code: PanelNonModalExampleCode,
                view: React.createElement(Panel_NonModal_Example_1.PanelNonModalExample, null),
            },
            {
                title: 'Panel - Custom navigation',
                code: PanelNavigationExampleCode,
                view: React.createElement(Panel_Navigation_Example_1.PanelNavigationExample, null),
            },
            {
                title: 'Panel - Detect dismissal method',
                code: PanelHandleDismissTargetExampleCode,
                view: React.createElement(Panel_HandleDismissTarget_Example_1.PanelHandleDismissTargetExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Panel/docs/PanelOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Panel/docs/PanelDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Panel/docs/PanelDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
        allowNativeProps: true,
    };
});
//# sourceMappingURL=Panel.doc.js.map