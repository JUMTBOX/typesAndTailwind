import React, { useState } from "react";

export default function Tail() {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsToggled((cur: boolean) => !cur);
  };
  return (
    <nav className="w-auto pl-10 pr-10 bg-slate-300 text-center">
      <div className="flex justify-between py-5">
        <ul className="flex gap-16">
          <li className="py-2 flex font-extrabold cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
            Logo
          </li>
          <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">
            Menu1
          </li>
          <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">
            Menu2
          </li>
          <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">
            Menu3
          </li>
        </ul>
        <a
          href="#"
          className="hidden md:block py-2 px-3 text-white font-bold bg-orange-500 hover:bg-slate-600 rounded transition-duration-3000"
        >
          로그인
        </a>

        {/* 모바일 메뉴 파트 */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 토글 파트 */}
      <div className={isToggled ? "md:hidden py-3" : "hidden py-3"}>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu1
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu2
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">
          Menu3
        </a>
      </div>
    </nav>
  );
}
