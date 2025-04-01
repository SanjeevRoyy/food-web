import { Container, Group, Button } from "@mantine/core";

const Navbar = () => {
  return (
    <Container
      px={180}
      fluid
      py="md"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Group>
        <h1 style={{ color: "white", fontWeight: 700 }}>GM's Place</h1>
      </Group>
      <Group gap={40} justify="space-between">
        <a href="#home" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a href="#food" style={{ color: "white", textDecoration: "none" }}>
          Our Food
        </a>
        <a href="#locations" style={{ color: "white", textDecoration: "none" }}>
          Where We’ll Be
        </a>
        <Button color="yellow">Contact</Button>
      </Group>
    </Container>
  );
};
export default Navbar;
