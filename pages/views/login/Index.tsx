import React from 'react'
import PageContent from '@components/PageContent'
import { NextPage, NextPageContext } from 'next'

const Login: NextPage<any> = ({ query }) => {
  return <PageContent>{JSON.stringify(query)}</PageContent>
}

Login.getInitialProps = async function (context: NextPageContext) {
  const { query } = context
  return { query }
}

export default Login
