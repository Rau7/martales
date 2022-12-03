import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/general.scss";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
