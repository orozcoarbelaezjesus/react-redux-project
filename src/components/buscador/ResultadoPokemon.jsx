import React from "react";
import { useSelector } from "react-redux";

const ResultadoPokemon = () => {
  const buscador = useSelector((state) => state.buscador);

  return (
    <div>
      {buscador.loading && <div className="text-warning">Buscando...</div>}
      {buscador.pokemon.length >= 1 && (
        <div className="text-success">
          <h3 className="text-white">Resultado</h3>
          <img src={buscador.pokemon[0].sprites.front_default} alt="Pokemón" />
          <h3>{buscador.pokemon[0].name}</h3>
        </div>
      )}
      {buscador.error !== "" && (
        <div>
          <h3 className="text-white">Resultado</h3>
          <b className="text-danger">{buscador.error}</b>
        </div>
      )}
    </div>
  );
};

export default ResultadoPokemon;
