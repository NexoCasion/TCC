import { createBrowserRouter } from "react-router-dom"
import Registrar from "./pages/Registrar"
import Home from "./pages/Home"
import Produtos from "./pages/Produtos"
export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      children:[
        {
          path: 'cadastro',
          element: <Registrar/>
        },
        

        {
          path: 'produtos',
          element: <Produtos/>
        }
      ]
    },
])