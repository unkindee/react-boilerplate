import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: localStorage.getItem("language"),
  resources: {
    en: {
      // eslint-disable-next-line global-require
      translations: require("./locales/en/translations.json"),
    },
    ro: {
      // eslint-disable-next-line global-require
      translations: require("./locales/ro/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  showLanguages: false, // set to true to show the change language buttons
})

i18n.languages = ["en", "ro"]

export default i18n
