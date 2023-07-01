import {Route, Routes, Navigate} from "react-router-dom";
import Main from "../pages/main/main.tsx";
import Projects from "../pages/projects/projects.tsx";
import About from "../pages/about/about.tsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/projects' element={<Projects />}/>
      <Route path='about' element={<About />} />
      <Route
        path='*'
        element={<Navigate to = "/" replace />}
      />
    </Routes>
  );
};

export default AppRouter;