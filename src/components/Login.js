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
import { useEffect, useState } from "react";
import { Navigate, json, useNavigate } from "react-router-dom";

export default function AuthenticationForm({
  setIsShowIcon,
  users,
  
  setUsers
}) {
  const navigate = useNavigate();
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [isExist, setIsisExist] = useState(false);

  const apiUrl = "http://localhost:3500/users";

  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
      address: "",
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
        onChange={() => {
          setIsShowAlert(false);
          setIsisExist(false);
        }}
        onSubmit={form.onSubmit((e) => {
          if (type === "login") {
            let foundUser = false;

            users.forEach((user) => {
              if (
                user.email === form.values.email &&
                user.password === form.values.password
              ) {
                localStorage.setItem("currentUser", JSON.stringify(user));

                foundUser = true;
                navigate("/");
                setIsShowIcon(true);
              }
            });

            if (!foundUser) {
              setIsShowAlert(true);
            }
          }

          if (type === "register") {
            let foundUser = false;
            const newUser = {
              email: form.values.email,
              name: form.values.name,
              password: form.values.password,
              address: form.values.address,
              terms: true,
              cart: [],
            };
            users.forEach((user) => {
              if (user.email === form.values.email) {
                setIsisExist(true);
                foundUser = true;
              }
            });
            if (!foundUser) {
      
              axios
                .post(apiUrl, newUser)
                .then((response) => {
                  const users = response.data;
                  localStorage.setItem("users", JSON.stringify(users));
                })
                .catch((error) => {
                  console.error("An error occurred:", error.response.data);
                });

              navigate("/");
            }
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
              value={form.values.address}
              onChange={(event) =>
                form.setFieldValue("address", event.currentTarget.value)
              }
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
          {isShowAlert && <label>Invalid Email or Password</label>}
          {isExist && <label>aleady register</label>}
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
            component='button'
            type='button'
            color='#bc9470'
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button type='submit' radius='xl'style={{backgroundColor:'#bc9470'}}>
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
