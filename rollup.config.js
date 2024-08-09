import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            postcss({
                extensions: ['.css', '.scss'],
                use: [
                    ['sass', {
                        includePaths: ['./src/styles'],
                    }]
                ],
                extract: true,
                minimize: true,
                sourceMap: true,
            }),
            typescript({ tsconfig: "./tsconfig.json" }),
        ],
        external: ["react", "react-dom"],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts.default()],
        external: [/\.scss$/]
    },
];