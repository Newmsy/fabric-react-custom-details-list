"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../Styling");
var DetailsRow_styles_1 = require("./DetailsRow.styles");
var DetailsHeader_styles_1 = require("./DetailsHeader.styles");
var Check_styles_1 = require("../Check/Check.styles");
var GlobalClassNames = {
    root: 'ms-DetailsRow-check',
    isDisabled: 'ms-DetailsRow-check--isDisabled',
    isHeader: 'ms-DetailsRow-check--isHeader',
};
exports.CHECK_CELL_WIDTH = 48;
exports.getStyles = function (props) {
    var theme = props.theme, className = props.className, isHeader = props.isHeader, selected = props.selected, anySelected = props.anySelected, canSelect = props.canSelect, compact = props.compact, isVisible = props.isVisible;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    var rowHeight = DetailsRow_styles_1.DEFAULT_ROW_HEIGHTS.rowHeight, compactRowHeight = DetailsRow_styles_1.DEFAULT_ROW_HEIGHTS.compactRowHeight;
    var height = isHeader ? DetailsHeader_styles_1.HEADER_HEIGHT : compact ? compactRowHeight : rowHeight;
    var isCheckVisible = isVisible || selected || anySelected;
    return {
        root: [classNames.root, className],
        check: [
            !canSelect && classNames.isDisabled,
            isHeader && classNames.isHeader,
            Styling_1.getFocusStyle(theme),
            theme.fonts.small,
            Check_styles_1.CheckGlobalClassNames.checkHost,
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
                boxSizing: 'border-box',
                verticalAlign: 'top',
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                opacity: isCheckVisible ? 1 : 0,
                height: height,
                width: exports.CHECK_CELL_WIDTH,
                padding: 0,
                margin: 0,
            },
        ],
        isDisabled: [],
    };
};
//# sourceMappingURL=DetailsRowCheck.styles.js.map