import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { AddHeroes } from "../islands/addHero.tsx";


export const handler: Handlers= {
  POST: async (req: Request, ctx: FreshContext<unknown, string>) => {
    
    const data = await req.formData();

    const name = data.get("name");
    const image = data.get("image");
    const sound = data.get("sound");
    const creator = data.get("creator");
    
    const newSuperhero = { name: name, image: image, sound: sound, creator: creator };

    const response = await axios.post("https://supermondongo.deno.dev/", 
    {
      name: newSuperhero.name, 
      image: newSuperhero.image,
      sound: newSuperhero.sound,
      creator: newSuperhero.creator
    });
      
    if (!response) {
      return new Response("Error adding superhero", { status: 500 });
    }

    return ctx.render("New superhero added")
  },
};

const Page = (props: PageProps<unknown>) => {

  return (
    <div class = "superheroMenu">
      <div className="Titulo">
        <h1>Añade un superhéroe</h1>
        <div className="Enlaces">
          <a href="/">Menú</a>
          <a href="/addPage">Añade un superhéroe</a>
          <a href="/searchPage">Busca un superhéroe</a>
          <a href="/deletePage">Borra un superhéroe</a>
        </div>
      </div>
      <div className="Pestañas">
      <AddHeroes/>
      </div>
    </div>
  )
}

export default Page;
