define(["require", "exports", "tslib", "react", "../../Styling", "../../Utilities", "../../utilities/color/getColorFromString", "../../utilities/grid/GridCell", "../Button/ActionButton/ActionButton.styles"], function (require, exports, tslib_1, React, Styling_1, Utilities_1, getColorFromString_1, GridCell_1, ActionButton_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getColorPickerGridCellButtonClassNames = Utilities_1.memoizeFunction(function (theme, className, variantClassName, iconClassName, menuIconClassName, disabled, checked, expanded, isSplit) {
        var styles = ActionButton_styles_1.getStyles(theme);
        return Styling_1.mergeStyleSets({
            root: [
                'ms-Button',
                styles.root,
                variantClassName,
                className,
                checked && ['is-checked', styles.rootChecked],
                disabled && ['is-disabled', styles.rootDisabled],
                !disabled &&
                    !checked && {
                    selectors: {
                        ':hover': styles.rootHovered,
                        ':focus': styles.rootFocused,
                        ':active': styles.rootPressed,
                    },
                },
                disabled && checked && [styles.rootCheckedDisabled],
                !disabled &&
                    checked && {
                    selectors: {
                        ':hover': styles.rootCheckedHovered,
                        ':active': styles.rootCheckedPressed,
                    },
                },
            ],
            flexContainer: ['ms-Button-flexContainer', styles.flexContainer],
        });
    });
    var getClassNames = Utilities_1.classNamesFunction();
    var ColorCell = /** @class */ (function (_super) {
        tslib_1.__extends(ColorCell, _super);
        function ColorCell() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ColorCell;
    }(GridCell_1.GridCell));
    var ColorPickerGridCellBase = /** @class */ (function (_super) {
        tslib_1.__extends(ColorPickerGridCellBase, _super);
        function ColorPickerGridCellBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * Render the core of a color cell
             * @returns - Element representing the core of the item
             */
            _this._onRenderColorOption = function (colorOption) {
                // Build an SVG for the cell with the given shape and color properties
                return (React.createElement("svg", { className: _this._classNames.svg, viewBox: "0 0 20 20", fill: getColorFromString_1.getColorFromString(colorOption.color).str }, _this.props.circle ? React.createElement("circle", { cx: "50%", cy: "50%", r: "50%" }) : React.createElement("rect", { width: "100%", height: "100%" })));
            };
            return _this;
        }
        ColorPickerGridCellBase.prototype.render = function () {
            var _a = this.props, item = _a.item, 
            // tslint:disable-next-line:deprecation
            _b = _a.idPrefix, 
            // tslint:disable-next-line:deprecation
            idPrefix = _b === void 0 ? this.props.id : _b, selected = _a.selected, disabled = _a.disabled, styles = _a.styles, theme = _a.theme, circle = _a.circle, color = _a.color, onClick = _a.onClick, onHover = _a.onHover, onFocus = _a.onFocus, onMouseEnter = _a.onMouseEnter, onMouseMove = _a.onMouseMove, onMouseLeave = _a.onMouseLeave, onWheel = _a.onWheel, onKeyDown = _a.onKeyDown, height = _a.height, width = _a.width, borderWidth = _a.borderWidth;
            this._classNames = getClassNames(styles, {
                theme: theme,
                disabled: disabled,
                selected: selected,
                circle: circle,
                isWhite: this._isWhiteCell(color),
                height: height,
                width: width,
                borderWidth: borderWidth,
            });
            return (React.createElement(ColorCell, { item: item, id: idPrefix + "-" + item.id + "-" + item.index, key: item.id, disabled: disabled, role: 'gridcell', onRenderItem: this._onRenderColorOption, selected: selected, onClick: onClick, onHover: onHover, onFocus: onFocus, label: item.label, className: this._classNames.colorCell, getClassNames: getColorPickerGridCellButtonClassNames, index: item.index, onMouseEnter: onMouseEnter, onMouseMove: onMouseMove, onMouseLeave: onMouseLeave, onWheel: onWheel, onKeyDown: onKeyDown }));
        };
        /**
         * Validate if the cell's color is white or not to apply whiteCell style
         * @param inputColor - The color of the current cell
         * @returns - Whether the cell's color is white or not.
         */
        ColorPickerGridCellBase.prototype._isWhiteCell = function (inputColor) {
            var color = getColorFromString_1.getColorFromString(inputColor);
            return color.hex === 'ffffff';
        };
        ColorPickerGridCellBase.defaultProps = {
            circle: true,
            disabled: false,
            selected: false,
        };
        return ColorPickerGridCellBase;
    }(React.PureComponent));
    exports.ColorPickerGridCellBase = ColorPickerGridCellBase;
});
//# sourceMappingURL=ColorPickerGridCell.base.js.map