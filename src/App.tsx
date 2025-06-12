import React, { useState} from "react"
import { Nav } from "./Nav"

function App() {
  const [page, setPage] = useState("journal")

  let Component
  // if (page === "journal") Component = <Journal />

  return (
    <>
    <Nav setPage={setPage} />
    {Component}
    </>
  )
}

export default App