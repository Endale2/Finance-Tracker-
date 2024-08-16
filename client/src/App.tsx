import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Dashboard from "./pages/dashboard/dashboard"
import Auth from "./pages/auth/auth"
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element = {<Auth />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
