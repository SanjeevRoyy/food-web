import {
  Divider,
  Flex,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Food = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Flex
      direction="column"
      align="center"
      bg="#1f1f1f"
      px={isMobile ? 20 : 40}
      py={isMobile ? 20 : 40}
      mih="100vh"
    >
      <Title
        ta="center"
        lts={isMobile ? "1px" : "2px"}
        fz={isMobile ? "28px" : "40px"}
        fw={700}
        lh="28px"
        c="white"
        tt="uppercase"
      >
        Our food is made fresh
      </Title>

      <Text
        maw={600}
        mt={20}
        c="#ffb632"
        tt="uppercase"
        fz={isMobile ? "14px" : "16px"}
        fw={400}
        lts="1px"
        ta="center"
      >
        Many recipes are original creations but even our classic copies are
        awesome... great ingredients made with passion set us apart. Classic
        comfort food made to order.
      </Text>

      <Paper
        mt={40}
        p={isMobile ? 20 : 30}
        radius="lg"
        shadow="xl"
        withBorder
        bg="#ffffff"
        w="100%"
        maw={900}
      >
        <Title
          ta="center"
          order={2}
          c="#e63946"
          ff="Georgia, serif"
          fz={isMobile ? "24px" : "32px"}
        >
          GM's Place
        </Title>

        <Text ta="center" mt="sm" fw={500} fz="sm" c="#333">
          <i>
            This is not our menu. See current menu for what is available on a
            given day. These are some of the food items we have.
          </i>
        </Text>

        {/* Main Section */}
        <Divider
          my="xl"
          label="Main"
          labelPosition="center"
          color="#e63946"
          styles={{
            label: {
              color: "#e63946",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: isMobile ? 14 : 16,
            },
          }}
        />

        <Stack gap="sm">
          <MenuItem
            name="Mac Dog"
            desc="Nathan’s or Sabrett Mac’s zesty meat sauce, mustard, onions, on brioche roll"
          />
          <MenuItem
            name="The Chicken"
            desc="Tender, crispy fried chicken breast, pickles, lettuce, special sauce, on kaiser roll"
          />
          <MenuItem
            name="Mac Burger"
            desc="Burger, grilled onions, pickles, special sauce, on brioche bun add bacon"
          />
          <MenuItem
            name="Sausage n Peppers"
            desc="Sweet Italian sausage, grilled peppers n onions on Amoroso’s sub"
          />
          <MenuItem
            name="Cheesesteak"
            desc="Juicy, hand-cut ribeye, onions and cheese on Amoroso’s sub"
          />
          <MenuItem
            name="Italian Steak"
            desc="Mouth watering ribeye, peppers onions, sauce, provolone on Amoroso sub"
          />
          <MenuItem
            name="Meatball Sub"
            desc="Delicious meatballs in sauce, melted mozzarella on Amoroso sub"
          />
          <MenuItem
            name="Barbacoa Beef Taco"
            desc="Spicy shredded beef on a corn tortilla with your de res for dipping"
          />
          <MenuItem
            name="Carnita’s Taco"
            desc="Spicy shredded pork with a crisp on a corn tortilla with your fixin’s"
          />
        </Stack>

        {/* Sides Section */}
        <Divider
          my="xl"
          label="Sides"
          labelPosition="center"
          color="#ff6f00"
          styles={{
            label: {
              color: "#ff6f00",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: isMobile ? 14 : 16,
            },
          }}
        />

        <Stack gap="sm">
          <MenuItem
            name="Mac n’ Cheese"
            desc="Gooey melty smoked Gouda and Coopers American"
          />
          <MenuItem name="Wedges" desc="Thick crispy, seasoned potato wedges" />
          <MenuItem
            name="Fried Pickles"
            desc="Tangy dill spears dipped in semi-spicy batter and deep fried. W/ Our Ranch"
          />
          <MenuItem
            name="Mac Eggrolls"
            desc="Southern style with red bean pepper, egg and special spices"
          />
          <MenuItem
            name="Mid-city Reuben Rolls"
            desc="Juicy corn beef with swiss and kraut deep fried in egg roll"
          />
          <MenuItem
            name="Tomato Bisque"
            desc="Creamy and silky soup...dip your grilled cheese!"
          />
          <MenuItem
            name="Chili Verde"
            desc="Delicious green chili with pork, potato’s and great traditional spices"
          />
        </Stack>
      </Paper>
    </Flex>
  );
};

const MenuItem = ({ name, desc }: { name: string; desc: string }) => (
  <Text fz="sm">
    <Text span fw={700} c="#66413E">
      {name}
    </Text>{" "}
    -{" "}
    <Text span c="#67423F">
      {desc}
    </Text>
  </Text>
);

export default Food;
