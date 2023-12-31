import { getGlobalClassNames, getFocusStyle } from '../../Styling';
import { DEFAULT_ROW_HEIGHTS } from './DetailsRow.styles';
import { HEADER_HEIGHT } from './DetailsHeader.styles';
import { CheckGlobalClassNames } from '../Check/Check.styles';
var GlobalClassNames = {
    root: 'ms-DetailsRow-check',
    isDisabled: 'ms-DetailsRow-check--isDisabled',
    isHeader: 'ms-DetailsRow-check--isHeader',
};
export var CHECK_CELL_WIDTH = 48;
export var getStyles = function (props) {
    var theme = props.theme, className = props.className, isHeader = props.isHeader, selected = props.selected, anySelected = props.anySelected, canSelect = props.canSelect, compact = props.compact, isVisible = props.isVisible;
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
    var rowHeight = DEFAULT_ROW_HEIGHTS.rowHeight, compactRowHeight = DEFAULT_ROW_HEIGHTS.compactRowHeight;
    var height = isHeader ? HEADER_HEIGHT : compact ? compactRowHeight : rowHeight;
    var isCheckVisible = isVisible || selected || anySelected;
    return {
        root: [classNames.root, className],
        check: [
            !canSelect && classNames.isDisabled,
            isHeader && classNames.isHeader,
            getFocusStyle(theme),
            theme.fonts.small,
            CheckGlobalClassNames.checkHost,
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
                width: CHECK_CELL_WIDTH,
                padding: 0,
                margin: 0,
            },
        ],
        isDisabled: [],
    };
};
//# sourceMappingURL=DetailsRowCheck.styles.js.map