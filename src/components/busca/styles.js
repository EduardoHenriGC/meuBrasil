import styled from "styled-components";

export const Container = styled.div`
  input {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 16px;
    background: transparent;
    width: 25px;
    height: 25px;
    padding: 15px;
    border: solid 3px #9a86fd;
    font-weight: bold;
    outline: none;
    border-radius: 35px;
    transition: all 0.5s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #9a86fd;
    ::placeholder {
      color: #efefef;
      opacity: 0;
      transition: opacity 150ms ease-out;
    }
    :focus::placeholder {
      opacity: 1;
      font-weight: 400;
    }
    input:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #ffb870;
    }
    :focus,
    :not(:placeholder-shown) {
      width: 350px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #9a86ce;
    }
  }
  @media (min-width: 1000px) and (max-width: 1650px) {
    input {
      left: 30%;
      :focus,
      :not(:placeholder-shown) {
        width: 230px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #9a86ce;
      }
    }
  }

  @media (max-width: 750px) {
    input {
      left: 50%;
      :focus,
      :not(:placeholder-shown) {
        width: 230px;
      }
    }
  }

  @media (min-width: 100px) and (max-width: 370px) {
    input {
      left: 50%;
      :focus,
      :not(:placeholder-shown) {
        width: 140px;
      }
    }
  }
`;
