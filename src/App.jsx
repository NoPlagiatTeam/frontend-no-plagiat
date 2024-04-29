import { Route, Routes } from "react-router-dom";
import { pages } from "./constants/constants";

const App = () => {
  return (
    <>
      <Routes>
        {pages.map((page, index) => (
          <Route key={index} path={page.path} element={page.element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
