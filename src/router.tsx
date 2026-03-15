
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { ProjectDetails } from "./pages/ProjectDetails";
import Home from "./pages/Home";
import { Layout } from "./layouts/Layout";

export default function RouterConfig() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:projectId" element={<ProjectDetails />} />
                </Route>
            </Routes>
        </Router>
    );
}


