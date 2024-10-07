import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/Pages/Home";
import StandartLayout from "./assets/Layouts/StandartLayout";
import Cities from "./assets/Pages/Cities";

const routers = createBrowserRouter([
  {element: <StandartLayout></StandartLayout>,
    children: [
      {path: "/", element:<Home></Home>},
      {path: "/cites", element:<Cities></Cities>}
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
