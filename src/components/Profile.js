import { Avatar, Text, Button, Paper } from '@mantine/core';

export default function UserInfoAction() {
  // person["lastName"]
  const myUser = JSON.parse(localStorage.getItem('currentUser'))
  console.log(myUser);
const name=myUser.name;
const email=myUser.email;
const address = myUser.address
  return (
    <Paper
    style={{marginTop:"3rem"}}
      className="profile"
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" weight={500} mt="md">
        {name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
       {email}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
    {address}
      </Text>

      {/* <Button variant="default" fullWidth mt="md">
        Edite
      </Button> */}
    </Paper>
  )
}
