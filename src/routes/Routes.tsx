import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Food from "../pages/Food";
import Location from "../pages/Location";
import Contact from "../pages/Contact";
import Layout from "../layout/Layout";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="food" element={<Food />} />
        <Route path="location" element={<Location />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default Routing;
