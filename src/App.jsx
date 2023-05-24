import { Suspense, lazy, useState, useEffect } from "react";

import Layout from "./MainComponents/Layout";
import MainLoader from "./MainComponents/MainLoader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exams from "./Pages/Exams";
//pages
const LazyHomePage = lazy(() => import("./Pages/HomePage/HomePage"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<MainLoader />}>
            <LazyHomePage />
          </Suspense>
        ),
      },
      {
        path: "about",
      },
    ],
  },
  {
    path: "/exams/exam",
    element: (
      
        <Exams />
    ),
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<MainLoader />} />;
}

export default App;
