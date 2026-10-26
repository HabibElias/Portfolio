import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import CaseStudyPage from "./pages/CaseStudyPage";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects/:slug", element: <CaseStudyPage /> },
      { path: "*", element: <CaseStudyPage /> },
    ],
  },
]);

export default routes;
