import './styles/styles.css'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'


function App() {


  return (

    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
    
  )
}

export default App
