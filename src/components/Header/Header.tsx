import React, { FC } from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'

const Header:FC = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-red-600">
        <TopBar />
        <Navbar />
    </header>
  )
}

export default Header