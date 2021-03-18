import React from 'react'
import PageBase from '@components/PageBase'
import PageContent from '@components/PageContent'
import { Button, Table } from 'react-bootstrap-v5'
import Link from 'next/link'
import { NextPage } from 'next'

const Accounts: NextPage = () => {
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
      <Link href="/views/addAccount" as="/accounts/add">
        <Button>계정 추가</Button>
      </Link>
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
