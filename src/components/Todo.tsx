import { useRef, useState } from "react";
import TodoChild from "./TodoChild";

export interface TaskProp {
  task: string;
  done: boolean;
}

export default function Todo() {
  const [taskArr, setTaskArr] = useState<TaskProp[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addList = (): void => {
    // let copyArr: Array<TaskProp> = [...taskArr];
    if (inputRef.current !== null) {
      // const props: TaskProp = {
      //   task: inputRef.current.value,
      //   done: isDone,
      // };
      // setTaskArr([...taskArr, props]);
      let newTask: TaskProp = { task: inputRef.current.value, done: isDone };
      // copyArr.push(newTask);
      setTaskArr([...taskArr, newTask]);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <input type="text" ref={inputRef} />
      <button onClick={addList}>추가</button>
      <h2>할일 목록</h2>
      {taskArr.map((item: TaskProp, idx: number) => (
        <>
          <TodoChild {...item} key={idx} />
        </>
      ))}
    </>
  );
}
