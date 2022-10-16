import styled from "styled-components";

export const Container = styled.div`
  list-style: none;
  .titulo {
    text-align: center;
    font-size: 1.6rem;

    margin-top: 100px;
    margin-bottom: 30px;
    color: var(--titulo);
    text-transform: uppercase;
  }
  img {
    width: 100%;
    border-radius: 0.25rem;
    height: 100%;
  }
  .img {
    width: 900px;
    height: 550px;
    margin: 0 auto;
    margin-bottom: 25px;
    -webkit-box-shadow: 18px 17px 5px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 18px 17px 5px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 18px 17px 5px -3px rgba(0, 0, 0, 0.75);
  }
  .descricao {
    width: 900px;
    height: auto;
    margin: 0 auto;
  }
  p {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    font-size: 1.3rem;
  }

  @media (max-width: 868px) {
    img {
      border-radius: 0;
    }
    .img {
      width: 96%;
      height: auto;
      -webkit-box-shadow: -1px 13px 5px -3px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -1px 13px 5px -3px rgba(0, 0, 0, 0.75);
      box-shadow: -1px 13px 5px -3px rgba(0, 0, 0, 0.75);
    }
    .descricao {
      width: 100%;
    }
    p {
      width: 96%;
    }
  }
`;
