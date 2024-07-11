import webpack from 'webpack';

export type BuildMode = webpack.Configuration['mode'];

export interface BuildOptions {
	html: string;
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
}

export interface BuildPaths {
	entry: string;
	build: string;
	html: string;
	src: string;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
}
