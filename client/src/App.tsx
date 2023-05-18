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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/addcol" element={<AddCollection />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
