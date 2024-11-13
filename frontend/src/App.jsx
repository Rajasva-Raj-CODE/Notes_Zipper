import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mynotes from "./Screens/MyNotes/Mynotes";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mynotes" element={<Mynotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
