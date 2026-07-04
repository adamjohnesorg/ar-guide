export type GuideImage = {
  src: string;
  alt: string;
  caption?: string;
}

export const setupImageRibbon: GuideImage = {
  src: '../public/images/page-setup/rulers.png',
  alt: 'Display the location of rulers',
  caption: 'The location of horizontal and vertical rulers.'
}