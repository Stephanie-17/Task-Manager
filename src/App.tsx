import "./App.css";
import { useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons";
import NavBar from "./components/NavBar";
import TaskInput from "./components/TaskInput";

import type { TaskObject } from "./types";
import { getItem, setItem } from "./utils/localStorage";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState<TaskObject[]>(() => {
		const item = getItem("tasks");
		return item || [];
	});
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		setItem("tasks", tasks);
	}, [tasks]);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (inputValue !== "") {
			const newTask = {
				id: Date.now(),
				name: inputValue,
				status: "Active",
			};
			setTasks([...tasks, newTask]);
		}
		setInputValue("");
	}

	return (
		<>
			<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
			<hr className="opacity-10 border-1 w-screen" />
			<TaskInput
				inputValue={inputValue}
				setInputValue={setInputValue}
				handleSubmit={handleSubmit}
			/>
			<FilterButtons tasks={tasks} setTasks={setTasks} />
		</>
	);
}

export default App;
