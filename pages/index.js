import Player from "components/AudioPlayer/Player";
import Search from "components/Search/Search";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Melody - A project by BlankRiser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {/* <Player
          artwork="https://c.saavncdn.com/940/Shivers-English-2021-20211022044815-500x500.jpg"
          audioPath="https://aac.saavncdn.com/940/7ea6a4d0f737ff951204d67c0b985e48_320.mp4"
        /> */}
        <Search />
      </main>
    </div>
  );
}
