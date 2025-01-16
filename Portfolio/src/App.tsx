import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./ui/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
