import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { DeleteHero } from "../islands/deleteHero.tsx";

export const handler: Handlers= {
  POST: async (req: Request, ctx: FreshContext<unknown, string>) => {
    
    const data = await req.formData();

    const name = data.get("name");
    const creator = data.get("creator");
    
    const response = await fetch(`https://supermondongo.deno.dev/${name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ creator: creator })
    });
      
    if (!response) {
      return new Response("Error deleting superhero", { status: 500 });
    }
    return ctx.render("Superhero deleted")
  }
};

const Page = (props: PageProps<unknown>) => {

  return (
    <div class = "superheroMenu">
      <div className="Titulo">
        <h1>Borra un superhéroe</h1>
        <div className="Enlaces">
          <a href="/">Menú</a>
          <a href="/addPage">Añade un superhéroe</a>
          <a href="/searchPage">Busca un superhéroe</a>
          <a href="/deletePage">Borra un superhéroe</a>
        </div>
      </div>
      <div className="Pestañas">
      <DeleteHero/>
      </div>
    </div>
  )
}

export default Page;