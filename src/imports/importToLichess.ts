const importToLichess = async (pgn: string, site: string | null) => {
	if (site && /^https:\/\/lichess\.org\/.{8}/.test(site)) {
		return site;
	}

	const queryString = new URLSearchParams({ pgn }).toString();

	try {
		const res = await fetch("https://lichess.org/api/import", {
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				accept: "application/json",
			},
			body: queryString,
			method: "POST",
		});

		if (res.status === 200) {
			const data = await res.json();
			return data.url;
		} else {
			console.log(res.status);
			throw new Error("Cannot import to lichess");
		}
	} catch (e) {
		console.log(e);
		throw new Error("Cannot import to lichess");
	}
};

export default importToLichess;
