import { Head } from "minista"
import "./styles"
import Header from "@/layouts/Header"
import Content from "@/layouts/Content"
import Footer from "@/layouts/Footer"

export default (props) => {
  const { children, title, url, isHeaderFixed } = props

  return (
    <>
      <Head htmlAttributes={{ lang: "ru" }}>
        <title>{title}</title>
        <script src="/src/main.js" type="module" />
      </Head>
      <Header url={url} isFixed={isHeaderFixed} />
      <Content isResetPaddingTop={isHeaderFixed}>
        {children}
      </Content>
      <Footer />
    </>
  )
}
