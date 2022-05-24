import { useTranslation } from "react-i18next"
import { useGlobalContext } from "../../GlobalContext"

import PageMetaTitle from "../../components/PageMetaTitle"
import LanguageButtons from "../../components/LanguageButtons"
import MainLayout from "../partials/MainLayout"

function Home() {
  const { t } = useTranslation()
  const { count, addCount } = useGlobalContext()

  return (
    <MainLayout>
      <PageMetaTitle title={t("mainMenu.home")} />
      <div>
        <LanguageButtons />
        <button type="button" onClick={() => addCount(count)}>
          The count is: {count}
        </button>
        the home: {t("en")}
      </div>
      <div>
        <h1>This is a h1</h1>
        <h2>This is a h1</h2>
        <h3>This is a h1</h3>
        <h4>This is a h1</h4>
        <p>This is a paragraph</p>
      </div>
    </MainLayout>
  )
}

export default Home
