import { RouterProvider } from "react-router-dom"
import { Routes } from "./routes/route"


const App = () => {
  return (
    <>
    <RouterProvider router={Routes} />
    </>
  )
}

export default App