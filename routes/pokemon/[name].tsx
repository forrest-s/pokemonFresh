import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  name: string;
  weight: number;
  types: Array<string>;
  stats: Array<string>;
  species: {
    name: string;
    url: string;
  };
  order: number;
  moves: Array<string>;
  id: number;
  held_items: Array<string>;
  height: number;
  abilities: Array<string>;
  base_experience: number;
  game_indices: Array<string>;
}   

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { name } = ctx.params;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
        
    </div>
  );
}
