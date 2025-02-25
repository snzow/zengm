// Need babel.config.js this rather than .babelrc to run on d3 inside node_modules (see also @rollup/plugin-babel config)

import { babelPluginSportFunctions } from "../babel-plugin-sport-functions/index.js";

export const babelConfig = (legacy) => {
	const plugins = [babelPluginSportFunctions];

	if (legacy) {
		plugins.push(
			[
				"@babel/plugin-transform-optional-chaining",
				{
					loose: true,
				},
			], // Chrome 80, Safari 13.1
			[
				"@babel/plugin-transform-nullish-coalescing-operator",
				{
					loose: true,
				},
			], // Chrome 80, Safari 13.1
			["@babel/plugin-transform-class-properties", { loose: true }], // Safari 14.1

			// Used in nanoevents and maybe other dependencies
			"@babel/plugin-transform-logical-assignment-operators", // Chrome 85, Firefox 79, Safari 14
		);
	}

	return {
		compact: false,
		presets: [
			[
				"@babel/preset-react",
				{
					runtime: "automatic",
				},
			],
			"@babel/preset-typescript",
		],
		plugins,
	};
};
