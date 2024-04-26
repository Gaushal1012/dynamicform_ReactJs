import React, { useState, useEffect } from "react";
import { InterestMessage } from "./InterestMessage";
import { TravellingDropdown } from "./TravellingDropdown";

export const DynamicForm = () => {
  var initialState = {
    name: "",
    email: "",
    age: "",
    gender: "",
    interests: [],
    travelling:"",
    gaming:"",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [interestMessage, setInterestMessage] = useState(false);
  const [interestTravelling, setInterestTravelling] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handling checkboxes for multiple selection
    if (type === "checkbox") {
      if (checked) {
        setFormData({ ...formData, interests: [...formData.interests, value] });
      } else {
        setFormData({
          ...formData,
          interests: formData.interests.filter(
            (interest) => interest !== value
          ),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleGamingInterestChange = (selectedOption) => {
    // Update the formData state with the selected option
    setFormData({ ...formData, gaming: selectedOption });
  };

  const handleTravellingInterestChange = (selectedOption) => {
    // Update the formData state with the selected option
    setFormData({ ...formData, travelling: selectedOption });
  };

  console.log(formData);

  useEffect(() => {
    // Check if "Gaming" is present in formData.interests
    setInterestMessage(formData.interests.includes("Gaming"));
    setInterestTravelling(formData.interests.includes("Travelling"));
  }, [formData.interests]);
  return (
    <>
      <div class="container col-md-6 mt-5">
        <h2>Bootstrap Form Example</h2>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label fw-bold">
              Name:
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label fw-bold">
              Email:
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-3">
            <label for="age" class="form-label fw-bold">
              Age:
            </label>
            <input
              type="number"
              class="form-control"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
            />
          </div>
          <div class="mb-3">
            <label for="gender" class="form-label fw-bold">
              Gender:
            </label>
            <select
              class="form-select"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option selected>Choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-check-label fw-bold">Interests:</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="Travelling"
                name="interests"
                value="Travelling"
                // checked={formData.interests === "Travelling"}
                checked={formData.interests.includes("Travelling")}
                onChange={handleChange}
              />
              <label class="form-check-label fw-bold" for="interest1">
                Travelling
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="Gaming"
                name="interests"
                value="Gaming"
                // checked={formData.interests === "Gaming"}
                checked={formData.interests.includes("Gaming")}
                onChange={handleChange}
              />
              <label class="form-check-label fw-bold" for="interest2">
                Gaming
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="Singing"
                name="interests"
                value="Singing"
                // checked={formData.interests === "Singing"}
                checked={formData.interests.includes("Singing")}
                onChange={handleChange}
              />
              <label class="form-check-label fw-bold" for="interest3">
                Singing
              </label>
            </div>
          </div>
          {interestTravelling && <TravellingDropdown onInterestChange={handleTravellingInterestChange} />}
          {interestMessage && <InterestMessage onInterestChange={handleGamingInterestChange} />}
          <div class="mb-3">
            <label for="message" class="form-label fw-bold">
              Message:
            </label>
            <textarea
              class="form-control"
              id="message"
              rows="3"
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary fw-bold">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};



