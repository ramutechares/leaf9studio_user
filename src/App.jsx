
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import './App.css'
import Landing from "./pages/Landing"
import Layout from "./component/layout"
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Tamilwedding from "./pages/Tamilwedding";
import Christainwedding from "./pages/Christainwedding";
import Teluguwedding from "./pages/Teluguwedding";
import Newbornwedding from "./pages/Newbornwedding";
import Street from "./pages/street";
import Weddingflims from "./pages/Weddingflims";
import Contactus from "./pages/Contactus";
import PostPreWedding from "./pages/PostPreWedding";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} >
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/tamil-wedding" element={<Tamilwedding />} />
      <Route path="/telugu-wedding" element={<Teluguwedding />} />
      <Route path="/Christian-wedding" element={<Christainwedding />} />
      <Route path="/postpre-wedding" element={<PostPreWedding />} />
      <Route path="/newborn-wedding" element={<Newbornwedding />} />
      <Route path="/street-photography" element={<Street />} />
      <Route path="/wedding-flims" element={<Weddingflims />} />
      <Route path="/contactus" element={<Contactus />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
