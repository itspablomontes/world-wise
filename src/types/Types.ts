export type CountryType = {
	name: {
		common: string;
		official: string;
	};
	cca2: string;
	cca3: string;
	flags: {
		svg: string;
	};
	population: number;
	region: string;
	subregion: string;
	capital: string[];
	languages: {
		[key: string]: string;
	};
};

export type PopulationDataType = {
	year: number;
	value: number;
};
