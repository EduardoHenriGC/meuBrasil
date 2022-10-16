import React from "react";

const Lista_praia = (props) => {
  return (
    <li>
      <h3 className="titulo">{props.lugares.nome}</h3>
      <div className="img">
        <img src={props.lugares.img} alt="" />
      </div>
      <div className="descricao">
        <p>{props.lugares.descricao}</p>
      </div>
    </li>
  );
};

export default Lista_praia;
