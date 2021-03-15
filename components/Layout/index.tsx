import React from 'react'
import Header from '@components/Layout/Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
