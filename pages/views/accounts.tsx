import React from 'react'
import PageBase from '@components/PageBase'
import PageContent from '@components/PageContent'

const Accounts = () => {
  return (
    <PageBase
      title="관리자 계정 관리"
      steps={[
        {
          path: '/views/accounts',
          name: '계정 관리',
          as: '/accounts',
        },
      ]}
    >
      <PageContent>accounts</PageContent>
    </PageBase>
  )
}

export default Accounts
