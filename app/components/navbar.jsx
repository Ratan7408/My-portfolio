// @flow strict
import Link from "next/link";


function Navbar() {
  const style = {
    fontFamily: 'Hind, sans-serif'
  };

  return (
    <nav className="bg-transparent" style={style}>
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff] transition-transform duration-200 ease-in-out hover:scale-110"
          >
            Ratan Srivastav
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          {["About", "Experience", "Skills", "Education", "Projects"].map(
            (item) => (
              <li key={item}>
                <Link
                  className="block px-4 py-2 no-underline outline-none hover:no-underline"
                  href={`/#${item.toLowerCase()}`}
                >
                  <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#fafaf9] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-shadow-[0_0_8px_rgba(0,198,255,0.7),0_0_15px_rgba(0,198,255,0.5),0_0_20px_rgba(0,198,255,0.3)] hover:duration-300">
                    {item}
                  </div>
                </Link>
              </li>
            )
          )}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;