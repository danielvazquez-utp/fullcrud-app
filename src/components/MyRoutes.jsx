import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../screens/Login";
import Form1 from "../screens/Form1";
import Gestion from "../screens/Gestion";
import Registrados from "../screens/Registrados";

const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/gestion" element={ <Gestion /> } />
            <Route path="/" element={ <Login /> } />
            <Route path="/formulario1" element={ <Form1 /> } />
            <Route path="/registrados" element={ <Registrados /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes;