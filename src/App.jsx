import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayOut from "./components/AppLayOut/AppLayOut";




const appRoute=createBrowserRouter([
  {
    path:'/',
    element:<AppLayOut/>
  }
])
function App() {
  return (
    <div className="bg-black">
      <RouterProvider router={appRoute}/>
    </div>
  );
}

export default App;
