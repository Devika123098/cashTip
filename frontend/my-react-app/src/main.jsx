import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import { BrowserRouter, Route } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/bank-comparison",
  //   element: <BankComparison />,
  // },
  // {
  //   path: "/budgeting-tools",
  //   element: <BudgetingTools />,
  // },
  // {
  //   path: "/currency-calculator",
  //   element: <CurrencyCalculator />,
  // }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
