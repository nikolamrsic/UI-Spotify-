import React, { createContext, useContext, useEffect, useState } from "react";
import { auth ,db} from "../components/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {setDoc,doc} from 'firebase/firestore'
let AuthContext=createContext()
export default function AuthContextProvider({ children }) {
 
    let [user, setUser] = React.useState({});

  function sinUp(email, password) {
     createUserWithEmailAndPassword(auth, email, password);
     setDoc(doc(db,'users',email),{
         playListsL:[]
     })
  }
  
  function logOut(){
    return signOut(auth)
  }
  function login(email,password){
   return signInWithEmailAndPassword(email,password)
  }

  useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,(curentUser)=>{
          setUser(curentUser)
      })
      return(()=>{
          unsubscribe();
      })
  })


  return <AuthContext.Provider value={{sinUp,logOut,login,user}}>{children}</AuthContext.Provider>;
}
export function useUserAuth() {
  return useContext(AuthContext);
}
