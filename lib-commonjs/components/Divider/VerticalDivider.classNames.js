"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Styling_1 = require("../../Styling");
/**
 * @deprecated use getStyles exported from VerticalDivider.styles.ts
 */
exports.getDividerClassNames = Utilities_1.memoizeFunction(
// tslint:disable-next-line:deprecation
function (theme) {
    return Styling_1.mergeStyleSets({
        wrapper: {
            display: 'inline-flex',
            height: '100%',
            alignItems: 'center',
        },
        divider: {
            width: 1,
            height: '100%',
            backgroundColor: theme.palette.neutralTertiaryAlt,
        },
    });
});
//# sourceMappingURL=VerticalDivider.classNames.js.map