import { Suspense, lazy } from 'react'
import './App.css'
import ProtectedRoutes from './Protectedroute/ProtectedRoutes'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import Spinner from './components/Spinner'
const Navbar = lazy(()=>import('./components/Navbar'))
const Home = lazy(()=>import('./pages/Home')) 
const SignIn = lazy(()=>import('./pages/SignIn')) 
const Account = lazy(()=>import('./pages/Account')) 
const Error = lazy(()=>import('./pages/Error')) 
const Details = lazy(()=>import('./pages/Details')) 
function App() {
  return (
    <>
    <Router>
    <Suspense fallback={<Spinner/>}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/account' element={<ProtectedRoutes><Account/></ProtectedRoutes>} />
      <Route path='/details/:id' element={<Details/>} />
      <Route path='/*' element={<Error/>} />
    </Routes>
    </Suspense>
    </Router>    
    </>
  )
}

export default App
