import React from "react";
import Styles from "./Style.module.css"; // Import css


function Afro({ titulo, descricao, link }) { //props
  return (
    <div className={Styles.itemResultado}> 
      <h2><a href={link} target="_blank" rel="noopener noreferrer">{titulo}</a></h2>
      <p className={Styles.descricaoMeta}>{descricao}</p>
    </div>
  );
}

export default Afro;