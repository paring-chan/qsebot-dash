import React from 'react'

const PageBase: React.FC<{
  title: string
  steps: {
    name: string
    path: string
    as: string
  }[]
}> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default PageBase
