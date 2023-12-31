import * as React from 'react';
import { IThemeSlotRule, IThemeRules } from 'office-ui-fabric-react/lib/ThemeGenerator';
export interface IThemeGeneratorPageState {
    themeRules: IThemeRules;
    colorPickerSlotRule: IThemeSlotRule | null;
    colorPickerElement: HTMLElement | null;
    colorPickerVisible: boolean;
}
export declare class ThemeGeneratorPage extends React.Component<{}, IThemeGeneratorPageState> {
    private _semanticSlotColorChangeTimeout;
    private _async;
    constructor(props: {});
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _colorPickerOnDismiss;
    private _semanticSlotRuleChanged;
    private _onSwatchClick;
    private _slotWidget;
    private _fabricSlotWidget;
    private _colorSquareSwatchWidget;
    private _accessibilityRow;
    private _accessibilityTableBody;
    private _outputSection;
    private _makeNewTheme;
    private _baseColorSlotPicker;
}
