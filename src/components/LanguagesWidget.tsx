import { Languages } from "lucide-react";
import { motion } from "motion/react";
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
		<motion.div
			className="flex flex-col items-center text-2xl"
			initial={{ x: 300 }}
			animate={{ x: 0 }}
			transition={{ duration: 0.7 }}
		>
			<Languages size={50} />
			<p>LANGUAGES</p>
			<ul className="font-extralight">
				{languagesArr.map((language) => (
					<li key={language}>- {language}</li>
				))}
			</ul>
		</motion.div>
	);
};

export default LanguagesWidget;
