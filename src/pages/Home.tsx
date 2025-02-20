import { useEffect, useState } from "react";
import type { CountryType } from "../types/Types";
import api from "../services/api";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import CountryList from "../components/CountryList";

const Home = () => {
	const [countries, setCountries] = useState<CountryType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchInput, setSearchInput] = useState("");
	const [filteredCountries, setFilteredCountries] = useState(countries);

	useEffect(() => {
		const compareCountriesName = (a: CountryType, b: CountryType) =>
			a.name.common.localeCompare(b.name.common);

		const getAllCountries = async () => {
			try {
				const response = await api.get("/all");
				const returnedCountries = response.data;
				const sortedCountries = returnedCountries.sort(
					(a: CountryType, b: CountryType) => compareCountriesName(a, b),
				);
				setCountries(sortedCountries);
				setFilteredCountries(sortedCountries);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		getAllCountries();
	}, []);

	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<h1 className="font-bold text-center text-2xl md:text-4xl p-6">
				🌎 World Wise
			</h1>
			<SearchBar
				value={searchInput}
				onChange={setSearchInput}
				countries={countries}
				setFilteredCountries={setFilteredCountries}
			/>
			{isLoading && <Loading />}
			{filteredCountries.length !== 0 ? (
				<CountryList filteredCountries={filteredCountries} />
			) : (
				<div>No results found!</div>
			)}
		</div>
	);
};

export default Home;
