import React from 'react'
import PageContent from '@components/PageContent'
import { NextPage, NextPageContext } from 'next'
import { Alert, Button, Card, Form } from 'react-bootstrap-v5'

const Login: NextPage<any> = ({ query }) => {
  return (
    <PageContent>
      <Card className="col-sm-12 col-md-6 col-lg-4 mx-auto">
        <Card.Body>
          <Card.Title>{query.firstRun ? '계정 생성' : '로그인'}</Card.Title>
          {query.firstRun && (
            <Alert variant="primary">관리자 계정을 생성해주세요</Alert>
          )}
          <Form>
            <Form.Group controlId="loginFormID">
              <Form.Label>ID</Form.Label>
              <Form.Control required />
            </Form.Group>
            <Form.Group controlId="loginFormPW" style={{ marginTop: 10 }}>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control required type="password" />
            </Form.Group>
            <Button
              type="submit"
              style={{
                marginTop: 10,
                width: '100%',
              }}
            >
              {query.firstRun ? '계정 생성' : '로그인'}
            </Button>
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
