import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Superhero } from "../types.ts";
import { OneSuperhero } from "../componentes/OneSuperhero.tsx";

export const handler: Handlers<unknown> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, unknown>) => {
    const u = new URL(ctx.url);
    const superhero = u.searchParams.get("superhero");

    const response = await axios.get<Superhero>(`https://supermondongo.deno.dev/${superhero}`);
    if (response.status !== 200) {
      console.error("Error fetching superhero");
      throw new Error("Error fetching superhero");
    }

    return ctx.render(response.data[0]);
  },
};

const Page = (props: PageProps<Superhero>) => {
    return (
      <div class="superheroMenu">
        <div className="Titulo">
          <h1>Busca un superhéroe</h1>
          <div className="Enlaces">
            <a href="/">Menú</a>
            <a href="/addPage">Añade un superhéroe</a>
            <a href="/searchPage">Busca un superhéroe</a>
            <a href="/deletePage">Borra un superhéroe</a>
          </div>
        </div>
        <form className="Formulario">
          Introduce un superhéroe: <input type="text" name="superhero" />
          <button type="submit">Buscar</button>
        </form>
        <div className="Pestañas">
          <OneSuperhero superhero={props.data} />
        </div>
      </div>
    );
}

export default Page;