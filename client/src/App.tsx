import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";
import Layout from "./layouts/Layout";
// import BaseLayout from "./layouts/baseLayout";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import EditProfile from "./pages/EditProfile";
import AddCollection from "./pages/AddCollection";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/collection" element={<Layout><Collection /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/editprofile" element={<Layout><EditProfile /></Layout>} />
        <Route path="/addcol" element={<Layout><AddCollection /></Layout>} />
        <Route path="*" element={<Layout><Nopage /></Layout>} />
      </Routes>
    </Router>
  );
}
