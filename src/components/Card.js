import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
} from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Quantity from "./Quantity";
import axios from "axios";

export default function Cards({ users, setUsers }) {
  const [currentUser, setCurrentUser] = useState("");



  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  let arr =[];
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

  };

  return (
    <ScrollArea className="card">
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
      </Table>
    </ScrollArea>
  );
}
