import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";

import axios from "axios";

import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";

import "../../src/App.css";
import { useEffect } from "react";
import { Navigate, json, useNavigate } from "react-router-dom";

export default function AuthenticationForm() {
  const navigate = useNavigate();

  let users;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3500/users");
        users = response.data;
        localStorage.setItem("users", JSON.stringify(users));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);




  
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder className="login">
      <Text size="lg" weight={500}>
        Welcome to Mantine, {type} with
      </Text>
      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form
        onSubmit={form.onSubmit((e) => {
          const users = JSON.parse(localStorage.getItem("users"));

          let foundUser = false;

          users.forEach((user) => {
            if (
              user.email === form.values.email &&
              user.password === form.values.password
            ) {
              foundUser = true;
              navigate("/");
            }
          });

          if (!foundUser) {
          
            console.log("Invalid credentials");
          }
        
        })}
      >
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />
          {type === "register" && (
            <TextInput
              label="Shipping address"
              placeholder="15329 Huston 21st"
            />
          )}

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
