import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../screens/Login";
import Form1 from "../screens/Form1";
import Gestion from "../screens/Gestion";
import Registrados from "../screens/Registrados";
import PrivateRoutes from "./PrivateRoutes";

const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={ <Login /> } />
            <Route path="/formulario1" element={ 
              <PrivateRoutes>
                <Form1 />
              </PrivateRoutes>
             } />
            <Route path="/registrados" element={ 
              <PrivateRoutes>
                <Registrados />
              </PrivateRoutes>
            } />
            <Route path="/gestion" element={ 
              <PrivateRoutes>
                <Gestion />
              </PrivateRoutes>
            } />
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes;