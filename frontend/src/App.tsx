import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import PrivateRoutes from './utils/PrivateRoutes'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="max-w-screen max-h-screen">
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/* PRIVATE ROUTES */}
        <Route element={<PrivateRoutes />} >
          <Route path='/' element={<Home />} />
        </Route>

      </Routes>
    </div >
  )
}

export default App
