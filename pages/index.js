import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../components/main'
import React from 'react'
import Sidebar from '../components/sidebar'
import Player from '../components/player'
import { Fragment } from 'react'
import Layout from '../components/layout'

export async function getServerSideProps() {
  // Fetch data from external API


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f57421fd21msh57bab180e2c20afp17c43cjsn0a207c176be2',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  
const res= await  fetch('https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US', options)
   
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}



export default function Home({data}) {

  return (
     <>
     <Layout>
     <Sidebar/>
     <Main data={data}/>
      <Player/>
      </Layout>
     </>
  )
}
