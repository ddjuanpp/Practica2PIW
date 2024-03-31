import Axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Superhero } from "../types.ts";
import OneSuperhero from "../componentes/OneSuperhero.tsx";

type Data = Superhero & { name: string };

export const handler: Handlers<Data> = {
  async GET(req: Request, ctx: FreshContext<unknown, Data>) {
    const { name } = ctx.params;
    // get superhero
    const response = await Axios.get<Superhero>(
      `https://supermondongo.deno.dev/${name}`,
    );
    if (response.status !== 200) {
      console.error(
        "Error fetching superhero",
        response.status,
        response.statusText,
      );
      throw new Error("Error fetching superhero");
    }
    return ctx.render({ ...response.data, name });
  },
};

const Page = (props: PageProps<Data>) => {
  return (
    <div class="superheroMenu">
      <div className="Titulo">
        <h1>Superhéroe</h1>
        <div className="Enlaces">
          <a href="/">Menú</a>
          <a href="/addPage">Añade un superhéroe</a>
          <a href="/searchPage">Busca un superhéroe</a>
          <a href="/deletePage">Borra un superhéroe</a>
        </div>
      </div>
      <div className="Pestañas">
        <OneSuperhero superhero={props.data} />
      </div>
    </div>
  );
};

export default Page;