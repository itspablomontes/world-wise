import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
	return (
		<div className="bg-zinc-900 font-primary min-h-screen text-white px-6 py-3">
			<Outlet />
		</div>
	);
};

export default DefaultLayout;
