import type { GuideSection } from "../../src/elements/types/GuideSection";

import { tableSelectionLocation, tableGroupConfiguration, tableGroupLocation } from "../../src/elements/imageExports/tables";

export const ChapterTables: GuideSection = {
  id: 'tables',
  path: '/guide/tables',
  title: 'Tables',
  description: `A <strong>table</strong> is its own report element and acts as a data region within the report. It contains columns and rows, and the intersection of a row and column creates a table cell. A table is connected to a data set, and its detail rows repeat for the records returned by that data set.

  Tables are commonly used for lists of permits, cases, fees, inspections, employees, and other information where several database records must be displayed. In addition to displaying data, tables can group, sort, filter, summarize, and conditionally format their records.

  Most table cells contain Textbox report elements. This distinction is important because the table controls how records repeat, while the textboxes inside the table control how individual values are displayed and formatted.`,
  subsections: [
    {
      id: 'table-structure',
      title: 'Table Structure',
      description: `By default, table cells contain Textbox report elements. The textbox displays the field, parameter, or expression assigned to that cell. Other report elements, such as images, may also be placed inside table cells when needed.

      Several table handles become available when a table is selected. The table element itself may be selected by clicking the button that looks like a circle and four outward arrows (see image).

      Row and column handles select a particular row or column. Selecting one of these also selects the report elements contained within its cells.

      Individual cells can be selected to edit the Textbox or other report element contained inside that specific cell.`,
      keyPoints: [
        `The table's root handle is used to select and configure the complete table.`,
        `Most table cells contain separate Textbox report elements.`,
        `Adjacent table cells may be merged to create larger headings or display areas.`
      ],
      images: [tableSelectionLocation],
      examples: []
    },
    {
      id: 'table-data-set',
      title: 'Table Data Set Name',
      description: `Each table must be connected to the data set containing the records and fields that it displays. This connection is configured through the table's data set name property, located at: 
      [<em>Table → Data → Data Set Name</em>]

      The Data Set Name is especially important when a report contains multiple data sets. ActiveReports must know which data set should control the table's repeating detail rows. If the property is blank or references the wrong data set, the table may display unexpected results.

      A table is directly bound to one data set. If information from another data set is needed inside the table, the additional information should generally be added to the table's query or displayed through another appropriately configured data region.`,
      keyPoints: [
        `Select the table's root handle to access its Data Set Name property.`,
        `Data Set Name assignments are particularly important when handling multiple data sets.`
      ],
      images: [],
      examples: []
    },
    {
      id: 'table-grouping',
      title: 'Table Grouping',
      description: `Table grouping organizes detail records into sections based on a shared field or expression. For example, cases could be grouped by status, inspections could be grouped by inspector, or fees could be grouped by fee type.

      Groups are commonly configured through the table's <strong>Group Editor</strong>. A group can be added by dragging a field from the Data panel into the Group Editor or by using the table's context menu to insert a group.

      The <strong>Group Expression</strong> determines how records are divided. Each distinct result of the expression creates a separate group instance. If the group expression is <em>{STATUS}</em>, ActiveReports creates a group for each distinct status returned by the data set.

      Groups may also be nested. A parent group establishes the larger category, while a child group separates records further within that category. For example, a table could first group permits by permit type and then group each permit type by status.

      Group settings may also control sorting, filtering, visibility, page breaks, and whether the group should remain together on the same page when space permits.`,
      keyPoints: [
        `Page breaks may be configured so that each group begins on a new page.`
      ],
      images: [tableGroupLocation, tableGroupConfiguration],
      examples: []
    },
    {
      id: 'table-filters',
      title: 'Table Filters',
      description: `Table filters allow a table to display only the records that satisfy one or more specified conditions. The complete data set remains available to the report, but records that do not satisfy the table's filters are excluded from that particular table.

      Table filters are located at: [<em>Table → Data → Filters</em>].

      To access the Filters property, select the complete table using its root handle. Under the Data properties, select <strong>Filters</strong> and add a new filter condition.

      The comparison value must use a data type compatible with the filtered field. If FEE_CODE is stored as text, the value should be enclosed in quotation marks. If it is stored as a number, the value should not be enclosed in quotation marks.

      Table filters may also compare fields against report parameters. This allows the same table to display different records depending on the value supplied when the report runs.`,
      keyPoints: [
        `Filtering affects only the selected table and does not change the underlying data set.`,
        `Grouping, totals, and RowNumber expressions operate on the records remaining after filtering.`
      ],
      images: [],
      examples: []
    },
    {
      id: 'row-textbox-properties',
      title: 'Table Row and Textbox Properties',
      description: `A table row and the Textboxes contained inside that row are separate report elements. Selecting the row handle loads the row's properties, but it also selects the report items contained within the row's cells.

      The row properties control behavior such as height, visibility, and page layout. The textbox properties control the values, fonts, backgrounds, borders, padding, and other formatting of the textboxes contained within that row.

      This distinction is important for conditional row formatting. A table does not normally apply its background color directly to the row. Instead, the background expression must be applied to the textboxes contained in the row.

      To create zebra striping, select the row, switch to the textbox properties, and assign an expression to the background. Because the detail-row textboxes repeat for each data record, RowNumber changes for each rendered row and alternates the returned color.`,
      keyPoints: [
        `The table row and the Textboxes inside its cells are separate report elements.`,
        `Ensure the data set name is selected for the table or zebra striping may not work as intended.`
      ],
      images: [],
      examples: [
        `Zebra Striping Expression (change the colors to any constant you see fit):
{IIF(RowNumber() Mod 2 = 0, "LightSlateGray", "White")}`
      ]
    },
    {
      id: 'table-layout',
      title: 'Table Layout and Pagination',
      description: `A table's total width is determined by the combined width of its columns. The total table width should remain within the usable report page width after margins have been considered. A table that extends beyond the available page width may be clipped or may create unexpected additional pages.

      Textboxes inside table cells may use <strong>Can Grow</strong> to increase the height of a row when a value requires additional lines. This prevents long descriptions from being clipped, but it can also cause row heights to vary throughout the report.

      Table headers and group headers can be configured to repeat on new pages. Repeating column labels makes longer tables easier to understand after the table continues onto another page.

      The <strong>Keep Together</strong> setting attempts to keep a table or group on one page when enough space is available. Page-break settings can also be applied to groups when each category should begin on a separate page.`,
      keyPoints: [
        `Use Keep Together carefully because large tables or groups may not fit on a single page.`
      ],
      images: [],
      examples: []
    }
  ]
};