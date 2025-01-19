import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Fooditems from "./components/Fooditems"
import Description from "./components/Description"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<Fooditems/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/:id" element={<Description/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
