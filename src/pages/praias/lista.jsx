import React from "react";

const Lista = (props) => {
  return (
    <li>
      <h3 className="titulo">{props.praias.nome}</h3>
      <div className="img">
        <img src={props.praias.img} alt="" />
      </div>
      <div className="descricao">
        <p>{props.praias.descricao}</p>
      </div>
    </li>
  );
};

export default Lista;
