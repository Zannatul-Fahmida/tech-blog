import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddBlog from "../pages/Dashboard/AddBlog";
import BlogList from "../pages/Dashboard/BlogList";
import EditBlog from "../pages/Dashboard/EditBlog";
import BlogDetails from "../pages/Main/BlogDetails";
import Home from "../pages/Main/Home";
import ReadingHistory from "../pages/Main/ReadingHistory";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blogDetails/:blogId",
        element: <BlogDetails />,
      },
      {
        path: "history",
        element: <ReadingHistory />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <BlogList />,
      },
      {
        path: "editBlog/:blogId",
        element: <EditBlog />,
      },
      {
        path: "addBlog",
        element: <AddBlog />,
      },
    ],
  },
]);

export default routes;