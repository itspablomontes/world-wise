import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route index element={<Home />} />
				<Route path="/:id" element={<CountryPage />} />
			</Route>
		</Routes>
	);
};

export default Router;
