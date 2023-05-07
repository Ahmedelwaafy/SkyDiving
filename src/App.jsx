import { Suspense, lazy, useState, useEffect } from "react";

import Layout from "./MainComponents/Layout";
import MainLoader from "./MainComponents/MainLoader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<MainLoader />} />;
}

export default App;
