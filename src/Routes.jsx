import { Routes, Route } from "react-router-dom"
import { urls } from "./constants"

import Home from "./pages/Home"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={urls.home} element={<Home />} />
    </Routes>
  )
}
