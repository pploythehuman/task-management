import { TaskInput } from "@/components";

export default function Home() {
  return (
    <>
      <div>
        <h1>My Tasks</h1>
        <TaskInput placeholder="Try typing 'Buy Milk'" />
      </div>
      <div>
        <div>To do</div>
      </div>
    </>
  );
}
