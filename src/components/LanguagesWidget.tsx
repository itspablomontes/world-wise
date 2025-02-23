import { Languages } from "lucide-react";
type Props = {
	languages:
		| {
				[key: string]: string;
		  }
		| undefined;
};

const LanguagesWidget = ({ languages }: Props) => {
	const languagesArr = [];
	for (const language in languages) {
		languagesArr.push(languages[language]);
	}
	return (
		<div className="flex flex-col items-center text-2xl">
			<Languages size={50} />
			<p>LANGUAGES</p>
			<ul className="font-extralight">
				{languagesArr.map((language) => (
					<li key={language}>- {language}</li>
				))}
			</ul>
		</div>
	);
};

export default LanguagesWidget;
