import { useEffect, useState } from "react";
import type { CountryType } from "../types/Types";
import api from "../services/api";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import CountryList from "../components/CountryList";
import Pagination from "../components/Pagination";

const Home = () => {
	const [countries, setCountries] = useState<CountryType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchInput, setSearchInput] = useState("");
	const [filteredCountries, setFilteredCountries] = useState(countries);
	const [currentPage, setCurrentPage] = useState(1);
	const countriesPerPage = 8;

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

	const lastCountryIndex = currentPage * countriesPerPage;
	const firsCountryIndex = lastCountryIndex - countriesPerPage;
	const currentCountries = filteredCountries.slice(
		firsCountryIndex,
		lastCountryIndex,
	);

	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<h1 className="font-bold text-center text-2xl md:text-4xl p-6">
				🌎 World Wise
			</h1>
			<SearchBar
				value={searchInput}
				onChange={setSearchInput}
				setCurrentPage={setCurrentPage}
				countries={countries}
				setFilteredCountries={setFilteredCountries}
			/>

			<Pagination
				totalCountries={filteredCountries.length}
				countriesPerPage={countriesPerPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
			{isLoading && <Loading />}
			{filteredCountries.length !== 0 ? (
				<CountryList filteredCountries={currentCountries} />
			) : (
				!isLoading && <div>No results found!</div>
			)}
		</div>
	);
};

export default Home;
