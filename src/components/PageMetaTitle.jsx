import { Helmet } from "react-helmet-async"

function PageMetaTitle({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default PageMetaTitle
