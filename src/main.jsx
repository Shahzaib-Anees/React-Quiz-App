import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Quiz from "./components/Quiz/Quiz";
import Hero from "./components/Hero/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Result from "./components/Result/Result";

const route = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "/Quiz",
        element: <Quiz />,
      },
      {
        path: "/Result",
        element: <Result />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
