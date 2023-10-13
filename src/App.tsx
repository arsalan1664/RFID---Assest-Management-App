
// import MyPieChart from "./components/PieChart"
import NavBar from "./components/NavBar"
import Assests from "./views/Assests";
import Dashboard from "./views/Dashboard"
import {
  Route,
  Routes
} from "react-router-dom";
import Assests_Right_2 from "./views/Settings/Assests_Right_2";
import Assests_Right from "./views/Settings/Assests_Right";
import Auth from "./views/Auth";
import NavBarOnOff from "./components/NavbarOnOff";
import { UserLogin } from "./components/UserLogin";
import { UserRegister } from "./components/UserRegisterv3";


function App() {
  return (
    <div className="">
      <NavBarOnOff>
        <NavBar />
      </NavBarOnOff>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} >
          <Route path="login" element={<UserLogin/>} />
          <Route path="register" element={<UserRegister />} />
        </Route>

        <Route path="/settings" element={<Assests />}>
          <Route path="assests_right" element={<Assests_Right />} />
          <Route path="assests_right_2" element={<Assests_Right_2 />} />
          {/* <Route path="/settings/assests_types_2" element={}/>
          <Route path="/settings/assests_types_3" element={}/>
          <Route path="/settings/assests_types_4" element={}/>
          <Route path="/settings/assests_types_5" element={}/> */}
        </Route>

      </Routes>


    </div>
  )
}

export default App