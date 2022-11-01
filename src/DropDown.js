import { faCaretDown } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

const DropDown = ({ placeholder, options }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectValue) {
      return selectValue.label;
    }
    return placeholder;
  };

  const onItemClick = (item) => {
    console.log(item);
    setSelectValue(item);
  };

  const isSelected = (item) => {
    if (!selectValue) return false;
    return item.value === selectValue.value;
  };
  return (
    <div className="m-10 text-start relative border-2 rounded-lg w-1/4">
      <div
        className="flex items-center justify-between select-none"
        onClick={handleInputClick}
      >
        <div className={`p-3 ${!selectValue && "text-gray-500 "}`}>{getDisplay()}</div>
        <div
          className={
            "absolute w-full top-14 " +
            `${showMenu && "border-2 "}` +
            " rounded-lg max-h-52 overflow-auto"
          }
        >
          {showMenu &&
            options.map((option) => (
              <div
                onClick={() => onItemClick(option)}
                key={option.value}
                className={
                  "p-2 cursor-pointer hover:bg-sky-100 " +
                  `${isSelected(option) && " bg-sky-100"}`
                }
              >
                {option.label}
              </div>
            ))}
        </div>
        <div>
          <div className="p-3">
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
