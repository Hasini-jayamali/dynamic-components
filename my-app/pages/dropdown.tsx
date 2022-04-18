import { useState } from "react";

function Dropdown({selected, setSelected, options}) {

  const [isActive, setIsActive] = useState(false);

  // const options = ["aaa", "bbb", "ccc"];

  return (
    <div className="w-96 my-5 font-sans m-auto">
      <div className="p-2.5 bg-stone-200 shadow-lg shadow-gray-300 font-bold flex item-center justify-between cursor-pointer" 
      onClick={(e) => setIsActive(!isActive)}>
        {selected}
        </div>
        { isActive && (
          <div className="p-3 my-2 bg-stone-100 shadow-lg shadow-gray-100 text-slate-400 w-full ">
            {options.map((option) => (
              // eslint-disable-next-line react/jsx-key
              <div onClick={(e) => {setSelected(option) 
                setIsActive(false)}
              } className="p-2.5 cursor-pointer transition-all hover:bg-gray-200">
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
export default Dropdown;

