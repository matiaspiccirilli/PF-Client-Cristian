import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import LandingPage from "./components/landingPage/LandingPage"; // Eliminar
import CreateProduct from './components/createProduct/CreateProduct'; //eliminar
import UpdateProduct from "./components/updateProduct/UpdateProduct";
import DeleteProduct from "./components/deleteProduct/DeleteProduct";

const App = () => {
  // url general
  //axios.defaults.baseURL = "http://localhost:3000/"; // para uso local
  axios.defaults.baseURL = "server-technook.up.railway.app"; // para deploy

  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" exact element={<LandingPage/>} />
          <Route path="/createProduct" element={<CreateProduct/>} />
          <Route path="/updateProduct/:id" element={<UpdateProduct/>} />
          <Route path="/deleteProduct/:id" element={<DeleteProduct />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
