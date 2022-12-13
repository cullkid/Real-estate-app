import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Cookies = () => {
  const [accept, setAccept] = useState(false);
  const closeCookies = () => setAccept(!accept);

  return (
    <div onClick={closeCookies}>
      <div
        onClick={closeCookies}
        className="flex justify-between border-t-[3px] items-center px-[40px] py-[30px] border-b-2">
        {!accept ? (
          <p className="text-[12px] md:text-[20px]">
            Happy homes portugal use cookies to secure and save privacy. Accept
            if you agree to the rules.
          </p>
        ) : (
          ""
        )}
        <FaRegTimesCircle onClick={closeCookies} />
      </div>
    </div>
  );
};

export default Cookies;
