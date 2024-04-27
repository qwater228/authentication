import HomePage from './HomePage';
import LoginPage from './LoginPage';


import './app.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  }
])


export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
