import './App.css'
import Navbar from './components/Navbar'
import Fav from './pages/Fav'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/fav' element={<Fav />} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
          </Routes>
    </Router>    
    </>
  )
}

export default App
