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
import axios from "axios";
// const data = {
//   data: [
//     {
//       image: "https://i.imgur.com/ZL52Q2D.png",
//       item: "Car",
//       price: "$168.00",
//       quantity: "1",
//     },
//   ],
// };
let updateUser;
let arr = [];


export default function Cards({users , setUsers}) {
  const [currentUser, setCurrentUser] = useState("");




  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  const apiUrl = "http://localhost:3500/users";
console.log(currentUser.cart);


  // useEffect(() => {
  //   if (currentUser) {
  //    updateUser = users.find((user) => user.id === currentUser.id);
  //    console.log(updateUser.cart)
  //     localStorage.setItem("currentUser", JSON.stringify(updateUser));
    
  //   }
  // }, []);

 
  // console.log(updateUser);

  return (
    <ScrollArea className="card">
      <h1>😢</h1>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>

            <th />
          </tr>
        </thead>
        { currentUser.cart ? currentUser.cart.map((item) => (
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
     
      </Text>
    </td>
    <td>
      <Group spacing={0} position="right">
        <ActionIcon>
          <IconPencil size="1rem" stroke={1.5} />
        </ActionIcon>
        <ActionIcon color="red">
          <IconTrash size="1rem" stroke={1.5} />
        </ActionIcon>
      </Group>
    </td>
  </tr>

))
:<h1></h1>

}
      </Table>
    </ScrollArea>
  );
}
