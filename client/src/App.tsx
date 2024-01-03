import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddEmployee } from "./pages/add-employee";
import { Employees } from "./pages/employees";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Employee } from "./pages/employee";
import { Status } from "./pages/status";
import { EditEmployee } from "./pages/edit-employee";
import { Auth } from "./features/auth/auth";
import { Paths } from "./paths";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Employees />,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
  {
    path: Paths.employeeAdd,
    element: <AddEmployee />,
  },
  {
    path: `${Paths.employee}/:id`,
    element: <Employee />,
  },
  {
    path: `${Paths.employeeEdit}/:id`,
    element: <EditEmployee />,
  },
  {
    path: `${Paths.status}/:status`,
    element: <Status />,
  },
]);

export const App = () => {
  return (
    <Auth>
      <RouterProvider router={router} />
    </Auth>
  );
};
