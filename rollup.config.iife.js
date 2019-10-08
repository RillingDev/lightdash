import resolve from "rollup-plugin-node-resolve";
import { rollupOptions } from "./package.json";

export default {
    input: `./dist/esm/main.js`,
    output: [{
        format: "iife",
        name: rollupOptions.moduleName,
        file: `./dist/${rollupOptions.outputName}.js`,
        sourcemap: true,
        globals: rollupOptions.globals
    }],
    external: rollupOptions.external,
    plugins: [
        resolve()
    ]
};
