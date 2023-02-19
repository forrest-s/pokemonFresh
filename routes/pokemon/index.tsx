import { Container } from "../../components/Layout.tsx";
import { Handlers, PageProps  } from "$fresh/server.ts";

interface Pokemon {
    count: number;
    next: string;
    previous: string;
    results: Array<{
        name: string;
        url: string;
    }>;
}

export const handler: Handlers<Pokemon | null> = {
    async GET(_, ctx) {
        // const { username } = ctx.params
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        if (resp.status === 404) {
            return ctx.render(null)
        }
        const pokemon: Pokemon = await resp.json()
        return ctx.render(pokemon)
    }
}

export default function Page({ data }: PageProps<Pokemon | null>) {
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
  const pokemon = data?.results.map(each => <h2>{each.name}</h2>)
  
  return (
    <>
      <Container {...meta}>
       
        <h1>This is the start of the pokemon page</h1>
        {pokemon}
      </Container>
    </>
  );
}