import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import { SearchUser } from "./pages/SearchUser";
import { SearchRepos } from "./pages/SearchRepos";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SearchUser />} path="/user" />
        <Route element={<SearchRepos />} path="/repos/:username" />
      </Routes>
    </>
  );
}

export default App;
