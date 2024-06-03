import React from 'react';
import Login from './pages/Login/Login';
import StudentRegister from './pages/StudentRegister/StudentRegister';
import Homepage from './pages/HomePage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './components/errorpage/ErrorPage';
import Student from './pages/student/Student';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TopNav from './components/topNav/TopNav';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/register",
    element: <StudentRegister/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Login />,
  },
  {
    path:"/error",
    element:<ErrorPage/>
  },
  {
    path:"/student",
    element:<Student />
  },
  {
    path:"/nav",
    element:<TopNav />
  }
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
