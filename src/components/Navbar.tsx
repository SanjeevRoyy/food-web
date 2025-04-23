import { Container, Group, Button, Box } from "@mantine/core";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useMediaQuery } from "@mantine/hooks";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [opened, setOpened] = useState(false); // State for toggling the menu
  const isMobile = useMediaQuery("(max-width: 640px)"); // Mobile screen check

  return (
    <Container
      fluid
      py="md"
      px={isMobile ? 10 : 180} // Adjust padding based on screen size
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "2rem", // Default padding for larger screens
        paddingRight: "2rem", // Default padding for larger screens
      }}
    >
      <Group>
        <h1 style={{ color: "white", fontWeight: 700 }}>GM's Place</h1>
      </Group>

      {/* Hamburger Icon for Mobile */}
      {isMobile && (
        <Box onClick={() => setOpened(!opened)} style={{ cursor: "pointer" }}>
          {opened ? (
            <IoMdClose size={30} color="white" />
          ) : (
            <IoMenu size={30} color="white" />
          )}
        </Box>
      )}

      {/* Navbar Links (Desktop) */}
      {!isMobile && (
        <Group gap={40} justify="space-between">
          <a href="#home" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a href="#food" style={{ color: "white", textDecoration: "none" }}>
            Our Food
          </a>
          <a
            href="#locations"
            style={{ color: "white", textDecoration: "none" }}
          >
            Where We’ll Be
          </a>
          <Button color="yellow">Contact</Button>
        </Group>
      )}

      {/* Mobile Menu (when opened) */}
      {isMobile && opened && (
        <Box
          style={{
            position: "absolute",
            top: "60px",
            right: 0,
            // backgroundColor: "black",
            width: "100%",
            padding: "1rem",
            zIndex: 10,
            textAlign: "center",
            backdropFilter: "blur(10px)", // Apply blur effect
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Optional: dark background with transparency
          }}
        >
          <a
            href="#home"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "1rem",
              display: "block",
            }}
          >
            Home
          </a>
          <a
            href="#food"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "1rem",
              display: "block",
            }}
          >
            Our Food
          </a>
          <a
            href="#locations"
            style={{
              color: "white",
              textDecoration: "none",
              padding: "1rem",
              display: "block",
            }}
          >
            Where We’ll Be
          </a>
          <Button w={160} color="yellow" style={{ width: "100%" }}>
            Contact
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Navbar;
