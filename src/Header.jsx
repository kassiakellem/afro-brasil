import React from "react";
import Afro from "./Afro"; 
import styles from "./Style.module.css"; 

function Header({ pesquisa, setPesquisa, afroFiltrados }) {
  return (
    <div className={styles.header}> {/* CSS Modules */}
      <h1>Afro Brasil</h1>
      <input
        type="text"
        placeholder="Digite o nome do afro brasileiro que você quer conhece"
        value={pesquisa}
        onChange={e => setPesquisa(e.target.value)}
        className={styles.searchInput} // styles CSS Modules
      />
      <div className={styles.resultadosPesquisa}> 
        {afroFiltrados.map(afro => (
          <Afro key={afro.id} {...afro} />
        ))}
      </div>
    </div>
  );
}

export default Header;