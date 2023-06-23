import { MantineProvider } from '@mantine/core';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Carousels from './components/Carousels';
import Footer from './components/Footer';
import Producut from './components/Producut';
import Login from './components/Login';
import NoPage from './components/NoPage';
import Card from './components/Card';
import Profile from './components/Profile';
import axios from 'axios';
import ContactUs from './components/ContactUs';
import AboutUs from "./components/AboutUs";
export default function App() {
  const [isShowIcon, setIsShowIcon] = useState(
    window.localStorage.getItem('isShowIcon')
  );
  const [users, setUsers] = useState([]);
 
  const [cart, setCart] = useState([]);
 

  


  useEffect(() => {
    window.localStorage.setItem(
      'isShowIcon',
      JSON.stringify(isShowIcon)
    );
  }, [isShowIcon]);

  const apiUrl = 'http://localhost:3500/users';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(apiUrl);
        setUsers(response.data);
        localStorage.setItem(
          'users',
          JSON.stringify(users)
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);




  

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Navbar
          isShowIcon={isShowIcon}
          setIsShowIcon={setIsShowIcon}
        />

        <Routes>
          <Route>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Landing />} />
            <Route
              path='login'
              element={
                <Login
                  setIsShowIcon={setIsShowIcon}
                  users={users}
                />
              }
            />
            <Route
              path='products'
              element={<Producut users={users}  setUsers={setUsers} />}
            />
            <Route path='profile' element={<Profile />} />
            <Route path='AboutUs' element={<AboutUs />} />

            <Route path='card' element={<Card  users={users}/>} />
            <Route path='*' element={<NoPage />} />
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
        <ContactUs/>
      </>
    </div>
  );
}
