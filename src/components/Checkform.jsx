import { useState } from "react";

const Checkform = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const handleChange = (event) => {
    setHasAccepted(event.target.checked);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          onChange={handleChange}
          checked={hasAccepted}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};

export default Checkform;
