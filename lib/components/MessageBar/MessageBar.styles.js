var _a, _b, _c;
import { __assign } from "tslib";
import { HighContrastSelector, ScreenWidthMaxSmall, getScreenSelector, getGlobalClassNames, getFocusStyle, IconFontSizes, } from '../../Styling';
import { MessageBarType } from './MessageBar.types';
var GlobalClassNames = {
    root: 'ms-MessageBar',
    error: 'ms-MessageBar--error',
    blocked: 'ms-MessageBar--blocked',
    severeWarning: 'ms-MessageBar--severeWarning',
    success: 'ms-MessageBar--success',
    warning: 'ms-MessageBar--warning',
    multiline: 'ms-MessageBar-multiline',
    singleline: 'ms-MessageBar-singleline',
    dismissalSingleLine: 'ms-MessageBar-dismissalSingleLine',
    expandingSingleLine: 'ms-MessageBar-expandingSingleLine',
    content: 'ms-MessageBar-content',
    iconContainer: 'ms-MessageBar-icon',
    text: 'ms-MessageBar-text',
    innerText: 'ms-MessageBar-innerText',
    dismissSingleLine: 'ms-MessageBar-dismissSingleLine',
    expandSingleLine: 'ms-MessageBar-expandSingleLine',
    dismissal: 'ms-MessageBar-dismissal',
    expand: 'ms-MessageBar-expand',
    actions: 'ms-MessageBar-actions',
    actionsSingleline: 'ms-MessageBar-actionsSingleLine',
};
var backgroundColor = (_a = {},
    _a[MessageBarType.error] = 'errorBackground',
    _a[MessageBarType.blocked] = 'errorBackground',
    _a[MessageBarType.success] = 'successBackground',
    _a[MessageBarType.warning] = 'warningBackground',
    _a[MessageBarType.severeWarning] = 'severeWarningBackground',
    _a[MessageBarType.info] = 'infoBackground',
    _a);
var highContrastBackgroundColor = (_b = {},
    _b[MessageBarType.error] = 'rgba(255, 0, 0, 0.3)',
    _b[MessageBarType.blocked] = 'rgba(255, 0, 0, 0.3)',
    _b[MessageBarType.success] = 'rgba(48, 241, 73, 0.3)',
    _b[MessageBarType.warning] = 'rgba(255, 254, 57, 0.3)',
    _b[MessageBarType.severeWarning] = 'rgba(255, 0, 0, 0.3)',
    _b[MessageBarType.info] = 'Window',
    _b);
var iconColor = (_c = {},
    _c[MessageBarType.error] = 'errorIcon',
    _c[MessageBarType.blocked] = 'errorIcon',
    _c[MessageBarType.success] = 'successIcon',
    _c[MessageBarType.warning] = 'warningIcon',
    _c[MessageBarType.severeWarning] = 'severeWarningIcon',
    _c[MessageBarType.info] = 'infoIcon',
    _c);
