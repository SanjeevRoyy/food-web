import {
  Button,
  Container,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { useState } from "react";
import { toast } from "react-toastify";

const Checkout = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);

  const handleSubmit = () => {
    if (!name || !phone || !date || !time) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Order placed successfully!");
    // Optionally: send this data somewhere
  };

  return (
    <Container size="xs" py="xl">
      <Paper shadow="md" p="xl" radius="md" withBorder>
        <Title order={2} mb="md" ta="center">
          Checkout
        </Title>

        <Text c="dimmed" size="sm" mb="lg" ta="center">
          Please provide your details and preferred delivery time.
        </Text>

        <TextInput
          label="Full Name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          required
          mb="md"
        />

        <TextInput
          label="Phone Number"
          placeholder="e.g. +123456789"
          value={phone}
          onChange={(e) => setPhone(e.currentTarget.value)}
          required
          mb="md"
        />

        <DatePickerInput
          label="Select Date"
          value={date}
          // @ts-ignore
          onChange={(value: Date | null) => setDate(value)}
          placeholder="Pick a date"
          required
          mb="md"
        />

        <TimeInput
          label="Select Time"
          // @ts-ignore
          value={time}
          // @ts-ignore
          onChange={(value: Date | null) => setTime(value)}
          required
          mb="lg"
        />

        <Group justify="center">
          <Button
            radius="xl"
            size="md"
            color="orange"
            onClick={handleSubmit}
            fullWidth
          >
            Place Order
          </Button>
        </Group>
      </Paper>
    </Container>
  );
};

export default Checkout;
