import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup.js";
import pkg from "./package.json";
import sveltePreprocess from "svelte-preprocess";
import svelteSVG from "rollup-plugin-svelte-svg";
import alias from "@rollup/plugin-alias";
import image from "@rollup/plugin-image";
const path = require("path");

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const preprocess = sveltePreprocess({
  postcss: true,
  ...image(),
});

const onwarn = (warning, onwarn) =>
  (warning.code === "MISSING_EXPORT" && /'preload'/.test(warning.message)) ||
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

const projectRootDir = path.resolve(__dirname);
const aliases = alias({
  entries: [
    {
      find: "components",
      replacement: path.resolve(projectRootDir, "src/components"),
    },
    {
      find: "atoms",
      replacement: path.resolve(projectRootDir, "src/components/atoms"),
    },
    {
      find: "molecules",
      replacement: path.resolve(projectRootDir, "src/components/molecules"),
    },
    {
      find: "organisms",
      replacement: path.resolve(projectRootDir, "src/components/organisms"),
    },
    {
      find: "utils",
      replacement: path.resolve(projectRootDir, "src/components/utils"),
    },
    {
      find: "icons",
      replacement: path.resolve(projectRootDir, "static/icons"),
    },
    {
      find: "images",
      replacement: path.resolve(projectRootDir, "static/images"),
    },
    {
      find: "pages",
      replacement: path.resolve(projectRootDir, "src/components/pages"),
    },
  ],
});

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess: [preprocess],
      }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),
      image({
        exclude: "**/*.svg",
      }),
      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          babelHelpers: "runtime",
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead",
              },
            ],
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "@babel/plugin-transform-runtime",
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
      svelteSVG({ dev }),
      aliases,
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelte({
        generate: "ssr",
        hydratable: true,
        dev,
        preprocess: [preprocess],
      }),
      resolve({
        dedupe: ["svelte"],
      }),
      commonjs(),
      svelteSVG({ generate: "ssr", dev }),
      aliases,
      image({
        exclude: "**/*.svg",
      }),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules
    ),

    preserveEntrySignatures: "strict",
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
  imgTagExtensions: ["jpg", "jpeg", "png"],
};
