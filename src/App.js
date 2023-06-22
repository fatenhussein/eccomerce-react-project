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

export default function App() {
  const [isShowIcon, setIsShowIcon] = useState(false);
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
                <Login setIsShowIcon={setIsShowIcon} />
              }
            />
            <Route path='products' element={<Producut />} />
            <Route path='profile' element={<Profile />} />

            <Route path='card' element={<Card />} />
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
      </>
    </div>
  );
}
