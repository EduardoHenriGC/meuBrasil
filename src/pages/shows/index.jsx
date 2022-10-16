import { React } from "react";
import { Container } from "./styles";
import Footer from "../../components/footer/index";
import Destaque from "./destaque";
import Rumores from "./rumores";
import PrimeiraSection from "./primeiraSection";

const Show = () => {
  return (
    <Container>
      <PrimeiraSection />
      <Destaque />
      <Rumores />

      <Footer />
    </Container>
  );
};

export default Show;
