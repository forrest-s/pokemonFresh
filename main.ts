/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import * as oak from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";
import namesRouter from "./routes/names/index.tsx";

// const app = new Application();

// Use the namesRouter for requests to the /names/:name endpoint
// app.use(namesRouter.routes());
// app.use(namesRouter.allowedMethods());

// await app.listen({ port: 8000 });


await start(manifest, { plugins: [twindPlugin(twindConfig)] });
