import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url("https://clickwallpapers.net/wp-content/uploads/2022/07/clickwallpapers-cristoredentor-cidades-4k-img11-scaled-1.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(100vh - 75px);

  @media (max-width: 768px) {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
      url("https://conteudo.imguol.com.br/c/entretenimento/96/2019/10/15/bondinho-do-pao-de-acucar-no-rio-de-janeiro-1571148068110_v2_1x1.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
`;
