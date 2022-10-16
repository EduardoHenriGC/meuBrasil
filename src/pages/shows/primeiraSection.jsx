import React from "react";
import { Container } from "./styles";

const PrimeiraSection = () => {
  return (
    <Container>
      <section className="grid">
        <div className="grid-1">
          <img src="https://mfiles.alphacoders.com/600/600016.jpg" alt="" />
          <span>
            Coldplay show em SP sáb., 15 de out. <p>Allianz Parque. SP</p>
          </span>
        </div>
        <div className="grid-2">
          <img
            src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2020/11/123222309-4852662494774551-562197036417715858-n-2.jpg"
            alt=""
          />
          <h3>Afonso Padilha </h3>
          <p>dom., 9 de out., 18:00 – 23:50</p>
          <p>Rua 24 de Maio, 135 - Centro, Curitiba - PR</p>
        </div>
        <div className="grid-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsaZW5zoEkol8JMXd-k7JHhSxge6xolE22ew&usqp=CAU"
            alt=""
          />
          <h3>Filipe Ret</h3>
          <p>sáb., 8 de out., 12:00</p>
          <p>Av. Mário de Andrade, 664 - Barra Funda, São Paulo - SP</p>
        </div>
        <div className="grid-4">
          <img
            src="https://midias.correiobraziliense.com.br/_midias/jpg/2022/06/21/766x527/1_rodrigo_marques_02e03_07___stories-25907382.jpg"
            alt=""
          />
          <h3>Rodrigo Marques </h3>
          <p>15 de out. 22:30 - 29 de out. 22:30</p>
          <p>Av. Paulista, 900 - Bela Vista, São Paulo - SP</p>
        </div>
        <div className="grid-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIrm5YlkN71CebDXneW3F_ESDZ54Uw386vgw&usqp=CAU"
            alt=""
          />
          <h3>ALOK</h3>
          <p>qua., 28 de dez., 12:00 – 23:50</p>
          <p>
            Serv. José Cardoso de Oliveira, 762 - Jurerê Internacional,
            Florianópolis - SC
          </p>
        </div>
      </section>
    </Container>
  );
};

export default PrimeiraSection;
