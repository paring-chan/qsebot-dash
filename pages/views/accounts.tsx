import React from 'react'
import PageBase from '@components/PageBase'
import PageContent from '@components/PageContent'
import { Table } from 'react-bootstrap-v5'

const Accounts = () => {
  return (
    <PageContent>
      <PageBase
        title="관리자 계정 관리"
        steps={[
          {
            path: '/views/accounts',
            name: '계정 관리',
            as: '/accounts',
          },
        ]}
      />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
          </tr>
        </thead>
      </Table>
    </PageContent>
  )
}

export default Accounts
