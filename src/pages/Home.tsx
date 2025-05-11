import { Box, Title } from "@mantine/core";
import FoodGrid from "../components/FoodGrid";

const Home = () => {
  const isRoot = location.pathname === "/";

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
          <Title fw={600} mt={100} size="40px" ta="center" c="white">
            HEY, YOU GOTTA EAT HERE!
          </Title>
        </Box>
      </Box>
      {/* Only show FoodGrid if it's the root/home page */}
      {isRoot && <FoodGrid />}
            
    </Box>
  );
};

export default Home;
