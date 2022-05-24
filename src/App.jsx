import { BrowserRouter } from "react-router-dom"
import "./i18n/config"
import "bootstrap/dist/css/bootstrap.min.css"
import { GlobalContextProvider } from "./GlobalContext"

import AppRoutes from "./Routes"

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </GlobalContextProvider>
    </div>
  )
}

export default App
