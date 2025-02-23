import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";
import type { CountryType } from "../types/Types";
import Loading from "../components/Loading";
import Location from "../components/Location";

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
	if (isLoading) {
		return <Loading />;
	}
	return (
		<div className="flex flex-col justify-center items-center gap-2 py-5 font-extrabold font-secondary">
			<div className="text-center  text-3xl uppercase ">{countryName}</div>
			<div>
				<img src={countryFlag} alt={`${countryName} flag`} className="h-50" />
			</div>

			<Location
				region={countryRegion}
				subRegion={countrySubRegion}
				capital={countryCapital}
			/>
		</div>
	);
};

export default CountryPage;
