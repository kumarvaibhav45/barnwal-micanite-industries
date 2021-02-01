import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ children, scrolled, visibleSection }) {
  return (
    <>
      <Head>
        <title>Barnwal Micanite Industries</title>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header scrolled={scrolled} visibleSection={visibleSection} />
      <main className={scrolled ? 'lg:mt-32' : ''}>{children}</main>
      <Footer visibleSection={visibleSection} />
    </>
  )
}
