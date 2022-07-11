import useSelectedContent from "../hooks/useSelectedContent";

const About = () => {
	const { selectedContent } = useSelectedContent();

	return (
		<div className="aboutAnimation flex h-full w-full flex-col items-center justify-center p-2 sm:p-0">
			<h1 className="cursor-default text-center text-4xl font-extralight tracking-wider text-basisFrontend-wt sm:text-6xl">
				Basis Front-end
			</h1>
			<h2 className="mt-8 cursor-default px-5 text-center text-2xl font-extralight tracking-wider text-basisFrontend-wt opacity-75 transition-all duration-300 ease-out hover:opacity-100 md:mt-10 lg:px-0">
				Sebastian Lacoste
			</h2>
			<h3 className="mt-8 cursor-default px-6 text-center text-xl font-extralight tracking-widest text-basisFrontend-wt opacity-50 transition-all duration-300 ease-out hover:opacity-100 sm:px-0">
				{selectedContent}
			</h3>
		</div>
	);
};

export default About;
