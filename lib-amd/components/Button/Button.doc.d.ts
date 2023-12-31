import { IDocPageProps } from '../../common/DocPage.types';
export interface IButtonDocPageProps {
    areButtonsDisabled: boolean;
    areButtonsChecked: boolean;
}
/**
 * Exports a function because the documentation of this page requires some interactivity that is passed in here
 * as a prop.
 * @param props Props that are specific to generating page props for ButtonPage
 */
export declare const ButtonPageProps: (props: IButtonDocPageProps) => IDocPageProps;
