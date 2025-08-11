import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { IoFilterCircle } from 'react-icons/io5'

const FilterSection = () => {
  return (
      <div className="flex bg-white px-5 py-4 gap-10 rounded-sm items-center justify-between">
        <div>
          <IoFilterCircle className="text-[2em] cursor-pointer" />
        </div>
        <div className="flex items-center gap-x-3">
          <BiSearch className="text-[1.5em]" />
          <input
            type="search"
            placeholder="Search"
            className="border !text-zinc-500 !rounded-lg !h-10 !border-black"
          />
        </div>
      </div>
  )
}

export default FilterSection
