import React from "react";

export default function JoinBtn({ age }: { age: number }) {
  return (
    <div>
      {age >= 14 ? (
        <label>가입이 가능합니다</label>
      ) : (
        <label>14세 미만은 가입이 불가능합니다</label>
      )}
      <button
        disabled={age < 14}
        style={
          age > 14 ? { backgroundColor: "green" } : { backgroundColor: "red" }
        }
      >
        가입
      </button>
    </div>
  );
}
