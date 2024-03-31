import { FunctionComponent } from "preact";
import { Superhero } from "../types.ts";

type Superherodata = {
  superheroes: Superhero[];
};

export const SuperheroMenu: FunctionComponent<Superherodata> = ({ superheroes }) => {
  return (
    <div>
      <div className="Titulo">
        <h1>Superheroe Menú</h1>
        <div className="Enlaces">
          <a href="/">Menú</a>
          <a href="/addPage">Añade un superhéroe</a>
          <a href="/searchPage">Busca un superhéroe</a>
          <a href="/deletePage">Borra un superhéroe</a>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        {superheroes.map(superhero => (
          <div className="superhero-card" key={superhero.name}>
            <h2>
              <h3>{superhero.name}</h3>
              <img className="superhero-image" src={superhero.image} alt={superhero.name} />
              <audio controls>
                <source src={superhero.sound} type="audio/mpeg" />
              </audio>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};