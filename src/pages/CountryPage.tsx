import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";
import type { CountryType } from "../types/Types";
import Loading from "../components/Loading";
import Location from "../components/Location";
import LanguagesWidget from "../components/LanguagesWidget";
import PopulationWidget from "../components/PopulationWidget";
import PopulationChart from "../components/PopulationChart";

const CountryPage = () => {
	const [country, setCountry] = useState<CountryType>();
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();
	useEffect(() => {
		const getCountryInfo = async () => {
			try {
				const response = await api.get(`alpha/${id}`);
				setCountry(response.data[0]);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		getCountryInfo();
	}, [id]);
	const countryName = country?.name.common;
	const countryFlag = country?.flags.svg;
	const countryRegion = country?.region;
	const countrySubRegion = country?.subregion;
	const countryCapital = country?.capital[0];
	const countryLang = country?.languages;
	const countryPop = country?.population.toLocaleString();
	const countryPopCode = country?.cca3;
	if (isLoading) {
		return <Loading />;
	}
	return (
		<div className="flex flex-col justify-center items-center gap-2 py-5 font-extrabold font-secondary">
			<div className="text-center  text-3xl uppercase ">{countryName}</div>
			<div className="py-5 px-10 rounded-2xl border-1 border-white">
				<img
					src={countryFlag}
					alt={`${countryName} flag`}
					className="h-50 shadow-lg"
				/>
			</div>
			<div className="flex flex-col gap-8 items-center md:grid md:grid-cols-2">
				<Location
					region={countryRegion}
					subRegion={countrySubRegion}
					capital={countryCapital}
				/>
				<LanguagesWidget languages={countryLang} />
				<PopulationWidget population={countryPop} />
				<PopulationChart countryCode={countryPopCode} />
			</div>
		</div>
	);
};

export default CountryPage;
