import React from "react";
import { useState } from "react";
import DefaultButton from "../components/DefaultButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { ArrowDropDownOutlined } from "@mui/icons-material";

const dataObject = {
  vertical: {
    brands: ["BIBA", "W", "FAB INDIA", "ZARA", "H&M"],
    discount: ["10%", "20%", "30%", "40%", "50%"],
  },
  horizontal: {
    gender: ["male", "female", "kid", "boy", "girl"],
    category: ["jeans", "shirt", "t-shirt", "tops", "pants"],
    size: ["S", "M", "L", "XL", "XXL"],
  },
};

function Filters({ list, className, selectedFilters, setSelectedFilters }) {
  const handleCheckbox = (isChecked, item) => {
    if (isChecked) {
      setSelectedFilters([...selectedFilters, item]);
    } else {
      let index = selectedFilters.indexOf(item);
      let arr = [...selectedFilters];
      arr.splice(index, 1);
      setSelectedFilters(arr);
    }
  };

  return (
    <div className={className}>
      {list.map((item, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={selectedFilters.includes(item)}
            onChange={(e) => handleCheckbox(e.target.checked, item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
}

function Home() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const handleRemove = (item) => {
    let index = selectedFilters.indexOf(item);
    let arr = [...selectedFilters];
    arr.splice(index, 1);
    setSelectedFilters(arr);
  };
  const handleDropDownButton = (v, index, array) => {
    if (isDropdownOpen === index) {
      setIsDropdownOpen(null);
    }
    if (isDropdownOpen !== index) {
      setIsDropdownOpen(index);
    }
  };
  return (
    <>
      <div className="selected">
        {selectedFilters.map((item, index) => (
          <div key={index}>
            <DefaultButton
              label={item}
              icon={
                <CloseOutlinedIcon
                  style={{ margin: "2px", fontWeight: "400" }}
                  onClick={() => handleRemove(item)}
                />
              }
            />
          </div>
        ))}
      </div>
      <div className="filters">
        <div className="horizontal">
          {Object.entries(dataObject.horizontal).map((v, index) => {
            return (
              <div key={index}>
                <h4>{v[0].toUpperCase()}</h4>
                <Filters
                  list={v[1]}
                  className={"horizontal"}
                  selectedFilters={selectedFilters}
                  setSelectedFilters={setSelectedFilters}
                />
              </div>
            );
          })}
        </div>
        <div className="vertical">
          {Object.entries(dataObject.vertical).map((v, index, array) => {
            return (
              <div key={index}>
                <h4 style={{ border: "1px solid", margin: "5px" }}>
                  {v[0].toUpperCase()}
                  <ArrowDropDownOutlined
                    style={{ fontWeight: "400" }}
                    onClick={() => handleDropDownButton(v, index, array)}
                  />
                </h4>
                {index === isDropdownOpen && (
                  <Filters
                    list={v[1]}
                    className={"horizontal"}
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
