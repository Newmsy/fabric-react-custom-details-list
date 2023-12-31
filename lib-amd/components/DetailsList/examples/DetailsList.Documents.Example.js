define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Toggle", "office-ui-fabric-react/lib/Fabric", "office-ui-fabric-react/lib/Announced", "office-ui-fabric-react/lib/DetailsList", "office-ui-fabric-react/lib/MarqueeSelection", "office-ui-fabric-react/lib/Styling"], function (require, exports, tslib_1, React, TextField_1, Toggle_1, Fabric_1, Announced_1, DetailsList_1, MarqueeSelection_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var classNames = Styling_1.mergeStyleSets({
        fileIconHeaderIcon: {
            padding: 0,
            fontSize: '16px',
        },
        fileIconCell: {
            textAlign: 'center',
            selectors: {
                '&:before': {
                    content: '.',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    height: '100%',
                    width: '0px',
                    visibility: 'hidden',
                },
            },
        },
        fileIconImg: {
            verticalAlign: 'middle',
            maxHeight: '16px',
            maxWidth: '16px',
        },
        controlWrapper: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        exampleToggle: {
            display: 'inline-block',
            marginBottom: '10px',
            marginRight: '30px',
        },
        selectionDetails: {
            marginBottom: '20px',
        },
    });
    var controlStyles = {
        root: {
            margin: '0 30px 20px 0',
            maxWidth: '300px',
        },
    };
    var DetailsListDocumentsExample = /** @class */ (function (_super) {
        tslib_1.__extends(DetailsListDocumentsExample, _super);
        function DetailsListDocumentsExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onChangeCompactMode = function (ev, checked) {
                _this.setState({ isCompactMode: checked });
            };
            _this._onChangeModalSelection = function (ev, checked) {
                _this.setState({ isModalSelection: checked });
            };
            _this._onChangeText = function (ev, text) {
                _this.setState({
                    items: text ? _this._allItems.filter(function (i) { return i.name.toLowerCase().indexOf(text) > -1; }) : _this._allItems,
                });
            };
            _this._onColumnClick = function (ev, column) {
                var _a = _this.state, columns = _a.columns, items = _a.items;
                var newColumns = columns.slice();
                var currColumn = newColumns.filter(function (currCol) { return column.key === currCol.key; })[0];
                newColumns.forEach(function (newCol) {
                    if (newCol === currColumn) {
                        currColumn.isSortedDescending = !currColumn.isSortedDescending;
                        currColumn.isSorted = true;
                        _this.setState({
                            announcedMessage: currColumn.name + " is sorted " + (currColumn.isSortedDescending ? 'descending' : 'ascending'),
                        });
                    }
                    else {
                        newCol.isSorted = false;
                        newCol.isSortedDescending = true;
                    }
                });
                var newItems = _copyAndSort(items, currColumn.fieldName, currColumn.isSortedDescending);
                _this.setState({
                    columns: newColumns,
                    items: newItems,
                });
            };
            _this._allItems = _generateDocuments();
            var columns = [
                {
                    key: 'column1',
                    name: 'File Type',
                    className: classNames.fileIconCell,
                    iconClassName: classNames.fileIconHeaderIcon,
                    ariaLabel: 'Column operations for File type, Press to sort on File type',
                    iconName: 'Page',
                    isIconOnly: true,
                    fieldName: 'name',
                    minWidth: 16,
                    maxWidth: 16,
                    onColumnClick: _this._onColumnClick,
                    onRender: function (item) {
                        return React.createElement("img", { src: item.iconName, className: classNames.fileIconImg, alt: item.fileType + ' file icon' });
                    },
                },
                {
                    key: 'column2',
                    name: 'Name',
                    fieldName: 'name',
                    minWidth: 210,
                    maxWidth: 350,
                    isRowHeader: true,
                    isResizable: true,
                    isSorted: true,
                    isSortedDescending: false,
                    sortAscendingAriaLabel: 'Sorted A to Z',
                    sortDescendingAriaLabel: 'Sorted Z to A',
                    onColumnClick: _this._onColumnClick,
                    data: 'string',
                    isPadded: true,
                },
                {
                    key: 'column3',
                    name: 'Date Modified',
                    fieldName: 'dateModifiedValue',
                    minWidth: 70,
                    maxWidth: 90,
                    isResizable: true,
                    onColumnClick: _this._onColumnClick,
                    data: 'number',
                    onRender: function (item) {
                        return React.createElement("span", null, item.dateModified);
                    },
                    isPadded: true,
                },
                {
                    key: 'column4',
                    name: 'Modified By',
                    fieldName: 'modifiedBy',
                    minWidth: 70,
                    maxWidth: 90,
                    isResizable: true,
                    isCollapsible: true,
                    data: 'string',
                    onColumnClick: _this._onColumnClick,
                    onRender: function (item) {
                        return React.createElement("span", null, item.modifiedBy);
                    },
                    isPadded: true,
                },
                {
                    key: 'column5',
                    name: 'File Size',
                    fieldName: 'fileSizeRaw',
                    minWidth: 70,
                    maxWidth: 90,
                    isResizable: true,
                    isCollapsible: true,
                    data: 'number',
                    onColumnClick: _this._onColumnClick,
                    onRender: function (item) {
                        return React.createElement("span", null, item.fileSize);
                    },
                },
            ];
            _this._selection = new DetailsList_1.Selection({
                onSelectionChanged: function () {
                    _this.setState({
                        selectionDetails: _this._getSelectionDetails(),
                    });
                },
            });
            _this.state = {
                items: _this._allItems,
                columns: columns,
                selectionDetails: _this._getSelectionDetails(),
                isModalSelection: false,
                isCompactMode: false,
                announcedMessage: undefined,
            };
            return _this;
        }
        DetailsListDocumentsExample.prototype.render = function () {
            var _a = this.state, columns = _a.columns, isCompactMode = _a.isCompactMode, items = _a.items, selectionDetails = _a.selectionDetails, isModalSelection = _a.isModalSelection, announcedMessage = _a.announcedMessage;
            return (React.createElement(Fabric_1.Fabric, null,
                React.createElement("div", { className: classNames.controlWrapper },
                    React.createElement(Toggle_1.Toggle, { label: "Enable compact mode", checked: isCompactMode, onChange: this._onChangeCompactMode, onText: "Compact", offText: "Normal", styles: controlStyles }),
                    React.createElement(Toggle_1.Toggle, { label: "Enable modal selection", checked: isModalSelection, onChange: this._onChangeModalSelection, onText: "Modal", offText: "Normal", styles: controlStyles }),
                    React.createElement(TextField_1.TextField, { label: "Filter by name:", onChange: this._onChangeText, styles: controlStyles }),
                    React.createElement(Announced_1.Announced, { message: "Number of items after filter applied: " + items.length + "." })),
                React.createElement("div", { className: classNames.selectionDetails }, selectionDetails),
                React.createElement(Announced_1.Announced, { message: selectionDetails }),
                announcedMessage ? React.createElement(Announced_1.Announced, { message: announcedMessage }) : undefined,
                isModalSelection ? (React.createElement(MarqueeSelection_1.MarqueeSelection, { selection: this._selection },
                    React.createElement(DetailsList_1.DetailsList, { items: items, compact: isCompactMode, columns: columns, selectionMode: DetailsList_1.SelectionMode.multiple, getKey: this._getKey, setKey: "multiple", layoutMode: DetailsList_1.DetailsListLayoutMode.justified, isHeaderVisible: true, selection: this._selection, selectionPreservedOnEmptyClick: true, onItemInvoked: this._onItemInvoked, enterModalSelectionOnTouch: true, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", checkButtonAriaLabel: "Row checkbox" }))) : (React.createElement(DetailsList_1.DetailsList, { items: items, compact: isCompactMode, columns: columns, selectionMode: DetailsList_1.SelectionMode.none, getKey: this._getKey, setKey: "none", layoutMode: DetailsList_1.DetailsListLayoutMode.justified, isHeaderVisible: true, onItemInvoked: this._onItemInvoked }))));
        };
        DetailsListDocumentsExample.prototype.componentDidUpdate = function (previousProps, previousState) {
            if (previousState.isModalSelection !== this.state.isModalSelection && !this.state.isModalSelection) {
                this._selection.setAllSelected(false);
            }
        };
        DetailsListDocumentsExample.prototype._getKey = function (item, index) {
            return item.key;
        };
        DetailsListDocumentsExample.prototype._onItemInvoked = function (item) {
            alert("Item invoked: " + item.name);
        };
        DetailsListDocumentsExample.prototype._getSelectionDetails = function () {
            var selectionCount = this._selection.getSelectedCount();
            switch (selectionCount) {
                case 0:
                    return 'No items selected';
                case 1:
                    return '1 item selected: ' + this._selection.getSelection()[0].name;
                default:
                    return selectionCount + " items selected";
            }
        };
        return DetailsListDocumentsExample;
    }(React.Component));
    exports.DetailsListDocumentsExample = DetailsListDocumentsExample;
    function _copyAndSort(items, columnKey, isSortedDescending) {
        var key = columnKey;
        return items.slice(0).sort(function (a, b) { return ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1); });
    }
    function _generateDocuments() {
        var items = [];
        for (var i = 0; i < 500; i++) {
            var randomDate = _randomDate(new Date(2012, 0, 1), new Date());
            var randomFileSize = _randomFileSize();
            var randomFileType = _randomFileIcon();
            var fileName = _lorem(2);
            fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1).concat("." + randomFileType.docType);
            var userName = _lorem(2);
            userName = userName
                .split(' ')
                .map(function (name) { return name.charAt(0).toUpperCase() + name.slice(1); })
                .join(' ');
            items.push({
                key: i.toString(),
                name: fileName,
                value: fileName,
                iconName: randomFileType.url,
                fileType: randomFileType.docType,
                modifiedBy: userName,
                dateModified: randomDate.dateFormatted,
                dateModifiedValue: randomDate.value,
                fileSize: randomFileSize.value,
                fileSizeRaw: randomFileSize.rawSize,
            });
        }
        return items;
    }
    function _randomDate(start, end) {
        var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return {
            value: date.valueOf(),
            dateFormatted: date.toLocaleDateString(),
        };
    }
    var FILE_ICONS = [
        { name: 'accdb' },
        { name: 'audio' },
        { name: 'code' },
        { name: 'csv' },
        { name: 'docx' },
        { name: 'dotx' },
        { name: 'mpp' },
        { name: 'mpt' },
        { name: 'model' },
        { name: 'one' },
        { name: 'onetoc' },
        { name: 'potx' },
        { name: 'ppsx' },
        { name: 'pdf' },
        { name: 'photo' },
        { name: 'pptx' },
        { name: 'presentation' },
        { name: 'potx' },
        { name: 'pub' },
        { name: 'rtf' },
        { name: 'spreadsheet' },
        { name: 'txt' },
        { name: 'vector' },
        { name: 'vsdx' },
        { name: 'vssx' },
        { name: 'vstx' },
        { name: 'xlsx' },
        { name: 'xltx' },
        { name: 'xsn' },
    ];
    function _randomFileIcon() {
        var docType = FILE_ICONS[Math.floor(Math.random() * FILE_ICONS.length)].name;
        return {
            docType: docType,
            url: "https://static2.sharepointonline.com/files/fabric/assets/item-types/16/" + docType + ".svg",
        };
    }
    function _randomFileSize() {
        var fileSize = Math.floor(Math.random() * 100) + 30;
        return {
            value: fileSize + " KB",
            rawSize: fileSize,
        };
    }
    var LOREM_IPSUM = ('lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
        'eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt ').split(' ');
    var loremIndex = 0;
    function _lorem(wordCount) {
        var startIndex = loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
        loremIndex = startIndex + wordCount;
        return LOREM_IPSUM.slice(startIndex, loremIndex).join(' ');
    }
});
//# sourceMappingURL=DetailsList.Documents.Example.js.map