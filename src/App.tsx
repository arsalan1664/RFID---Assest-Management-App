// import MyPieChart from "./components/PieChart"
import NavBar from "./components/NavBar";
import Assests from "./views/Assests";
import Dashboard from "./views/Dashboard";
import { Route, Routes } from "react-router-dom";
import CompanyInfo from "./views/Settings/CompanyInfo";
import Auth from "./views/Auth";
import NavBarOnOff from "./components/NavbarOnOff";
import { UserLogin } from "./components/UserLogin";
import { UserRegister } from "./components/UserRegisterv3";
import SiteInfo from "./views/Settings/SiteInfo";
import Location from "./views/Settings/Location";
import Category from "./views/Settings/Category";
import AssestsFields from "./views/Settings/AssestsFields";
import AssestsView from "./views/Settings/AssestsView";
import EmployeeView from "./views/Settings/EmployeeView";
import { AssestDiscription } from "./views/Settings/AssestDiscription";
import { Suppliers } from "./views/Purchase/Suppliers";

function App() {
  return (
    <>
    <div className="">
      <NavBarOnOff>
        <NavBar />
      </NavBarOnOff>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<UserLogin />} />
          <Route path="register" element={<UserRegister />} />
        </Route>

        <Route path="/settings" element={<Assests />}>
          <Route path="assests" >
            <Route path="" element={<AssestsView />} />
            <Route path=":arrestId" element={<AssestDiscription/>} />
          </Route>
          <Route path="employee" element={<EmployeeView />} />
          <Route path="companyinfo" element={<CompanyInfo />} />
          <Route path="siteinfo" element={<SiteInfo />} />
          <Route path="location" element={<Location />} />
          <Route path="categories" element={<Category />} />
          <Route path="assestsfields" element={<AssestsFields />} />

          <Route path="suppliers" element={<Suppliers />}/>
        </Route>

        

      </Routes>
    </div>
      
      </>
  );
}

export default App;
