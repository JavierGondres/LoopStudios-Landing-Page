import React from "react";
import "./App.css";
import "./Components/Header/Header.css";
import "./Components/MainContent/MainContent.css";
import "./Components/Footer/Footer.css";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </>
  );
}

export default App;
