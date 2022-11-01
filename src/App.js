import DropDown from "./DropDown";
import "./input.css";

function App() {
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
    { value: "4", label: "Option 4" },
    { value: "5", label: "Option 5" },
    { value: "6", label: "Option 6" },
    { value: "7", label: "Option 7" },
  ];
  return (
    <div>
      <DropDown placeholder={"Select"} options={options} />
    </div>
  );
}

export default App;
