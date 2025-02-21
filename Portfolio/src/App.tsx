import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./ui/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
