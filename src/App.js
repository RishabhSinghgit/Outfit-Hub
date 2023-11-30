import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.component";
import Shop from "./components/shop/Shop.component";
import Home from "./components/category-item/Category-item.component";
import SignIn from "./components/signin/Signin.component";


const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={< Home/>} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>


  );
}

export default App;
