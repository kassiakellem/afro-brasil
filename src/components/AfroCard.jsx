import React from "react";
import Styles from "../Style.module.css"; // Import css
import { useState } from "react";


function AfroCard({ titulo, descricao, link, imagem }) { //props
  const [virado, setVirado] = useState(false); // Estado para controlar a virada do card

  return (
    <div
      className={Styles.itemResultado}  // Estilo do card
      onClick={() => setVirado(!virado)} // Alterna o estado ao clicar
    >
      {virado ? (
        // Verso do card - Título, Descrição e Link
        <div>
          <h2>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {titulo}
            </a>
          </h2>
          <p className={Styles.descricaoMeta}>{descricao}</p>
        </div>
      ) : (
        // Frente do card - Imagem
        <div>
          <img src={imagem} alt={titulo} className={Styles.imagem} />
        </div>
      )}
    </div>
  );
}

export default AfroCard;