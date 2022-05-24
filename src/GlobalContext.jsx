import { createContext, useState, useMemo, useContext } from "react"

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
  const [count, setCount] = useState(0)

  const addCount = (count) => {
    setCount(count + 1)
  }

  const value = useMemo(
    () => ({
      count,
      addCount,
    }),
    [count, addCount]
  )

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalContextProvider, useGlobalContext }
