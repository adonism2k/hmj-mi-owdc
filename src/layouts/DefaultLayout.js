import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
};

export default DefaultLayout;
