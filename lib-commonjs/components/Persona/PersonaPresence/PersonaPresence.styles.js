"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var PersonaConsts_1 = require("../PersonaConsts");
var GlobalClassNames = {
    presence: 'ms-Persona-presence',
    presenceIcon: 'ms-Persona-presenceIcon',
};
exports.getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var theme = props.theme, presenceColors = props.presenceColors;
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    var size = PersonaConsts_1.sizeBoolean(props.size);
    var presence = PersonaConsts_1.presenceBoolean(props.presence);
    // Presence colors
    var presenceColorAvailable = (presenceColors && presenceColors.available) || '#6BB700';
    var presenceColorAway = (presenceColors && presenceColors.away) || '#FFAA44';
    var presenceColorBusy = (presenceColors && presenceColors.busy) || '#C43148';
    var presenceColorDnd = (presenceColors && presenceColors.dnd) || '#C50F1F';
    var presenceColorOffline = (presenceColors && presenceColors.offline) || '#8A8886';
    var presenceColorOof = (presenceColors && presenceColors.oof) || '#B4009E';
    var presenceColorBackground = (presenceColors && presenceColors.background) || semanticColors.bodyBackground;
    var isOpenCirclePresence = presence.isOffline ||
        (props.isOutOfOffice && (presence.isAvailable || presence.isBusy || presence.isAway || presence.isDoNotDisturb));
    var borderSizeForSmallPersonas = '1px';
    var borderSizeForLargePersonas = '2px';
    var borderSize = size.isSize72 || size.isSize100 ? borderSizeForLargePersonas : borderSizeForSmallPersonas;
    return {
        presence: [
            classNames.presence,
            {
                position: 'absolute',
                height: PersonaConsts_1.personaPresenceSize.size12,
                width: PersonaConsts_1.personaPresenceSize.size12,
                borderRadius: '50%',
                top: 'auto',
                right: '-2px',
                bottom: '-2px',
                border: "2px solid " + presenceColorBackground,
                textAlign: 'center',
                boxSizing: 'content-box',
                backgroundClip: 'content-box',
                MsHighContrastAdjust: 'none',
                selectors: (_a = {},
                    _a[Styling_1.HighContrastSelector] = {
                        borderColor: 'Window',
                        backgroundColor: 'WindowText',
                    },
                    _a),
            },
            (size.isSize8 || size.isSize10) && {
                right: 'auto',
                top: '7px',
                left: 0,
                border: 0,
                selectors: (_b = {},
                    _b[Styling_1.HighContrastSelector] = {
                        top: '9px',
                        border: '1px solid WindowText',
                    },
                    _b),
            },
            (size.isSize8 || size.isSize10 || size.isSize24 || size.isSize28 || size.isSize32) &&
                makeSizeStyle(PersonaConsts_1.personaPresenceSize.size8),
            (size.isSize40 || size.isSize48) && makeSizeStyle(PersonaConsts_1.personaPresenceSize.size12),
            size.isSize16 && {
                height: PersonaConsts_1.personaPresenceSize.size6,
                width: PersonaConsts_1.personaPresenceSize.size6,
                borderWidth: '1.5px',
            },
            size.isSize56 && makeSizeStyle(PersonaConsts_1.personaPresenceSize.size16),
            size.isSize72 && makeSizeStyle(PersonaConsts_1.personaPresenceSize.size20),
            size.isSize100 && makeSizeStyle(PersonaConsts_1.personaPresenceSize.size28),
            size.isSize120 && makeSizeStyle(PersonaConsts_1.personaPresenceSize.size32),
            presence.isAvailable && {
                backgroundColor: presenceColorAvailable,
                selectors: (_c = {},
                    _c[Styling_1.HighContrastSelector] = backgroundColor('Highlight'),
                    _c),
            },
            presence.isAway && backgroundColor(presenceColorAway),
            presence.isBlocked && [
                {
                    selectors: (_d = {
                            // Only show :after at larger sizes
                            ':after': size.isSize40 || size.isSize48 || size.isSize72 || size.isSize100
                                ? {
                                    content: '""',
                                    width: '100%',
                                    height: borderSize,
                                    backgroundColor: presenceColorBusy,
                                    transform: 'translateY(-50%) rotate(-45deg)',
                                    position: 'absolute',
                                    top: '50%',
                                    left: 0,
                                }
                                : undefined
                        },
                        _d[Styling_1.HighContrastSelector] = {
                            selectors: {
                                ':after': {
                                    width: "calc(100% - 4px)",
                                    left: '2px',
                                    backgroundColor: 'Window',
                                },
                            },
                        },
                        _d),
                },
            ],
            presence.isBusy && backgroundColor(presenceColorBusy),
            presence.isDoNotDisturb && backgroundColor(presenceColorDnd),
            presence.isOffline && backgroundColor(presenceColorOffline),
            (isOpenCirclePresence || presence.isBlocked) && [
                {
                    backgroundColor: presenceColorBackground,
                    selectors: (_e = {
                            ':before': {
                                content: '""',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                border: borderSize + " solid " + presenceColorBusy,
                                borderRadius: '50%',
                                boxSizing: 'border-box',
                            }
                        },
                        _e[Styling_1.HighContrastSelector] = {
                            backgroundColor: 'WindowText',
                            selectors: {
                                ':before': {
                                    width: "calc(100% - 2px)",
                                    height: "calc(100% - 2px)",
                                    top: '1px',
                                    left: '1px',
                                    borderColor: 'Window',
                                },
                            },
                        },
                        _e),
                },
            ],
            isOpenCirclePresence && presence.isAvailable && makeBeforeBorderStyle(borderSize, presenceColorAvailable),
            isOpenCirclePresence && presence.isBusy && makeBeforeBorderStyle(borderSize, presenceColorBusy),
            isOpenCirclePresence && presence.isAway && makeBeforeBorderStyle(borderSize, presenceColorOof),
            isOpenCirclePresence && presence.isDoNotDisturb && makeBeforeBorderStyle(borderSize, presenceColorDnd),
            isOpenCirclePresence && presence.isOffline && makeBeforeBorderStyle(borderSize, presenceColorOffline),
            isOpenCirclePresence &&
                presence.isOffline &&
                props.isOutOfOffice &&
                makeBeforeBorderStyle(borderSize, presenceColorOof),
        ],
        presenceIcon: [
            classNames.presenceIcon,
            {
                color: presenceColorBackground,
                fontSize: '6px',
                lineHeight: PersonaConsts_1.personaPresenceSize.size12,
                verticalAlign: 'top',
                selectors: (_f = {},
                    _f[Styling_1.HighContrastSelector] = {
                        color: 'Window',
                    },
                    _f),
            },
            size.isSize56 && {
                fontSize: '8px',
                lineHeight: PersonaConsts_1.personaPresenceSize.size16,
            },
            size.isSize72 && {
                fontSize: fonts.small.fontSize,
                lineHeight: PersonaConsts_1.personaPresenceSize.size20,
            },
            size.isSize100 && {
                fontSize: fonts.medium.fontSize,
                lineHeight: PersonaConsts_1.personaPresenceSize.size28,
            },
            size.isSize120 && {
                fontSize: fonts.medium.fontSize,
                lineHeight: PersonaConsts_1.personaPresenceSize.size32,
            },
            presence.isAway && {
                position: 'relative',
                left: isOpenCirclePresence ? undefined : '1px',
            },
            isOpenCirclePresence && presence.isAvailable && makeOpenCircleIconStyle(presenceColorAvailable),
            isOpenCirclePresence && presence.isBusy && makeOpenCircleIconStyle(presenceColorBusy),
            isOpenCirclePresence && presence.isAway && makeOpenCircleIconStyle(presenceColorOof),
            isOpenCirclePresence && presence.isDoNotDisturb && makeOpenCircleIconStyle(presenceColorDnd),
            isOpenCirclePresence && presence.isOffline && makeOpenCircleIconStyle(presenceColorOffline),
            isOpenCirclePresence && presence.isOffline && props.isOutOfOffice && makeOpenCircleIconStyle(presenceColorOof),
        ],
    };
};
function makeOpenCircleIconStyle(color) {
    return {
        color: color,
        borderColor: color,
    };
}
function makeBeforeBorderStyle(borderSize, color) {
    return {
        selectors: {
            ':before': {
                border: borderSize + " solid " + color,
            },
        },
    };
}
function makeSizeStyle(size) {
    return {
        height: size,
        width: size,
    };
}
function backgroundColor(color) {
    return { backgroundColor: color };
}
//# sourceMappingURL=PersonaPresence.styles.js.map