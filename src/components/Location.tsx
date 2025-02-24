import { Earth } from "lucide-react";

type Props = {
	region: string | undefined;
	subRegion: string | undefined;
	capital: string[] | undefined;
};

const Location = ({ region, subRegion, capital }: Props) => {
	return (
		<div className="flex flex-col items-center text-2xl">
			<Earth size={50} />
			<p>REGION</p>
			<p className="font-extralight">{region}</p>
			<div className="border-b-2 border-t-2 border-white text-center my-2">
				<p>SUB-REGION</p>
				<p className="font-extralight">{subRegion}</p>
			</div>

			<p>CAPITAL</p>
			<p className="font-extralight">{capital ? capital[0] : "No Capital"}</p>
		</div>
	);
};

export default Location;
