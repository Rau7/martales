import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rsvp from "./pages/Rsvp";
import Story from "./pages/Story";
import Foto from "./pages/Foto";
import Wedding from "./pages/Wedding";
import "./styles/general.scss";
import "./styles/home.scss";
import "./styles/mobile1200w.scss";
import "./styles/mobile992w.scss";
import "./styles/mobile768w.scss";
import "./styles/mobile500w.scss";
import "./styles/navbar.scss";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/ln_storia" element={<Story />} />
      <Route exact path="/rsvp" element={<Rsvp />} />
      <Route exact path="/foto" element={<Foto />} />
      <Route exact path="/il_matrimonio" element={<Wedding />} />
    </Routes>
  );
}

export default App;
