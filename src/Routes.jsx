import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from './components/Cadastro/Cadastro'
import Login from './components/Login/Login'

export function AppRoutes () {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      )
    }


