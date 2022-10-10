import React from 'react'
import Sidebar from './sidebar'
export default function Layout({children}) {
  return (
    <div className='w-full h-screen relative flex'>{children}</div>
  )
}
