import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import RegistrarMorador from './pages/RegistrarMorador'
import Moradores from './pages/Moradores'
// import Navbar from './components/Navbar'

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>]
        <Route path='/moradores' element={<Moradores />}/>]
        <Route path='/moradores/cadastrar' element={<RegistrarMorador />}/>]
      </Routes>
    </Router>
    
  )
}

export default App
