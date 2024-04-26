import React, { useState } from "react";

export const InterestMessage = ({ onInterestChange }) => {
  const [interestData, SetInterestData] = useState({
    interest:""
  });
  const handleChange = (e) =>{
    const { name, value } = e.target;
    SetInterestData({...interestData, [name]:value});
    onInterestChange(value)
  }
  console.log(interestData);


  return (
    <>
      <div class="mb-3">
        <label for="gender" class="form-label fw-bold">
          Gaming:
        </label>
        <select
          class="form-select"
          id="gender"
          name="interest"
          value={interestData.interest}
          onChange={handleChange}
        >
          <option selected>Choose...</option>
          <option value="Cricket">Cricket</option>
          <option value="Football">Football</option>
          <option value="Tennis">Tennis</option>
          <option value="Table-Tennis">Table-Tennis</option>
        </select>
      </div>
    </>
  );
};
