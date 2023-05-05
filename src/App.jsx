
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Login } from './Login'
import { Dashboard } from './Dashboard'
import { TopNavBar } from './Components/TopNavBar'
import { AdminConsole } from "./AdminConsole";


function App() {
  if (!localStorage.getItem('token')) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    )
  } else {
    return (
      <Router>
        <TopNavBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-console" element={<AdminConsole />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />  
        </Routes>
      </Router>
    )
  }
}

export default App
