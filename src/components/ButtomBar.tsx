import { Box, Button, Flex, Group, Text } from "@mantine/core";

function BottomBar() {
  return (
    <Box
      style={(theme) => ({
        backgroundColor: theme.colors.dark[7],
        padding: theme.spacing.md,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
      })}
    >
      <Box>
        <Text
          style={(theme) => ({
            fontSize: theme.fontSizes.lg,
            fontWeight: 700,
            color: theme.colors.yellow[5],
          })}
        >
          MAC'S PLACE
        </Text>
        <Text
          style={(theme) => ({
            fontSize: theme.fontSizes.sm,
            color: theme.colors.yellow[5],
          })}
        >
          FOOD TRUCK
        </Text>
      </Box>

      <Flex
        gap="xs"
        direction={{ base: "column", sm: "row" }} // Makes buttons stack on smaller screens
        justify="center"
      >
        <Button variant="transparent" color="gray">
          HOME
        </Button>
        <Button variant="transparent" color="gray">
          MENU
        </Button>
        <Button color="yellow">CONTACT</Button>
      </Flex>
    </Box>
  );
}

export default BottomBar;
