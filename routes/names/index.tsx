import { Layout } from "../../components/Layout.tsx";

// deno-lint-ignore no-explicit-any
export default function Home(props: any) {
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
  return (
    <>
      <Layout {...meta}>
       
        <h1>Names endpoint</h1>
        <form
          name='name'
          onSubmit={(event) => {
            event.preventDefault();
            const input = document.querySelector("input[name='name']") as HTMLInputElement;
            const inputName = document.getElementById('inputName')
            window.location.href = `${window.location.href}/${inputName}`;
          }}
        >
          <label htmlFor="name">Type in a name:</label>
          <input id='inputName' type="text" name="name" defaultValue="" />
          <button type="submit">Submit</button>
        </form>

      </Layout>
    </>
  );
}