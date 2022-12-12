import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rsvp from "./pages/Rsvp";
import Story from "./pages/Story";
import "./styles/general.scss";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/ln_storia" element={<Story />} />
      <Route exact path="/rsvp" element={<Rsvp />} />
    </Routes>
  );
}

export default App;
