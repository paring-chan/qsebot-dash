import React from 'react'
import PageContent from '@components/PageContent'
import { ListGroup } from 'react-bootstrap-v5'

const Index = () => {
  return (
    <PageContent>
      <div>
        <ListGroup>
          <ListGroup.Item action>퀴즈 관리</ListGroup.Item>
          <ListGroup.Item action>자동응답기(?) 관리</ListGroup.Item>
          <ListGroup.Item action>관리자 계정 관리</ListGroup.Item>
        </ListGroup>
      </div>
    </PageContent>
  )
}

export default Index
