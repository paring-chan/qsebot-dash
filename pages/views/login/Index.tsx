import React from 'react'
import PageContent from '@components/PageContent'
import { NextPage, NextPageContext } from 'next'
import { Alert, Card, Form } from 'react-bootstrap-v5'

const Login: NextPage<any> = ({ query }) => {
  return (
    <PageContent>
      <Card className="col-sm-12 col-md-6 col-lg-4 mx-auto">
        <Card.Body>
          <Card.Title>{query.firstRun ? '계정 생성' : '로그인'}</Card.Title>
          {query.firstRun && (
            <Alert variant="primary">
              현재 존재하는 유저가 없습니다. 유저를 생성해주세요.
            </Alert>
          )}
          <Form>
            <Form.Group controlId="loginFormID">
              <Form.Label>ID</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Form>
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
