import { motion } from "motion/react";
import { Earth } from "lucide-react";

type Props = {
	region: string | undefined;
	subRegion: string | undefined;
	capital: string[] | undefined;
};

const Location = ({ region, subRegion, capital }: Props) => {
	return (
		<div className="flex flex-col items-center text-2xl">
			<motion.div
				initial={{ x: -200 }}
				animate={{ x: 0 }}
				transition={{ duration: 0.3 }}
				className="flex flex-col item-center text-center"
			>
				<Earth size={50} className="self-center" />
				<p>REGION</p>
				<p className="font-extralight">{region}</p>
			</motion.div>

			<motion.div
				className="border-b-2 border-t-2 border-white text-center my-2"
				initial={{ x: -300 }}
				animate={{ x: 0 }}
				transition={{ duration: 0.5 }}
			>
				<p>SUB-REGION</p>
				<p className="font-extralight">{subRegion}</p>
			</motion.div>
			<motion.div
				initial={{ x: -300 }}
				animate={{ x: 0 }}
				transition={{ duration: 0.7 }}
				className="text-center"
			>
				<p>CAPITAL</p>
				<p className="font-extralight">{capital ? capital[0] : "No Capital"}</p>
			</motion.div>
		</div>
	);
};

export default Location;
