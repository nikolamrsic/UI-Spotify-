import React, { Children } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";


//First create Context
let PlayListContext=createContext()

//Create Provider Component with value of Playlist

const initialState={songs:[]}

const reducer=(state,action)=>{
    switch(action.type){
        case "addNewSongToPlayList":
        state.songs=[...state.songs,action.payload]
        return {...state};
       
    }

}

export default  function PlayListProvider({children}){

    let [state, dispatch] = useReducer(reducer, initialState);


    return(
        <PlayListContext.Provider 
         value={
            { state,
              addNewSongToPlayList_Handler:(songObj)=>{
                  dispatch({type:'addNewSongToPlayList',payload:songObj})
              }
            }
         }
        >
        {children}
        </PlayListContext.Provider>
    )
}

export function usePLayList(){
    return useContext(PlayListContext)
}