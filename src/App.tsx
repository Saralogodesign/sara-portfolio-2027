import { Route, Routes } from "react-router-dom";
import CircleCursor from "./components/CircleCursor";
import DocumentMeta from "./components/DocumentMeta";
import Home from "./pages/Home";
import Project from "./pages/Project";

export default function App() {
  return (
    <>
      <DocumentMeta />
      <CircleCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<Project />} />
      </Routes>
    </>
  );
}
