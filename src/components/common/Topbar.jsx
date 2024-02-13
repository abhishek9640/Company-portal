// import React from 'react';
import { BsChatLeftText } from 'react-icons/bs'

export default function Topbar() {
  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <a className="text-2xl font-bold text-gray-800" href="#">
            Scrap
          </a>
          <form className="flex items-center">
            <div className='mr-3'>
            < BsChatLeftText size={25}/>
            </div>
            <input
              className="mr-2 py-2 px-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="py-2 px-4 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
