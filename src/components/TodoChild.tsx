import { useState } from "react";
import { TaskProp } from "./Todo";

export default function TodoChild({ task, done }: TaskProp) {
  const [isDone, setIsDone] = useState<boolean>(done);
  return (
    <>
      <div>할일: {task}</div>
      <div>완료여부: {isDone === false ? "미완료" : "완료"}</div>
      <input
        type="checkbox"
        onClick={() => {
          setIsDone(!isDone);
        }}
      />
    </>
  );
}
