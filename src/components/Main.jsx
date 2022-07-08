import useSelectedContent from "../hooks/useSelectedContent";

const Title = () => {
	const { selectedContent } = useSelectedContent();

	return (
		<div className="w-full h-full p-2 sm:p-0 flex flex-col justify-center items-center mainAnimation">
			<h1 className="text-center text-4xl sm:text-6xl font-extralight tracking-wider text-basisFrontend-wt cursor-default">
				Basis Front-end
			</h1>
			<h2 className="px-5 lg:px-0 mt-8 md:mt-10 opacity-75 hover:opacity-100 text-center text-2xl font-extralight tracking-wider text-basisFrontend-wt ease-out duration-300 transition-all cursor-default">
				Sebastian Lacoste
			</h2>
			<h3 className="px-6 sm:px-0 mt-8 opacity-50 hover:opacity-100 text-center text-xl font-extralight tracking-widest text-basisFrontend-wt ease-out duration-300 transition-all cursor-default">
				{selectedContent}
			</h3>
		</div>
	);
};

export default Title;
