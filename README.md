# Active Reports Guide

A simple internal guide site for documenting common Active Reports Report Designer topics. The goal is to keep the guide easy to read, easy to update.

The site is built with React, TypeScript, Vite, Tailwind, and React Router.

## Adding a new chapter

Add a new object to the `guideSections` array in `src/elements/guideSections.ts`.

```ts
{
  id: 'new-chapter',
  path: '/guide/new-chapter',
  title: 'New Chapter',
  description: 'Short description of the chapter.',
  subsections: []
}
```

The chapter should automatically appear in the chapter navigation and on the home page.

## Adding a new subsection

Add a new subsection inside the chapter's `subsections` array.

```ts
{
  id: 'new-subsection',
  title: 'New Subsection',
  description: 'Short description of the subsection.',
  keyPoints: [
    'First key point.',
    'Second key point.'
  ],
  examples: []
}
```

The subsection should automatically appear on the guide page and in that page's table of contents.

## Notes

This project is intentionally simple. Most of the content is data-driven, so the guide can grow without adding a new React component for every new topic.

When updating the guide, the safest place to start is usually `guideSections.ts`.
