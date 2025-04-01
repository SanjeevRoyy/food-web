import { Box } from "@mantine/core";
import Navbar from "../components/Navbar";
import FoodGrid from "../components/FoodGrid";
import BottomBar from "../components/ButtomBar";

const Home = () => {
  return (
    <Box style={{ backgroundColor: "black", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        style={{
          position: "relative",
          height: "60vh",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            backgroundImage: "url(img/bg2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            filter: "brightness(40%)",
          }}
        />
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Navbar />
        </Box>
      </Box>
      <FoodGrid />
      <BottomBar />
    </Box>
  );
};

export default Home;
