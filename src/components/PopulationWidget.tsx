import { Users } from "lucide-react";

type Props = {
	population: string | undefined;
};

const PopulationWidget = ({ population }: Props) => {
	return (
		<>
			<div className="flex flex-col items-center text-center text-2xl md:col-span-2">
				<Users size={50} />
				<p>POPULATION</p>
				<p className="font-extralight">{population}</p>
			</div>
		</>
	);
};

export default PopulationWidget;
