define(["require", "exports", "../../Utilities", "./Pivot.base", "./Pivot.styles"], function (require, exports, Utilities_1, Pivot_base_1, Pivot_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The Pivot control and related tabs pattern are used for navigating frequently accessed,
     * distinct content categories. Pivots allow for navigation between two or more content
     * views and relies on text headers to articulate the different sections of content.
     */
    exports.Pivot = Utilities_1.styled(Pivot_base_1.PivotBase, Pivot_styles_1.getStyles, undefined, {
        scope: 'Pivot',
    });
});
//# sourceMappingURL=Pivot.js.map