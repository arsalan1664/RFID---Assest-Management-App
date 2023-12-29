// import MyPieChart from "./components/PieChart"

import Assests from "./components/views/Assests";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import CompanyInfo from "./components/views/Settings/CompanyInfo";
import NavBarOnOff from "./components/navbar/NavbarOnOff";
import { UserLogin } from "./components/auth/UserLogin";
import { UserRegister } from "./components/auth/UserRegisterv3";
import SiteInfo from "./components/views/Settings/SiteInfo";
import Category from "./components/views/Settings/Category";
import AssestsFields from "./components/views/Settings/AssestsFields";
import AssestsView from "./components/views/Settings/AssestsView";
import EmployeeView from "./components/views/Settings/EmployeeView";
import { AssestDiscription } from "./components/views/Settings/AssestDiscription";
import { Suppliers } from "./components/views/Purchase/Suppliers";
import { Countries } from "./components/views/Location/Countries";
import { Countinent } from "./components/views/Location/Continents";
import { States } from "./components/views/Location/States";
import { Cities } from "./components/views/Location/Cities";
import { Location } from "./components/views/Location/Location";
import { Buildings } from "./components/views/Location/Buildings";
import { Floors } from "./components/views/Location/Floors";
import { Rooms } from "./components/views/Location/Rooms";
import { Language } from "./components/views/Setting/Language";
import { TimeZone } from "./components/views/Setting/TimeZone";
import { Department } from "./components/views/Setting/Department";
import { Companies } from "./components/views/Setting/Companies";
import UserProtection from "./components/protected-routes/UserProtection";
import NonUserProtect from "./components/protected-routes/NonUserProtection";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <div>
        <NavBarOnOff>
          <NavBar />
        </NavBarOnOff>

        <Routes>


          <Route path="/login" element={<UserProtection>  <UserLogin />  </UserProtection>} />
          <Route path="/register" element={<UserProtection>  <UserRegister />  </UserProtection>} />


          <Route path="/" element={<NonUserProtect>  <Dashboard />  </NonUserProtect>} />


          <Route path="/settings" element={<NonUserProtect>  <Assests />  </NonUserProtect>}>
            <Route path="assests" >
              <Route path="" element={<NonUserProtect>  <AssestsView />  </NonUserProtect>} />
              <Route path=":arrestId" element={<NonUserProtect> <AssestDiscription />  </NonUserProtect>} />
            </Route>
            <Route path="employee" element={<NonUserProtect>  <EmployeeView />  </NonUserProtect>} />
            <Route path="companyinfo" element={<NonUserProtect>  <CompanyInfo />  </NonUserProtect>} />
            <Route path="siteinfo" element={<NonUserProtect>  <SiteInfo />  </NonUserProtect>} />
            <Route path="location" element={<NonUserProtect>  <Location />  </NonUserProtect>} />
            <Route path="categories" element={<NonUserProtect>  <Category />  </NonUserProtect>} />
            <Route path="assestsfields" element={<NonUserProtect>  <AssestsFields />  </NonUserProtect>} />

            <Route path="suppliers" element={<NonUserProtect>  <Suppliers />  </NonUserProtect>} />
            <Route path="continents" element={<NonUserProtect> <Countinent /> </NonUserProtect>} />
            <Route path="countries" element={<NonUserProtect> <Countries /> </NonUserProtect>} />
            <Route path="states" element={<NonUserProtect> <States /> </NonUserProtect>} />
            <Route path="cities" element={<NonUserProtect> <Cities /> </NonUserProtect>} />
            <Route path="location" element={<NonUserProtect> <Location /> </NonUserProtect>} />
            <Route path="buildings" element={<NonUserProtect> <Buildings /> </NonUserProtect>} />
            <Route path="floors" element={<NonUserProtect>  <Floors />  </NonUserProtect>} />
            <Route path="rooms" element={<NonUserProtect>  <Rooms />  </NonUserProtect>} />

            <Route path="timezone" element={<NonUserProtect>  <TimeZone />  </NonUserProtect>} />
            <Route path="language" element={<NonUserProtect>  <Language />  </NonUserProtect>} />
            <Route path="companies" element={<NonUserProtect> <Companies />  </NonUserProtect>} />
            <Route path="department" element={<NonUserProtect>  <Department />  </NonUserProtect>} />

          </Route>
        </Routes>
      </div>

    </>
  );
}

export default App;
