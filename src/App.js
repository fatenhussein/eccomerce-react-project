import Navbar from "./components/Navbar";

import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Carousels from "./components/Carousels";
import Footer from "./components/Footer";
import Producut from "./components/Producut";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import Card from "./components/Cart";
import { useEffect } from "react";


export default function App() {
  return (
  
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<Producut />} />
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
