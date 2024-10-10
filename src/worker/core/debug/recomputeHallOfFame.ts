import { idb } from "../../db";
import { toUI } from "../../util";
import { player } from "..";
import { PLAYER } from "../../../common";

const recomputeHallOfFame = async () => {
	const tx = idb.league.transaction("players", "readwrite");

	for await (const cursor of tx.store) {
		const p = cursor.value;

		const made = p.tid === PLAYER.RETIRED && player.madeHof(p);

		const prev = p.hof;
		if (made) {
			p.hof = 1;
		} else {
			delete p.hof;
		}

		if (p.hof !== prev) {
			await cursor.update(p);
		}
	}

	await tx.done;

	await idb.cache.fill();
	await toUI("realtimeUpdate", [["firstRun"]]);
};

export default recomputeHallOfFame;
