import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation-component";
import Shop from "./components/shop/shop-component";
import Home from "./components/category-item/category-item-component";
import Authentication from "./components/authentication/authentication.component";


const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={< Home/>} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>


  );
}

export default App;
