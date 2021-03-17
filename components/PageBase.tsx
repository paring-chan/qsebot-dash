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
      <h1>{title}</h1>
    </div>
  )
}

export default PageBase
