import * as React from 'react';
import { DirectionalHint, IStyle } from 'office-ui-fabric-react';
export interface ICoachmarkBasicExampleState {
    isCoachmarkVisible?: boolean;
    coachmarkPosition: DirectionalHint;
    dropdownSelectedOptionKey: string | number;
}
export interface ICoachmarkBasicExampleStyles {
    /**
     * Style for the root element in the default enabled/unchecked state.
     */
    root?: IStyle;
    /**
     * The example button container
     */
    buttonContainer: IStyle;
    /**
     * The dropdown component container
     */
    dropdownContainer: IStyle;
}
export declare class CoachmarkBasicExample extends React.Component<{}, ICoachmarkBasicExampleState> {
    private _targetButton;
    constructor(props: {});
    render(): JSX.Element;
    private _onDismiss;
    private _onDropdownChange;
    private _onShowMenuClicked;
}
