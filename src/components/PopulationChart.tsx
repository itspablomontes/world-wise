import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import type { PopulationDataType } from "../types/Types";
import Loading from "./Loading";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

type Props = {
	countryCode: string | undefined;
};
const baseURL = "https://countriesnow.space/api/v0.1";
const PopulationChart = ({ countryCode }: Props) => {
	const [populationData, setPopulationData] = useState<
		PopulationDataType[] | []
	>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const getCountryPopData = async () => {
			try {
				const response = await axios
					.post(`${baseURL}/countries/population`, {
						iso3: countryCode,
					})
					.then((response) => {
						return response.data.data.populationCounts;
					});
				setPopulationData(response);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		getCountryPopData();
	}, [countryCode]);
	const labels = populationData.map((data) => data.year);
	const popData = populationData.map((data) => data.value);
	const options = {
		layout: {
			padding: 15,
		},
		scales: {
			x: {
				ticks: {
					color: "white",
				},
			},
			y: {
				ticks: {
					color: "white",
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				position: "top" as const,
				labels: {
					color: "white",
				},
			},
		},
	};
	const data = {
		labels: labels,
		datasets: [
			{
				label: "Population Through The Years",
				data: popData,
				fill: false,
				borderColor: "green",
				tension: 0.2,
				pointRadius: 0,
			},
		],
	};
	if (isLoading) {
		return (
			<div className="md:col-span-2">
				<Loading />
			</div>
		);
	}
	return (
		<div className="flex  md:col-span-2 justify-center ">
			<Line
				options={options}
				data={data}
				className="text-white border-1 border-white rounded-2xl"
			/>
		</div>
	);
};

export default PopulationChart;
