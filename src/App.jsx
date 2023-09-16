import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Account from './pages/Account'
import ProtectedRoutes from './Protectedroute/ProtectedRoutes'
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/account' element={<ProtectedRoutes><Account/></ProtectedRoutes>} />
    </Routes>
    </Router>    
    </>
  )
}

export default App
