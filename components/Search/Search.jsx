import React, { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import Link from "next/Link";
import {
  ArrowRightIcon,
  ArrowSmRightIcon,
  SearchIcon,
} from "@heroicons/react/solid";

// const data = [
//   {
//     "320kbps": "true",
//     album: "Shivers",
//     album_url: "https://www.jiosaavn.com/album/shivers/wY2MhAQj3kA_",
//     albumid: "29527688",
//     artistMap: {
//       "Ed Sheeran": "578407",
//     },
//     cache_state: "false",
//     copyright_text:
//       "An Asylum Records UK release, a division of Atlantic Records UK, \u2117 2021 Warner Music UK Limited",
//     duration: "207",
//     encrypted_media_path:
//       "NMKyboFo/FhdL8WP0yrLIWfJFUJ0qBLV7b4+f0Sxlv4lq/AUl3mcC2EsDkm2nyaU",
//     encrypted_media_url:
//       "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDysenmDL5VoGUDRtQirSMI2Ogey1V/ljCIkspDRRLqDDZ/I1jf/LKXPxw7tS9a8Gtq",
//     explicit_content: 0,
//     featured_artists: "",
//     featured_artists_id: "",
//     has_lyrics: "false",
//     id: "l7D4VKW1",
//     image:
//       "https://c.saavncdn.com/940/Shivers-English-2021-20211022044815-500x500.jpg",
//     is_dolby_content: false,
//     label: "Atlantic Records UK",
//     label_url: "/label/atlantic-records-uk-albums/Nq1WxI8CVrI_",
//     language: "english",
//     lyrics_snippet: "",
//     media_preview_url:
//       "https://preview.saavncdn.com/940/7ea6a4d0f737ff951204d67c0b985e48_96_p.mp4",
//     media_url:
//       "https://aac.saavncdn.com/940/7ea6a4d0f737ff951204d67c0b985e48_320.mp4",
//     music: "",
//     music_id: "",
//     origin: "none",
//     perma_url: "https://www.jiosaavn.com/song/shivers/HF8vBSJ7YAI",
//     play_count: 348436,
//     primary_artists: "Ed Sheeran",
//     primary_artists_id: "578407",
//     release_date: "2021-09-10",
//     rights: {
//       cacheable: true,
//       code: 0,
//       delete_cached_object: false,
//       reason: "",
//     },
//     singers: "Ed Sheeran",
//     song: "Shivers",
//     starred: "false",
//     starring: "",
//     triller_available: false,
//     type: "",
//     year: "2021",
//   },
//   {
//     "320kbps": "true",
//     album: "BIBA",
//     album_url: "https://www.jiosaavn.com/album/biba/98G3uzIs2qQ_",
//     albumid: "14990426",
//     artistMap: {
//       "Dev Negi": "653204",
//       Marshmello: "862454",
//       "Pardeep Singh Sran": "2378899",
//       Pritam: "456323",
//       "Shirley Setia": "880428",
//     },
//     cache_state: "false",
//     copyright_text: "\u00a9 2019 Joytime Collective",
//     duration: "175",
//     encrypted_media_path:
//       "NMKyboFo/Fhk9GyY2+LAsyr/9Ttt8Gro8+St1lAAGZrUZ3pw7/nAjilbZNH+1wO6",
//     encrypted_media_url:
//       "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyNWCbjCNtKmlpOHj5Z9iMHUI6D1DOptP5iGTj6aGadVaA6rUzPXhg/xw7tS9a8Gtq",
//     explicit_content: 0,
//     featured_artists: "",
//     featured_artists_id: "",
//     has_lyrics: "false",
//     id: "PIzj75J8",
//     image:
//       "https://c.saavncdn.com/987/BIBA-Unknown-2019-20200813225958-500x500.jpg",
//     is_dolby_content: false,
//     label: "Joytime Collective",
//     label_url: "/label/joytime-collective-albums/ps0qVbBvFRE_",
//     language: "hindi",
//     lyrics_snippet: "",
//     media_preview_url:
//       "https://preview.saavncdn.com/987/03f9cd50555cbf24f251b195afaceb92_96_p.mp4",
//     media_url:
//       "https://aac.saavncdn.com/987/03f9cd50555cbf24f251b195afaceb92_320.mp4",
//     music: "",
//     music_id: "",
//     origin: "none",
//     perma_url: "https://www.jiosaavn.com/song/biba/ICERW0MFfQs",
//     play_count: 57603833,
//     primary_artists:
//       "Marshmello, Pritam, Shirley Setia, Pardeep Singh Sran, Dev Negi",
//     primary_artists_id: "862454, 456323, 880428, 2378899, 653204",
//     release_date: "2019-02-01",
//     rights: {
//       cacheable: true,
//       code: 0,
//       delete_cached_object: false,
//       reason: "",
//     },
//     singers: "Marshmello, Pritam, Shirley Setia, Pardeep Singh Sran, Dev Negi",
//     song: "BIBA",
//     starred: "false",
//     starring: "",
//     triller_available: false,
//     type: "",
//     year: "2019",
//   },
//   {
//     "320kbps": "true",
//     album: "Shivers (Ofenbach Remix)",
//     album_url:
//       "https://www.jiosaavn.com/album/shivers-ofenbach-remix/aOw9G5hTtTw_",
//     albumid: "30087483",
//     artistMap: {
//       "Ed Sheeran": "578407",
//     },
//     cache_state: "false",
//     copyright_text:
//       "An Asylum Records UK release, a division of Atlantic Records UK, \u2117 2021 Warner Music UK Limited",
//     duration: "187",
//     encrypted_media_path:
//       "NMKyboFo/Fh9E7C90cSslT0lJrFmy+P3QAEaH6Mo/k9CuIn8TOeOFn/KmafZUFUv",
//     encrypted_media_url:
//       "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyfpBRkSGavSwAQ2u9TIECeMt/e7wp/Rwl7vFP8Nepzc35L+24jqe04hw7tS9a8Gtq",
//     explicit_content: 0,
//     featured_artists: "",
//     featured_artists_id: "",
//     has_lyrics: "false",
//     id: "1c_D8Ggl",
//     image:
//       "https://c.saavncdn.com/137/Shivers-Ofenbach-Remix--English-2021-20211005122258-500x500.jpg",
//     is_dolby_content: false,
//     label: "Atlantic Records UK",
//     label_url: "/label/atlantic-records-uk-albums/Nq1WxI8CVrI_",
//     language: "english",
//     lyrics_snippet: "",
//     media_preview_url:
//       "https://preview.saavncdn.com/137/c7003785b0d228d1767875057db60982_96_p.mp4",
//     media_url:
//       "https://aac.saavncdn.com/137/c7003785b0d228d1767875057db60982_320.mp4",
//     music: "",
//     music_id: "",
//     origin: "none",
//     perma_url:
//       "https://www.jiosaavn.com/song/shivers-ofenbach-remix/QQs0dUx3UF8",
//     play_count: 1198,
//     primary_artists: "Ed Sheeran",
//     primary_artists_id: "578407",
//     release_date: "2021-10-08",
//     rights: {
//       cacheable: true,
//       code: 0,
//       delete_cached_object: false,
//       reason: "",
//     },
//     singers: "Ed Sheeran",
//     song: "Shivers (Ofenbach Remix)",
//     starred: "false",
//     starring: "",
//     triller_available: false,
//     type: "",
//     year: "2021",
//   },
//   {
//     "320kbps": "true",
//     album: "Live at Sunburn Festival India 2018 (Highlights)",
//     album_url:
//       "https://www.jiosaavn.com/album/live-at-sunburn-festival-india-2018-highlights/biba8JgpnzU_",
//     albumid: "14875995",
//     artistMap: {
//       "A. Broekhuyse": "574712",
//       "A. Van Buuren": "574723",
//       "Armin Van Buuren": "574692",
//       "R. Nitzan": "574713",
//       Susana: "574695",
//     },
//     cache_state: "false",
//     copyright_text: "\u00a9 2019 Armada Music B.V.",
//     duration: "56",
//     encrypted_media_path:
//       "NMKyboFo/FgQ3SoZ45mrgNLc2arJjIIQBkfM0UOQL+z5OKtxA7m6tueFEsv/tEtB",
//     encrypted_media_url:
//       "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyKnhxPRxifyFa6bqtrLRSfTUl+Ss1uZQplWAJEn7Z2jrOdCwc14WI4Bw7tS9a8Gtq",
//     explicit_content: 0,
//     featured_artists: "Susana",
//     featured_artists_id: "574695",
//     has_lyrics: "false",
//     id: "yMuoPitn",
//     image:
//       "https://c.saavncdn.com/242/Live-at-Sunburn-Festival-India-2018-Highlights--English-2019-20190126033233-500x500.jpg",
//     is_dolby_content: false,
//     label: "Armada Music Bundles",
//     label_url: "/label/armada-music-bundles-albums/0mleeJ3MEKI_",
//     language: "hindi",
//     lyrics_snippet: "",
//     media_preview_url:
//       "https://preview.saavncdn.com/242/8493fa84b670b70593e609e303accd04_96_p.mp4",
//     media_url:
//       "https://aac.saavncdn.com/242/8493fa84b670b70593e609e303accd04_320.mp4",
//     music: "A. Broekhuyse, R. Nitzan, A. Van Buuren",
//     music_id: "574712, 574713, 574723",
//     origin: "none",
//     perma_url: "https://www.jiosaavn.com/song/shivers-mixed/CSUeXiRZQ10",
//     play_count: 2001,
//     primary_artists: "Armin Van Buuren",
//     primary_artists_id: "574692",
//     release_date: "2019-01-18",
//     rights: {
//       cacheable: true,
//       code: 0,
//       delete_cached_object: false,
//       reason: "",
//     },
//     singers: "Armin Van Buuren, Susana",
//     song: "Shivers (Mixed)",
//     starred: "false",
//     starring: "",
//     triller_available: false,
//     type: "",
//     year: "2019",
//   },
//   {
//     "320kbps": "true",
//     album: "Shivers (Alok Remix)",
//     album_url: "https://www.jiosaavn.com/album/shivers-alok-remix/G8MPad-WheQ_",
//     albumid: "30155345",
//     artistMap: {
//       "Ed Sheeran": "578407",
//     },
//     cache_state: "false",
//     copyright_text:
//       "An Asylum Records UK release, a division of Atlantic Records UK, \u2117 2021 Warner Music UK Limited",
//     duration: "172",
//     encrypted_media_path:
//       "NMKyboFo/Fhi8WPuFFdhDKHrxbuCxxQ2+zcLtb5vaDiIyKSjP9vHg10eS9+Itg3q",
//     encrypted_media_url:
//       "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy6iWNcYt4FfilU1xBTf/2VmDlkEFC0WXfCVFdg80zi2LVfaLB8+esdRw7tS9a8Gtq",
//     explicit_content: 0,
//     featured_artists: "",
//     featured_artists_id: "",
//     has_lyrics: "false",
//     id: "3O5YPkl9",
//     image:
//       "https://c.saavncdn.com/113/Shivers-Alok-Remix--English-2021-20211008121259-500x500.jpg",
//     is_dolby_content: false,
//     label: "Atlantic Records UK",
//     label_url: "/label/atlantic-records-uk-albums/Nq1WxI8CVrI_",
//     language: "english",
//     lyrics_snippet: "",
//     media_preview_url:
//       "https://preview.saavncdn.com/113/a200476305abf89ad969babc059c5722_96_p.mp4",
//     media_url:
//       "https://aac.saavncdn.com/113/a200476305abf89ad969babc059c5722_320.mp4",
//     music: "",
//     music_id: "",
//     origin: "none",
//     perma_url: "https://www.jiosaavn.com/song/shivers-alok-remix/QydeaCRbWwo",
//     play_count: 514,
//     primary_artists: "Ed Sheeran",
//     primary_artists_id: "578407",
//     release_date: "2021-10-11",
//     rights: {
//       cacheable: true,
//       code: 0,
//       delete_cached_object: false,
//       reason: "",
//     },
//     singers: "Ed Sheeran",
//     song: "Shivers (Alok Remix)",
//     starred: "false",
//     starring: "",
//     triller_available: false,
//     type: "",
//     year: "2021",
//   },
// ];

const Search = () => {
  const [query, setQuery] = useState("shivers");

  const resultURL = `http://127.0.0.1:5000/result/?query=`;

  const dataFetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(resultURL + query, dataFetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>loading...</div>;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setQuery(e.target.value);
    }
  };
  console.log(data);
  return (
    <>
      <section>
        <div className="flex flex-row items-center py-4 bg-gray-200 rounded-md">
          <SearchIcon className="ml-3 h-5 w-5 text-gray-700 " />
          <input
            type="search"
            name=""
            id=""
            className=" mx-2 w-full outline-none border-none bg-gray-200 "
            placeholder="Search music"
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 py-4">
          {data.map((data, index) => (
            <div
              key={index}
              className="group hover:bg-gray-200 p-2 rounded-lg flex flex-col "
            >
              <div>
                <img
                  src={data.image}
                  height="300"
                  width="300"
                  className="rounded-md"
                />
                <p className="text-left font-medium pt-1"> {data.song}</p>
                <p className="text-left "> {data.singers}</p>
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
      </section>
    </>
  );
};

export default Search;
