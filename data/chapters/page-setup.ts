import { gridAndSnapImage, rulerImage, footerExpressionsImage } from "../../src/elements/imageExports/page-setup";
import type { GuideSection } from "../../src/elements/types/GuideSection";

export const ChapterPageSetup: GuideSection = 
{
    id: 'page-setup',
    path: '/guide/page-setup',
    title: 'Page Setup',
    description: `Report-level configuration, headers and footers, metadata and section workspace settings for margins, grids and rulers, snapping and other tools.`,
    subsections: [
      {
        id: 'report-properties',
        title: 'Report Properties',
        description: `Access report-level properties by clicking the space outside of the page. Most of these report properties are unlikely to need changed; however, it is common to adjust section-level properties. Section-level properties can be accessed by clicking the section header located in the bottom left of the report window.
        
        Unless there exists an already renamed section, typically it will be labeled as: <em>ContinuousSection1</em>`,
        keyPoints: [],
        images: [],
        examples: []
      },
      {
        id: 'report-orientation',
        title: 'Page Sizes and Orientation',
        description: `<strong>Page size</strong> defines the width and height of a report section, while <strong>page orientation</strong> determines whether the section uses a vertical (Portrait) or horizontal (Landscape) layout. Consider configuring these settings before arranging report content, as changing them later may affect the placement and spacing of report elements.
        
        These settings are accessible at: 
        <em>[section → page size → page width/page height]</em>
        <em>[section → page size → page orientation]</em>`,
        keyPoints: [`Notably, page size settings only affect the <strong>section</strong>, not the whole report.`,
          `Portrait and Landscape are the two most common page orientations. Their width and heights are reversed. 
          The default settings for each are:

          <strong>Portrait</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>Landscape</strong>
            Width: 8.5"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Width: 11"
            Height: 11"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Height: 8.5"`,
            
          `It is possible to zoom in/out of the report window by adjusting the zoom percentage found in the bottom right ribbon.`
        ],
        images: [],
        examples: []
      },
      {
        id: 'page-headers-footers',
        title: 'Page Headers and Footers',
        description: `Page headers and footers provide consistent areas for information that should appear at the top or bottom of each rendered page. They are separate from the main report body and do not repeat once per database record.

        Page headers and footers can be added by selecting the appropriate section and navigating to the section ribbon at the top of the report window. In a report containing multiple sections, each section may have its own page header and footer configuration.

        <strong>Subreports cannot be added to page headers or page footers.</strong>`,
        keyPoints: [
          `Use common value expressions found under the general data tab for quick and easy common expressions.`
        ],
        images: [footerExpressionsImage],
        examples: []
      },
      {
        id: 'margins',
        title: 'Margins',
        description: `Margins define the space between report content and the edges of the page. Adjusting them changes the usable page area and affects how much content can fit within the report layout.

        Margins can be adjusted in three ways:

        1. Using the rulers along the sides of the page
        2. Accessing the margin size settings in the section-level properties, found in: <em>[margins → sizes]</em>
        3. Accessing the margin style setting in the section-level properties found in: <em>[margins → style]</em>
          `,
        keyPoints: [`Notably, margin settings only affect the <strong>section</strong>, not the whole report.`,
          `To visually adjust margins, drag the horizontal ruler left/right and drag the vertical ruler up/down.`,
          `Toggle rulers visibility by using the ruler icon in the bottom right ribbon of the report window.`,

          `Narrow and normal are the two most common margin orientations. 
          The settings for each are:

          <strong>Narrow</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong> Normal</strong>
            Width: 0.5"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Width: 1.0"
            Height: 0.5"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Height: 1.0"`
        ],
        images: [
          rulerImage
        ],
        examples: []
      },
      {
        id: 'grid-snap',
        title: 'Grid and Snap',
        description: `<strong>Grid</strong> and <strong>snap</strong> tools help align and position report elements more consistently. The grid provides visual reference points, while snapping guides elements into uniform positions as they are moved or resized. Together, these tools make it easier to create organized, evenly spaced report layouts.
        
        It is highly recommended to explore these settings.`,
        keyPoints: [
          'Toggle grid and snapping options from the bottom right ribbon of the report window, denoted by the grid and magnet icons.',
          `Adjust the grid size from this same area.`
        ],
        images: [gridAndSnapImage],
        examples: []
      },
    ]
  }