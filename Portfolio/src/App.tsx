import { BrowserRouter, Route, Routes } from "react-router";
import { lazy } from "react";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const Layout = lazy(() => import("./ui/Layout/Layout"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const AboutMePage = lazy(() => import("./pages/AboutMePage/AboutMePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage/ProjectsPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
