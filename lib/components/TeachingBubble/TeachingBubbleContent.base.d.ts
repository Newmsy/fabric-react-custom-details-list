import * as React from 'react';
import { ITeachingBubbleProps } from './TeachingBubble.types';
import { ITeachingBubbleState } from './TeachingBubble.base';
import { ImageFit } from '../../Image';
export declare class TeachingBubbleContentBase extends React.Component<ITeachingBubbleProps, ITeachingBubbleState> {
    static defaultProps: {
        hasCondensedHeadline: boolean;
        imageProps: {
            imageFit: ImageFit;
            width: number;
            height: number;
        };
    };
    rootElement: React.RefObject<HTMLDivElement>;
    constructor(props: ITeachingBubbleProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    focus(): void;
    render(): JSX.Element;
    private _onKeyDown;
}
