import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";
import Intro from "./pages/Intro";
import ToDream from "./pages/ToDream";
import Features from "./pages/Features";
import ContactUs from "./pages/ContactUs";

const Home = () => {
  return (
    <>
      <Intro />
      <ToDream />
      <Features />
      <ContactUs />
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        {/*<Route
          path="/"
          element={
            <ProtectedRoute allowedRoles={["user", "admin"]}>
              <Home />
            </ProtectedRoute>
          }
        />*/}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
