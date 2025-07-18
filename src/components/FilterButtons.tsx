import { useState } from "react";
import type { TaskObject } from "../types";
import TaskList from "./TaskList";

interface FilterButtonsProps {
	setTasks: React.Dispatch<React.SetStateAction<TaskObject[]>>;
	tasks: TaskObject[];
}

const FilterButtons = ({ setTasks, tasks }: FilterButtonsProps) => {
	const [activeFilter, setActiveFilter] = useState<
		"Active" | "Completed" | "All"
	>("All");

	const filterTasks = (filter: "Active" | "Completed" | "All") => {
		setActiveFilter(filter);
	};
	const filteredItems = tasks.filter((task) => {
		if (activeFilter === "Active") {
			return task.status === "Active";
		} else if (activeFilter === "Completed") {
			return task.status === "Completed";
		} else return true;
	});

	return (
		<>
			<div className="flex gap-8 ml-10 mt-6 font-medium sm:ml-14 md:ml-40 ">
				<p
					onClick={() => filterTasks("All")}
					className={` border-b-4 border-white dark:border-[#120F24] pb-3  ${
						activeFilter === "All"
							? " border-b-[#1500ff] dark:border-[#918CCF]"
							: ""
					}  cursor-pointer`}
				>
					All
				</p>
				<p
					onClick={() => filterTasks("Active")}
					className={` border-b-4 border-white  dark:border-[#120F24] pb-3 ${
						activeFilter === "Active"
							? " border-b-[#1500ff] dark:border-[#918CCF] "
							: ""
					}  cursor-pointer`}
				>
					Active
				</p>
				<p
					onClick={() => filterTasks("Completed")}
					className={` border-b-4 border-white  dark:border-[#120F24] pb-3 ${
						activeFilter === "Completed"
							? " border-b-[#1500ff] dark:border-[#918CCF]"
							: ""
					}  cursor-pointer`}
				>
					Completed
				</p>
			</div>
			<hr className="opacity-10 border-1 lg:w-[83%] md:w-[75%] md:ml-40 lg:ml-36 " />
			<TaskList tasks={filteredItems} setTasks={setTasks} />
		</>
	);
};

export default FilterButtons;
