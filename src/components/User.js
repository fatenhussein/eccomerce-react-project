import { Menu, Group, Text, Avatar, ActionIcon } from "@mantine/core";
import { IconLogout, IconChevronRight } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function UserMenu({ setIsShowIcon }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  return (
    <Group position="center">
      <Menu
        withArrow
        width={300}
        position="bottom"
        transitionProps={{ transition: "pop" }}
        withinPortal
      >
        <Menu.Target>
          <ActionIcon>
            <IconSettings size="1.5rem" stroke={2} color="#333" />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            rightSection={<IconChevronRight size="1.2rem" stroke={1.5} />}
          >
            <Group>
              <Avatar
                radius="xl"
                src="https://media.licdn.com/dms/image/D4E03AQFywHStX074DQ/profile-displayphoto-shrink_400_400/0/1676303770403?e=1692835200&v=beta&t=qeTgniS2wt2iWGKlh8HY-qZYOa87BDrIguF4pr3pYVw"
              />

              {currentUser && (
                <div>
                  <Text weight={500}>{currentUser.name}</Text>
                  <Text size="xs" color="dimmed">
                    {currentUser.email}
                  </Text>
                </div>
              )}
            </Group>
          </Menu.Item>

          <Menu.Divider />

          {/* <Menu.Item
            icon={
              <IconHeart
                size='0.9rem'
                stroke={1.5}
                color={theme.colors.red[6]}
              />
            }
          >
            Liked posts
          </Menu.Item>
          <Menu.Item
            icon={
              <IconStar
                size='0.9rem'
                stroke={1.5}
                color={theme.colors.yellow[6]}
              />
            }
          >
            Saved posts
          </Menu.Item> */}
          {/* <Menu.Item
            icon={
              <IconMessage
                size='0.9rem'
                stroke={1.5}
                color={theme.colors.blue[6]}
              />
            }
          >
            Your comments
          </Menu.Item> */}
          <Menu.Label>Settings</Menu.Label>

          <Menu.Item
            icon={<IconLogout size="0.9rem" stroke={1.5} />}
            onClick={() => {
              localStorage.removeItem("currentUser");

              navigate("/login");
              setIsShowIcon(false);
            }}
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
