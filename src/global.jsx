import { Head } from "minista"
import "./styles"
import Header from "@/layouts/Header"
import Content from "@/layouts/Content"
import Footer from "@/layouts/Footer"
import Sidebar from "@/layouts/Sidebar"

export default (props) => {
  const { children, title, url, isHeaderFixed, showHeader = true } = props
  const isAuthPage = url === "/sign-in" || url === "/register"

  return (
    <>
      <Head htmlAttributes={{ lang: "ru" }}>
        <title>Lovina | {title}</title>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon-180.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e94076" />
        <script src="/src/main.js" type="module" />
      </Head>
      {showHeader && !isAuthPage && <Header url={url} isFixed={isHeaderFixed} />}
      {!isAuthPage && <Sidebar url={url} />}
      <Content isResetPaddingTop={isHeaderFixed} isAuthPage={isAuthPage}>
        {children}
      </Content>
      <Footer />
    </>
  )
}
