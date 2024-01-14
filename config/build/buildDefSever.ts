import { BuildOptions } from "./types/config";
import type { Configuration } from "webpack-dev-server";

export function buildDefSever(options: BuildOptions): Configuration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    }
}