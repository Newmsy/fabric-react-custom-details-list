define(["require", "exports", "tslib", "react", "../../Button", "./Nav.styles", "../../Utilities", "../../FocusZone", "../../Icon", "@uifabric/utilities"], function (require, exports, tslib_1, React, Button_1, Nav_styles_1, Utilities_1, FocusZone_1, Icon_1, utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // The number pixels per indentation level for Nav links.
    var _indentationSize = 14;
    // The number of pixels of left margin
    var _baseIndent = 3;
    // global var used in _isLinkSelectedKey
    var _urlResolver;
    function isRelativeUrl(url) {
        // A URL is relative if it has no protocol.
        return !!url && !/^[a-z0-9+-.]+:\/\//i.test(url);
    }
    exports.isRelativeUrl = isRelativeUrl;
    var getClassNames = Utilities_1.classNamesFunction();
    var NavBase = /** @class */ (function (_super) {
        tslib_1.__extends(NavBase, _super);
        function NavBase(props) {
            var _this = _super.call(this, props) || this;
            _this._focusZone = React.createRef();
            _this._onRenderLink = function (link) {
                var _a = _this.props, styles = _a.styles, groups = _a.groups, theme = _a.theme;
                var classNames = getClassNames(styles, { theme: theme, groups: groups });
                return React.createElement("div", { className: classNames.linkText }, link.name);
            };
            _this._renderGroup = function (group, groupIndex) {
                var _a = _this.props, styles = _a.styles, groups = _a.groups, theme = _a.theme, _b = _a.onRenderGroupHeader, onRenderGroupHeader = _b === void 0 ? _this._renderGroupHeader : _b;
                var isExpanded = _this._isGroupExpanded(group);
                var classNames = getClassNames(styles, {
                    theme: theme,
                    isGroup: true,
                    isExpanded: isExpanded,
                    groups: groups,
                });
                var finalOnHeaderClick = function (ev, isCollapsing) {
                    _this._onGroupHeaderClicked(group, ev);
                };
                var groupProps = tslib_1.__assign(tslib_1.__assign({}, group), { isExpanded: isExpanded, onHeaderClick: finalOnHeaderClick });
                return (React.createElement("div", { key: groupIndex, className: classNames.group },
                    groupProps.name ? onRenderGroupHeader(groupProps, _this._renderGroupHeader) : null,
                    React.createElement("div", { className: classNames.groupContent }, _this._renderLinks(groupProps.links, 0 /* nestingLevel */))));
            };
            _this._renderGroupHeader = function (group) {
                // tslint:disable-next-line:deprecation
                var _a = _this.props, styles = _a.styles, groups = _a.groups, theme = _a.theme, expandButtonAriaLabel = _a.expandButtonAriaLabel;
                var isExpanded = group.isExpanded;
                var classNames = getClassNames(styles, {
                    theme: theme,
                    isGroup: true,
                    isExpanded: isExpanded,
                    groups: groups,
                });
                var label = (isExpanded ? group.collapseAriaLabel : group.expandAriaLabel) || expandButtonAriaLabel;
                var onHeaderClick = group.onHeaderClick;
                var onClick = onHeaderClick
                    ? function (ev) {
                        onHeaderClick(ev, isExpanded);
                    }
                    : undefined;
                return (React.createElement("button", { className: classNames.chevronButton, onClick: onClick, "aria-label": label, "aria-expanded": isExpanded },
                    React.createElement(Icon_1.Icon, { className: classNames.chevronIcon, iconName: "ChevronDown" }),
                    group.name));
            };
            Utilities_1.initializeComponentRef(_this);
            _this.state = {
                isGroupCollapsed: {},
                isLinkExpandStateChanged: false,
                selectedKey: props.initialSelectedKey || props.selectedKey,
            };
            return _this;
        }
        NavBase.prototype.render = function () {
            var _a = this.props, styles = _a.styles, groups = _a.groups, className = _a.className, isOnTop = _a.isOnTop, theme = _a.theme;
            if (!groups) {
                return null;
            }
            var groupElements = groups.map(this._renderGroup);
            var classNames = getClassNames(styles, { theme: theme, className: className, isOnTop: isOnTop, groups: groups });
            return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.vertical, componentRef: this._focusZone },
                React.createElement("nav", { role: "navigation", className: classNames.root, "aria-label": this.props.ariaLabel }, groupElements)));
        };
        Object.defineProperty(NavBase.prototype, "selectedKey", {
            get: function () {
                return this.state.selectedKey;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Sets focus to the first tabbable item in the zone.
         * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
         * if focus is already in the focus zone.
         * @returns True if focus could be set to an active element, false if no operation was taken.
         */
        NavBase.prototype.focus = function (forceIntoFirstElement) {
            if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
            if (this._focusZone && this._focusZone.current) {
                return this._focusZone.current.focus(forceIntoFirstElement);
            }
            return false;
        };
        NavBase.prototype._renderNavLink = function (link, linkIndex, nestingLevel) {
            var _a = this.props, styles = _a.styles, groups = _a.groups, theme = _a.theme;
            var isLinkWithIcon = link.icon || link.iconProps;
            var isSelectedLink = this._isLinkSelected(link);
            var _b = link.ariaCurrent, ariaCurrent = _b === void 0 ? 'page' : _b;
            var classNames = getClassNames(styles, {
                theme: theme,
                isSelected: isSelectedLink,
                isDisabled: link.disabled,
                isButtonEntry: link.onClick && !link.forceAnchor,
                leftPadding: _indentationSize * nestingLevel + _baseIndent + (isLinkWithIcon ? 0 : 24),
                groups: groups,
            });
            // Prevent hijacking of the parent window if link.target is defined
            var rel = link.url && link.target && !isRelativeUrl(link.url) ? 'noopener noreferrer' : undefined;
            var LinkAs = this.props.linkAs ? utilities_1.composeComponentAs(this.props.linkAs, Button_1.ActionButton) : Button_1.ActionButton;
            var onRenderLink = this.props.onRenderLink
                ? utilities_1.composeRenderFunction(this.props.onRenderLink, this._onRenderLink)
                : this._onRenderLink;
            return (React.createElement(LinkAs, { className: classNames.link, styles: Nav_styles_1.buttonStyles, href: link.url || (link.forceAnchor ? '#' : undefined), iconProps: link.iconProps || { iconName: link.icon }, onClick: link.onClick ? this._onNavButtonLinkClicked.bind(this, link) : this._onNavAnchorLinkClicked.bind(this, link), title: link.title !== undefined ? link.title : link.name, target: link.target, rel: rel, disabled: link.disabled, "aria-current": isSelectedLink ? ariaCurrent : undefined, "aria-label": link.ariaLabel ? link.ariaLabel : undefined, link: link }, onRenderLink(link)));
        };
        NavBase.prototype._renderCompositeLink = function (link, linkIndex, nestingLevel) {
            var divProps = tslib_1.__assign({}, Utilities_1.getNativeProps(link, Utilities_1.divProperties, ['onClick']));
            // tslint:disable-next-line:deprecation
            var _a = this.props, expandButtonAriaLabel = _a.expandButtonAriaLabel, styles = _a.styles, groups = _a.groups, theme = _a.theme;
            var classNames = getClassNames(styles, {
                theme: theme,
                isExpanded: !!link.isExpanded,
                isSelected: this._isLinkSelected(link),
                isLink: true,
                isDisabled: link.disabled,
                position: _indentationSize * nestingLevel + 1,
                groups: groups,
            });
            var finalExpandBtnAriaLabel = '';
            if (link.links && link.links.length > 0) {
                if (link.collapseAriaLabel || link.expandAriaLabel) {
                    finalExpandBtnAriaLabel = link.isExpanded ? link.collapseAriaLabel : link.expandAriaLabel;
                }
                else {
                    // TODO remove when `expandButtonAriaLabel` is removed. This is not an ideal concatenation for localization.
                    finalExpandBtnAriaLabel = expandButtonAriaLabel ? link.name + " " + expandButtonAriaLabel : link.name;
                }
            }
            return (React.createElement("div", tslib_1.__assign({}, divProps, { key: link.key || linkIndex, className: classNames.compositeLink }),
                link.links && link.links.length > 0 ? (React.createElement("button", { className: classNames.chevronButton, onClick: this._onLinkExpandClicked.bind(this, link), "aria-label": finalExpandBtnAriaLabel, "aria-expanded": link.isExpanded ? 'true' : 'false' },
                    React.createElement(Icon_1.Icon, { className: classNames.chevronIcon, iconName: "ChevronDown" }))) : null,
                this._renderNavLink(link, linkIndex, nestingLevel)));
        };
        NavBase.prototype._renderLink = function (link, linkIndex, nestingLevel) {
            var _a = this.props, styles = _a.styles, groups = _a.groups, theme = _a.theme;
            var classNames = getClassNames(styles, { theme: theme, groups: groups });
            return (React.createElement("li", { key: link.key || linkIndex, role: "listitem", className: classNames.navItem },
                this._renderCompositeLink(link, linkIndex, nestingLevel),
                link.isExpanded ? this._renderLinks(link.links, ++nestingLevel) : null));
        };
        NavBase.prototype._renderLinks = function (links, nestingLevel) {
            var _this = this;
            if (!links || !links.length) {
                return null;
            }
            var linkElements = links.map(function (link, linkIndex) {
                return _this._renderLink(link, linkIndex, nestingLevel);
            });
            var _a = this.props, styles = _a.styles, groups = _a.groups, theme = _a.theme;
            var classNames = getClassNames(styles, { theme: theme, groups: groups });
            return (React.createElement("ul", { role: "list", className: classNames.navItems }, linkElements));
        };
        NavBase.prototype._onGroupHeaderClicked = function (group, ev) {
            if (group.onHeaderClick) {
                group.onHeaderClick(ev, this._isGroupExpanded(group));
            }
            this._toggleCollapsed(group);
            if (ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        NavBase.prototype._onLinkExpandClicked = function (link, ev) {
            var onLinkExpandClick = this.props.onLinkExpandClick;
            if (onLinkExpandClick) {
                onLinkExpandClick(ev, link);
            }
            if (!ev.defaultPrevented) {
                link.isExpanded = !link.isExpanded;
                this.setState({ isLinkExpandStateChanged: true });
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        NavBase.prototype._preventBounce = function (link, ev) {
            if (!link.url && link.forceAnchor) {
                ev.preventDefault();
            }
        };
        NavBase.prototype._onNavAnchorLinkClicked = function (link, ev) {
            // If the href is "#" we should call preventDefault to prevent scrolling to the top of the page
            this._preventBounce(link, ev);
            if (this.props.onLinkClick) {
                this.props.onLinkClick(ev, link);
            }
            if (!link.url && link.links && link.links.length > 0) {
                this._onLinkExpandClicked(link, ev);
            }
            this.setState({ selectedKey: link.key });
        };
        NavBase.prototype._onNavButtonLinkClicked = function (link, ev) {
            // If the href is "#" we should call preventDefault to prevent scrolling to the top of the page
            this._preventBounce(link, ev);
            if (link.onClick) {
                link.onClick(ev, link);
            }
            if (!link.url && link.links && link.links.length > 0) {
                this._onLinkExpandClicked(link, ev);
            }
            this.setState({ selectedKey: link.key });
        };
        NavBase.prototype._isLinkSelected = function (link) {
            // if caller passes in selectedKey, use it as first choice or
            // if current state.selectedKey (from addressbar) is match to the link or
            // check if URL is matching location.href (if link.url exists)
            if (this.props.selectedKey !== undefined) {
                return link.key === this.props.selectedKey;
            }
            else if (this.state.selectedKey !== undefined) {
                return link.key === this.state.selectedKey;
            }
            else if (typeof Utilities_1.getWindow() === 'undefined' || !link.url) {
                // resolve is not supported for ssr
                return false;
            }
            else {
                // If selectedKey is undefined in props and state, then check URL
                _urlResolver = _urlResolver || document.createElement('a');
                _urlResolver.href = link.url || '';
                var target = _urlResolver.href;
                if (location.href === target) {
                    return true;
                }
                // If selectedKey is not defined in state, then check URL to determine link selected status
                if (location.protocol + '//' + location.host + location.pathname === target) {
                    return true;
                }
                if (location.hash) {
                    // Match the hash to the url.
                    if (location.hash === link.url) {
                        return true;
                    }
                    // Match a rebased url. (e.g. #foo becomes http://hostname/foo)
                    _urlResolver.href = location.hash.substring(1);
                    return _urlResolver.href === target;
                }
            }
            return false;
        };
        NavBase.prototype._isGroupExpanded = function (group) {
            if (group.name && this.state.isGroupCollapsed.hasOwnProperty(group.name)) {
                return !this.state.isGroupCollapsed[group.name];
            }
            if (group.collapseByDefault !== undefined) {
                return !group.collapseByDefault;
            }
            return true;
        };
        NavBase.prototype._toggleCollapsed = function (group) {
            var _a;
            if (group.name) {
                var newGroupCollapsed = tslib_1.__assign(tslib_1.__assign({}, this.state.isGroupCollapsed), (_a = {}, _a[group.name] = this._isGroupExpanded(group), _a));
                this.setState({ isGroupCollapsed: newGroupCollapsed });
            }
        };
        NavBase.defaultProps = {
            groups: null,
        };
        return NavBase;
    }(React.Component));
    exports.NavBase = NavBase;
});
//# sourceMappingURL=Nav.base.js.map