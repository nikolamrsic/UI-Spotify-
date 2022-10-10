import React from "react";
import { useRouter } from "next/router";
export default function SongCard({
  img,
  artistName,
  songTitle,
  songDesc,
  link,
}) {
  let router = useRouter();
  return (
    <article className="song-cover relative h-[290px] w-[210px] overflow-hidden rounded-lg bg-zinc-800/30 hover:bg-zinc-800/90 transition-all p-3 drop-shadow-lg">
      <button
        onClick={() => {
          router.push(link);
        }}
        className="fade-in absolute top-0 right-4 top-36 rounded-full bg-green-500 p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>
      </button>
      <img className="h-[60%] w-full object-cover rounded" src={img} />
      <h1 className="mt-3 text-white/80 text-sm font-bold truncate">
        {songTitle}
      </h1>
      <h1 className="mt-3 text-white/80">{artistName}</h1>
      <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
        {songDesc}
      </p>
      <button title="Add to PlayList" className="">
        <svg
          className="pointer-events-none stroke-white"
          width={32}
          height={32}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      </button>
    </article>
  );
}
