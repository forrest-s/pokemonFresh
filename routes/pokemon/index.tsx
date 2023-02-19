import { Container } from "../../components/Layout.tsx";
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
    description: "I am a description, and I can create multiple tags",
    canonical: "http://example.com/path/to/page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

  const pokemon = data ? data.results.map(each => <a href={`pokemon/${each.name}`}>{each.name}</a>) : <p>loading pokemon</p>
  
  return (
    <>
      <Container {...meta}>
        <h1>This is the start of the pokemon page</h1>
        <section class='flex flex-col'>
            <h2>click on a pokemon to view</h2>
            {pokemon}
        </section>
      </Container>
    </>
  );
}