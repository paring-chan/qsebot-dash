import React from 'react'
import PageContent from '@components/PageContent'
import { NextPage, NextPageContext } from 'next'
import { Alert, Card } from 'react-bootstrap-v5'

const Login: NextPage<any> = ({ query }) => {
  return (
    <PageContent>
      <Card className="col-sm-12 col-md-6 col-lg-4 mx-auto">
        <Card.Body>
          {query.firstRun && (
            <Alert variant="primary">
              현재 존재하는 유저가 없습니다. 유저를 생성해주세요.
            </Alert>
          )}
        </Card.Body>
      </Card>
    </PageContent>
  )
}

Login.getInitialProps = async function (context: NextPageContext) {
  const { query } = context
  return { query }
}

export default Login
