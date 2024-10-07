import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/Pages/Home";
import StandartLayout from "./assets/Layouts/StandartLayout";


const routers = createBrowserRouter([
  {element: <StandartLayout></StandartLayout>,
    children: [
      {path: "/", element:<Home></Home>}
    ]
  },
 
]) 



function App() {
 
  return (
<>
   <RouterProvider router={routers} > </RouterProvider>
</>
  );
}

export default App;
