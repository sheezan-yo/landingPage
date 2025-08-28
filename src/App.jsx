import { Container, Home, Signin, Signup, User } from "./components/index";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <Container>
          <Home />
        </Container>
      ),
    },
    {
      path: "/signin",
      element: (
        <Container>
          <Signin />
        </Container>
      ),
    },
    {
      path: "/signup",
      element: (
        <Container>
          <Signup />
        </Container>
      ),
    },
    {
      path: "/user",
      element: (
        <Container>
          <User />
        </Container>
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
