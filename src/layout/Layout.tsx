import { Box } from "@mantine/core";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import BottomBar from "../components/ButtomBar";

const Layout = () => {

  return (
    <Box >
      {/* Pass a prop to Navbar to control its background */}
      <Navbar  />
      <Outlet />
      <BottomBar />
    </Box>
  );
};

export default Layout;
