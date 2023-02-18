// import { Head, asset } from "$fresh/runtime.ts";
// import { type ComponentChildren } from "preact";

// export default function Layout(props: { children?: ComponentChildren }) {
//   return (
//     <>
//       <Head>
//         <link rel="stylesheet" href={asset("/global.css")} />
//       </Head>
//       <nav>
//         <h1>navigation</h1>
//       </nav>
//       {props.children}
//     </>
//   );
// }


import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";
// import Footer from "../../components/Footer.tsx";

export type Props = {
  children: ComponentChildren;
  title?: string;
  name?: string;
  description?: string;
};

export const Container = ({ children, ...customMeta }: Props) => {
  return (
    <>
      <section style={{ minHeight: "100vh" }}>
        <Seo {...customMeta} />
        <div className="container">{children}</div>
        {/* <Footer /> */}
      </section>
    </>
  );
};

const Seo = ({ ...customMeta }) => {
  const meta = {
    title: "",
    description: "",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <link rel="icon" href="/favicon.ico" />
        {/* add javascript css what ever you want */}
      </Head>
      <nav>
        <a href='/'>Home</a>
        <a href='/pokemon'>Pokemon</a>
        <a href='/names'>Names</a>
      </nav>
    </>
  );
};
