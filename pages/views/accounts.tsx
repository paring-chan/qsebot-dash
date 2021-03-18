import React from 'react'
import PageBase from '@components/PageBase'

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
      accounts
    </PageBase>
  )
}

export default Accounts
