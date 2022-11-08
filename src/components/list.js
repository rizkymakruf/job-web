import { useEffect, useState } from "react";

function List() {
  const [list, setList] = useState([]);

  const fetchData = () => {
    return fetch(
      "http://dev3.dansmultipro.co.id/api/recruitment/positions.json"
    )
      .then((response) => response.json())
      .then((data) => setList(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full bg-gray-200 px-6 pt-6">
      <div className="w-full bg-white p-5">
        <div className="py-3">
          <p className="text-2xl font-bold pb-2">Job List</p>
        </div>
        {list &&
          list.length > 0 &&
          list.map((listObj, index) => (
            <div
              key={listObj.id}
              className="w-full flex justify-between items-center bordered border-t-2"
            >
              <div className="py-3 space-y-1">
                <p className="text-blue-500 font-semibold">{listObj.title}</p>
                <div className="flex">
                  <p className="text-gray-400 text-sm">{listObj.company} - </p>
                  <p className="text-green-500 font-semibold text-sm">
                    {listObj.type}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-gray-400 flex justify-end">
                  {listObj.location}
                </p>
                <p className="text-gray-400 text-sm flex justify-end">
                  2 days ago
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default List;
