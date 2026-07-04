import { Link } from 'react-router';
import ChapterNav from '../components/ChapterNav';
import { guideSections } from '../elements/guideSections';

function HomePage() {
  return (
    <main className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[16rem_1fr]">
      <ChapterNav />

      <section id="guide" className=" bg-emerald-50">
        <div className="border-b border-black px-6 py-5">
          <h1 className="text-2xl font-semibold leading-tight tracking-tight text-black md:text-5xl">
            Chapters
          </h1>
        </div>

        <div className="divide-y divide-black">
          {guideSections.map((section) => (
            <Link
              key={section.id}
              to={section.path}
              className="group grid gap-3 px-6 py-5 transition hover:bg-emerald-600 md:items-center"
            >
              <div>
                <h2 className="text-lg font-bold text-black group-hover:text-white">
                  {section.title}
                </h2>

                <p className="mt-1 text-sm text-black group-hover:text-white">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
