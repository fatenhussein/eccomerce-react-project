import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Carousels from "./components/Carousels";
import Footer from "./components/Footer";
import Producut from "./components/Producut";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import Card from "./components/Card";
import Profile from "./components/Profile";
import axios from "axios";

export default function App() {
  const [isShowIcon, setIsShowIcon] = useState(false);
  const [users, setUsers] = useState([]);

  const apiUrl = "http://localhost:3500/users";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(apiUrl);
        setUsers(response.data);
        localStorage.setItem("users", JSON.stringify(users));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

 

  const updateUsers = () => {
    const getSUsers = async () => {
      const res = await axios.get(apiUrl);
      setUsers(res.data);
    };

    getSUsers();
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Navbar isShowIcon={isShowIcon} setIsShowIcon={setIsShowIcon} />

        <Routes>
          <Route>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Landing />} />
            <Route
              path="login"
              element={<Login setIsShowIcon={setIsShowIcon} users={users}/>}
            />
            <Route path="products" element={<Producut users={users} />} />
            <Route path="profile" element={<Profile />} />

            <Route path="card" element={<Card />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}

function Landing() {
  return (
    <div>
      <>
        <Hero />
        <Features />
        <Carousels />
      </>
    </div>
  );
}
