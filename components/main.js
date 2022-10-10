import React from 'react'
import Nav from './nav'
import SongCard from './songCard'






export default function Main({data}) {
   let[songs,setSongs]=React.useState()
   React.useEffect(()=>{
    setSongs(data)
   },[data])
  return (
    <div className="main-content h-[calc(100%-90px)] w-full snap-mandatory overflow-y-scroll bg-black/95 py-1">
    <div className="mx-auto h-full w-11/12 py-2">
     
     <Nav></Nav>
      <div className="mx-auto my-5 h-[250px] w-11/12 bg-white bg-[url('https://images.unsplash.com/photo-1662560884455-e89e8dcfa7ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')]"></div>
      <button className='text-white' onClick={()=>{console.log(songs)}}>TEST</button>
      <section className="song-section mb-6  snap-start">
        <div className="mb-4 flex justify-between py-3">
          <h1 className="text-3xl font-bold text-white">New Music</h1>
          <button className="text-white/50 hover:text-white">Explore more</button>
        </div>
        <div className="flex flex-wrap gap-3">
          {songs?.tracks.slice(0,7).map((song,index)=>{
            return(<SongCard key={index} img={song.images.background} artistName={song.subtitle} songTitle={song.title} songDesc={''} link={song.url}/>)
          })}
        </div>
      </section>

      <section className="song-section mb-6 snap-start">
        <div className="mb-4 flex justify-between py-3">
          <h1 className="text-3xl font-bold text-white">Popular</h1>
          <button className="text-white/50 hover:text-white">Explore more</button>
        </div>
        <div className="flex flex-wrap gap-3">
        {songs?.tracks.slice(7,14).map((song,index)=>{
            return(<SongCard  key={index} img={song.images.background} artistName={song.subtitle} songTitle={song.title} songDesc={''} link={song.url}/>)
          })}
        </div>
      </section>

      <section className="song-section mb-6 snap-start">
        <div className="mb-4 flex justify-between py-3">
          <h1 className="text-3xl font-bold text-white">Popular</h1>
          <button className="text-white/50 hover:text-white">Explore more</button>
        </div>
        <div className="flex flex-wrap gap-3">
        {songs?.tracks.slice(13,20).map((song,index)=>{
            return(<SongCard key={index} img={song.images.background} artistName={song.subtitle} songTitle={song.title} songDesc={''} link={song.url}/>)
          })}
        </div>
      </section>
    </div>
  </div>
  )
}
