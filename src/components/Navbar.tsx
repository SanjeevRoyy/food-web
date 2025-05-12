import {
  Container,
  Group,
  Button,
  Box,
  Modal,
  TextInput,
  Textarea,
  Stack,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openedMenu, setOpenedMenu] = useState(false); // Mobile menu toggle
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [modalOpened, { open, close }] = useDisclosure(false); // Modal toggle

  return (
    <>
      {/* Contact Modal */}
      <Modal
        opened={modalOpened}
        onClose={close}
        withCloseButton={false}
        centered
        size="sm"
        padding={20}
        radius="md"
        overlayProps={{
          backgroundOpacity: 0.4,
          blur: 6,
        }}
        styles={{
          content: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // fully transparent dark
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.1)", // optional subtle border
            borderRadius: "12px",
            overflow: "hidden", // hide any overflow that might cause white edges
          },
          body: {
            backgroundColor: "transparent", // make body transparent since content handles it
            color: "#fff",
            textAlign: "center",
          },
        }}
      >
        <div>
          <button
            onClick={close}
            style={{
              background:"none",
              border: "none",
              color: "white",
              position: "absolute",
              right: 15,
              top: 10,
              fontSize: 30,
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <h2 style={{ marginBottom: "0.5rem", marginTop: "20px" }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: "1.2rem", margin: 0 }}>9829310011</p>
          <a
            href="https://facebook.com/sanjeev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginBottom: "1rem",
              color: "#00FFAA",
              textDecoration: "underline",
            }}
          >
            facebook.com/sanjeev
          </a>
          <p style={{ fontSize: "0.9rem", marginBottom: "1.5rem" }}>
            Thank you for your interest! Please fill out the form below if you
            would like to work together.
          </p>

          <form>
            <Stack>
              <TextInput
                placeholder="Enter your name"
                styles={{
                  input: {
                    backgroundColor: "#111",
                    border: "1px solid #555",
                    color: "#fff",
                  },
                  // placeholder: { color: "#aaa" },
                }}
                required
              />
              <TextInput
                placeholder="Enter your email address"
                type="email"
                styles={{
                  input: {
                    backgroundColor: "#111",
                    border: "1px solid #555",
                    color: "#fff",
                  },
                  // placeholder: { color: "#aaa" },
                }}
                required
              />
              <Textarea
                placeholder="Enter your contact number..."
                minRows={4}
                styles={{
                  input: {
                    backgroundColor: "#111",
                    border: "1px solid #555",
                    color: "#fff",
                  },
                  // placeholder: { color: "#aaa" },
                }}
                required
              />
              <Button
                type="submit"
                fullWidth
                style={{
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  marginTop: "1rem",
                }}
              >
                Send
              </Button>
            </Stack>
          </form>
        </div>
      </Modal>

      {/* Navbar */}
      <Container
        fluid
        py="md"
        px={isMobile ? 10 : 180}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          background:"black"
        }}
      >
        <Group>
          <h1 style={{ color: "white", fontWeight: 700 }}>GM's Place</h1>
        </Group>

        {/* Hamburger Icon */}
        {isMobile && (
          <Box
            onClick={() => setOpenedMenu(!openedMenu)}
            style={{ cursor: "pointer" }}
          >
            {openedMenu ? (
              <IoMdClose size={30} color="white" />
            ) : (
              <IoMenu size={30} color="white" />
            )}
          </Box>
        )}

        {/* Desktop Links */}
        {!isMobile && (
          <Group gap={40} justify="space-between">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/food" style={{ color: "white", textDecoration: "none" }}>
              Our Food
            </Link>
            <Link
              to="/location"
              style={{ color: "white", textDecoration: "none" }}
            >
              Order
            </Link>
            <Button color="yellow" onClick={open}>
              Contact
            </Button>
          </Group>
        )}

        {/* Mobile Menu */}
        {isMobile && openedMenu && (
          <Box
            style={{
              position: "absolute",
              top: "60px",
              right: 0,
              width: "100%",
              padding: "1rem",
              zIndex: 10,
              textAlign: "center",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
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
              href="#location"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "1rem",
                display: "block",
              }}
            >
              Order
            </a>
            <Button
              w={160}
              color="yellow"
              style={{ width: "100%" }}
              onClick={open}
            >
              Contact
            </Button>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Navbar;
