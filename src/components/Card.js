import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
} from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';

const data = {
  data: [
    {
      avatar:
        'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
      name: 'Robert Wolfkisser',
      job: 'Engineer',
      email: 'rob_wolf@gmail.com',
      phone: '+44 (452) 886 09 12',
    },
  ],
};

export default function UsersTable() {
  const rows = data.data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing='sm'>
          <Avatar size={30} src={item.avatar} radius={30} />
          <Text fz='sm' fw={500}>
            {item.name}
          </Text>
        </Group>
      </td>

      <td>
        <Anchor component='button' size='sm'>
          {item.email}
        </Anchor>
      </td>
      <td>
        <Text fz='sm' c='dimmed'>
          {item.phone}
        </Text>
      </td>
      <td>
        <Group spacing={0} position='right'>
          <ActionIcon>
            <IconPencil size='1rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon color='red'>
            <IconTrash size='1rem' stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea className='card'>
      <Table sx={{ minWidth: 800 }} verticalSpacing='sm'>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Job title</th>
            <th>Email</th>
            <th>Phone</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
