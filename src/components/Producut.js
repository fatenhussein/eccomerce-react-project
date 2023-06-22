import {
  Card,
  Image,
  Text,
  Group,
  createStyles,
  Button,
  rem,
} from "@mantine/core";
import { SimpleGrid, Container } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";

import "../../src/App.css";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },
  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

export function FeaturesCard({ product }) {
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [users, setUsers] = useState("");
  const [cart, setCart] = useState([]);

  const apiUrl = "http://localhost:3500/users";

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(apiUrl);
  //       users = response.data;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  const { classes } = useStyles();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving product data:", error);
      });
  }, []);

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  const addOneToCart = (product) => {
    console.log(currentUser);
    console.log(product);
    // if (product) {
    //   const updatedCart = [...currentUser.cart, product];
    //   setCurrentUser({ ...currentUser, cart: updatedCart });

    //   console.log("Product added to cart:", currentUser.cart);
    // } else {
    //   console.log("Product not found.");
    // }
  };

  return (
    <Card withBorder radius="md" className="product">
      <Card.Section className={classes.imageSection}>
        <Image src={product.image} alt={product.title} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{product.title}</Text>
          <Text fz="xs" c="dimmed">
            {product.description}
          </Text>
        </div>
      </Group>

      <Group spacing={30} mt={20}>
        <div>
          <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
            ${product.price}
          </Text>
        </div>
        <Button
          radius="xl"
          style={{ flex: 1 }}
          onClick={() => addOneToCart(product)}
        >
          Add to Cart
        </Button>
      </Group>
    </Card>
  );
}

export default function Subgrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving product data:", error);
      });
  }, []);

  return (
    <Container my="md">
      <h1>Shop here </h1>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "xs", cols: 1 },
          { maxWidth: "sm", cols: 2 },
        ]}
      >
        {products.map((product) => (
          <FeaturesCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

//khsdhkgusdkugggit
