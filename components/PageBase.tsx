import React from 'react'
import { Breadcrumb } from 'react-bootstrap-v5'
import Link from 'next/link'

const PageBase: React.FC<{
  title: string
  steps: {
    name: string
    path: string
    as: string
  }[]
}> = ({ title, steps }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Breadcrumb>
        {steps.map((r, i) => (
          <Link href={r.path} as={r.as} key={i}>
            <Breadcrumb.Item>{r.name}</Breadcrumb.Item>
          </Link>
        ))}
      </Breadcrumb>
    </div>
  )
}

export default PageBase
