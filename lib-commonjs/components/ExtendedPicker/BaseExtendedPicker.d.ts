import * as React from 'react';
import { Autofill } from '../../Autofill';
import { IBaseExtendedPickerProps, IBaseExtendedPicker } from './BaseExtendedPicker.types';
import { IBaseFloatingPickerProps, BaseFloatingPicker } from '../../FloatingPicker';
import { BaseSelectedItemsList, IBaseSelectedItemsListProps } from '../../SelectedItemsList';
import { Selection } from '../../Selection';
export interface IBaseExtendedPickerState<T> {
    queryString: string | null;
    selectedItems: T[] | null;
    suggestionItems: T[] | null;
}
export declare class BaseExtendedPicker<T, P extends IBaseExtendedPickerProps<T>> extends React.Component<P, IBaseExtendedPickerState<T>> implements IBaseExtendedPicker<T> {
    floatingPicker: React.RefObject<BaseFloatingPicker<T, IBaseFloatingPickerProps<T>>>;
    selectedItemsList: React.RefObject<BaseSelectedItemsList<T, IBaseSelectedItemsListProps<T>>>;
    protected root: React.RefObject<HTMLDivElement>;
    protected input: React.RefObject<Autofill>;
    protected selection: Selection;
    protected floatingPickerProps: IBaseFloatingPickerProps<T>;
    protected selectedItemsListProps: IBaseSelectedItemsListProps<T>;
    constructor(basePickerProps: P);
    readonly items: any;
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(newProps: P): void;
    focus(): void;
    clearInput(): void;
    readonly inputElement: HTMLInputElement | null;
    readonly highlightedItems: T[];
    render(): JSX.Element;
    protected onSelectionChange: () => void;
    protected canAddItems(): boolean;
    protected renderFloatingPicker(): JSX.Element;
    protected renderSelectedItemsList(): JSX.Element;
    protected onInputChange: (value: string, composing?: boolean | undefined) => void;
    protected onInputFocus: (ev: React.FocusEvent<HTMLInputElement | Autofill>) => void;
    protected onInputClick: (ev: React.MouseEvent<HTMLInputElement | Autofill, MouseEvent>) => void;
    protected onBackspace: (ev: React.KeyboardEvent<HTMLElement>) => void;
    protected onCopy: (ev: React.ClipboardEvent<HTMLElement>) => void;
    protected onPaste: (ev: React.ClipboardEvent<HTMLInputElement | Autofill>) => void;
    protected _onSuggestionSelected: (item: T) => void;
    protected _onSelectedItemsChanged: () => void;
    /**
     * The floating picker is the source of truth for if the menu has been opened or not.
     *
     * Because this isn't tracked inside the state of this component, we need to
     * force an update here to keep the rendered output that depends on the picker being open
     * in sync with the state
     *
     * Called when the suggestions is shown or closed
     */
    private _onSuggestionsShownOrHidden;
    private _addProcessedItem;
}
