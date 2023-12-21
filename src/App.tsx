import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import { SearchUser } from "./pages/SearchUser";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SearchUser />} path="/user" />
      </Routes>
    </>
  );
}

export default App;
