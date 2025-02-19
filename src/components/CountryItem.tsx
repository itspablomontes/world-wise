import { Link } from "react-router-dom";

type Props = {
	name: string;
	flag: string;
	countryCode: string;
};

const CountryItem = ({ name, flag, countryCode }: Props) => {
	return (
		<Link
			className="rounded-md bg-zinc-700 flex justify-center flex-col"
			to={`/${countryCode}`}
		>
			<div>{name}</div>
			<img
				src={flag}
				alt={`${name} flag`}
				className="scale-50 max-h-52 self-center"
			/>
		</Link>
	);
};

export default CountryItem;
