import React from 'react'
import PageContent from '@components/PageContent'
import PageBase from '@components/PageBase'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap-v5'

const Password = () => {
  return (
    <PageContent>
      <PageBase
        title="비밀번호 변경하기"
        steps={[
          {
            as: '/password',
            name: '비밀번호 변경',
            path: '/views/password',
          },
        ]}
      />
      <form action="/password" method="post">
        <FormGroup controlId="currentPassword">
          <FormLabel>현재 비밀번호</FormLabel>
          <FormControl type="password" name="currentPassword" />
        </FormGroup>
      </form>
    </PageContent>
  )
}

export default Password
