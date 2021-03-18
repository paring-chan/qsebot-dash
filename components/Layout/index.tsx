import React from 'react'
import Header from '@components/Layout/Header'
import { Alert } from 'react-bootstrap-v5'

const Layout: React.FC<{ user: any; flash?: string }> = ({
  children,
  user,
  flash,
}) => {
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
      {flash && (
        <Alert
          variant="primary"
          style={{
            marginTop: 60,
          }}
        >
          {flash}
        </Alert>
      )}
      {children}
    </div>
  )
}

export default Layout
