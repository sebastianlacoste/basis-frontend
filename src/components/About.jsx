import { useState, useEffect } from "react";

import useSelectedContent from "../hooks/useSelectedContent";

import ApiStatus from "../helpers/ApiStatus";

const About = () => {
	const { selectedContent } = useSelectedContent();
	const [apiData, setApiData] = useState({});

	useEffect(() => {
		const getApiData = async () => {
			try {
				setApiData(await ApiStatus());
			} catch (error) {
				setApiData({});
			}
		};
		getApiData();
	}, []);

	return (
		<div className="aboutAnimation flex h-full w-full flex-col items-center justify-center p-2 sm:p-0">
			<h1 className="cursor-default text-center text-4xl font-extralight tracking-wider text-basisFrontend-wt sm:text-6xl">
				Basis Front-end
			</h1>
			<h2 className="mt-8 cursor-default px-5 text-center text-3xl font-extralight tracking-wider text-basisFrontend-wt opacity-75 transition-all duration-300 ease-out hover:opacity-100 md:mt-10 lg:px-0">
				Sebastian Lacoste
			</h2>
			<h3 className="mt-8 cursor-default px-6 text-center text-lg font-extralight tracking-widest text-basisFrontend-wt opacity-50 transition-all duration-300 ease-out hover:opacity-100 sm:px-0">
				{`ENV: ${selectedContent} | API: ${
					Object.values(apiData).length !== 0 ? "OK" : "ERROR"
				}`}
			</h3>
		</div>
	);
};

export default About;
