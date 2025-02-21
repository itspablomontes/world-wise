import type { CountryType } from "../types/Types";
import CountryItem from "./CountryItem";
type Props = {
	filteredCountries: CountryType[];
};

const CountryList = ({ filteredCountries }: Props) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-bold">
			{filteredCountries.map((country) => (
				<CountryItem
					key={country.cca2}
					name={country.name.common}
					flag={country.flags.svg}
					countryCode={country.cca2}
				/>
			))}
		</div>
	);
};

export default CountryList;
