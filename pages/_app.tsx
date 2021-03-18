import { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import Layout from '@components/Layout'
import 'bootstrap/scss/bootstrap.scss'
import { Request } from 'express'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <Layout user={pageProps.user} flash={pageProps.flash}>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps: any = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  if (ctx.query.flash) {
    pageProps.flash = ctx.query.flash
  }

  if (ctx.req) {
    if ((ctx.req as Request).user) {
      pageProps.user = (ctx.req as Request).user
    }
  }

  return { pageProps }
}

export default MyApp
