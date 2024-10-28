import React from "react";
import Afro from "./Afro";
import styles from "./Style.module.css";
import { useState, useEffect } from "react";
import Pesquisa from "./components/Pesquisa.";

function Header() {
 
  return (
    <div>
      <h1 className={styles.header}>Afro Brasil</h1>
      <Pesquisa/>
      
      </div> 
      /* <input
        type="text"
        placeholder="Digite o nome do afro brasileiro que você quer conhecer."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      /> */
      /* <button onClick={() => setResultados(resultados)}>Procura</button> */
      /* <div className={styles.resultadosPesquisa}>
      {resultados.map(afro => (
          <Afro key={afro.id} {...afro} />
        ))}
      </div> */

  );
}

export default Header;
