import React from "react";
import propTypes from "prop-types";

const Heroselector = ({ value, datas, placeholder }) => {
  return (
    <div>
      {/*container */}
      <select className="w-[350px] md:w-[400px] p-4 mt-4" name="">
        <option>{placeholder}</option>
        {datas.map((data, key) => (
          <option key={key}>{data.label}</option>
        ))}
      </select>
    </div>
  );
};

Heroselector.propTypes = {
  value: propTypes.string,
  datas: propTypes.array.isRequired,
  placeholder: propTypes.string,
};

Heroselector.defaultProps = {
  value: "",
  placeholder: "",
};

export default Heroselector;
