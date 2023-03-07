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

  const games = data.game_indices.map(each => each.version.name)

  function createMoveDiv(move: string) {
    return <div className='blue-square'>{move}</div>;
  }
  
  // deno-lint-ignore no-explicit-any
  function createMoveDivs(moves: any[]) {
    const divs = moves.map((moveObj) => moveObj.move.name || '');
    while (divs.length < 8) {
      divs.push('');
    }
    return divs.slice(0, 8).map((move) => createMoveDiv(move));
  }
  
  const moveObjects = data.moves;
  const moveDivs = createMoveDivs(moveObjects);

  const meta = {
    title: data.name,
    description: `This is the pokemon infomation page for ${data.name}. This pokemon is from the pokemon ${games.length > 1 ? 'games' : 'game'} ${games}.`,
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

  return (
      <Layout {...meta}>
        <article id='pokedexLayout'>
            <div id="pokedex">
            {/* <!-- Left Panel --> */}
            <div id="left-panel">
              {/* <!-- Top lights --> */}
              <div class="left-top-container">
                <svg height="100" width="225" class="left-svg">
                  <polyline
                    points="0,75 70,75 90,38 224,38"
                    style="fill: none; stroke: black; stroke-width: 3"
                  />
                </svg>
                <div class="lights-container">
                  <div class="big-light-boarder">
                    <div class="big-light blue">
                      <div class="big-dot light-blue"></div>
                    </div>
                  </div>
                  <div class="small-lights-container">
                    <div class="small-light red">
                      <div class="dot light-red"></div>
                    </div>
                    <div class="small-light yellow">
                      <div class="dot light-yellow"></div>
                    </div>
                    <div class="small-light green">
                      <div class="dot light-green"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Center Screen --> */}
              <div class="screen-container">
                <div class="screen">
                  <div class="top-screen-lights">
                    <div class="mini-light red"></div>
                    <div class="mini-light red"></div>
                  </div>
                  <div style={`background-image:url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png)`} id="main-screen"></div>
                  <div class="bottom-screen-lights">
                    <div class="small-light red">
                      <div class="dot light-red"></div>
                    </div>
                    <div class="burger">
                      <div class="line"></div>
                      <div class="line"></div>
                      <div class="line"></div>
                      <div class="line"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Bottom Buttons --> */}
              <div class="buttons-container">
                <div class="upper-buttons-container">
                  <div class="big-button"></div>
                  <div class="long-buttons-container">
                    <div class="long-button red"></div>
                    <div class="long-button light-blue"></div>
                  </div>
                </div>
                <div class="nav-buttons-container">
                  <div class="dots-container">
                    <div>.</div>
                    <div>.</div>
                  </div>
                  <div class="green-screen">
                    <span id="name-screen">{data.name}</span>
                  </div>
                  <div class="right-nav-container">
                    <div class="nav-button">
                      <div class="nav-center-circle"></div>
                      <div class="nav-button-vertical"></div>
                      <div class="nav-button-horizontal">
                        <div class="border-top"></div>
                        <div class="border-bottom"></div>
                      </div>
                    </div>
                    <div class="bottom-right-nav-container">
                      <div class="small-light red">
                        <div class="dot light-red"></div>
                      </div>
                      <div class="dots-container">
                        <div class="black-dot">.</div>
                        <div class="black-dot">.</div>
                        <div class="black-dot">.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of Left panel --> */}

            {/* <!-- Right-panel --> */}
            <div id="right-panel">
              {/* <!-- Blank container --> */}
              <div class="empty-container">
                <svg height="100%" width="100%">
                  <polyline
                    points="0,0 0,40 138,40 158,75 250,75 250,0 0,0"
                    style="fill: #ffffff; stroke: none; stroke-width: 3"
                  />
                  <polyline
                    points="0,40 138,40 158,75 250,75"
                    style="fill: none; stroke: black; stroke-width: 3"
                  />
                </svg>
              </div>
              {/* <!-- Top screen --> */}
              <div class="top-screen-container">
                <div id="about-screen" class="right-panel-screen">
                  <section>
                    <p><strong>Height:</strong> {data.height}cm</p>
                    <p><strong>Weight:</strong> {data.weight}kg</p>
                  </section>
                  <section>
                    <p><strong>Base XP:</strong> {data.base_experience}hp</p>
                    <p><strong>Abilities:</strong> {data.abilities.reduce((acc, curr, idx, arr) => idx === arr.length - 1 ? `${acc}${curr.ability.name}` : `${acc}${curr.ability.name}, `, '')}</p>
                  </section>
                </div>
              </div>
              {/* <!-- Blue Buttons --> */}
              <div class="square-buttons-container">
                <div class="blue-squares-container">
                  {moveDivs}
                  {/* <div class="blue-square"></div>
                  <div class="blue-square"></div>
                  <div class="blue-square"></div>
                  <div class="blue-square"></div>
                  <div class="blue-square"></div>
                  <div class="blue-square"></div>
                  <div class="blue-square"></div>
                  <div class="blue-square"></div>
                  <div class="blue-square"></div>
                  <div class="blue-square"></div> */}
                </div>
              </div>
              {/* <!-- Center Buttons --> */}
              <div class="center-buttons-container">
                <div class="center-left-container">
                  <div class="small-reds-container">
                    <div class="small-light red">
                      <div class="dot light-red"></div>
                    </div>
                    <div class="small-light red">
                      <div class="dot light-red"></div>
                    </div>
                  </div>
                  <div class="white-squares-container">
                    <div class="white-square"></div>
                    <div class="white-square"></div>
                  </div>
                </div>
                <div class="center-right-container">
                  <div class="thin-buttons-container">
                    <div class="thin-button"></div>
                    <div class="thin-button"></div>
                  </div>
                  <div class="yellow-button yellow">
                    <div class="big-dot light-yellow"></div>
                  </div>
                </div>
              </div>
              {/* <!-- Bottom screens --> */}
              <div class="bottom-screens-container">
                <div id="type-screen" class="right-panel-screen">{data.types.reduce((acc, curr, idx, arr) => idx === arr.length - 1 ? `${acc}${curr.type.name}` : `${acc}${curr.type.name}, `, '')}</div>
                <div id="id-screen" class="right-panel-screen">{data.id}</div>
              </div>
            </div>
          </div>
        </article>
      </Layout>
  );
}
