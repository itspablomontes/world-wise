import { motion } from "motion/react";
import type { CountryType } from "../types/Types";
import CountryItem from "./CountryItem";
type Props = {
	filteredCountries: CountryType[];
};

const CountryList = ({ filteredCountries }: Props) => {
	return (
		<motion.div
			className="grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-6 font-bold"
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
		>
			{filteredCountries.map((country) => (
				<CountryItem
					key={country.cca2}
					name={country.name.common}
					flag={country.flags.svg}
					countryCode={country.cca2}
				/>
			))}
		</motion.div>
	);
};

export default CountryList;
