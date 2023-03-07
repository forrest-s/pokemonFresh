import { Layout } from "../../components/Layout.tsx";
import { Handlers, PageProps  } from "$fresh/server.ts";

interface AllPokemon {
    count: number;
    next: string;
    previous: string;
    results: Array<{
        name: string;
        url: string;
    }>;
}

export const handler: Handlers<AllPokemon | null> = {
    async GET(_, ctx) {
        // const { username } = ctx.params
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        if (resp.status === 404) {
            return ctx.render(null)
        }
        const pokemon: AllPokemon = await resp.json()
        return ctx.render(pokemon)
    }
}

export default function Page({ data }: PageProps<AllPokemon | null>) {
  const meta = {
    title: "Pokemon Fresh",
    description: "A selectable list of all current pokemon. Retrieved from pokeapi.co",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

  const pokemon = data ? data.results.map(each => <a class='border-solid border-2 border-red-400 rounded m-2' href={`pokemon/${each.name}`}>{each.name}</a>) : <p>loading pokemon</p>
  
  return (
    <Layout {...meta}>
      <section>
          <h1 class='text-2xl text-center underline'>Select a pokemon to view</h1>
          <section class='grid grid-cols-3 sm:grid-cols-5 text-center'>
            {pokemon}
          </section>
      </section>
    </Layout>
  );
}