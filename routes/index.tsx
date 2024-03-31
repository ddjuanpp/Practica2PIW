import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Superhero } from "../types.ts";
import { SuperheroMenu } from "../componentes/SuperheroMenu.tsx";

type Data = {
  superheroes: Superhero[];
}

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const response = await Axios.get<Data>('https://supermondongo.deno.dev/');
      const superheroes = response.data;
      return ctx.render({ superheroes });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = (props: PageProps<Data>) => {
  return (
    <div class = "superheroMenu">
      <SuperheroMenu superheroes={props.data.superheroes} />
    </div>
  );
};

export default Page;