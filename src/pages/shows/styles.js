import styled from "styled-components";

export const Container = styled.div`
  h3 {
    text-transform: uppercase;
  }
  .grid {
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-areas: "r g b" "r a y";
    grid-template-columns: 2fr 2fr 2fr;
    grid-template-rows: auto;
    margin-top: 150px;
    gap: 14px;
  }

  .grid-1 {
    grid-area: r;

    width: auto;
    height: 600px;
    position: relative;
    border: 2px solid var(--blue);
    border-radius: 0.25rem;

    img {
      height: 100%;
      width: 100%;
    }
    span {
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: center;
      color: #fff;
      text-transform: uppercase;
      padding: 12px;
      font-size: 1rem;
      background-color: var(--blue);
      width: 100%;
    }
  }
  .grid-2,
  .grid-3,
  .grid-4,
  .grid-5 {
    grid-area: g;
    background-color: var(--blue);
    display: flex;
    flex-direction: column;
    text-align: left;
    border-radius: 0.25rem;

    h3 {
      color: #fff;
      margin: 10px auto;
    }

    p {
      margin-left: 20px;
      padding: 5px;
      color: var(--background);
    }

    img {
      height: 150px;
      border-top-right-radius: 0.25rem;
      border-top-left-radius: 0.25rem;
    }
  }
  .grid-3 {
    grid-area: b;
  }
  .grid-4 {
    grid-area: a;
  }
  .grid-5 {
    grid-area: y;
  }

  ///////////// SEGUNDA SECTION //////////////////

  .flex-section {
    display: flex;
    flex-direction: row;

    margin: 200px auto;
    width: 70%;
  }
  .first_div {
    width: 400px;

    position: relative;
    margin-left: 40px;
    img {
      width: 100%;
    }
  }
  .second_div {
    position: absolute;
    width: 300px;
    top: 130px;
    right: 180px;

    img {
      width: 100%;
    }
  }
  .third_div {
    width: 100px;
    position: absolute;
    top: 22px;
    right: 405px;
    rotate: calc(90deg);
  }

  .right_section {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      text-align: center;
      margin-bottom: 30px;
      color: var(--titulo);
    }
    span {
      font-weight: 600;
      color: #57415a;
      padding: 10px;
    }

    p {
      margin-top: 10px;
      font-size: 1.1rem;
      padding: 10px;
    }
  }

  .btn {
    border: none;
    padding: 10px 14px;
    border-radius: 0.25rem;
    background: linear-gradient(to right, #9f2eaf, #57415a);
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 10px;
    color: #ddd;
    cursor: pointer;
    margin-bottom: 10px;

    :hover {
      background: linear-gradient(to bottom, #57415a, #9f2eaf);
    }
  }

  ///////// TERCEIRA SECTION /////////////

  .rumores {
    width: 70%;
    margin: 0 auto;
    text-align: center;

    h3 {
      margin-bottom: 40px;
      color: var(--titulo);

      font-size: 1.5rem;
    }
  }
  .container_rumores_img {
    display: flex;
    width: 90%;

    margin: 50px auto;
    gap: 10px;

    div {
      width: 320px;
      height: 370px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      border: 10px solid #f2f2f2;
      box-shadow: 0 0 4px #0007;
      border-radius: 15px;
    }
    p {
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: center;
      color: #fff;

      padding: 10px;
      font-size: 1rem;
      background-color: var(--blue);
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;

      -webkit-transition: -webkit-transform 0.5s ease;
      transition: transform 0.5s ease;
    }
    img:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  //////////////// RESPOSIVIDADE//////////////////
  @media (max-width: 1300px) {
    //////PRIMEIRA SECTION////////
    .grid {
      width: 98%;
    }
    .grid-1 {
      height: auto;
    }
    //////SEGUNDA SECTION////////
    .flex-section {
      width: 98%;
    }
    .first_div {
      width: 400px;

      position: relative;
      margin-left: 40px;
      img {
        margin-left: 30px;
        width: 100%;
      }
    }
    .second_div {
      top: 130px;
      right: 166px;
    }
    .third_div {
      top: -8px;
      right: 360px;
      rotate: calc(90deg);
    }
    .right_section {
      width: 60%;
      margin-left: 30px;
    }

    //////TERCEIRA SECTION////////
    .container_rumores_img {
      width: 100%;
    }
    .rumores {
      width: 90%;
    }
  }

  @media (max-width: 860px) {
    //////PRIMEIRA SECTION////////
    .grid {
      display: flex;
      flex-direction: column;
    }

    .grid-1 {
      width: 90%;
      margin: 0 auto;
      border: none;

      img {
        height: 320px;
        border-radius: 0.25rem;
      }
    }
    .grid-2,
    .grid-2,
    .grid-3,
    .grid-4,
    .grid-5 {
      width: 90%;
      margin: 0 auto;
      p {
        margin-bottom: 10px;
      }
      img {
        height: 220px;
      }
    }

    //////SEGUNDA SECTION////////

    .flex-section {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin: 80px auto;
    }
    .first_div {
      width: 100%;
      margin: 0 auto;

      img {
        width: 100%;
        margin: 0 auto;
      }
    }
    .second_div {
      display: none;
    }
    .third_div {
      display: none;
    }
    .right_section {
      width: 95%;
      margin: 20px auto;
      .btn {
        margin-top: 30px;
      }
      h2 {
        margin-top: 20px;
      }
    }

    //////TERCEIRA SECTION////////

    .rumores {
      width: 100%;
      span {
        padding: 0 5px;
      }
    }

    .span_container {
      width: 96%;
    }
    .container_rumores_img {
      flex-direction: column;

      gap: 20px;
    }
  }
`;
