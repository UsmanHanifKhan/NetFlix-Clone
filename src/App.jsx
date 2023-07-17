import './App.css'
import Navbar from './components/Navbar'
import Fav from './pages/Fav'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/fav' element={<Fav />} />
    </Routes>
    </Router>    
    </>
  )
}

export default App
