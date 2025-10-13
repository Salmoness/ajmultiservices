import React from "react";
import Home from "./pages/Home";
import Quote from "./pages/Quote";
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/quote", element: <Quote /> },
]);

function App() {

  return (
    <div className="bg-white text-white min-h-screen font-sans">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
