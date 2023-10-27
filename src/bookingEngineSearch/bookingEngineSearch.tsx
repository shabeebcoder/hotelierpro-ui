import React, { useState } from "react";
import "./styles.css";
import { Slider } from "antd";

function BookingEngineSearch(props: any) {
  const { roomnames ,onCheckboxChange, onPriceChange, minPrice, maxPrice} = props;

  const [priceRange, setPriceRange] = useState([0, 100]);
  const [checkboxState, setCheckboxState] = useState({});

  // Initialize the checkbox state based on the prop roomNames
  const initialCheckboxState = {};
  roomnames.forEach((roomname) => {
    initialCheckboxState[roomname] = false;
  });

  const handleReset = () => {
    setPriceRange([0, 100]);
    setCheckboxState(initialCheckboxState);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setCheckboxState({ ...checkboxState, [value]: checked });

    // if (checked) {
      onCheckboxChange(`${value} is checked`);
    // }
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);

    onPriceChange(`Price range is $${value[0]} - $${value[1]}`);
  };

  // Custom slider styles
  const sliderStyles = {
    // railStyle: { backgroundColor: "#09596B" },
    trackStyle: [{ backgroundColor: "#09596B" }],
  };

  return (
    <div className="bookingEngineSearchContainer">
      <div className="info-container">
        <div className="headingContainer">
          {/* <div className="heading"> */}
          <span className="head-filter">Filters</span>
          <span className="head-reset" onClick={handleReset}>
            Reset
          </span>
          {/* </div> */}
        </div>
        <div>
          <hr className="line" />
        </div>
        <div className="checkbox-container">
          <span className="checkbox-heading">Room Type</span>
          {roomnames.map((roomname) => (
            <label key={roomname} className="custom-label">
              <input
                type="checkbox"
                value={roomname}
                checked={checkboxState[roomname]}
                onChange={handleCheckboxChange}
              />
              <span className="checkbox-text">{roomname}</span>
            </label>
          ))}

          {/* <label className="custom-label">
            <input type="checkbox" value="Room 2 Single" />
            <span className="checkbox-text">Room 2 Single</span>
          </label>
          <label className="custom-label">
            <input type="checkbox" value="Room 1 double" />
            <span className="checkbox-text">Room 1 double</span>
          </label>
          <label className="custom-label">
            <input type="checkbox" value="Room 2 double" />
            <span className="checkbox-text">Room 2 double</span>
          </label> */}
        </div>
        <div>
          <hr className="line" />
        </div>
        <div className="pricerange-container">
          <span className="price-heading">Price Range</span>
          <Slider
            range // Add range prop for a range slider
            min={minPrice}
            max={maxPrice} 
            tooltipVisible={false}
            onChange={(e)=>handlePriceChange(e)}
            value={priceRange}
            // valueLabelDisplay="off" // Hide value labels
            {...sliderStyles}
          />
          <div className="min-max-price">{`$ ${priceRange[0]} - $ ${priceRange[1]}`}</div>
        </div>
      </div>
    </div>
  );
}

export default BookingEngineSearch;
