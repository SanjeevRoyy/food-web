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
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
      toast.success("Added to cart");
      return updatedCart;
    });
  };
  const subtotal = () =>
    cart.reduce((sum, item) => sum + item.qty * item.price, 0);

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
    size="xl"
    radius="xl"
    style={{
      position: "fixed",
      bottom: 20,
      right: 5,
      zIndex: 1000,
      backgroundColor: "#FBC343", // 👈 white background
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // 👈 shadow for visibility
      border: "1px solid #eee",
    }}
    onClick={open}
  >
    <Box pos="relative">
      <CiShoppingCart size={28} color="#000" /> {/* 👈 black icon for contrast */}
      {cart.length > 0 && (
        <Badge
          color="red"
          size="sm"
          style={{
            position: "absolute",
            top: -10,
            right: -10,
            padding: "2px 8px",
            borderRadius: "50%",
            fontWeight: "bold",
            fontSize: 12,
            lineHeight: 1,
          }}
        >
          {cart.reduce((sum, item) => sum + item.qty, 0)}
        </Badge>
      )}
    </Box>
  </ActionIcon>
)}

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="sm"
        withCloseButton={false}
        styles={{
          body: {
            padding: 0,
            background: "#fff",
            color: "#000",
          },
        }}
      >
        <Box p="md">
          <Title order={3} ta="center" mb="md">
            Cart
          </Title>

          <ScrollArea h={300} offsetScrollbars>
            {cart.map((item) => (
              <Box
                key={item.id}
                mb="sm"
                p="sm"
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 12,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  backgroundColor: "#fefefe",
                }}
              >
                <Image src={item.image} width={60} height={60} radius="md" />
                <Box ml="sm" style={{ flex: 1 }}>
                  <Text fw={600} size="sm">
                    {item.name}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {item.description}
                  </Text>
                  <Text size="sm" fw={700} mt={4} c="red">
                    ${item.price.toFixed(2)}
                  </Text>
                </Box>

                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <ActionIcon
                    variant="filled"
                    size="sm"
                    color="orange"
                    onClick={() =>
                      setCart((prev) =>
                        prev.map((i) =>
                          i.id === item.id && i.qty < 99
                            ? { ...i, qty: i.qty + 1 }
                            : i
                        )
                      )
                    }
                  >
                    +
                  </ActionIcon>
                  <Text fw={600} size="sm">
                    {item.qty.toString().padStart(2, "0")}
                  </Text>
                  <ActionIcon
                    variant="default"
                    size="sm"
                    color="gray"
                    onClick={() =>
                      setCart((prev) =>
                        prev.map((i) =>
                          i.id === item.id && i.qty > 1
                            ? { ...i, qty: i.qty - 1 }
                            : i
                        )
                      )
                    }
                  >
                    −
                  </ActionIcon>
                </Box>
              </Box>
            ))}
          </ScrollArea>

          <Group mt="md" grow>
            <TextInput
              placeholder="Promo Code"
              radius="md"
              style={{ flex: 1 }}
            />
            <Button radius="xl" color="orange">
              Apply
            </Button>
          </Group>

          <Box mt="md" px="xs">
            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Subtotal
              </Text>
              <Text fw={600}>${subtotal().toFixed(2)}</Text>
            </Group>
            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Tax and Fees
              </Text>
              <Text fw={600}>$5.30</Text>
            </Group>
            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Delivery
              </Text>
              <Text fw={600}>$1.00</Text>
            </Group>
            <Divider my="sm" />
            <Group justify="space-between">
              <Text fw={700}>Total</Text>
              <Text fw={700} size="lg" c="orange">
                ${(subtotal() + 5.3 + 1).toFixed(2)}
              </Text>
            </Group>
          </Box>

          <Button
            fullWidth
            radius="xl"
            mt="lg"
            size="md"
            color="orange"
            style={{ fontWeight: 700 }}
            onClick={() => navigate("/checkout")}
          >
            CHECKOUT
          </Button>
        </Box>
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
                  variant="outline"
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