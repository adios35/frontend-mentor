import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Content from "./pages/mainPage";

function App() {
  return (
    <div className="md:px-44 px-2">
      <NavBar />
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
