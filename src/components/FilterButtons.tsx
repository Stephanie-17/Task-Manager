const FilterButtons = () => {
	return (
		<div className="flex gap-8 ml-10 mt-6 font-medium sm:ml-14 md:ml-40 ">
			<p className="border-b-4 border-b-[#1500ff] pb-3 cursor-pointer">All</p>
			<p className="cursor-pointer">Active</p>
			<p className="cursor-pointer">Completed</p>
		</div>
	);
};

export default FilterButtons;
