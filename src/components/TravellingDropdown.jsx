import React, { useState } from "react";

export const TravellingDropdown = ({ onInterestChange }) => {
  const [interestData, SetInterestData] = useState({
    interest: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetInterestData({ ...interestData, [name]: value });
    onInterestChange(value);
  };
  console.log(interestData);
  return (
    <>
      <div class="mb-3">
        <label for="gender" class="form-label fw-bold">
          Travelling:
        </label>
        <select
          class="form-select"
          id="gender"
          name="interest"
          value={interestData.interest}
          onChange={handleChange}
        >
          <option selected>Choose...</option>
          <option value="Himalayas">Himalayas</option>
          <option value="Girnar">Girnar</option>
          <option value="Shimla">Shimla</option>
          <option value="Kerala">Kerala</option>
        </select>
      </div>
    </>
  );
};
