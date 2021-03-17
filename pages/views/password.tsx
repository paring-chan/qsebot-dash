import React from 'react'
import PageContent from '@components/PageContent'
import PageBase from '@components/PageBase'

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
    </PageContent>
  )
}

export default Password
