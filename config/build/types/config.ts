import webpack from 'webpack';

export type BuildMode = webpack.Configuration['mode'];

export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
}

export interface BuildPaths {
	entry: string;
	build: string;
	html: string;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
}
