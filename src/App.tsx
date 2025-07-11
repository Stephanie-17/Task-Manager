import "./App.css";
import { useState } from "react";
import FilterButtons from "./components/FilterButtons";
import NavBar from "./components/NavBar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import type { TaskObject } from "./types";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState<TaskObject[]>([]);
	 const [darkMode, setDarkMode] = useState(false)

 

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
		< >
			<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
			<hr className="opacity-10 border-1 w-screen" />
			<TaskInput
				inputValue={inputValue}
				setInputValue={setInputValue}
				handleSubmit={handleSubmit}
			/>
			<FilterButtons />
			<hr className="opacity-10 border-1 lg:w-[83%] md:w-[75%] md:ml-40 lg:ml-36 " />
			<TaskList tasks={tasks} setTasks={setTasks} />
		</>
	);
}

export default App;
