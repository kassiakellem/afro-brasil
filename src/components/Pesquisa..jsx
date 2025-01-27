import React from "react";
import dados from "../dados.json";
import Styles from "../Style.module.css";
import AfroCard from "./AfroCard";
import { useState } from "react";

function Pesquisa() {
  const [pesquisa, setPesquisa] = useState(""); // Estado para armazenar o termo pesquisado
  const [filteredData, setFilteredData] = useState([]); // Estado para armazenar os resultados filtrados
  const [naoMostra, setNaoMostra] = useState(false);
  // Função para lidar com a mudança no input
  const handleInputChange = (e) => {
    setPesquisa(e.target.value);

    // Reseta o estado de "Nenhum resultado encontrado" enquanto o usuário digita
    setNaoMostra(false);
  };
  // Função para lidar com a pesquisa
  const pesquisado = () => {
    const filtered = dados.filter((item) =>
      item.titulo.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setFilteredData(filtered);

    // Define o estado para mostrar "Nenhum resultado encontrado" somente após a pesquisa
    setNaoMostra(true);

    // Limpa o campo de pesquisa
    setPesquisa("");
  };

  return (
    <div className={Styles.pesquisa}>
      <input
        type="text"
        placeholder="Digite o nome do afro-brasileiro que você quer conhecer."
        value={pesquisa}
        onChange={handleInputChange}
      />
      <button onClick={pesquisado}>Pesquisa</button>

      <div className={Styles.cardContainer}>
        {filteredData.length > 0
          ? filteredData.map((item) => (
            <AfroCard
              key={item.id}
              titulo={item.titulo}
              descricao={item.descricao}
              link={item.link}
              tags={item.tags}
              imagem={item.imagem}
            />
          ))
          : naoMostra && (
            <p className={Styles.descricaoMeta}>
              Nenhum resultado encontrado.
            </p>
          )}
      </div>
    </div>
  );
}
export default Pesquisa;
