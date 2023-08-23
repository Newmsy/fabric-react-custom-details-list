> This is a release of **[Office UI fabric React v7.117.0](https://www.npmjs.com/package/office-ui-fabric-react)** with a modification to the DetailsList component to allow for controlled input for column widths.

For IColumn interface:
```ts
    const column: IColumn = {
        key: "ColumnKey",
        name: "ColumnName",
        isResizable: true,
        minWidth: 100, // this is the width of the column on table load
        maxWidth: 200, // maximum width when resizing
        minResizeWidth: 50, // this new prop controls the minimum width of a column when resizing it. Previously we were limited to minWidth value.
        onRender: () => {...}
    }
```

Modifications have only been made in:
 **lib\components\DetailsList\DetailsColumn.types.d.ts** 
 To add the minResizeWidth prop to the IColumn interface

 **lib\components\DetailsList\DetailsList.base.js**
 To update the logic to determine resizable widths of columns
 ```ts
 var newCalculatedWidth = Math.max(newWidth, resizingColumn.minResizeWidth || MIN_COLUMN_WIDTH);
 ```

 All other components remain the same.