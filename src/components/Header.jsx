import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Lotus.png"; // Adjust the path according to your logo file name and extension

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section>
      <nav className="relative py-6 bg-header-pattern shadow-header-bottom z-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center relative">
            <a className="inline-block text-lg font-bold" href="/">
              <img className="h-30 w-36" src={logo} alt="Logo" />
            </a>
            <div className="xl:hidden ml-auto">
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="flex w-12 h-12 items-center justify-center bg-orange-50 hover:bg-orange-500 rounded-md transition duration-200"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 6H21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 18H21"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:flex lg:w-auto lg:space-x-12">
              <li className="group relative">
                <Link
                  className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                  to="/new-blog"
                >
                  New Blog
                </Link>
              </li>
            </ul>
            <div className="hidden xl:block ml-auto">
              <div className="flex items-center">
                <Link
                  className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900"
                  to="/sign-in"
                >
                  Sign In
                </Link>
                <Link
                  className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-orange-50 bg-orange-50 rounded-md overflow-hidden transition duration-300"
                  to="/create-account"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <span className="relative">Create an account</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 ${
          mobileNavOpen ? "block" : "hidden"
        }`}
      >
        <div
          onClick={() => setMobileNavOpen(false)}
          className="fixed inset-0 bg-gray-800 opacity-25"
        ></div>
        <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-orange-50 border-r overflow-y-auto">
          <div className="flex items-center mb-16">
            <a className="mr-auto text-2xl font-medium leading-none" href="/">
              <img className="h-10" src={logo} alt="Logo" width="auto" />
            </a>
            <button onClick={() => setMobileNavOpen(false)}>
              <svg
                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mb-2">
              <li>
                <Link
                  className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                  to="/new-blog"
                >
                  New Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
