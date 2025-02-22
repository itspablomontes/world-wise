import { motion } from "motion/react";

type Props = {
	totalCountries: number;
	countriesPerPage: number;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
	totalCountries,
	countriesPerPage,
	currentPage,
	setCurrentPage,
}: Props) => {
	const pages: number[] = [];
	const amountOfPages = Math.ceil(totalCountries / countriesPerPage) - 1;
	for (let i = 1; i <= amountOfPages; i++) {
		pages.push(i);
	}
	return (
		<div className="flex gap-1 flex-wrap justify-center ">
			<div className="flex join gap-2 font-bold ">
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					type="button"
					className="join-item btn text-lg"
					onClick={() => setCurrentPage(1)}
				>
					{"<<"}
				</motion.button>
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					type="button"
					className="join-item btn text-lg"
					onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
				>
					{"<"}
				</motion.button>
				<motion.button type="button" className="join-item btn text-lg">
					{currentPage}
				</motion.button>
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					type="button"
					className="join-item btn text-lg"
					onClick={() =>
						currentPage <= amountOfPages && setCurrentPage(currentPage + 1)
					}
				>
					{">"}
				</motion.button>
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					type="button"
					className="join-item btn text-lg"
					onClick={() => setCurrentPage(amountOfPages + 1)}
				>
					{">>"}
				</motion.button>
			</div>
		</div>
	);
};

export default Pagination;
