import { TempContainer, Home, Signin, Signup, User } from "./components/index";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <TempContainer>
          <Home />
        </TempContainer>
      ),
    },
    {
      path: "/signin",
      element: (
        <TempContainer>
          <Signin />
        </TempContainer>
      ),
    },
    {
      path: "/signup",
      element: (
        <TempContainer>
          <Signup />
        </TempContainer>
      ),
    },
    {
      path: "/user",
      element: (
        <TempContainer>
          <User />
        </TempContainer>
      ),
    },
  ]);
  return (
    <>
      <div className="flex justify-center">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
