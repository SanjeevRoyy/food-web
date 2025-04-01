import { Grid, Image, Container, Text, Title, Flex, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const foodItems = [
  { src: "/img/food4.jpg", alt: "Food 1", span: 6 },
  { src: "/img/food6.jpg", alt: "Food 2", span: 6 },
  { src: "/img/food2.jpg", alt: "Food 3", span: 4 },
  { src: "/img/food5.jpg", alt: "Food 4", span: 4 },
  { src: "/img/food.jpg", alt: "Food 5", span: 4 },
];

const FoodGrid = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <>
      <Container pos="relative" bottom={80} my="xl">
        <Grid
          gutter={0}
          style={{
            border: "2px solid rgb(133, 130, 130)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {foodItems.map((item, index) => (
            <Grid.Col
              p={0}
              style={{
                border: "1px solid rgb(133, 130, 130)",
                borderRight:
                  index % 2 === 0 ? "none" : "2px solid rgb(133, 130, 130)",
                borderBottom: "2px solid rgb(133, 130, 130)",
                overflow: "hidden",
                position: "relative",
              }}
              span={{ base: 12, sm: item.span }}
              key={index}
            >
              <div
                style={{
                  height: "300px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    zIndex: 1,
                  }}
                />

                <Image
                  src={item.src}
                  alt={item.alt}
                  fit="cover"
                  height="100%"
                  width="100%"
                  style={{
                    filter: "brightness(65%)",
                    transition:
                      "filter 0.3s ease-in-out, transform 0.3s ease-in-out",
                    zIndex: 0,
                  }}
                />
              </div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      <Flex
        mb={70}
        px={isMobile ? 10 : 190}
        justify="space-between"
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? 10 : 40}
      >
        <Flex
          style={{ borderRadius: "8px" }}
          direction="column"
          justify="center"
          bg="white"
          p={20}
        >
          <Text>STOP ON BY</Text>
          <Title size="h2" c={"#F5A13B"}>
            MAC'S PLACE
          </Title>
          <Text mt={20} lh="20px">
            Mac's Place is the result of lifelong itch that had to finally be
            itched , at the insistence and staunch encouragement of my beautiful
            wife Gina Marie.
          </Text>
          <Text mt={20} lh="20px">
            Enjoy classic american fare with modern infusions. From breakfast to
            just about whatever you're in the mood for, MAC has you covered.
          </Text>
        </Flex>
        <Box p={isMobile ? 2 : 10} bg="white" style={{ borderRadius: "8px" }}>
          <Image src={"/img/food.jpg"} alt="Food" width={280} height={280} />
        </Box>
      </Flex>
    </>
  );
};

export default FoodGrid;
