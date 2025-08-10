import React, { ReactNode } from 'react'
import Navbar from '../components/components_layout/Navbar'
import Footer from '../components/components_layout/Footer'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
