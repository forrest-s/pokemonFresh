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

      </Layout>
    </>
  );
}