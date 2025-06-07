import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
