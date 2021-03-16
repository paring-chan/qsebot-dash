import React from 'react'
import PageContent from '@components/PageContent'
import { ListGroup } from 'react-bootstrap-v5'
import Link from 'next/link'

const Index = () => {
  return (
    <PageContent>
      <div>
        <ListGroup>
          <Link href="/quiz">
            <ListGroup.Item action>퀴즈 관리</ListGroup.Item>
          </Link>
          <Link href="/auto_answer">
            <ListGroup.Item action>자동응답기(?) 관리</ListGroup.Item>
          </Link>
          <Link href="/accounts">
            <ListGroup.Item action>관리자 계정 관리</ListGroup.Item>
          </Link>
          <Link href="/password">
            <ListGroup.Item action>비밀번호 변경</ListGroup.Item>
          </Link>
        </ListGroup>
      </div>
    </PageContent>
  )
}

export default Index
