import React from "react";
import propTypes from "prop-types";

const Salesfilter = ({ value, filters, placeholder }) => {
  return (
    <div>
      {/*container */}
      <select className="w-[110px] mt-4 md:mt-[0] border-[4px]" name="">
        <option>{placeholder}</option>
        {filters.map((data, key) => (
          <option key={key}>{data.label}</option>
        ))}
      </select>
    </div>
  );
};

Salesfilter.propTypes = {
  value: propTypes.string,
  filters: propTypes.array.isRequired,
  placeholder: propTypes.string,
};

Salesfilter.defaultProps = {
  value: "",
  placeholder: "",
};

export default Salesfilter;
