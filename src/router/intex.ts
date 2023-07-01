import about from "../pages/about/about.tsx";
import main from "../pages/main/main.tsx";
import projects from "../pages/projects/projects.tsx";

export const routes = [
  {path: '/', component: main},
  {path: '/projects', component: projects},
  {path: '/about', component: about}
]