import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";
// import Footer from "../../components/Footer.tsx";

export type Props = {
  children: ComponentChildren;
  title?: string;
  name?: string;
  description?: string;
};

export const Layout = ({ children, ...customMeta }: Props) => {
  return (
    <>
      <Seo {...customMeta} />
      <nav class='w-full flex gap-20 justify-center border-b-2 border-black'>
        <a href='/'>Home</a>
        <a href='/pokemon'>Pokemon</a>
        <a href='/names'>Names</a>
      </nav>
      <main class='h-auto'>
        {children}
        {/* <Footer /> */}
      </main>
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
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <link rel="icon" href="/favicon.ico" />
        {/* add javascript css what ever you want */}
      </Head>
  );
};
