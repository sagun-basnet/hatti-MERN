// import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import HomeLayout from "./Layouts/HomeLayout";
import APIPage from "./pages/APIPage";
import SinglePage from "./pages/SinglePage";
import AddProduct from "./components/AddProduct";

const App = () => {
  // const AdminLayout = () => {
  //   return (
  //     <>
  //       <TopBar />
  //       <div className="flex">
  //         <SideBar />
  //         <Outlet />
  //       </div>
  //     </>
  //   );
  // };

  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/add-product",
      element: <AddProduct />,
    },
    {
      path: "/api",
      element: <APIPage />,
    },
    {
      path: "/products/:id",
      element: <SinglePage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    // {
    //   path: "/dashboard",
    //   element: <AdminLayout/>,
    //   children: [
    //     {
    //       path: "",
    //       element: <Dasboard/>
    //     },
    //     {
    //       path: "/dashboard/user-management",
    //       element: <UserManagement/>
    //     },
    //     {
    //       path: "/dashboard/content-management",
    //       element: <ContentManagement/>
    //     },
    //   ]
    // }
  ]);

  return (
    <>
      <RouterProvider router={route} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> */}
    </>
  );
};

export default App;
