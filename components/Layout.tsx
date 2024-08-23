// components/Layout.tsx

import Head from 'next/head'
import Header from './Header'
/* import Footer from './Footer'
 */
type LayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background font-source-sans text-dark-brown">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/png" href="/cream.png" />
      </Head>
      <Header />
      <main className="w-full px-4">{children}</main>
{/*       <Footer />
 */}    </div>
  )
}