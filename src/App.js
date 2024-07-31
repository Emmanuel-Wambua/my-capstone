import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Attack from './components/AttackTitan';
import MyHero from './components/MyHero';
import JujutsuKaisen from './components/JujutsuKaisen';
import Register from './components/Register';
import Login from './components/Login';
// import Logout from './components/Logout';
import { Route, Routes } from  "react-router-dom"
import React from 'react';



function App() {

  return( 
    <>
      <NavigationBar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/aot' element={<Attack/>} />
          <Route path='/mha' element={<MyHero/>} />
          <Route path='/jjk' element={<JujutsuKaisen/>} />
        </Routes>
      </div>
    </>

  )
}

export default App;
