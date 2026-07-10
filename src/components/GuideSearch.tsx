import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { guideSections } from '../elements/guideSections';

function GuideSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const results = useMemo(() => {
    const searchWords = searchTerm
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    if (searchWords.length === 0) {
      return [];
    }

    return guideSections.flatMap((section) =>
      section.subsections
        .filter((subsection) => {
          const searchableText = [
            section.title,
            section.description,
            subsection.title,
            subsection.description,
            ...subsection.keyPoints,
            ...subsection.examples
          ]
            .join(' ')
            .toLowerCase();

          return searchWords.every((word) => searchableText.includes(word));
        })
        .map((subsection) => ({
          chapterTitle: section.title,
          topicTitle: subsection.title,
          description: subsection.description,
          path: `${section.path}#${section.id}-${subsection.id}`
        }))
    );
  }, [searchTerm]);

  return (
    <section className="bg-emerald-50 p-5">
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-black">
        Search Topics
      </h2>

      <input
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by topic..."
        className="mt-4 w-full rounded-xl border border-black bg-white px-4 py-2 text-sm font-semibold text-black outline-none focus:ring-2 focus:ring-emerald-600"
      />

      {results.length > 0 && (
        <div className="mt-4 flex flex-col gap-2">
          {results.map((result) => (
            <Link
              key={result.path}
              to={result.path}
              className="rounded-xl border border-black bg-white p-4 text-black transition hover:bg-emerald-100"
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">
                {result.chapterTitle}
              </p>

              <h3 className="mt-1 text-base font-bold tracking-tight text-black">
                {result.topicTitle}
              </h3>

              <p className="mt-1 text-sm font-medium text-black/75">
                {result.description}
              </p>
            </Link>
          ))}
        </div>
      )}

      {searchTerm.trim().length > 0 && results.length === 0 && (
        <p className="mt-4 text-sm font-semibold text-black">
          No matching topics found.
        </p>
      )}
    </section>
  );
}

export default GuideSearch;
