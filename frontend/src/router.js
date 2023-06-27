import { createBrowserRouter } from "react-router-dom"
import Registrar from "./pages/Registrar"
import Home from "./pages/Home"
import Produtos from "./pages/Produtos"
import Principal from "./pages/Principal"
export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      children:[
        {
          path: 'Home',
          element: <Principal/>
        },
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