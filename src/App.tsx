import React, { useState} from "react"
import { Header } from "./components/Header"
import { Home } from "./components/Home"

function App() {
  const [page, setPage] = useState("home")

  let Component
  if (page === "home") Component = <Home/>

  return (
    <>
    <Header setPage={setPage} />
    {Component}
    </>
  )
}

export default App