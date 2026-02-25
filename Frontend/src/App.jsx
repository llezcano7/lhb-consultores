import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './components/header'
import Inicio from './pages/inicio'
import Nosotros from './pages/nosotros'
import Servicios from './pages/servicios'
import Blog from './pages/blog'
import Metodologia from './pages/metodologia'
import Contacto from './pages/contacto'
import Footer from './components/footer'
import './reset.css'
import './library.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/metodologia' element={<Metodologia />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
