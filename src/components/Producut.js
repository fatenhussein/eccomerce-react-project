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

// export function FeaturesCard({ product }) {
//   const { classes } = useStyles();
// }

export default function Subgrid({ users, setUsers }) {
  let y = localStorage.getItem("cart");

  const [cart, setCart] = useState([]);
  const { classes } = useStyles();
  const [currentUser, setCurrentUser] = useState("");
  const [products, setProducts] = useState([]);
  let x;
  useEffect(() => {
    let c = JSON.parse(localStorage.getItem("currentUser"));
    if (c) {
      setCurrentUser(c);
    }

    x = currentUser.cart;
  }, [currentUser]);

  useEffect(() => {
    axios
      .put(`http://localhost:3500/users/${currentUser.id}`, {
        ...currentUser,
        cart: cart,
      })
      .then((response) => {
        setUsers([...users, response.data]);
        console.log(response.data);
        setCurrentUser(response.data);
        localStorage.setItem("currentUser", JSON.stringify(response.data));
      })
      .catch((error) => console.error(error));
  }, [cart]);

  const addOneToCart = (product) => {
    // setCart([...cart , currentUser.cart]);

    setCart((cart) => [...cart, product]);
    localStorage.setItem("cart", JSON.stringify(x));

    setCurrentUser({...currentUser, cart: cart })
    // localStorage.setItem("currentUser", JSON.stringify(currentUser))
  };

  useEffect(() => {
    axios
      .get("http://localhost:3501/products")
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
        ))}
      </SimpleGrid>
    </Container>
  );
}
