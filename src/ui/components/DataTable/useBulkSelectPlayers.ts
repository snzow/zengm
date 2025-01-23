import { useCallback, useState } from "react";

export const useBulkSelectPlayers = () => {
	const [bulkSelectPlayers, setBulkSelectPlayers] = useState(true);

	const toggleBulkSelectPlayers = useCallback(() => {
		setBulkSelectPlayers(bulk => !bulk);
	}, []);

	const showBulkSelectCheckboxes = bulkSelectPlayers;

	return {
		bulkSelectPlayers,
		showBulkSelectCheckboxes,
		toggleBulkSelectPlayers,
	};
};
