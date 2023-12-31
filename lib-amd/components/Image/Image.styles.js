define(["require", "exports", "../../Styling", "../../Utilities"], function (require, exports, Styling_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-Image',
        rootMaximizeFrame: 'ms-Image--maximizeFrame',
        image: 'ms-Image-image',
        imageCenter: 'ms-Image-image--center',
        imageContain: 'ms-Image-image--contain',
        imageCover: 'ms-Image-image--cover',
        imageCenterContain: 'ms-Image-image--centerContain',
        imageCenterCover: 'ms-Image-image--centerCover',
        imageNone: 'ms-Image-image--none',
        imageLandscape: 'ms-Image-image--landscape',
        imagePortrait: 'ms-Image-image--portrait',
    };
    exports.getStyles = function (props) {
        var className = props.className, width = props.width, height = props.height, maximizeFrame = props.maximizeFrame, isLoaded = props.isLoaded, shouldFadeIn = props.shouldFadeIn, shouldStartVisible = props.shouldStartVisible, isLandscape = props.isLandscape, isCenter = props.isCenter, isContain = props.isContain, isCover = props.isCover, isCenterContain = props.isCenterContain, isCenterCover = props.isCenterCover, isNone = props.isNone, isError = props.isError, isNotImageFit = props.isNotImageFit, theme = props.theme;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        var ImageFitStyles = {
            position: 'absolute',
            left: '50% /* @noflip */',
            top: '50%',
            transform: 'translate(-50%,-50%)',
        };
        // Cut the mustard using msMaxTouchPoints to detect IE11 which does not support CSS object-fit
        var window = Utilities_1.getWindow();
        var supportsObjectFit = window !== undefined && window.navigator.msMaxTouchPoints === undefined;
        var fallbackObjectFitStyles = (isContain && isLandscape) || (isCover && !isLandscape)
            ? { width: '100%', height: 'auto' }
            : { width: 'auto', height: '100%' };
        return {
            root: [
                classNames.root,
                theme.fonts.medium,
                {
                    overflow: 'hidden',
                },
                maximizeFrame && [
                    classNames.rootMaximizeFrame,
                    {
                        height: '100%',
                        width: '100%',
                    },
                ],
                isLoaded && shouldFadeIn && !shouldStartVisible && Styling_1.AnimationClassNames.fadeIn400,
                (isCenter || isContain || isCover || isCenterContain || isCenterCover) && {
                    position: 'relative',
                },
                className,
            ],
            image: [
                classNames.image,
                {
                    display: 'block',
                    opacity: 0,
                },
                isLoaded && [
                    'is-loaded',
                    {
                        opacity: 1,
                    },
                ],
                isCenter && [classNames.imageCenter, ImageFitStyles],
                isContain && [
                    classNames.imageContain,
                    supportsObjectFit && {
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    },
                    !supportsObjectFit && fallbackObjectFitStyles,
                    ImageFitStyles,
                ],
                isCover && [
                    classNames.imageCover,
                    supportsObjectFit && {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    },
                    !supportsObjectFit && fallbackObjectFitStyles,
                    ImageFitStyles,
                ],
                isCenterContain && [
                    classNames.imageCenterContain,
                    isLandscape && {
                        maxWidth: '100%',
                    },
                    !isLandscape && {
                        maxHeight: '100%',
                    },
                    ImageFitStyles,
                ],
                isCenterCover && [
                    classNames.imageCenterCover,
                    isLandscape && {
                        maxHeight: '100%',
                    },
                    !isLandscape && {
                        maxWidth: '100%',
                    },
                    ImageFitStyles,
                ],
                isNone && [
                    classNames.imageNone,
                    {
                        width: 'auto',
                        height: 'auto',
                    },
                ],
                isNotImageFit && [
                    !!width &&
                        !height && {
                        height: 'auto',
                        width: '100%',
                    },
                    !width &&
                        !!height && {
                        height: '100%',
                        width: 'auto',
                    },
                    !!width &&
                        !!height && {
                        height: '100%',
                        width: '100%',
                    },
                ],
                isLandscape && classNames.imageLandscape,
                !isLandscape && classNames.imagePortrait,
                !isLoaded && 'is-notLoaded',
                shouldFadeIn && 'is-fadeIn',
                isError && 'is-error',
            ],
        };
    };
});
//# sourceMappingURL=Image.styles.js.map