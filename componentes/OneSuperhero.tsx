import { FunctionComponent } from "preact";
import { Superhero } from "../types.ts";

type SuperheroData = {
  superhero: Superhero;
};

export const OneSuperhero: FunctionComponent<SuperheroData> = ({ superhero }) => {
  if (!superhero) return (<div className="Error">Introduce un heroe existente</div>);
  return (
    <div>
        <h3>{superhero.name}</h3>
        <img className="superhero-image" src={superhero.image} alt={superhero.name} />
        <audio controls>
          <source src={superhero.sound} type="audio/mpeg" />
        </audio>
    </div>
  );
};

export default OneSuperhero;