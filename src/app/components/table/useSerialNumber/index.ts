import { useEffect, useState } from "react";

export const useSerialNumber = (page: number, perPage: number) => {
	const [initialSerialNumber, setInitialSerialNumber] = useState(1);

	useEffect(() => {
		setInitialSerialNumber((page - 1) * perPage + 1);
	}, [page, perPage]);

	return initialSerialNumber;
};
