import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'

const Layout = ({children}:{children: React.ReactNode }) => {
  return (
   <>
   <Header/>
   {children}
   <Footer/>
   </>
  )
}

export default Layout
