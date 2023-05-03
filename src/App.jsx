import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Login } from './Login'
import { Dashboard } from './Dashboard'
import { TopNavBar } from './Components/TopNavBar'
import { AdminConsole } from "./AdminConsole";


function App() {
  return (
    <div className="App">
      <Router>
      {window.location.pathname !== '/login' && window.location.pathname !== '/'  && <TopNavBar />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-console" element={<AdminConsole />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
