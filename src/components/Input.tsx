import React, { useRef, useState } from "react";

export default function Input() {
  const [string, setString] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  // const handleChange = (): void => {
  //   if (inputRef.current !== null) setString(inputRef.current.value);
  // };

  const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setString(e.target.value);
  };
  return (
    <>
      <h2>{string}</h2>
      <input type="text" ref={inputRef} onChange={handleEventChange} />
    </>
  );
}
