import React from "react";
import DefaultButton from "../DefaultButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const SelectedOptionList = ({
  selectedTempOptions,
  setSelectedTempOptions,
}) => {
  const onRemove = (_, index) => {
    const newDropdownSelectedList = [...selectedTempOptions];
    const deleteSelectedOption = newDropdownSelectedList[index];
    const indexValue = newDropdownSelectedList.indexOf(deleteSelectedOption);
    if (newDropdownSelectedList) {
      newDropdownSelectedList.splice(indexValue, 1);
    }
    setSelectedTempOptions(newDropdownSelectedList);
  };

  return (
    <div style={{ display: "flex" }}>
      {selectedTempOptions.map((value, index) => (
        <div>
          <DefaultButton
            label={value.label}
            icon={
              <CloseOutlinedIcon
                style={{ margin: "2px", fontWeight: "400" }}
                onClick={() => {
                  onRemove(value, index);
                }}
              />
            }
          />
        </div>
      ))}
    </div>
  );
};

export default SelectedOptionList;
