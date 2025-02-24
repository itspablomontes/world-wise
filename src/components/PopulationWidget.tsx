import { Users } from "lucide-react";
import { motion } from "motion/react";
type Props = {
	population: string | undefined;
};

const PopulationWidget = ({ population }: Props) => {
	return (
		<>
			<motion.div
				className="flex flex-col items-center text-center text-2xl md:col-span-2"
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Users size={50} />
				<p>POPULATION</p>
				<p className="font-extralight">{population}</p>
			</motion.div>
		</>
	);
};

export default PopulationWidget;
