import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mynotes from "./Screens/MyNotes/Mynotes";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/mynotes" element={<Mynotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
