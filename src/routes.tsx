import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./components/MainLayout";
import About from "./pages/about/About";
import ContactUs from "./pages/contact_us/ContactUs";
import Properties from "./pages/properties/Properties";
import ServicesPage from "./pages/services/ServicesPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/properties/:id",
        element: <Properties />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
    ],
  },
]);

export default routes;
