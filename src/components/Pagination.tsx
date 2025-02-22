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
		<div className="flex gap-1 flex-wrap justify-center">
			<div className="join">
				<button
					type="button"
					className="join-item btn"
					onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
				>
					«
				</button>
				<button type="button" className="join-item btn">
					{currentPage}
				</button>
				<button
					type="button"
					className="join-item btn"
					onClick={() =>
						currentPage <= amountOfPages && setCurrentPage(currentPage + 1)
					}
				>
					»
				</button>
			</div>
		</div>
	);
};

export default Pagination;
