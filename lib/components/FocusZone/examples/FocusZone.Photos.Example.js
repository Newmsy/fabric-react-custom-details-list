import * as React from 'react';
import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { useConst } from '@uifabric/react-hooks';
import { mergeStyleSets, getTheme } from 'office-ui-fabric-react/lib/Styling';
var theme = getTheme();
var classNames = mergeStyleSets({
    photoList: {
        display: 'inline-block',
        border: '1px solid ' + theme.palette.neutralTertiary,
        padding: 10,
        lineHeight: 0,
        overflow: 'hidden',
    },
    photoCell: {
        position: 'relative',
        display: 'inline-block',
        padding: 2,
        boxSizing: 'border-box',
        selectors: {
            '&:focus': {
                outline: 'none',
            },
            '&:focus:after': {
                content: '""',
                position: 'absolute',
                right: 4,
                left: 4,
                top: 4,
                bottom: 4,
                border: '1px solid ' + theme.palette.white,
                outline: '2px solid ' + theme.palette.themePrimary,
            },
        },
    },
});
var MAX_COUNT = 20;
var getItems = function () {
    var items = [];
    for (var i = 0; i < MAX_COUNT; i++) {
        var randomWidth = 50 + Math.floor(Math.random() * 150);
        items.push({
            id: getId('photo'),
            url: "http://placehold.it/" + randomWidth + "x100",
            width: randomWidth,
            height: 100,
        });
    }
    return items;
};
export var FocusZonePhotosExample = function () {
    //  Initialize the items when the component is first rendered (same array will be reused)
    var items = useConst(getItems);
    return (React.createElement(FocusZone, { as: "ul", className: classNames.photoList }, items.map(function (item, index) { return (React.createElement("li", { key: item.id, className: classNames.photoCell, "aria-posinset": index + 1, "aria-setsize": items.length, "aria-label": "Photo", "data-is-focusable": true },
        React.createElement(Image, { src: item.url, width: item.width, height: item.height, alt: item.width + " by " + item.height + " placeholder image" }))); })));
};
//# sourceMappingURL=FocusZone.Photos.Example.js.map