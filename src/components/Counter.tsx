import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState<number>(0);

  return (
    <>
      <h1>카운터</h1>
      <h2>{number}</h2>
      <button
        onClick={() => {
          setNumber((cur: number) => cur + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setNumber((cur: number) => cur - 1);
        }}
      >
        -
      </button>
    </>
  );
}
