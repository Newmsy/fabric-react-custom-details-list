define(["require", "exports", "tslib", "../../Styling", "./MessageBar.types"], function (require, exports, tslib_1, Styling_1, MessageBar_types_1) {
    "use strict";
    var _a, _b, _c;
    Object.defineProperty(exports, "__esModule", { value: true });
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
        _a[MessageBar_types_1.MessageBarType.error] = 'errorBackground',
        _a[MessageBar_types_1.MessageBarType.blocked] = 'errorBackground',
        _a[MessageBar_types_1.MessageBarType.success] = 'successBackground',
        _a[MessageBar_types_1.MessageBarType.warning] = 'warningBackground',
        _a[MessageBar_types_1.MessageBarType.severeWarning] = 'severeWarningBackground',
        _a[MessageBar_types_1.MessageBarType.info] = 'infoBackground',
        _a);
    var highContrastBackgroundColor = (_b = {},
        _b[MessageBar_types_1.MessageBarType.error] = 'rgba(255, 0, 0, 0.3)',
        _b[MessageBar_types_1.MessageBarType.blocked] = 'rgba(255, 0, 0, 0.3)',
        _b[MessageBar_types_1.MessageBarType.success] = 'rgba(48, 241, 73, 0.3)',
        _b[MessageBar_types_1.MessageBarType.warning] = 'rgba(255, 254, 57, 0.3)',
        _b[MessageBar_types_1.MessageBarType.severeWarning] = 'rgba(255, 0, 0, 0.3)',
        _b[MessageBar_types_1.MessageBarType.info] = 'Window',
        _b);
    var iconColor = (_c = {},
        _c[MessageBar_types_1.MessageBarType.error] = 'errorIcon',
        _c[MessageBar_types_1.MessageBarType.blocked] = 'errorIcon',
        _c[MessageBar_types_1.MessageBarType.success] = 'successIcon',
        _c[MessageBar_types_1.MessageBarType.warning] = 'warningIcon',
        _c[MessageBar_types_1.MessageBarType.severeWarning] = 'severeWarningIcon',
        _c[MessageBar_types_1.MessageBarType.info] = 'infoIcon',
        _c);
    exports.getStyles = function (props) {
        var _a, _b, _c, _d, _e;
        var theme = props.theme, className = props.className, onDismiss = props.onDismiss, truncated = props.truncated, isMultiline = props.isMultiline, expandSingleLine = props.expandSingleLine, _f = props.messageBarType, messageBarType = _f === void 0 ? MessageBar_types_1.MessageBarType.info : _f;
        var semanticColors = theme.semanticColors, fonts = theme.fonts;
        var SmallScreenSelector = Styling_1.getScreenSelector(0, Styling_1.ScreenWidthMaxSmall);
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        var dismissalAndExpandIconStyle = {
            fontSize: Styling_1.IconFontSizes.xSmall,
            height: 10,
            lineHeight: '10px',
            color: semanticColors.messageText,
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = {
                    MsHighContrastAdjust: 'none',
                    color: 'WindowText',
                },
                _a),
        };
        var dismissalAndExpandStyle = [
            Styling_1.getFocusStyle(theme, {
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
                messageBarType === MessageBar_types_1.MessageBarType.error && classNames.error,
                messageBarType === MessageBar_types_1.MessageBarType.blocked && classNames.blocked,
                messageBarType === MessageBar_types_1.MessageBarType.severeWarning && classNames.severeWarning,
                messageBarType === MessageBar_types_1.MessageBarType.success && classNames.success,
                messageBarType === MessageBar_types_1.MessageBarType.warning && classNames.warning,
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
                        _b[Styling_1.HighContrastSelector] = {
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
                    fontSize: Styling_1.IconFontSizes.medium,
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
                    _c[Styling_1.HighContrastSelector] = {
                        MsHighContrastAdjust: 'none',
                        color: 'WindowText',
                    },
                    _c),
            },
            text: [
                classNames.text,
                tslib_1.__assign(tslib_1.__assign({ minWidth: 0, display: 'flex', flexGrow: 1, margin: 8 }, fonts.small), { selectors: (_d = {},
                        _d[Styling_1.HighContrastSelector] = {
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
});
//# sourceMappingURL=MessageBar.styles.js.map