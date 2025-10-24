import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectDetails from './components/ProjectDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path: "/projects/:id",
    element:<ProjectDetails></ProjectDetails>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
