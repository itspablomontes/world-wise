import { useEffect, useState } from "react";
import CountryItem from "../components/CountryItem";
import type { CountryType } from "../types/Types";
import api from "../services/api";

const Home = () => {
	const [countries, setCountries] = useState<CountryType[]>([]);

	useEffect(() => {
		const getAllCountries = async () => {
			try {
				const response = await api.get("/all");
				setCountries(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getAllCountries();
	}, []);

	return (
		<div className="flex flex-col gap-3 font-bold">
			{countries.map((country) => (
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

export default Home;
