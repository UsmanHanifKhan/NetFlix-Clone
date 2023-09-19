import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Account from './pages/Account'
import ProtectedRoutes from './Protectedroute/ProtectedRoutes'
import Error from './pages/Error'
import Details from './pages/Details'
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/account' element={<ProtectedRoutes><Account/></ProtectedRoutes>} />
      <Route path='/details/:id' element={<Details/>} />
      <Route path='/*' element={<Error/>} />
    </Routes>
    </Router>    
    </>
  )
}

export default App
