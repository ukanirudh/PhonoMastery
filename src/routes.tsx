import {
    createBrowserRouter
  } from "react-router";

import Login from './modules/Login';

  const router = createBrowserRouter([
    { path: "/", Component: Login },
  ]);


  export default router
