import React, { useState } from "react";

const Navbar = ({ children }) => {
  const [isClosed, setClosed] = useState(false);

  return (
    <>
      <div className=" flex bg-gray-100">
        {!isClosed && (
          <aside
            aria-hidden={isClosed}
            className="absolute bg-white w-64 min-h-screen flex flex-col"
            // className="z-20 bg-white w-64 min-h-screen flex flex-col -ml-64"
          >
            <div className="bg-white border-r border-b px-4 h-10 flex items-center justify-between">
              <span className="text-lg font-bold py-2">Melody</span>
              {isClosed ? (
                <button
                  tabIndex="1"
                  className="w-6 p-1"
                  aria-label="Open menu"
                  title="Open menu"
                  onClick={() => setClosed(false)}
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              ) : (
                <button
                  tabIndex="1"
                  className="w-6 p-1 rounded-full hover:bg-gray-200"
                  aria-label="Close menu"
                  title="Close menu"
                  onClick={() => setClosed(true)}
                >
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              )}
            </div>

            <div className="border-r py-4 flex-grow relative">
              <nav>
                <ul>
                  <li className="cursor-pointer p-2 m-1 hover:bg-gray-300 rounded-md">
                    <a href=""> Profile </a>
                  </li>
                  <li className="cursor-pointer p-2 m-1 hover:bg-gray-300 rounded-md">
                    <a href=""> Portfolio </a>
                  </li>
                  <li className="cursor-pointer p-2 m-1 hover:bg-gray-300 rounded-md">
                    <a href=""> Contact </a>
                  </li>
                  <li className="cursor-pointer p-2 m-1 hover:bg-gray-300 rounded-md">
                    <a href=""> About </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        )}

        <main className="flex-grow flex flex-col min-h-screen">
          <header className="bg-white border-b h-10 flex items-center justify-center">
            {isClosed ? (
              <button
                tabIndex="1"
                className="w-6 mx-2 p-1 rounded-md hover:bg-gray-200 "
                aria-label="Open menu"
                title="Open menu"
                onClick={() => setClosed(false)}
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            ) : null}

            <div className="flex flex-grow items-center justify-between px-3">
              <h1 className="text-lg font-bold">Melody</h1>
              <button className="hover:text-gray-500 font-semibold">
                Github
              </button>
            </div>
          </header>
          <section className="">{children}</section>
        </main>
      </div>
    </>
  );
};

export default Navbar;
