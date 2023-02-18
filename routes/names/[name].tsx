import { PageProps } from "$fresh/server.ts";
import { Container } from "../../components/Layout.tsx"

export default function Greet(props: PageProps) {
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
    <>
      <Container {...meta}>
        <h1>Hello {props.params.name}</h1>
      </Container>
    </>);
}
