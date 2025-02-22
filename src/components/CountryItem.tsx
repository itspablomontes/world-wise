import { Link } from "react-router-dom";
import { motion } from "motion/react";
type Props = {
	name: string;
	flag: string;
	countryCode: string;
};

const CountryItem = ({ name, flag, countryCode }: Props) => {
	return (
		<Link to={`/${countryCode}`}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				className="flex justify-center flex-col text-center h-50 min-w-full flex-1 bg-zinc-800 drop-shadow-xl p-3 rounded-xl hover:bg-zinc-600"
			>
				<img
					src={flag}
					alt={`${name} flag`}
					className=" self-center rounded-lg h-full max-h-15 md:max-h-25"
				/>
				<div className="text-">{name}</div>
			</motion.div>
		</Link>
	);
};

export default CountryItem;
