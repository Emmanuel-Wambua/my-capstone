import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Attack from './components/AttackTitan';
import MyHero from './components/MyHero';
import JujutsuKaisen from './components/JujutsuKaisen';
import { Route, Routes } from  "react-router-dom"


function App() {

  return( 
    <>
      <NavigationBar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aot' element={<Attack/>} />
          <Route path='/mha' element={<MyHero/>} />
          <Route path='/jjk' element={<JujutsuKaisen/>} />
        </Routes>
      </div>
    </>

  )
}

export default App;
