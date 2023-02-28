import { Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from '../../components/Layout.tsx';

interface Pokemon {
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
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
    version_group_details: Array<{
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }>;
  }>;
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

export const handler: Handlers<Pokemon | null> = {
  async GET(_, ctx) {
    const { name } = ctx.params;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const pokemon: Pokemon = await resp.json();
    return ctx.render(pokemon);
  },
};

export default function Page({ data }: PageProps<Pokemon | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  const moves = data.moves.map(each => {
    // const allMoves = each.version_group_details.map(each => {
    //   return <p>{each.move_learn_method.name}</p>
    // })
    return <p>{each.move.name}</p>
  })
  const types = data.types.map(each => {
    return <p>{each.type.name}</p>
  })
  const stats = data.stats.map(each => {
    return <p>{each.base_stat}, {each.effort}, {each.stat.name}</p>
  })

  const meta = {
    title: "Some Meta Title",
    description: "I am a description, and I can create multiple tags",
    canonical: "http://example.com/path/to/page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

  return (
      <Layout {...meta}>
        <article class='grid grid-cols-2 justify-items-center'>
          <header class='col-start-1 col-end-3'>
            <h1>{data.name}</h1>
            {types}
          </header>
          <section class='col-start-1'>
            {stats}
          </section>
          <section class='col-start-2'>
            {moves}
          </section>
        </article>
      </Layout>
  );
}
