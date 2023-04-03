import { Layout } from "../components/Layout.tsx";
// deno-lint-ignore no-explicit-any
export default function Home(props: any) {
  const meta = {
    title: "Pokedex Viewer",
    description: "This is a pokemon viewing website thru the original pokedex. Information is gathered from pok",
    canonical: "http://example.com/path/to/page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

  const cardStyle = `rounded border-2 border-[#CC0000] p-1 lg:w-1/2 w-5/6`
  
  return (
      <Layout {...meta}>
        <article class='flex flex-col gap-2 items-center w-1/2 pt-10'>
          <h1 class={cardStyle}>Welcome to the pokemon viewing website</h1>
          <p class={cardStyle}>Checkout out the pokemon link to view all pokemon.</p>
          <p class={cardStyle}>Pokemon list and information gathered from <a class='hover:underline' href='https://pokeapi.co/' target='_blank' alt='poke api link'>PokeApi</a></p>
          <p class={cardStyle}>The pokedex html/css originated from this <a class='hover:underline' href='https://codepen.io/oryamne/pen/vYKXbgZ?editors=1100' target='_blank' alt='codepen link'>codepen</a>, and then modified to fit different buttons and display information from the poke.api.</p>
        </article>
      </Layout>
  );
}
