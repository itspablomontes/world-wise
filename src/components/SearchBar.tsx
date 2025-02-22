import type { CountryType } from "../types/Types";
import { motion } from "motion/react";
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
		<motion.label
			className="input  flex items-center gap-2  bg-zinc-800 rounded-xl md:p-2 md:text-lg"
			initial={{ y: 100 }}
			animate={{ y: 0 }}
		>
			<input
				className="grow outline-none"
				placeholder="Search"
				type="search"
				value={value}
				onChange={handleChange}
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				className="h-4 w-4 opacity-70"
			>
				<title>Search</title>
				<path
					fillRule="evenodd"
					d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
					clipRule="evenodd"
				/>
			</svg>
		</motion.label>
	);
};

export default SearchBar;
