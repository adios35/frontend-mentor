import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="px-32">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-Very-dark-blue">hello from home</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
