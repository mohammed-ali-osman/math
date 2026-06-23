import { build, emptyDir } from "@deno/dnt";

await emptyDir("./dist");

await build({
  entryPoints: [
    "./mod.ts",
    "./add.ts",
    "./sub.ts",
  ],
  outDir: "./dist",
  test: false,

  shims: {
    deno: false,
  },
  compilerOptions: {
    target: "ES2023",
    lib: ["ES2023", "DOM"],
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
      url: "git+https://github.com/mohammed-ali-osman/math.git",
    },
    bugs: {
      url: "https://github.com/mohammed-ali-osman/math/issues",
    },
  },
});

await Deno.copyFile("README.md", "dist/README.md");
await Deno.copyFile("LICENSE", "dist/LICENSE");
