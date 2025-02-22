import type { CountryType } from "../types/Types";

type Props = {
	value: string;
	onChange: (value: string) => void;
	countries: CountryType[];
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	setFilteredCountries: React.Dispatch<React.SetStateAction<CountryType[]>>;
};

const SearchBar = ({
	value,
	onChange,
	countries,
	setCurrentPage,
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
			setCurrentPage(1);
			setFilteredCountries(filteredArray);
		} else {
			setFilteredCountries(countries);
		}
	};
	return (
		<input
			className="outline-none rounded-lg p-1 md:w-1/5 w-4/5 "
			type="search"
			value={value}
			onChange={handleChange}
		/>
	);
};

export default SearchBar;
