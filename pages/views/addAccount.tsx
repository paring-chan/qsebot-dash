import React from 'react'
import PageContent from '@components/PageContent'
import PageBase from '@components/PageBase'

const AddAccount = () => {
  return (
    <PageContent>
      <PageBase
        title="관리자 계정 추가"
        steps={[
          {
            path: '/views/accounts',
            name: '계정 관리',
            as: '/accounts',
          },
          {
            path: '/views/addAccount',
            name: '계정 추가',
            as: '/accounts/add',
          },
        ]}
      />
    </PageContent>
  )
}

export default AddAccount
