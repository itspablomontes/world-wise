type Props = {
	totalCountries: number;
	countriesPerPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
	totalCountries,
	countriesPerPage,
	setCurrentPage,
}: Props) => {
	const pages: number[] = [];
	for (let i = 1; i <= totalCountries / countriesPerPage; i++) {
		pages.push(i);
	}
	return (
		<div className="flex gap-1 flex-wrap justify-center">
			{pages.map((page) => (
				<div className="join" key={page}>
					<input
						className="join-item btn btn-square"
						type="radio"
						name="options"
						aria-label={`${page}`}
						defaultChecked={page === 1 && true}
						onClick={() => setCurrentPage(page)}
					/>
				</div>
			))}
		</div>
	);
};

export default Pagination;
