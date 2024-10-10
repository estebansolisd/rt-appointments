import Link from "next/link";
type Task = {
  date: string;
  description: string;
  status: string;
};

const TasksToDo = ({ todos }: { todos: Task[] }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold mb-3">Tasks To Do</h3>
        <Link href="/todos">View All</Link>
      </div>
      {todos.map((task, index) => (
        <div key={index} className="mb-4">
          <p className="font-bold text-sm">
            {new Date(task.date).toLocaleString()}
          </p>
          <p className="text-gray-500">{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TasksToDo;
