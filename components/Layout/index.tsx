import React from 'react'
import Header from '@components/Layout/Header'

const Layout: React.FC<{ user: any }> = ({ children, user }) => {
  return (
    <div>
      <style>
        {`
        .dropdown-menu {
          right: 0;
          left: auto;
        }
        `}
      </style>
      <Header user={user} />
      {children}
    </div>
  )
}

export default Layout
