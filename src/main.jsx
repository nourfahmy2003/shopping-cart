import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './components/HomePage.jsx';
import MensPage from './components/Mensclothing.jsx';
import WomensPage from './components/Womensclothing.jsx';
import JeweleryPage from './components/Jewelery.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "homepage", element: <HomePage /> },
      { path: "mens", element: <MensPage /> },
      { path: "womens", element: <WomensPage /> },
      { path: "jewelery", element: <JeweleryPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
