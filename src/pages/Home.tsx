import { useEffect, useState } from "react";
import CountryItem from "../components/CountryItem";
import type { CountryType } from "../types/Types";
import api from "../services/api";
import Loading from "../components/Loading";

const Home = () => {
	const [countries, setCountries] = useState<CountryType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const getAllCountries = async () => {
			try {
				const response = await api.get("/all");
				setCountries(response.data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		getAllCountries();
	}, []);

	return (
		<>
			<h1 className="font-bold text-center text-2xl md:text-4xl p-6">
				🌎 World Wise
			</h1>
			{isLoading && <Loading />}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-bold cent">
				{countries.map((country) => (
					<CountryItem
						key={country.cca2}
						name={country.name.common}
						flag={country.flags.svg}
						countryCode={country.cca2}
					/>
				))}
			</div>
		</>
	);
};

export default Home;
