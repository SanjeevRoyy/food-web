import {
  Paper,
  Title,
  TextInput,
  Grid,
  Card,
  Image,
  Text,
  Button,
  Badge,
  Group,
  Box,
  Drawer,
  Divider,
  ScrollArea,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const dummyFood = [
  {
    id: 1,
    name: "Spicy Chicken Burger",
    description: "Grilled chicken with spicy sauce",
    price: 5.99,
    image: "img/food2.jpg",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Cheese Fries",
    description: "Crispy fries with melted cheese",
    price: 3.49,
    image: "img/food1.jpg",
    tag: "New",
  },
  {
    id: 3,
    name: "Cold Coffee",
    description: "Iced coffee with a creamy touch",
    price: 2.99,
    image: "img/food3.jpg",
    tag: "Best Seller",
  },
  {
    id: 4,
    name: "Margherita Pizza",
    description: "Classic cheese and tomato pizza",
    price: 8.49,
    image: "img/food2.jpg",
    tag: "Vegetarian",
  },
  {
    id: 5,
    name: "Grilled Paneer Wrap",
    description: "Spiced paneer with veggies in a tortilla",
    price: 6.99,
    image: "img/food6.jpg",
    tag: "Veg",
  },
  {
    id: 6,
    name: "Chocolate Shake",
    description: "Rich chocolate milkshake with whipped cream",
    price: 4.5,
    image: "img/food5.jpg",
    tag: "Popular",
  },
  {
    id: 7,
    name: "Veggie Delight Sandwich",
    description: "Multi-grain bread packed with veggies",
    price: 5.25,
    image: "img/food3.jpg",
    tag: "Healthy",
  },
  {
    id: 8,
    name: "Tandoori Chicken Wings",
    description: "Spicy grilled chicken wings with herbs",
    price: 7.75,
    image: "img/food3.jpg",
    tag: "Spicy",
  },
  {
    id: 9,
    name: "Classic Caesar Salad",
    description: "Lettuce, parmesan, croutons & Caesar dressing",
    price: 5.99,
    image: "img/food1.jpg",
    tag: "Healthy",
  },
  {
    id: 10,
    name: "Mango Smoothie",
    description: "Chilled mango drink with yogurt",
    price: 3.75,
    image: "img/food2.jpg",
    tag: "Summer Special",
  },
];

const Order = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  const addToCart = (item: any) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      let updatedCart;
      if (existing) {
        updatedCart = prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        updatedCart = [...prev, { ...item, qty: 1 }];
      }

      // Show Toast notification
      toast.success(`${item.name} added to cart successfully!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: <FaCheckCircle />,
      });

      return updatedCart;
    });
  };

  return (
    <Box
      pos="relative"
      bg={theme.colors.dark[7]}
      p="lg"
      style={{ minHeight: "100vh" }}
    >
      {/* Floating Cart Icon */}
      {!opened && (
        <ActionIcon
          variant="filled"
          color="yellow"
          size="xl"
          radius="xl"
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 1000,
            boxShadow: theme.shadows.md,
          }}
          onClick={open}
        >
          <Box pos="relative">
            <CiShoppingCart size={28} />
            {cart.length > 0 && (
              <Badge
                color="red"
                size="sm"
                style={{
                  position: "absolute",
                  top: -8,
                  right: -8,
                  padding: "2px 6px",
                  borderRadius: 12,
                }}
              >
                {cart.reduce((sum, item) => sum + item.qty, 0)}
              </Badge>
            )}
          </Box>
        </ActionIcon>
      )}

      {/* Cart Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Your Cart"
        padding="md"
        position="right"
        size="md"
        overlayProps={{ backgroundOpacity: 0.55, blur: 4 }}
        styles={{
          body: { backgroundColor: theme.colors.dark[6], color: theme.white },
        }}
      >
        {cart.length === 0 ? (
          <Text c="dimmed" ta="center" mt="xl">
            Your cart is empty.
          </Text>
        ) : (
          <>
            <ScrollArea h={400}>
              {cart.map((item) => (
                <Box key={item.id} mb="md">
                  <Group justify="space-between">
                    <Text fw={500}>{item.name}</Text>
                    <Text c="dimmed" size="sm">
                      x{item.qty} = ${(item.qty * item.price).toFixed(2)}
                    </Text>
                  </Group>
                  <Text c="gray" size="sm">
                    {item.description}
                  </Text>
                  <Divider my="sm" />
                </Box>
              ))}
            </ScrollArea>

            <Box mt="lg">
              <Group justify="space-between">
                <Text fw={600}>Total:</Text>
                <Text fw={700} size="lg">
                  $
                  {cart
                    .reduce((sum, item) => sum + item.qty * item.price, 0)
                    .toFixed(2)}
                </Text>
              </Group>

              <Button fullWidth mt="md" color="yellow" radius="md">
                Proceed to Checkout
              </Button>
            </Box>
          </>
        )}
      </Drawer>

      {/* Food Section */}
      <Paper p="xl" radius="md" shadow="md" bg={theme.colors.dark[6]}>
        <Title order={2} mb="lg" c="white">
          Order Delicious Food 🍔
        </Title>

        <TextInput
          placeholder="Search food..."
          size="md"
          mb="xl"
          radius="md"
          variant="filled"
          styles={{
            input: {
              backgroundColor: theme.colors.dark[5],
              color: theme.white,
              borderColor: theme.colors.dark[4],
            },
          }}
        />

        <Grid gutter="xl">
          {dummyFood.map((item) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={item.id}>
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                bg={theme.colors.dark[5]}
              >
                <Card.Section>
                  <Image src={item.image} height={160} alt={item.name} />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500} c="white">
                    {item.name}
                  </Text>
                  <Badge color="yellow">{item.tag}</Badge>
                </Group>

                <Text size="sm" c="gray">
                  {item.description}
                </Text>

                <Text mt="xs" fw={600} c="white">
                  ${item.price.toFixed(2)}
                </Text>

                <Button
                  fullWidth
                  mt="md"
                  onClick={() => addToCart(item)}
                  color="yellow"
                >
                  Add to Cart
                </Button>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Paper>

    </Box>
  );
};

export default Order;
