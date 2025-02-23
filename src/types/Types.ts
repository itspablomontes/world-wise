export type CountryType = {
	name: {
		common: string;
		official: string;
	};
	cca2: string;
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
