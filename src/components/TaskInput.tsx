interface TaskInputProps {
	inputValue: string;
	setInputValue: (input: string) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TaskInput = ({
	inputValue,
	setInputValue,
	handleSubmit,
}: TaskInputProps) => {
	return (
		<div className="flex flex-col ml-12 mt-7 md:ml-40">
			<h1 className="font-semibold text-3xl mb-5">My Tasks</h1>
           
			<form
				action=""
				className="flex flex-row  items-start  sitems-center gap-2 ml-1 mt-4"
				onSubmit={(e) => handleSubmit(e)}
			>
				<input
					className=" border-1  border-[#cfcdea] w-3/4 sm:w-[420px] rounded-md text-sm mb-5 text-[#0e0c1d] outline-0 p-2 "
					type="text"
					placeholder="Input Task..."
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>

				<button
					className={`bg-[#1500ff]  pb-1 px-2 text-center rounded-md text-[#ffffff] font-bold text-2xl ${
						!inputValue
							? "opacity-50 cursor-not-allowed bg-gray-600 "
							: "cursor-pointer"
					}`}
					type="submit"
					disabled={!inputValue}
				>
					+
				</button>
			</form>
		</div>
	);
};

export default TaskInput;
