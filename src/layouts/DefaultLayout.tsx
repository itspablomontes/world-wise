import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
	return (
		<div className="bg-zinc-900 font-primary min-h-screen text-white px-6 py-3 md:px-[10%]">
			<Outlet />
		</div>
	);
};

export default DefaultLayout;
