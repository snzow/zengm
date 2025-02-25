import esbuild from "esbuild";
import fs from "node:fs";
import { parentPort, workerData } from "node:worker_threads";
import esbuildConfig from "../lib/esbuildConfig.ts";

const pluginStartEnd = {
	name: "start-end",
	setup(build: any) {
		build.onStart(() => {
			parentPort!.postMessage({
				type: "start",
			});
		});
		build.onEnd((result: any) => {
			if (result.errors.length) {
				parentPort!.postMessage({
					type: "error",
					error: result.errors[0],
				});

				// Save to file so it appears when reloading page
				const js = `throw new Error(\`${result.errors[0].message}\`)`;
				fs.writeFileSync(config.outfile, js);
			} else {
				parentPort!.postMessage({
					type: "end",
				});
			}
		});
	},
};

const { name } = workerData;

const config = esbuildConfig({
	name,
	nodeEnv: "development",
});

config.plugins.push(pluginStartEnd);

const ctx = await esbuild.context(config);
await ctx.watch();
