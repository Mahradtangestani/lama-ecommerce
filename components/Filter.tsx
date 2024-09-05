const Filter = ()=>{
    return (
        <div className="mt-12 flex justify-between">
           <div className="flex gap-2 flex-wrap">
              <select name="type" id="" className="py-2 px-4 rounded-2xl text-sm font-medium bg-gray-200">
                <option>Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
              </select>
              <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl w-24 pl-2 t-24 ring-1 ring-gray-400"/>
              <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl w-24 pl-2 t-24 ring-1 ring-gray-400"/>
              <select name="type" id="" className="py-2 px-4 rounded-2xl text-sm font-medium bg-gray-200">
                <option>Size</option>
                <option value="">Size</option>
                
              </select>
              <select name="type" id="" className="py-2 px-4 rounded-2xl text-sm font-medium bg-gray-200">
                <option>Color</option>
                <option value="">Color</option>
              </select>
              <select name="type" id="" className="py-2 px-4 rounded-2xl text-sm font-medium bg-gray-200">
                <option>Category</option>
                <option value="">New Arrival</option>
                <option value="">Popular</option>
              </select>
              <select name="type" id="" className="py-2 px-4 rounded-2xl text-sm font-medium bg-gray-200">
                <option>All Filters</option>
                <option value="">All Filters</option>
              </select>
           </div>
           <div>
           <select name="type" id="" className="py-2 px-4 rounded-2xl text-sm font-medium bg-gray-200 w-[105px]">
                <option>Sort By</option>
                <option value=""> low to hight</option>
                <option value=""> hight to low</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
              </select>
           </div>
        </div>
    )
}

export default Filter;