import { useRouter } from "next/router";
import { useUserAuth } from "../components/authContext";
import React from "react";
import { async } from "@firebase/util";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
export default function Login() {
  let router = useRouter();
  let {user}=useUserAuth()
  let {sinUp} = useUserAuth();

  let [userName, setUserName] = React.useState("");
  let [userLastname, setUserLastname] = React.useState("");
  let [userEmail, setUserEamil] = React.useState("");
  let [userPassword, setUserPassword] = React.useState("");
  
  let [swap,setSwap]=React.useState(false)
  

  return (
    <section className="relative flex h-screen  overflow-hidden w-full items-center justify-center bg-gradient-to-t from-gray-900 via-slate-700 to-gray-500 ">
      <motion.main   className="flex min-h-[350px]   relative z-50 min-w-[550px]  flex-col items-center px-8  drop-shadow-2xl drop-shadow-xl bg-black/10 rounded-md pb-10 pt-5">
        <button
          title="Go back to Home"
          onClick={() => router.push("/")}
          className="my-6 text-3xl underline underline-offset-[16px] text-green-500  "
        >
          Spot <span className="font-thin text-white ">Music</span>
        </button>
        <div className="flex gap-5 mt-5">
            <button onClick={()=>{setSwap(true)}} className="py-2 px-6 text-white border rounded-full hover:bg-green-500">Register</button>
            <button  onClick={()=>{setSwap(false)}}className="py-2 px-6 text-white border rounded-full hover:bg-green-500">Login</button>
        </div>
       
        {/**Login Existed User */}
        
        
        {/**REgister new User Form */}
       { swap && <motion.form exit={{scale:0}} initial={{scale:0}} animate={{scale:1}} onSubmit={async (e)=>{
            e.preventDefault()
            try{
                await sinUp(userEmail,userPassword)
                router.push('/')
            }
            catch(err){
                console.log(err)
            }

        }} className="flex flex-col gap-7">
          <h1 className="mb-3 text-sm my-7 text-white/25 text-center">
            Register account
          </h1>
          <label className="flex gap-8 justify-between">
            <span className="text-white/75">Name:</span>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="rounded-md text-white  py-1 px-3 placeholder:text-sm bg-white/5"
              placeholder="Enter your name"
              type="text"
            />
          </label>
          <label className="flex gap-8 justify-between">
            <span className="text-white/75">Lastname:</span>
            <input
              value={userLastname}
              onChange={(e) => setUserLastname(e.target.value)}
              className="rounded-md py-1 text-white px-3 placeholder:text-sm bg-white/5"
              placeholder="Enter your Lastname"
              type="text"
            />
          </label>
          <label className="flex gap-8 justify-between">
            <span className="text-white/75">Email:</span>
            <input
              value={userEmail}
              onChange={(e) => setUserEamil(e.target.value)}
              className="rounded-md py-1 text-white  px-3 placeholder:text-sm bg-white/5 text-white"
              placeholder="Enter your email adress"
              type="email"
            />
          </label>
          <label className="flex gap-8 justify-between">
            <span className="text-white/75">Password:</span>
            <input
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              className="rounded-md py-1 text-white  px-3 placeholder:text-sm bg-white/5 text-white"
              placeholder="Enter your email password"
              type="password"
            />
          </label>
          <button className="bg-gray-700/50 hover:bg-gray-900 text-white py-2 rounded-md">
            Register
          </button>
        </motion.form>
        
    }
       { swap==false && <motion.form   exit={{scale:0}} initial={{scale:0}} animate={{scale:1}} onSubmit={async (e)=>{
            e.preventDefault()
            try{
                await sinUp(userEmail,userPassword)
                router.push('/')
            }
            catch(err){
                console.log(err)
            }

        }} className="flex flex-col gap-7">
          <h1 className="mb-3 text-sm my-7 text-white/25 text-center">
            Login
          </h1>
          
          <label className="flex gap-8 justify-between">
            <span className="text-white/75">Email:</span>
            <input
              value={userEmail}
              onChange={(e) => setUserEamil(e.target.value)}
              className="rounded-md py-1 text-white  px-3 placeholder:text-sm bg-white/5 text-white"
              placeholder="Enter your email adress"
              type="email"
            />
          </label>
          <label className="flex gap-8 justify-between">
            <span className="text-white/75">Password:</span>
            <input
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              className="rounded-md py-1 text-white  px-3 placeholder:text-sm bg-white/5 text-white"
              placeholder="Enter your email password"
              type="password"
            />
          </label>
          <button className="bg-gray-700/50 hover:bg-gray-900 text-white py-2 rounded-md">
            Login
          </button>
        </motion.form>
}
        
    
        <h1 className="mb-3 text-sm my-7 text-white/25">Or Login with</h1>
        <button className="my-2 flex w-[250px] justify-center gap-4 rounded bg-white py-2 px-5 text-sm text-black/40 transition-all hover:bg-gray-600/80 hover:text-white">
          <img
            className="h-6 w-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
          />
          Login with Google
        </button>

        <button className="my-2 flex w-[250px] justify-center gap-4 rounded bg-white py-2 px-5 text-sm text-black/40 transition-all hover:bg-gray-600/80 hover:text-white">
          <img
            className="h-6 w-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/640px-Facebook_f_logo_%282019%29.svg.png"
          />
          Login with Google
        </button>
      </motion.main>
    </section>
  );
}
