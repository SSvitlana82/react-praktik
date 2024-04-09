import React from "react";

const Filtr = ({ filterValue, setfilterValue }) => {
  const handleChange = (event) => {
    setfilterValue(event.target.value);
  };
  return (
    <div>
      <input type="text" value={filterValue} onInput={handleChange} />
    </div>
  );
};

export default Filtr;
