import React from 'react'
import Header from '@components/Layout/Header'

const Layout: React.FC<{ user: any }> = ({ children, user }) => {
  return (
    <div>
      <Header user={user} />
      {children}
    </div>
  )
}

export default Layout
