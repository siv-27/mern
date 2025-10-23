import React from 'react'
import User from './Components/User'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Components/Nav';
import Effects from './Components/Effects';
import State from './Hooks/State'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Nav />
  <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='state' element={<State />}/>
       <Route path='effect' element={<Effects />}/>
    </Routes>
    </>
  )
}

export default App
