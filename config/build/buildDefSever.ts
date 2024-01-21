import type { Configuration } from 'webpack-dev-server';
import { type BuildOptions } from './types/config';

export function buildDefSever(options: BuildOptions): Configuration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
