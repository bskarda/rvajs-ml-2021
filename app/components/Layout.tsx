import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' '}|{' '}
        <Link href="/client">
          <a>Client Side</a>
        </Link>
        <Link href="/server">
          <a>Server Side</a>
        </Link>
        {' '}|{' '}
        <Link href="/api/ml">
          <a>API</a>
        </Link>
        {' '}|{' '}
        <Link href="/james_river_data_report.html">
          <a>Data</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
    </footer>
  </div>
)

export default Layout
