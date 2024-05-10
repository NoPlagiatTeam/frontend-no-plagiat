import { Route, Routes } from "react-router-dom";
import { pages } from "./constants/constants";
import Checkout from "./pages/Steps/CheckoutPage/Checkout";

const App = () => {
  return (
    <>
      <Routes>
        {pages.map((page, index) => (
          <Route key={index} path={page.path} element={page.element} />
        ))}
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </>
  );
};

export default App;
