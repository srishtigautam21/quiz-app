import React from "react";
import { UserIcon } from "../Assets/svg";

const Navbar = () => {
  return (
    <div className='box-border flex h-20 bg-cyan-900 justify-between items-center px-4 shadow-lg shadow-gray-400/50 '>
      <div className='text-slate-100 text-3xl font-bold '>Frontend Quiz</div>
      <div className='text-slate-100 flex gap-x-6 items-center'>
        <p className='text-lg font-semibold'>Home</p>
        <UserIcon />
      </div>
    </div>
  );
};

export { Navbar };
