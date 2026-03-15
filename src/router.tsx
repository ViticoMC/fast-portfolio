
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { ProjectDetails } from "./pages/ProjectDetails";




export default function RouterConfig() {
    return (
        <Router >
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
        </Router>
    )
}