export var getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    var theme = props.theme, className = props.className, onDismiss = props.onDismiss, truncated = props.truncated, isMultiline = props.isMultiline, expandSingleLine = props.expandSingleLine, _f = props.messageBarType, messageBarType = _f === void 0 ? MessageBarType.info : _f;
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var SmallScreenSelector = getScreenSelector(0, ScreenWidthMaxSmall);
    var classNames = getGlobalClassNames(GlobalClassNames, theme);
    var dismissalAndExpandIconStyle = {
        fontSize: IconFontSizes.xSmall,
        height: 10,
        lineHeight: '10px',
        color: semanticColors.messageText,
        selectors: (_a = {},
            _a[HighContrastSelector] = {
                MsHighContrastAdjust: 'none',
                color: 'WindowText',
            },
            _a),
    };
    var dismissalAndExpandStyle = [
        getFocusStyle(theme, {
            inset: 1,
            highContrastStyle: {
                outlineOffset: '-6px',
                outline: '1px solid Highlight',
            },
            borderColor: 'transparent',
        }),
        {
            flexShrink: 0,
            width: 32,
            height: 32,
            padding: '8px 12px',
            selectors: {
                '& .ms-Button-icon': dismissalAndExpandIconStyle,
                ':hover': {
                    backgroundColor: 'transparent',
                },
                ':active': {
                    backgroundColor: 'transparent',
                },
            },
        },
    ];
    return {
        root: [
            classNames.root,
            fonts.medium,
            messageBarType === MessageBarType.error && classNames.error,
            messageBarType === MessageBarType.blocked && classNames.blocked,
            messageBarType === MessageBarType.severeWarning && classNames.severeWarning,
            messageBarType === MessageBarType.success && classNames.success,
            messageBarType === MessageBarType.warning && classNames.warning,
            isMultiline ? classNames.multiline : classNames.singleline,
            !isMultiline && onDismiss && classNames.dismissalSingleLine,
            !isMultiline && truncated && classNames.expandingSingleLine,
            {
                background: semanticColors[backgroundColor[messageBarType]],
                color: semanticColors.messageText,
                minHeight: 32,
                width: '100%',
                display: 'flex',
                wordBreak: 'break-word',
                selectors: (_b = {
                        '.ms-Link': {
                            color: semanticColors.messageLink,
                            selectors: {
                                ':hover': {
                                    color: semanticColors.messageLinkHovered,
                                },
                            },
                        }
                    },
                    _b[HighContrastSelector] = {
                        MsHighContrastAdjust: 'none',
                        background: highContrastBackgroundColor[messageBarType],
                        border: '1px solid WindowText',
                        color: 'WindowText',
                    },
                    _b),
            },
            isMultiline && {
                flexDirection: 'column',
            },
            className,
        ],
        content: [
            classNames.content,
            {
                display: 'flex',
                width: '100%',
                lineHeight: 'normal',
            },
        ],
        iconContainer: [
            classNames.iconContainer,
            {
                fontSize: IconFontSizes.medium,
                minWidth: 16,
                minHeight: 16,
                display: 'flex',
                flexShrink: 0,
                margin: '8px 0 8px 12px',
            },
        ],
        icon: {
            color: semanticColors[iconColor[messageBarType]],
            selectors: (_c = {},
                _c[HighContrastSelector] = {
                    MsHighContrastAdjust: 'none',
                    color: 'WindowText',
                },
                _c),
        },
        text: [
            classNames.text,
            __assign(__assign({ minWidth: 0, display: 'flex', flexGrow: 1, margin: 8 }, fonts.small), { selectors: (_d = {},
                    _d[HighContrastSelector] = {
                        MsHighContrastAdjust: 'none',
                    },
                    _d) }),
            !onDismiss && {
                marginRight: 12,
            },
        ],
        innerText: [
            classNames.innerText,
            {
                lineHeight: 16,
                selectors: {
                    '& span a': {
                        paddingLeft: 4,
                    },
                },
            },
            truncated && {
                overflow: 'visible',
                whiteSpace: 'pre-wrap',
            },
            !isMultiline && {
                // In high contrast this causes the top and bottom of links' focus outline to be clipped
                // (not sure of a good way around that while still maintaining text clipping)
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
            !isMultiline &&
                !truncated && {
                selectors: (_e = {},
                    _e[SmallScreenSelector] = {
                        overflow: 'visible',
                        whiteSpace: 'pre-wrap',
                    },
                    _e),
            },
            expandSingleLine && {
                overflow: 'visible',
                whiteSpace: 'pre-wrap',
            },
        ],
        dismissSingleLine: classNames.dismissSingleLine,
        expandSingleLine: classNames.expandSingleLine,
        dismissal: [classNames.dismissal, dismissalAndExpandStyle],
        expand: [classNames.expand, dismissalAndExpandStyle],
        actions: [
            isMultiline ? classNames.actions : classNames.actionsSingleline,
            {
                display: 'flex',
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: 'auto',
                flexDirection: 'row-reverse',
                alignItems: 'center',
                margin: '0 12px 0 8px',
                selectors: {
                    '& button:nth-child(n+2)': {
                        marginLeft: 8,
                    },
                },
            },
            isMultiline && {
                marginBottom: 8,
            },
            onDismiss &&
                !isMultiline && {
                marginRight: 0,
            },
        ],
    };
};
//# sourceMappingURL=MessageBar.styles.js.map