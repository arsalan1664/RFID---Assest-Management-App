import NavBar from "./components/NavBar"
import Assests from "./views/Assests";
import Dashboard from "./views/Dashboard"
import {
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="">
      <NavBar />

      {/* /////////// */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Routes>
        <Route path="/assests" element={<Assests />} />
        </Routes>
        
      {/* /////////// */}

    </div>
  )
}

export default App