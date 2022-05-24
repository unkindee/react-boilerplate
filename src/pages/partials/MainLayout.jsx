import { Container } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"

function MainLayout(props) {
  const { children } = props
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default MainLayout
