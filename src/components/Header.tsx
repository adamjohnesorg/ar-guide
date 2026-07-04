import { Link } from 'react-router';

function Header() {
  return (
    <header className=" bg-emerald-800">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <Link to="/" className="text-2xl tracking-wide text-white font-bold hover:text-emerald-100">
            Active Reports Report Designer Guide
          </Link>
          <h1 className="text-sm text-white">
            City of St. Louis
          </h1>
        </div>
        <div>
          <Link to="/" className="text-lg font-semibold text-white">
            Home
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
