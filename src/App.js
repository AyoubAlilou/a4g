import React from 'react'
import Mdex from './Pages/Mdex'
import Classe from './Pages/Classe'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './Pages/Blog'
import About from './Pages/About'
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Mdex />} />
            <Route path='/classe' element={<Classe />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
