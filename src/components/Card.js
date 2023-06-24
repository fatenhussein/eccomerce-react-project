import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  Button,
  Portal,
  Paper,
  CloseButton,
} from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Quantity from "./Quantity";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cards({ users, setUsers }) {
  const [currentUser, setCurrentUser] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  let arr = [];
  useEffect(() => {
    axios
      .put(`http://localhost:3500/users/${currentUser.id}`, currentUser)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      })
      .catch((error) => console.error(error));
  }, [currentUser]);

  const deleteCart = (id) => {
    arr = currentUser.cart.filter((item) => item.id !== id);

    setCurrentUser({ ...currentUser, cart: arr });
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    setTimeout(function () {
      window.location.reload();
    }, 50);
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
    <ScrollArea className="card" style={{height:"100vh"}}>
      <h1>cart</h1>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>

            <th />
          </tr>
        </thead>
        {currentUser.cart ? (
          currentUser.cart.map((item) => (
            <tr key={item.id}>
              <td>
                <Group spacing="sm">
                  <Avatar size={100} src={item.image} radius={15} />
                  <Text fz="sm" fw={500}>
                    {item.id}
                  </Text>
                </Group>
              </td>

              <td>
                <Anchor component="button" size="sm">
                  {item.price}
                </Anchor>
              </td>
              <td>
                <Text fz="sm" c="dimmed">
                  {" "}
                  <Quantity />
                </Text>
              </td>
              <td>
                <Group spacing={0} position="right">
                  <ActionIcon color="red">
                    <IconTrash
                      size="1rem"
                      stroke={1.5}
                      onClick={() => deleteCart(item.id)}
                    />
                  </ActionIcon>
                </Group>
              </td>
            </tr>
          ))
        ) : (
          <h1></h1>
        )}

        <tr>

          <td>
          
          </td>
        </tr>
      </Table>
      
    </ScrollArea>
    <Link to="/checkout" >
    <div style={{marginTop:"0.5rem",marginLeft:"66rem",marginRight:"auto",textDecoration:"none"}}>
      <Button
        
        radius="md"
        size="md"
        style={{ backgroundColor: "#BC9470"}}
        variant="gradient"
        border="md"
        gradient={{ from: "#bc9470", to: "beige" }}
        onClick={togglePopup}
      >
        Checkout
      </Button>
      </div>
      </Link>
      </>
  );
}
