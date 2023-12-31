import * as React from 'react';
import { IButton } from '../../../Button';
import { ISuggestionModel } from '../../../Pickers';
import { ISuggestionsHeaderFooterItemProps, ISuggestionsControlProps } from './Suggestions.types';
import { SuggestionsCore } from './SuggestionsCore';
export declare enum SuggestionItemType {
    header = 0,
    suggestion = 1,
    footer = 2
}
export interface ISuggestionsControlState<T> {
    selectedHeaderIndex: number;
    selectedFooterIndex: number;
    suggestions: ISuggestionModel<T>[];
}
export declare class SuggestionsHeaderFooterItem extends React.Component<ISuggestionsHeaderFooterItemProps, {}> {
    constructor(props: ISuggestionsHeaderFooterItemProps);
    render(): JSX.Element;
}
/**
 * Class when used with SuggestionsStore, renders a suggestions control with customizable headers and footers
 */
export declare class SuggestionsControl<T> extends React.Component<ISuggestionsControlProps<T>, ISuggestionsControlState<T>> {
    protected _forceResolveButton: IButton;
    protected _searchForMoreButton: IButton;
    protected _selectedElement: React.RefObject<HTMLDivElement>;
    protected _suggestions: React.RefObject<SuggestionsCore<T>>;
    private SuggestionsOfProperType;
    constructor(suggestionsProps: ISuggestionsControlProps<T>);
    componentDidMount(): void;
    componentDidUpdate(): void;
    UNSAFE_componentWillReceiveProps(newProps: ISuggestionsControlProps<T>): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    readonly currentSuggestion: ISuggestionModel<T> | undefined;
    readonly currentSuggestionIndex: number;
    readonly selectedElement: HTMLDivElement | undefined;
    hasSuggestionSelected(): boolean;
    hasSelection(): boolean;
    executeSelectedAction(): void;
    removeSuggestion(index?: number): void;
    /**
     * Handles the key down, returns true, if the event was handled, false otherwise
     * @param keyCode - The keyCode to handle
     */
    handleKeyDown(keyCode: number): boolean;
    scrollSelected(): void;
    protected renderHeaderItems(): JSX.Element | null;
    protected renderFooterItems(): JSX.Element | null;
    protected _renderSuggestions(): JSX.Element;
    /**
     * Selects the next selectable item
     */
    protected selectNextItem(itemType: SuggestionItemType, originalItemType?: SuggestionItemType): void;
    /**
     * Selects the previous selectable item
     */
    protected selectPreviousItem(itemType: SuggestionItemType, originalItemType?: SuggestionItemType): void;
    /**
     * Resets the selected state and selects the first selectable item
     */
    protected resetSelectedItem(): void;
    /**
     * Selects the first item
     */
    protected selectFirstItem(): void;
    /**
     * Selects the last item
     */
    protected selectLastItem(): void;
    /**
     * Selects the next item in the suggestion item type group, given the current index
     * If none is able to be selected, returns false, otherwise returns true
     * @param itemType - The suggestion item type
     * @param currentIndex - The current index, default is -1
     */
    private _selectNextItemOfItemType;
    /**
     * Selects the previous item in the suggestion item type group, given the current index
     * If none is able to be selected, returns false, otherwise returns true
     * @param itemType - The suggestion item type
     * @param currentIndex - The current index. If none is provided, the default is the items length of specified type
     */
    private _selectPreviousItemOfItemType;
    private _getCurrentIndexForType;
    private _getNextItemSectionType;
    private _getPreviousItemSectionType;
}
