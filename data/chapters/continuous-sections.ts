import type { GuideSection } from "../../src/elements/types/GuideSection";

import { continuousSectionImage } from "../../src/elements/imageExports/continuous-sections";

const marginsLink = `<a href="/guide/page-setup#page-setup-margins" class="font-bold text-emerald-800 underline hover:text-black">Chapter 1: Margins</a>`;

const visibilityLink = `<a href="/guide/visibility#visibility-hidden" class="font-bold text-emerald-800 underline hover:text-black">Chapter ?: Visibility</a>`;

export const ChapterContinuousSections: GuideSection = {
  id: 'continuous-sections',
  path: '/guide/continuous-sections',
  title: 'Continuous Sections',
  description: `Continuous sections are can be thought of new page containers, used to group related report content and apply settings to that content as a single unit. They are especially useful when organizing subreports or separating groups of content that require their own layout, visibility, margins, or page-break behavior.

  A continuous section can be thought of as a distinct area within the report that can be configured independently from the sections around it. To access the settings for a specific continuous section, click its label in the bottom-left corner of the report window.`,
  subsections: [
    {
      id: 'configurations',
      title: 'Continuous Section Configurations',
      description: `The <em>[Continuous Section → Name]</em> and <em>[Continuous Section → Label]</em> fields can both visually help identify a continuous section, but they serve slightly different purposes:

      • The <em>Label</em> controls the text that is visibly displayed for the continuous section in the bottom-left corner of the report designer.
      • The <em>Name</em> is the section's internal identifier. It is primarily used when referencing the continuous section through C# or other .NET integrations. However, it will also adjust the display text in the bottom left corner if the label has not been changed.

      Continuous sections also provide their own <em>[Continuous Section → Margins]</em> settings. These settings control the spacing around the content contained within that particular section. For more information about configuring margins, see ${marginsLink}.

      You can also control whether a continuous section is displayed by changing its <em>[Continuous Section → Visibility → Hidden]</em> setting. When a continuous section is hidden, that setting applies to the entire section and all report elements contained within it. A child report element cannot make itself visible when its parent continuous section is hidden.

      Because of this behavior, a continuous section's visibility expression acts as a higher-level rule for its child elements. The visibility settings on the individual elements are only relevant when the continuous section itself is visible.

      For more information about <em>[Visibility/Suppression → Hidden]</em> settings and expressions, see ${visibilityLink}.`,
      keyPoints: [
        `A continuous section's visibility expression applies to the entire section and takes priority over the visibility settings of its child report elements.`,
        `Use continuous sections to organize subreports and separate groups of content that need to appear on their own individual pages.`
      ],
      images: [
        continuousSectionImage
      ],
      examples: []
    }
  ]
};