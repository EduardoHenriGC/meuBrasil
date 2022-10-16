import React from "react";

import Lista from "./lista";
import { Container_praia } from "./styles";
import Footer from "../../components/footer/index";

const praias = [
  {
    nome: "Praias dos Lençóis Maranhenses– Maranhão",
    descricao:
      "As praias mais bonitas do Brasil também podem ser de água doce! E a prova disso são as lagoas dos Lençóis Maranhenses, formam incontáveis piscinas de água da chuva. São pequenas porções de paraíso em meio a dunas grandiosas e de areia fininha, com água quase morna e deliciosa para um mergulho. Difícil apenas será escolher qual das tantas lagoas curtir em um dia de passeio pelos Lençóis Maranhenses. O bom é que, a cada nova porção de água entre as dunas, a sensação de estar em um das praias mais bonitas do Brasil se repete. E melhor ainda é saber que sempre terá mais uma lagoa para visitar logo à frente. Para conhecer as principais lagoas dos Lençóis Maranhenses você poderá encolher entre Barreirinhas, Atins ou Santo Amaro. Os mais aventureiros poderão ainda fazer a travessia pelo Parque Nacional dos Lençóis Maranhenses. Apesar das praias mais bonitas do Brasil serem mais comuns à beira-mar, podemos garantir que essas lagoas merecem todo o status, mesmo sendo de água doce!",
    img: "https://www.auroraeco.com.br/imagem.php?imagem=datafiles/asul-brasil/asul-brasil-lencois/asul-brasil-lencois-lencois-730-504-1.jpg&l=730&a=504",
  },
  {
    nome: "Praia de Garapuá, Cairu – Bahia",
    descricao:
      "Paraíso que ainda está sendo descoberto pelos turistas, a Praia de Garapuá – localizada na Ilha de Tinharé, município de Cairu – oferece um mar incrível, areia clarinha, muitos coqueiros e piscinas naturais encantadoras. Com formato de concha e 2 km de extensão, Garapuá agrada tanto a quem busca boa infraestrutura quanto os que desejam apenas uma faixa de areia deserta para descansar. Vizinha de Morro de São Paulo, Garapuá oferece restaurantes e quiosques para quem quer passar o dia relaxando diante do mar, mas com cinco minutos de caminhada você já terá a sensação de ser o único a ocupar aquele paraíso. Se o pique permitir, caminhe um pouco mais até chegar à sempre deserta Praia de Pratigi. Uma dobradinha incrível entre as praias da Bahia. A Praia de Garapuá pode ser conhecida por terra, mas também por mar. No passeio de Volta à Ilha de Morro de São Paulo há uma parada para mergulho nas piscinas naturais de Garapuá. Já para botar os pés na areia será preciso fazer o passeio de 4×4. Ambos são maravilhosos. Na dúvida, faça os dois e curta por completo uma das praias mais bonitas do Brasil.",
    img: "https://lirp.cdn-website.com/46e9b5ee/dms3rep/multi/opt/garapua-ferradura-640w.jpg",
  },
  {
    nome: "Praia Brava, Búzios – Rio de Janeiro",
    descricao:
      "Não se deixe levar pelo nome. A Praia Brava em nada lembra um ambiente pouco acolhedor. Muito pelo contrário! É provável que ela seja uma das mais convidativas porções de areia de Búzios, na Região dos Lagos do Rio de Janeiro. A bela paisagem do mirante na estrada que leva à Brava já seria motivo suficiente para atrair os turistas até lá, mas ela vai muito além e oferece um mar maravilhoso, ambiente sempre tranquilo, areia vazia e dois dos mais elegantes bares à beira-mar da cidade. Certamente uma das praias mais bonitas do Brasil! Você será feliz em um belo colchão com guarda-sol à beira mar, com direito a tratamento VIP e lindos drinks, que rendem sempre fotos maravilhosas! Se quiser um ambiente mais tranquilo, basta ir para o canto direito da faixa de areia, onde não há bares ou quiosques. Conheça mais praias de Búzios. Várias delas merecem estar entre as praias mais bonitas do Brasil.",
    img: "https://imgmd.net/images/v1/guia/1594059/praia-brava.jpg",
  },

  {
    nome: "Praia da Ilha do Campeche, Florianópolis",
    descricao:
      "A Ilha do Campeche é daqueles lugares lindos, que não dá pra esquecer de conhecer em Florianópolis! A ilha tem praia de águas cristalinas, tranquilas e ideais para relaxar. Além de ser conhecida por sua beleza, é também um patrimônio arqueológico, já que possui inscrições rupestres de grande valor. Para conhecer a ilha, é preciso ir até a Praia da Armação ou à Praia do Campeche, onde se pega uma pequena embarcação que faz a travessia até o local. É um passeio lindo!Para quem procura tranquilidade, o ideal é ir em um dia útil, quando a ilha recebe menos turistas! A pequena Ilha do Campeche, uma das melhores praias do Brasil, faz parte de uma unidade de preservação, com número de visitantes diários limitados. Além da praia, quem visita a Ilha do Campeche poderá curtir também caminhadas ecológicas pelo lado leste da ilha, onde ficam inscrições rupestres de milhares de anos.",
    img: "https://cache.quantocustaviajar.com/blog/wp-content/uploads/2019/12/ilha-do-campeche-santa-catarina-1.jpg",
  },
  {
    nome: "Praia da Lagoa do Paraíso, Jericoacoara – Ceará",
    descricao:
      "A Lagoa do Paraíso, em Jericoacoara, é uma das mais belas da região. Com água entre diversos tons de azul, a Lagoa do Paraíso proporciona um grande espetáculo para os olhos e encanta a quem escolhe o lugar para descansar. As redes dentro da água já são tradição, mas por lá há também vários restaurantes, que colocam mesas e cadeiras dentro da água para que os visitantes relaxarem ainda mais. A lagoa tem água calma e poucas ondas, o que garante a calmaria que tanto combina com Jeri. Quem quiser um pouco mais de agito pode curtir o clube de praia com uma mega estrutura que existe no local, afinal, Jeri também é ótima para os fãs de ambientes badalados. Veja mais no nosso Guia de Jericoacoara.",
    img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/melhores-praias-do-brasil-lagoa-do-paraiso-1-820x547.jpg",
  },
];

const Praia = praias.map((e) => <Lista key={e} praias={e} />);

const Praias = () => {
  return (
    <Container_praia>
      {Praia}
      <Footer />
    </Container_praia>
  );
};

export default Praias;
