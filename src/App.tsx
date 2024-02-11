import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Content from "./pages/mainPage";

function App() {
  return (
    <div className="px-44">
      <NavBar />
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
