define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStyles = function (props) {
        var _a;
        var theme = props.theme, disabled = props.disabled, visible = props.visible;
        return {
            container: [
                {
                    backgroundColor: theme.palette.neutralDark,
                },
                disabled && {
                    opacity: 0.5,
                    selectors: (_a = {},
                        _a[Styling_1.HighContrastSelector] = {
                            color: 'GrayText',
                            opacity: 1,
                        },
                        _a),
                },
                !visible && {
                    visibility: 'hidden',
                },
            ],
            root: [
                theme.fonts.medium,
                {
                    textAlign: 'center',
                    paddingLeft: '3px',
                    paddingRight: '3px',
                    backgroundColor: theme.palette.neutralDark,
                    color: theme.palette.neutralLight,
                    minWidth: '11px',
                    lineHeight: '17px',
                    height: '17px',
                    display: 'inline-block',
                },
                disabled && {
                    color: theme.palette.neutralTertiaryAlt,
                },
            ],
        };
    };
    exports.getCalloutStyles = function (props) {
        return {
            container: [],
            root: [
                {
                    border: 'none',
                    boxShadow: 'none',
                },
            ],
            beak: [],
            beakCurtain: [],
            calloutMain: [
                {
                    backgroundColor: 'transparent',
                },
            ],
        };
    };
    exports.getCalloutOffsetStyles = function (offset) {
        return function (props) {
            return Styling_1.mergeStyleSets(exports.getCalloutStyles(props), {
                root: [
                    {
                        // tslint:disable-next-line:deprecation
                        marginLeft: offset.left || offset.x,
                        // tslint:disable-next-line:deprecation
                        marginTop: offset.top || offset.y,
                    },
                ],
            });
        };
    };
});
//# sourceMappingURL=Keytip.styles.js.map