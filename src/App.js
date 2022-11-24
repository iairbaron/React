import { Home } from "./components/pages/home/Home";
import{BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Products from "./components/pages/products/Products";
import ProductDetail from "./components/pages/productDetail/ProductDetail";
import LogIn from "./components/pages/login/LogIn";
import ProtectedRoutes from "./components/router/ProtectedRoutes";


//BackSticks ```alt + Ctrl +}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn/>} />

        <Route element={<ProtectedRoutes/>} > {/*Se aplica el protected Route  */}
         <Route path="/productos" element={<Products />} />{/*a las rutas que envuelve */}
        <Route path="/productos/:productId" element={<div><ProductDetail/></div>} />
        </Route>
      </Routes>
    </BrowserRouter>

    /* <Home/> */
  );
}

export default App;
