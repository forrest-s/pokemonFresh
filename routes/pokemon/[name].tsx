import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  name: string;
  weight: number;
  forms: Array<{
    name: string;
    url: string;
  }>;
  location_area_encounters: string;
  is_default: boolean;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  species: {
    name: string;
    url: string;
  };
  order: number;
  moves: Array<string>;
  id: number;
  held_items: Array<{
    item: {
      name: string;
      url: string;
    };
    version_details: Array<{
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }>;
  }>;
  height: number;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
  base_experience: number;
  game_indices: Array<{
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }>;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
        front_female: string;
      };
      home: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
    };
    versions: {
      'generation-i': {
        'red-blue': {};
        yellow: {};
      };
      'generation-ii': {
        crystal: {};
        gold: {};
        silver: {};
      };
      'generation-iii': {
        emerald: {};
        'firered-leafgreen': {};
        'ruby-sapphire': {};
      };
      'generation-iv': {
        'diamond-pearl': {};
        'heartgold-soulsilver': {};
        platinum: {};
      };
      'generation-v': {
        'black-white': {};
      };
      'generation-vi': {
        'omegaruby-alphasapphire': {};
        'x-y': {};
      };
      'generation-vii': {
        icons: {};
        'ultra-sun-ultra-moon': {};
      };
      'generation-viii': {
        icons: {};
      };
    };
  };
}   

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { name } = ctx.params;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    console.log(user)
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  const stats = data.stats.map(each => {
    return <p>{each.base_stat}, {each.effort}, {each.stat.name}</p>
  })

  return (
    <div>
      <h1>{data.name}</h1>
      {stats}
    </div>
  );
}
