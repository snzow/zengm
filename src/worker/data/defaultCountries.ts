const groups = {
	hispanic: [
		"Argentina",
		"Chile",
		"Colombia",
		"Costa Rica",
		"Cuba",
		"El Salvador",
		"Equador",
		"Guatemala",
		"Honduras",
		"Mexico",
		"Nicaragua",
		"Panama",
		"Dominican Republic",
		"Uruguay",
		"Venezuela",
		"Spain",
		"Bolivia",
		"Paraguay",
		"Peru",
		"Puerto Rico",
	],
	portuguese: [
		"Angola",
		"Brazil",
		"Cape Verde",
		"Portugal",
		"Mozambique",
		"East Timor",
		"Guinea-Bissau",
		"Macau",
	],
};

// Generated by tools/names.js
let defaultCountries: Record<string, number>;

if (process.env.NODE_ENV !== "production") {
	defaultCountries =
		process.env.SPORT === "basketball"
			? {
					Angola: 8,
					Argentina: 71,
					Australia: 174,
					Austria: 15,
			  }
			: {
					"American Samoa": 70,
					Angola: 1,
					Argentina: 1,
					Australia: 108,
					Austria: 5,
			  };
} else {
	defaultCountries =
		process.env.SPORT === "basketball"
			? {
					Angola: 8,
					Argentina: 71,
					Australia: 174,
					Austria: 15,
					Bahamas: 48,
					Belarus: 12,
					Belgium: 44,
					Benin: 5,
					"Bosnia and Herzegovina": 140,
					Brazil: 82,
					Bulgaria: 29,
					Cameroon: 69,
					Canada: 392,
					"Cape Verde": 5,
					"Central African Republic": 9,
					Chad: 5,
					China: 30,
					Colombia: 15,
					Congo: 34,
					Croatia: 216,
					"Czech Republic": 34,
					Denmark: 21,
					"Dominican Republic": 33,
					Egypt: 15,
					England: 112,
					Estonia: 14,
					Finland: 34,
					France: 294,
					"French Guiana": 7,
					Gabon: 5,
					Georgia: 20,
					Germany: 181,
					Ghana: 10,
					Greece: 214,
					Guadeloupe: 13,
					Guinea: 11,
					Haiti: 12,
					Hungary: 22,
					Iceland: 10,
					Iran: 6,
					Ireland: 7,
					Israel: 50,
					Italy: 228,
					"Ivory Coast": 26,
					Jamaica: 28,
					Japan: 7,
					Kazakhstan: 7,
					Kenya: 5,
					Kosovo: 13,
					Latvia: 69,
					Liberia: 4,
					Lithuania: 195,
					Mali: 20,
					Mexico: 17,
					Moldova: 4,
					Montenegro: 85,
					Morocco: 5,
					Netherlands: 49,
					"New Zealand": 24,
					Nigeria: 136,
					"North Macedonia": 28,
					Norway: 6,
					Panama: 17,
					Poland: 69,
					Portugal: 12,
					"Puerto Rico": 58,
					Romania: 22,
					Russia: 116,
					Scotland: 6,
					Senegal: 113,
					Serbia: 341,
					Slovakia: 22,
					Slovenia: 105,
					"South Africa": 9,
					"South Korea": 5,
					"South Sudan": 7,
					Spain: 251,
					Sudan: 24,
					Sweden: 47,
					Switzerland: 15,
					"Trinidad and Tobago": 11,
					Turkey: 110,
					USA: 23461,
					Ukraine: 48,
					Uruguay: 7,
					Venezuela: 13,
					"Virgin Islands": 10,
			  }
			: {
					"American Samoa": 70,
					Angola: 1,
					Argentina: 1,
					Australia: 108,
					Austria: 5,
					Bahamas: 6,
					Belgium: 1,
					Brazil: 2,
					Cameroon: 2,
					Canada: 219,
					China: 1,
					Denmark: 7,
					"Dominican Republic": 1,
					England: 13,
					Estonia: 1,
					Finland: 5,
					France: 2,
					Germany: 31,
					Ghana: 3,
					Haiti: 1,
					Ireland: 1,
					Italy: 4,
					Japan: 9,
					Kenya: 1,
					Latvia: 1,
					Liberia: 1,
					Mexico: 10,
					Moldova: 1,
					Netherlands: 9,
					"New Zealand": 4,
					Nigeria: 14,
					Norway: 2,
					"Puerto Rico": 3,
					Russia: 2,
					Scotland: 2,
					Serbia: 1,
					Slovakia: 1,
					"South Africa": 4,
					"South Korea": 1,
					Sweden: 13,
					Switzerland: 2,
					USA: 73489,
					"Virgin Islands": 1,
			  };
}

for (const countries of Object.values(groups)) {
	for (const country of countries) {
		if (defaultCountries[country] === undefined) {
			defaultCountries[country] = 0.5;
		}
	}
}

export { defaultCountries, groups };
