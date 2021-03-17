import React from 'react'
import PageContent from '@components/PageContent'
import PageBase from '@components/PageBase'
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap-v5'

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
          <FormControl type="password" name="currentPassword" required />
        </FormGroup>
        <FormGroup controlId="newPassword">
          <FormLabel>새 비밀번호</FormLabel>
          <FormControl type="password" name="currentPassword" required />
        </FormGroup>
        <FormGroup controlId="newPasswordConfirm">
          <FormLabel>새 비밀번호 확인</FormLabel>
          <FormControl type="password" name="currentPassword" required />
        </FormGroup>
        <Button type="submit" style={{ width: '100%', marginTop: 10 }}>
          변경하기
        </Button>
      </form>
    </PageContent>
  )
}

export default Password
