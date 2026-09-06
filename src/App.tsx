import { Route, Routes } from "react-router-dom";
import DocumentMeta from "./components/DocumentMeta";
import Home from "./pages/Home";
import Project from "./pages/Project";

export default function App() {
  return (
    <>
      <DocumentMeta />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<Project />} />
      </Routes>
    </>
  );
}
