import { NavLink } from 'react-router';
import { guideSections } from '../elements/guideSections';

function ChapterNav() {
  return (
    <aside className=" bg-emerald-50 p-4 rounded-xl lg:sticky lg:top-6 lg:self-start">
      <nav className="mt-4 flex flex-col gap-2">
        {guideSections.map((section, index) => (
          <NavLink
            key={section.id}
            to={section.path}
            className={({ isActive }) =>
              `rounded-xl border border-black px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-black hover:bg-emerald-100'
              }`
            }
          >
            Chapter {index + 1}: {section.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default ChapterNav;
