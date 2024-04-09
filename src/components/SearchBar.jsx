import { useState } from "react";
import { useId } from "react";

const SearchBar = ({ langValue, onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    console.log(event);
    setInputValue(event.target.value);
  };
  const selectId = useId();

  const langSwitcher = (evt) => {
    onSelect(evt.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
      <label htmlFor={selectId}>Choose language</label>
      <select onChange={langSwitcher} value={langValue} id={selectId}>
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default SearchBar;
