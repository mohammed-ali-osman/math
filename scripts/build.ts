import { build, emptyDir } from "@deno/dnt";

await emptyDir("./dist");

await build({
  entryPoints: [
    "./mod.ts",
    "./add.ts",
    "./sub.ts",
  ],
  outDir: "./dist",

  shims: {
    deno: false,
  },

  package: {
    name: "@peno/math",
    version: Deno.readTextFileSync("./deno.json")
      ? JSON.parse(Deno.readTextFileSync("./deno.json")).version
      : "0.0.0",
    description: "Simple math utilities",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/YOUR_USERNAME/math.git",
    },
    bugs: {
      url: "https://github.com/YOUR_USERNAME/math/issues",
    },
  },
});

await Deno.copyFile("README.md", "dist/README.md");
await Deno.copyFile("LICENSE", "dist/LICENSE");
