import React from 'react'
import PageBase from '@components/PageBase'
import PageContent from '@components/PageContent'
import { Button, Table } from 'react-bootstrap-v5'
import Link from 'next/link'
import { NextPageContext } from 'next'

const Accounts: React.FC<{ query: { users: any[] } }> = ({ query }) => {
  console.log(query)
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

;(Accounts as any).getInitialProps = (ctx: NextPageContext) => {
  const query = ctx.query
  return {
    props: {
      query,
    },
  }
}

export default Accounts
