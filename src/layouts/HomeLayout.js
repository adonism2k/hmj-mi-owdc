import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";

const HomeLayout = (props) => {
  return (
    <>
      <Navbar type="home" />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
};

export default HomeLayout;
