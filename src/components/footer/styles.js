import styled from "styled-components";

export const Footercss = styled.div`
  footer {
    background-color: #333;
    padding: 10px;
    margin-top: 100px;
  }
  .lista-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 100px;
  }
  .footer-span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
  }
  .lista {
    margin: 4px;
  }
  .footer-span {
    font-size: 20px;
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    footer {
      margin-top: 30px;
    }
  }
`;
