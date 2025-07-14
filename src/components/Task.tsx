import type { TaskObject } from "../types";

interface TaskProps {
	tasks: TaskObject[];
	id: number;
	name: string;
	status: string;
	setTasks: React.Dispatch<React.SetStateAction<TaskObject[]>>;
}
const Task = ({ id, name, status, setTasks }: TaskProps) => {
	function toggleStatus(id: number, e: React.ChangeEvent<HTMLInputElement>) {
		setTasks((tasks) =>
			tasks.map((task) =>
				task.id === id
					? {
							...task,
							status: task.status === "Active" ? "Completed" : "Active",
					  }
					: task
			)
		);

		console.log(e.currentTarget);
	}

	function deleteTask(taskToRemove: number) {
		setTasks((prevTasks) =>
			prevTasks.filter((task) => task.id !== taskToRemove)
		);
	}
	return (
		<div
			className={`flex p-6 items-center justify-between w-[90%] lg:w-[85%] ${
				status === "Completed" ? "opacity-50 bg-gray-300 line-through " : ""
			} `}
		>
			<p className="">{name}</p>
			<div className="flex gap-3.5 items-center-safe">
				<input
					type="checkbox"
					checked={status === "Completed"}
					className="p-6 w-5 h-5 cursor-pointer accent-[#1500ff] dark:border-[#918CCF] dark:bg-[#120F24]"
					onChange={(e) => toggleStatus(id, e)}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="24"
					height="24"
					viewBox="0,0,256,256"
					cursor={"pointer"}
					onClick={() => deleteTask(id)}
				>
					<g
						fill="#878787"
						fillRule="nonzero"
						stroke="none"
						strokeWidth="1"
						strokeLinecap="butt"
						strokeLinejoin="miter"
						strokeMiterlimit="10"
						strokeDasharray=""
						strokeDashoffset="0"
						fontFamily="none"
						fontWeight="none"
						fontSize="none"
						textAnchor="none"
						style={{ mixBlendMode: "normal" }}
					>
						<g transform="scale(10.66667,10.66667)">
							<path d="M10,2l-1,1h-6v2h18v-2h-6l-1,-1zM4.36523,7l1.70313,15h11.86328l1.70313,-15z"></path>
						</g>
					</g>
				</svg>
			</div>
		</div>
	);
};

export default Task;
