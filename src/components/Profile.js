import { Avatar, Text, Button, Paper } from '@mantine/core';

export default function UserInfoAction() {
  return (
    <Paper
      className='profile'
      radius='md'
      withBorder
      p='lg'
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.white,
      })}
    >
      <Avatar
        src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
        size={120}
        radius={120}
        mx='auto'
      />
      <Text ta='center' fz='lg' weight={500} mt='md'>
        Jane Fingerlicker
      </Text>
      <Text ta='center' c='dimmed' fz='sm'>
        jfingerlicker@me.io
      </Text>
      <Text ta='center' c='dimmed' fz='sm'>
        Address
      </Text>

      <Button variant='default' fullWidth mt='md'>
        Edite
      </Button>
    </Paper>
  );
}
