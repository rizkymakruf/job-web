function Seacrh() {
  return (
    <div className="w-full px-3 pt-4 pb-3 bg-gray-300 flex items-center justify-center gap-3">
      <div className="w-2/5 flex flex-col justify-start">
        <p>Job Description</p>
        <input
          className="w-full p-1 "
          placeholder="Filter by title, benefits, company, experiens"
        />
      </div>
      <div className="w-2/5 flex flex-col justify-start">
        <p>Location</p>
        <input
          className="w-full p-1 "
          placeholder="Filter by city, state, zip code or country"
        />
      </div>
      <div className="w-1/5 flex gap-3">
        <label className="flex items-center gap-1">
          <input type={"checkbox"}></input>
          <span>Full Time only</span>
        </label>
        <button className="bg-gray-400 text-white font-bold flex items-center justify-center px-4 py-2">
          Seacrh
        </button>
      </div>
    </div>
  );
}

export default Seacrh;
