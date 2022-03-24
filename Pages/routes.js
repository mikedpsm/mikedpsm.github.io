import { Route, Routes } from "react-router-dom";
import Customers from "./Clients/index";
import Charges from "./Charges/index";
import Login from "./Login/index";
import Main from "./Main/Index";
import Register from "./Register/index";
import RegisterComplete from "./Register/Register__complete";
import RegisterPassword from "./Register/Register__password";
import { PrivateRoutes, AuthProvider } from "./auth";

import InfoClients from "./Clients/ClientsInfo/infoClients";

function MyRoutes() {
  return (
    <div className="MyRoutes">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="register-password" element={<RegisterPassword />} />
          <Route path="register-complete" element={<RegisterComplete />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/clients" element={<Customers />} />

            <Route path="/info-client/:cpf" element={<InfoClients />} />

            <Route path="/main" element={<Main />} />
            <Route path="/charges" element={<Charges />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default MyRoutes;
