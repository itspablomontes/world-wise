import type { CountryType } from "../types/Types";

type Props = {
	value: string;
	onChange: (value: string) => void;
	countries: CountryType[];
	setFilteredCountries: React.Dispatch<React.SetStateAction<CountryType[]>>;
};

const SearchBar = ({
	value,
	onChange,
	countries,
	setFilteredCountries,
}: Props) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
		if (e.target.value) {
			const filteredArray = countries.filter((country) =>
				country.name.common
					.toLowerCase()
					.includes(e.target.value.toLowerCase()),
			);
			setFilteredCountries(filteredArray);
		} else {
			setFilteredCountries(countries);
		}
	};
	return (
		<input
			className="outline-none rounded-lg p-1 md:w-3/5 w-4/5 "
			type="search"
			value={value}
			onChange={handleChange}
		/>
	);
};

export default SearchBar;
