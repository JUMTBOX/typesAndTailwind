import React from "react";
import Props from "./Props";

export interface SendPropS {
  name: string;
  age: number;
  hobbies?: Array<string>;
}

export default function ParentProps() {
  const info: SendPropS = {
    name: "WWW",
    age: 28,
    hobbies: ["...", "!!!", "???"],
  };

  return (
    <>
      <Props {...info} />
    </>
  );
}
