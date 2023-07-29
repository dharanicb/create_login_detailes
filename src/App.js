import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div>
            <Header />
      <BrowserRouter>
        <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
