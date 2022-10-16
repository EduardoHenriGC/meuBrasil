import React from "react";

import Lista_praia from "./lista";
import { Container } from "./styles";
import Footer from "../../components/footer/index";

const lugares = [
  {
    nome: "Cristo Redentor",
    descricao:
      "Icone do Rio de Janeiro, o Cristo é, sem dúvidas, um dos mais célebres pontos turísticos do Brasil. E sua fama roda o mundo! Ao lado da Muralha da China, do Coliseu e do Taj Mahal, a famosa estátua integra a lista das Sete Novas Maravilhas do Mundo Moderno, feita pela votação da New 7 Wonders Foundation. Situado no topo dos 710 m de altura do Morro do Corcovado, o monumento de 38 m, impressiona pela imponência desde sua inauguração, em outubro de 1931. Todos os anos, mais de 600 mil pessoas atravessam a Floresta da Tijuca com o Trem do Corcovado e chegam aos pés da estátua num mix de emoção, contemplação e fé.",
    img: "https://cdn.limber.net.br/img/bilhetes/3073/3073-CFwXwozTS6.jpeg",
  },
  {
    nome: "Fernando de Noronha",
    descricao:
      "Fernando de Noronha – Localizado a 354 km da costa do estado de Pernambuco, esse ponto turístico é um santuário de tartarugas e golfinhos. Além de lindas paisagens, Fernando de Noronha é perfeito para surfar e mergulhar.",
    img: "https://magazine.zarpo.com.br/wp-content/uploads/2021/10/baia-dos-porcos_zarpo.jpg",
  },
  {
    nome: "Cataratas do Iguaçu",
    descricao:
      "Cataratas do Iguaçu – Localizadas no Paraná, as Cataratas do Iguaçu são formadas por 270 cachoeiras que juntas são um espetáculo a céu aberto de encher os olhos. Esse é um dos pontos turísticos do Brasil mais famosos.",
    img: "https://cdn.limber.net.br/img/bilhetes/3038/3038-21ZykW6PZx.jpeg",
  },

  {
    nome: "VALE DOS DINOSSAUROS",
    descricao:
      "Os animais pré-históricos, em tamanho natural, produzem sons e têm movimentos robóticos. O maior protótipo é o Tiranossauro Rex, que mede 20 metros de comprimento por 14 de altura. Eles ficam numa área que reproduz uma paisagem de milhões de anos atrás, com rochas e floresta tropical. Instalado numa área de 60 mil metros quadrados, às margens da Avenida das Cataratas, que dá acesso ao Parque Nacional do Iguaçu, o Complexo Dream Park Show , quando concluído, terá 14 atrativos, que incluem um museu de carros de Hollywood, um bar em homenagem às motos Harley-Davidson, a Casa do Terror, o mini maravilhas do mundo entre outros.",
    img: "https://vidasemparedes.com.br/wp-content/uploads/2017/12/Vida-sem-Paredes-Vale-dos-Dinossauros-e-Maravilhas-do-Mundo-8.jpg",
  },

  {
    nome: "Catedral de Brasília",
    descricao:
      "Brasília é conhecida pela bela arquitetura projetada por Oscar Niemeyer. A Catedral de Brasília tem 40 metros de altura e é um dos cartões postais da capital brasileira. Os destaques ficam para seus anjos suspensos, teto de vidro que inicia no chão e suas 16 colunas curvas que formam um visual único.",
    img: "https://cdn.folhabv.com.br/images/noti-text-1582655742.jpg?1582655751758",
  },
];

const Turistico = lugares.map((c) => <Lista_praia key={c} lugares={c} />);

const PontoTuristico = () => {
  return (
    <Container>
      {Turistico}
      <Footer />
    </Container>
  );
};

export default PontoTuristico;
