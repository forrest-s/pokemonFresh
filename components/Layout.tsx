import { ComponentChildren } from "preact";
import { Head, asset } from "$fresh/runtime.ts";
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
      <nav class='w-full h-10 md:h-16 flex gap-20 items-center justify-center bg-[#CC0000]'>
        <a class='text-[#FFDE00] hover:text-[#B3A125]' href='/'>Home</a>
        <a class='text-[#FFDE00] hover:text-[#B3A125]' href='/pokemon'>Pokemon</a>
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
        <link rel="stylesheet" href={asset("/poke.css")} type='text/css' />
        {/* add javascript css what ever you want */}
      </Head>
  );
};
