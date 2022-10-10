import React, { useEffect } from "react";
import { usePLayList } from "./playListContext";
import Link from "next/link";
import { useUserAuth } from "./authContext";
import { async } from "@firebase/util";

export default function Nav() {
  let pl = usePLayList();
  let { user, logOut } = useUserAuth();

  let [showMenu, setShowMenu] = React.useState(false);
  
  return (
    <nav className="flex w-full items-start justify-between">
      <div className="flex gap-5 ">
        <button
          onClick={() => {
            pl.addNewSongToPlayList_Handler("tamna je noc");
          }}
          className="flex items-center justify-center rounded-full bg-black p-2 hover:bg-green-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 stroke-white pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            console.log(pl);
          }}
          className="flex items-center justify-center rounded-full bg-black p-2 hover:bg-green-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 stroke-white pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <input
          className="rounded-full pl-4 transition-all w-[250px] text-black/80  focus:w-[350px] focus:outline-none"
          placeholder="Search Songs"
        />
      </div>

      {user ? (
        <div
          id="avatar-button"
          onClick={() => setShowMenu(!showMenu)}
          className="flex cursor-pointer items-center gap-3  hover:bg-green-500  rounded-full bg-black  pr-4 relative"
        >
          <img
            className="h-9 w-9 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
          />
          <span className="text-white">{user.email}</span>
          {showMenu && (
            <div
              id="avatar-menu"
              className=" absolute  bg-white top-[150%] rounded w-[250px] right-0"
            >
              <ul>
                <li className="py-2 px-3 text-base hover:bg-black/50 hover:text-white transition-colors">
                  Profile
                </li>
                <li className="py-2 px-3 text-base hover:bg-black/50 hover:text-white transition-colors">
                  Settings
                </li>
                <li className="py-2 px-3 text-base hover:bg-black/50 hover:text-white transition-colors">
                  <button
                    className="hover:text-black"
                    onClick={ async () => {
                     try{
                       await logOut()

                     }catch(err){
                       console.log(err,'GRESKA')
                     }
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <Link href="/login">
          <a className="py-1 hover:bg-green-500 hover:border-green-600 transition-all px-5 border text-white rounded-full">
            Login
          </a>
        </Link>
      )}
    </nav>
  );
}
