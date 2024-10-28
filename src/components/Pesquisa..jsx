import React from "react";
import dados from "../dados.json";
import Afro from "../Afro";
import styles from "../Style.module.css";

function Pesquisa (){
    return (
        <div className={styles.pesquisa}>
            <input
            type="text"
            placeholder="Digite o nome do afro brasileiro que você quer conhecer."
            // value={pesquisa}
            // onChange={(e) => setPesquisa(e.target.value)}
          />
          <button onClick={dados}>Pesquisa</button>
          <div className={styles.resultadosPesquisa}>
      {dados.map(afro => (
          <Afro key={afro.id} {...afro} />
        ))}
      </div>
            
        </div>
    )
}
export default Pesquisa;