import React from "react";
import { UserIcon } from "../Assets/svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='box-border flex h-20 bg-cyan-900 justify-between items-center px-4 shadow-lg shadow-gray-400/50 '>
      <Link to='/' className='text-slate-100 text-3xl font-bold '>
        Frontend Quiz
      </Link>
      <div className='text-slate-100 flex gap-x-6 items-center'>
        <UserIcon />
      </div>
    </div>
  );
};

export { Navbar };
