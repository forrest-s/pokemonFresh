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
  return (
      <Layout {...meta}>
        <article class='flex flex-col items-center w-1/2'>
          <h1>Welcome to the pokemon viewing website</h1>
          <p>Checkout out the pokemon link to view all pokemon.</p>
          <p>Pokemon list and information gathered from <a class='hover:underline' href='https://pokeapi.co/' target='_blank' alt='poke api link'>PokeApi</a></p>
          <p>The pokedex html/css originated from this <a class='hover:underline' href='https://codepen.io/oryamne/pen/vYKXbgZ?editors=1100' target='_blank' alt='codepen link'>codepen</a>, and then modified to fit different buttons and display information from the poke.api.</p>
        </article>
      </Layout>
  );
}
