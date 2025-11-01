import { Toaster } from 'react-hot-toast';
import './App.css'
import router from './route'
import { RouterProvider } from "react-router";

function App() {

  return (
    <>
      <Toaster
        position="top-center"
      />
      <RouterProvider router={router} />
    </>
  )
}

export default App
