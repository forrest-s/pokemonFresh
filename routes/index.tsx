// import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
// import Header from "../components/Header.tsx";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Fresh App</title>
//       </Head>
//       <Header />
//       <div class="p-4 mx-auto max-w-screen-md">
//         <img
//           src="/logo.svg"
//           class="w-32 h-32"
//           alt="the fresh logo: a sliced lemon dripping with juice"
//         />
//         <p class="my-6">
//           Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
//           file, and refresh.
//         </p>
//         <Counter start={23} />
//       </div>
//     </>
//   );
// }

// import Layout from "../components/Layout.tsx"

// export default function Home() {
//   return (
//     <Layout>
//       <h1>Homepage</h1>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
//       <Counter start={23} />
//     </Layout>
//   );
// }

import { Container } from "../components/Layout.tsx";
// deno-lint-ignore no-explicit-any
export default function Home(props: any) {
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
        <h1>Welcome to the pokemon viewing website</h1>
      </Container>
    </>
  );
}
