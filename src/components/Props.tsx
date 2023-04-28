import React from "react";
import { SendPropS } from "./ParentProps";
//name, age, hobbies

export default function Props({ name, age, hobbies }: SendPropS) {
  return (
    <>
      <h1>이름: {name}</h1>
      <h1>나이: {age}</h1>
      {hobbies?.map((item: string, idx: number) => {
        return <p key={idx}>{item}</p>;
      })}
    </>
  );
}
