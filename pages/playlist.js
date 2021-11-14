import axios from "axios";
import useSWR from "swr";

import React, { useState } from "react";

import { SearchIcon } from "@heroicons/react/solid";
import Player from "components/AudioPlayer/Player";

const playlist = () => {
  const [view, setView] = useState("list");

  const [query, setQuery] = useState(
    // "https://www.jiosaavn.com/s/playlist/f4864177a15553c31575f349f76fa886/Favs/2q6bDYz079yO0eMLZZxqsA__"
    "https://www.jiosaavn.com/s/playlist/f4864177a15553c31575f349f76fa886/test/fruULXIrunTfemJ68FuXsA__"
  );

  const resultURL = `http://127.0.0.1:5000/playlist/?query=`;

  const dataFetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(resultURL + query, dataFetcher);

  console.log(data);

  if (error) return <div>Failed to load {error} </div>;
  if (!data) return <div>loading...</div>;
  else {
    const media_urls = data.songs.map((item) => item.media_url);
    const media_name = data.songs.map((item) => item.song);
  }
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setQuery(e.target.value);
    }
  };
  // console.log(data);

  return (
    <>
      <section className="px-20 py-6">
        <div className="flex flex-row items-center py-4 mb-4 bg-gray-200 rounded-md ">
          <SearchIcon className="ml-3 h-5 w-5 text-gray-700 " />
          <input
            type="search"
            name=""
            id=""
            className=" mx-2 w-full outline-none border-none bg-gray-200 "
            placeholder="Paste JioSaavn Playlist Link"
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="flex flex-row justify-end ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`cursor-pointer h-8 w-8 m-2 p-2 rounded ${
              view === "list" ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setView("list")}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M4  10h16M4  18h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`cursor-pointer h-8 w-8 m-2 p-2 rounded ${
              view === "grid" ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
            onClick={() => setView("grid")}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </div>
        {view === "list" ? (
          <div className=" divide-gray-600 ">
            {data.songs.map((data, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 sm:grid-cols-4 cursor-pointer  items-center p-2 rounded-md hover:bg-gray-200
                ${index / 2 === 0 ? "bg-gray-100" : ""}`}
              >
                <div className="flex flex-row justify-evenly">
                  <img
                    src={data.image}
                    height="25"
                    width="25"
                    className="rounded-md mr-2"
                  />
                  <p className="text-left font-medium w-[35ch] ">{data.song}</p>
                </div>

                <p className="text-left font-medium w-[35ch] hidden sm:block">
                  {data.album}
                </p>
                <p className="text-left w-[35ch] hidden sm:block">
                  {data.singers}
                </p>
                <a
                  className="p-2 mt-auto bg-[antiquewhite] hover:bg-[aquamarine] rounded"
                  href={data.media_url} //data.perma_url
                  download={data.song}
                  target="_blank"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 py-4 justify-items-center md:justify-items-stretch">
            {data.songs.map((data, index) => (
              <div
                key={index}
                className="group hover:bg-gray-200 p-2 rounded-lg flex flex-col "
              >
                <div className="">
                  <img
                    src={data.image}
                    height="300"
                    width="300"
                    className="rounded-md "
                  />
                  <p className="text-left font-medium w-[35ch]"> {data.song}</p>
                  <p className="text-left w-[35ch]"> {data.singers}</p>
                </div>
                <a
                  className="p-2 mt-auto bg-[antiquewhite] hover:bg-[aquamarine] rounded"
                  href={data.media_url} //data.perma_url
                  download={data.song}
                  target="_blank"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default playlist;
