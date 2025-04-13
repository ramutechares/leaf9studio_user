
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import './App.css'
import Landing from "./pages/Landing"
import Layout from "./component/layout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} >
      <Route path="/" element={<Landing />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
