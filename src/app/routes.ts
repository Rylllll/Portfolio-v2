import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Experiments } from "./pages/Experiments";
import { WebsiteWorks } from "./pages/WebsiteWorks";
import { ProjectPreview } from "./pages/ProjectPreview";
import { TechStack } from "./pages/TechStack";
import { AboutMe } from "./pages/AboutMe";
import { ContactMe } from "./pages/ContactMe";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "experiments", Component: Experiments },
      { path: "projects", Component: WebsiteWorks },
      { path: "projects/:id", Component: ProjectPreview },
      { path: "stack", Component: TechStack },
      { path: "about", Component: AboutMe },
      { path: "contact", Component: ContactMe },
      { path: "*", Component: Home },
    ],
  },
]);
