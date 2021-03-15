import React from 'react'

const PageContent: React.FC = ({ children }) => {
  return (
    <div style={{ paddingTop: 60 }} className="container">
      {children}
    </div>
  )
}

export default PageContent
