import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-emerald-300">
        Hello world!
      </h1>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
