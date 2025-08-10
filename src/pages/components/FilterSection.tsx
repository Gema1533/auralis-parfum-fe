import React from 'react'

const FilterSection = () => {
  return (
    <div className="flex bg-white px-10 py-6 gap-10 rounded-sm">
      <form className="select-item select-form">
        <span className="title">Sort :</span>
        <select
          title="sort"
          data-placeholder="9 Products/Page"
          className="chosen-select !ms-3 border !border-black rounded-2xl !py-2 !px-3"
        >
          <option value="2">9 Products/Page</option>
          <option value="1">12 Products/Page</option>
          <option value="3">10 Products/Page</option>
          <option value="4">8 Products/Page</option>
          <option value="5">6 Products/Page</option>
        </select>
      </form>
      <form className="filter-choice select-form">
        <span className="title">Sort by : </span>
        <select
          title="sort-by"
          data-placeholder="Price: Low to High"
          className="chosen-select !ms-3 border !border-black rounded-2xl !py-2 !px-3"
        >
          <option value="1">Price: Low to High</option>
          <option value="2">Sort by popularity</option>
          <option value="3">Sort by average rating</option>
          <option value="4">Sort by newness</option>
          <option value="5">Sort by price: low to high</option>
        </select>
      </form>
  
    </div>
  )
}

export default FilterSection
