import { __assign } from "tslib";
import { getFocusStyle, getGlobalClassNames, hiddenContentStyle, FontWeights } from '../../Styling';
import { DEFAULT_CELL_STYLE_PROPS } from './DetailsRow.styles';
import { getCellStyles } from './DetailsHeader.styles';
var GlobalClassNames = {
    isActionable: 'is-actionable',
    cellIsCheck: 'ms-DetailsHeader-cellIsCheck',
    collapseButton: 'ms-DetailsHeader-collapseButton',
    isCollapsed: 'is-collapsed',
    isAllSelected: 'is-allSelected',
    isSelectAllHidden: 'is-selectAllHidden',
    isResizingColumn: 'is-resizingColumn',
    isEmpty: 'is-empty',
    isIconVisible: 'is-icon-visible',
    cellSizer: 'ms-DetailsHeader-cellSizer',
    isResizing: 'is-resizing',
    dropHintCircleStyle: 'ms-DetailsHeader-dropHintCircleStyle',
    dropHintLineStyle: 'ms-DetailsHeader-dropHintLineStyle',
    cellTitle: 'ms-DetailsHeader-cellTitle',
    cellName: 'ms-DetailsHeader-cellName',
    filterChevron: 'ms-DetailsHeader-filterChevron',
    gripperBarVerticalStyle: 'ms-DetailsColumn-gripperBar',
    nearIcon: 'ms-DetailsColumn-nearIcon',
};
export var getStyles = function (props) {
    var _a;
    var theme = props.theme, headerClassName = props.headerClassName, iconClassName = props.iconClassName, isActionable = props.isActionable, isEmpty = props.isEmpty, isIconVisible = props.isIconVisible, isPadded = props.isPadded, isIconOnly = props.isIconOnly, _b = props.cellStyleProps, cellStyleProps = _b === void 0 ? DEFAULT_CELL_STYLE_PROPS : _b, transitionDurationDrag = props.transitionDurationDrag, transitionDurationDrop = props.transitionDurationDrop;
    var semanticColors = theme.semanticColors, palette = theme.palette, fonts = theme.fonts;
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
    var colors = {
        iconForegroundColor: semanticColors.bodySubtext,
        headerForegroundColor: semanticColors.bodyText,
        headerBackgroundColor: semanticColors.bodyBackground,
        dropdownChevronForegroundColor: palette.neutralTertiary,
        resizerColor: palette.neutralTertiaryAlt,
    };
    var nearIconStyle = {
        color: colors.iconForegroundColor,
        opacity: 1,
        paddingLeft: 8,
    };
    var borderWhileDragging = {
        outline: "1px solid " + palette.themePrimary,
    };
    var borderAfterDragOrDrop = {
        outlineColor: 'transparent',
    };
    return {
        root: [
            getCellStyles(props),
            fonts.small,
            isActionable && [
                classNames.isActionable,
                {
                    selectors: {
                        ':hover': {
                            color: semanticColors.bodyText,
                            background: semanticColors.listHeaderBackgroundHovered,
                        },
                        ':active': {
                            background: semanticColors.listHeaderBackgroundPressed,
                        },
                    },
                },
            ],
            isEmpty && [
                classNames.isEmpty,
                {
                    textOverflow: 'clip',
                },
            ],
            isIconVisible && classNames.isIconVisible,
            isPadded && {
                paddingRight: cellStyleProps.cellExtraRightPadding + cellStyleProps.cellRightPadding,
            },
            {
                selectors: {
                    ':hover i[data-icon-name="GripperBarVertical"]': {
                        display: 'block',
                    },
                },
            },
            headerClassName,
        ],
        gripperBarVerticalStyle: {
            display: 'none',
            position: 'absolute',
            textAlign: 'left',
            color: palette.neutralTertiary,
            left: 1,
        },
        nearIcon: [classNames.nearIcon, nearIconStyle],
        sortIcon: [
            nearIconStyle,
            {
                paddingLeft: 4,
                position: 'relative',
                top: 1,
            },
        ],
        iconClassName: [
            {
                color: colors.iconForegroundColor,
                opacity: 1,
            },
            iconClassName,
        ],
        filterChevron: [
            classNames.filterChevron,
            {
                color: colors.dropdownChevronForegroundColor,
                paddingLeft: 6,
                verticalAlign: 'middle',
                fontSize: fonts.small.fontSize,
            },
        ],
        cellTitle: [
            classNames.cellTitle,
            getFocusStyle(theme),
            __assign({ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'stretch', boxSizing: 'border-box', overflow: 'hidden', padding: "0 " + cellStyleProps.cellRightPadding + "px 0 " + cellStyleProps.cellLeftPadding + "px" }, (isIconOnly
                ? {
                    alignContent: 'flex-end',
                    maxHeight: '100%',
                    flexWrap: 'wrap-reverse',
                }
                : {})),
        ],
        cellName: [
            classNames.cellName,
            {
                flex: '0 1 auto',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontWeight: FontWeights.semibold,
                fontSize: fonts.medium.fontSize,
            },
            isIconOnly && {
                selectors: (_a = {},
                    _a["." + classNames.nearIcon] = {
                        paddingLeft: 0,
                    },
                    _a),
            },
        ],
        cellTooltip: {
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },
        accessibleLabel: hiddenContentStyle,
        borderWhileDragging: borderWhileDragging,
        noBorderWhileDragging: [borderAfterDragOrDrop, { transition: "outline " + transitionDurationDrag + "ms ease" }],
        borderAfterDropping: borderWhileDragging,
        noBorderAfterDropping: [borderAfterDragOrDrop, { transition: "outline  " + transitionDurationDrop + "ms ease" }],
    };
};
//# sourceMappingURL=DetailsColumn.styles.js.map