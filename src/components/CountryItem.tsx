import { Link } from "react-router-dom";

type Props = {
	name: string;
	flag: string;
	countryCode: string;
};

const CountryItem = ({ name, flag, countryCode }: Props) => {
	return (
		<Link
			className="flex justify-center flex-col text-center h-32 border-2 border-amber-600 p-3 rounded-xl hover:bg-zinc-600"
			to={`/${countryCode}`}
		>
			<img
				src={flag}
				alt={`${name} flag`}
				className=" self-center rounded-lg h-full max-h-12 md:max-h-25"
			/>
			<div>{name}</div>
		</Link>
	);
};

export default CountryItem;
