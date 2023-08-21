/**
 * Possible variations of the spinner circle size.
 * {@docCategory Spinner}
 */
export var SpinnerSize;
(function (SpinnerSize) {
    /**
     * 12px Spinner diameter
     */
    SpinnerSize[SpinnerSize["xSmall"] = 0] = "xSmall";
    /**
     * 16px Spinner diameter
     */
    SpinnerSize[SpinnerSize["small"] = 1] = "small";
    /**
     * 20px Spinner diameter
     */
    SpinnerSize[SpinnerSize["medium"] = 2] = "medium";
    /**
     * 28px Spinner diameter
     */
    SpinnerSize[SpinnerSize["large"] = 3] = "large";
})(SpinnerSize || (SpinnerSize = {}));
/**
 * Deprecated at v2.0.0, use `SpinnerSize` instead.
 * @deprecated Use `SpinnerSize` instead.
 * {@docCategory Spinner}
 */
export var SpinnerType;
(function (SpinnerType) {
    /**
     * Deprecated and will be removed at \>= 2.0.0. Use `SpinnerSize.medium` instead.
     * @deprecated Use `SpinnerSize.medium` instead.
     */
    SpinnerType[SpinnerType["normal"] = 0] = "normal";
    /**
     * Deprecated and will be removed at \>= 2.0.0. Use `SpinnerSize.large` instead.
     * @deprecated Use `SpinnerSize.large` instead.
     */
    SpinnerType[SpinnerType["large"] = 1] = "large";
})(SpinnerType || (SpinnerType = {}));
//# sourceMappingURL=Spinner.types.js.map