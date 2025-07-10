import Task from "./Task";
import type { TaskObject } from "../types";

interface TaskListProps {
	tasks: TaskObject[];
	setTasks: React.Dispatch<React.SetStateAction<TaskObject[]>>;
}

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
	return (
		<div className="flex flex-col gap-2 justify-center items-center mt-6 md:ml-21 lg:ml-8">
			{tasks.length > 0 ? (
				tasks.map((task) => {
					return (
						<Task
							key={task.id}
							tasks={tasks}
							id={task.id}
							name={task.name}
							status={task.status}
							setTasks={setTasks}
						/>
					);
				})
			) : (
				<div className="text-gray-500 py-4 text-center">No Tasks Available</div>
			)}
		</div>
	);
};

export default TaskList;
