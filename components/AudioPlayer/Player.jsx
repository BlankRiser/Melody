import React, { useRef } from "react";
import { useAudioPlayer } from "hooks/AudioPlayer";
import { calculateTime } from "utils/timeHelpers";
import style from "./Player.module.css";

const Player = ({ artwork, audioPath }) => {
  // references
  const audioPlayer = useRef(); // set up reference for the audio component
  const progressBar = useRef(); // reference for the progress bar

  // hooks
  const {
    backThirty,
    changeAudioToPlayhead,
    changePlaybackSpeed,
    currentTime,
    duration,
    forwardThirty,
    isPlaying,
    onLoadedMetadata,
    // skipToTime,
    speed,
    tapSpaceBar,
    togglePlaying,
  } = useAudioPlayer(audioPlayer, progressBar);

  return (
    <>
      <section className="py-6">
        <img
          src={artwork}
          alt=""
          className="cursor-pointer rounded-lg transform hover:scale-[1.01]"
        />
        <audio
          ref={audioPlayer}
          src={audioPath}
          preload="metadata"
          onLoadedMetadata={onLoadedMetadata}
        />
      </section>

      <div className="flex items-center gap-2">
        {/* back thirty */}
        <button
          type="button"
          onClick={backThirty}
          className="forwardBackward backward group  m-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block transition transform duration-75 ease-in-out group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          30
        </button>
        {/* play / pause */}
        <button
          type="button"
          className="playPause w-12 h-12 relative rounded-full  bg-gray-300 hover:bg-blue-300 transition-colors transform duration-75 ease-in-out hover:scale-105 "
          onClick={togglePlaying}
          onKeyPress={tapSpaceBar}
        >
          {isPlaying ? (
            <svg
              width="24"
              height="29"
              viewBox="0 0 24 29"
              xmlns="http://www.w3.org/2000/svg"
              className="pause w-6 h-6 absolute left-3 bottom-3 "
            >
              <rect width="9" height="29" />
              <rect x="15" width="9" height="29" />
            </svg>
          ) : (
            <svg
              width="26"
              height="30"
              viewBox="0 0 26 30"
              xmlns="http://www.w3.org/2000/svg"
              className="play w-6 h-6 absolute left-4 bottom-3"
            >
              <path d="M25.1045 14.8922L0.949477 0.539171L0.949472 29.2453L25.1045 14.8922Z" />
            </svg>
          )}
        </button>

        {/* forward thirty */}
        <button
          type="button"
          onClick={forwardThirty}
          className="forwardBackward forward group  m-2"
        >
          30
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block transition transform duration-75 ease-in-out group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>

        {/* current time */}
        <div className="current-time font-mono">
          {calculateTime(currentTime)}
        </div>

        {/* progress bar */}
        <div className={style.progressBar}>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            ref={progressBar}
            onChange={changeAudioToPlayhead}
            className={style.rangeSlider}
          />
        </div>

        {/* duration */}
        <div className="duration font-mono">
          {duration && calculateTime(duration)}
        </div>

        {/* change playback speed */}
        <button
          type="button"
          className="playbackSpeed group font-mono bg-blue-300 p-2 rounded font-semibold"
          onClick={changePlaybackSpeed}
        >
          {speed}x
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block transition transform duration-75 ease-in-out group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Player;
