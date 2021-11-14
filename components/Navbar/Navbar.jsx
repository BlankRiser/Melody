import React from "react";
import Link from "next/Link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <section className=" w-full px-4 py-2 flex flex-row items-center justify-between bg-gray-50">
        <div>
          <h3
            className="shine cursor-pointer uppercase text-xl font-sans font-bold py-2
          transition transform duration-75 ease-in-out hover:scale-105
          "
          >
            <Link href="/">Melody</Link>
          </h3>
        </div>
        <div>
          <ul className="flex flex-row gap-2 ">
            <li
              className={` ${
                router.pathname === "/search" ? "font-bold" : "continuous-line"
              }  cursor-pointer mx-2 `}
            >
              <Link href="/search">Search</Link>
            </li>
            <li
              className={` ${
                router.pathname === "/playlist"
                  ? "font-bold"
                  : "continuous-line"
              }  cursor-pointer mx-2 `}
            >
              <Link href="/playlist">Playlist</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
