import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdAddIcCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutubeSquare,
} from "react-icons/fa";

const ContactDetail = () => {
  return (
    <div>
      <p className="border-[4px] border-dotted border-[#230A6B] my-[50px]"></p>
      {/*grid container */}
      <section className="md:grid grid-cols-3 gap-x-[40px]">
        {/*grid child-1 */}
        <address className="border-[4px] rounded-[10px]">
          <h1 className="text-white rounded-t-[10px] font-bold text-[16px] text-center bg-slate-900">
            OUR CONTACT ADDRESS
          </h1>
          <div className="flex items-center justify-between mx-auto w-[200px] py-[15px]">
            <ImLocation2 />
            <article>
              <p className="text-[11px] font-bold mt-[15px]">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-[11px] w-[120px] my-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                possimus asperiores similique facere vitae non.
              </p>
              <Link>
                T:{" "}
                <span className="text-[#230A6B] text-[11px]"> 123456789</span>
              </Link>
            </article>
          </div>
          <div className="flex items-center justify-between mx-auto w-[200px] py-[15px]">
            <MdAddIcCall />
            <article>
              <p className="text-[11px]">
                Lisbon: <Link className="text-[#230A6B]">+123456789</Link>
              </p>
              <p className="text-[11px]">
                Porto:{" "}
                <Link className="text-[#230A6B] my-[10px]">+123456789</Link>
              </p>
              <p className="text-[11px]">
                Algarve: <Link className="text-[#230A6B]">+123456789</Link>
              </p>
            </article>
          </div>
          <div className="flex items-center justify-between mx-auto w-[200px] py-[15px]">
            <AiOutlineMail />
            <Link className="text-[#230A6B] text-[11px]">
              example@gmail.com
            </Link>
          </div>
        </address>
        {/*grid child-2 */}
        <main className="border-4 rounded-[10px] h-[100px] md:my-[0px] my-[25px]">
          <h1 className="text-white rounded-t-[10px] font-bold text-[16px] text-center bg-slate-900">
            FOLLOW US
          </h1>
          <article className="my-auto flex items-center justify-between p-4">
            <Link>
              <FaFacebook size={25} className="text-pink-600" />
            </Link>
            <Link>
              {" "}
              <FaTwitter size={25} className="text-pink-600" />
            </Link>
            <Link>
              {" "}
              <FaInstagram size={25} className="text-pink-600" />
            </Link>
            <Link>
              <FaYoutubeSquare size={25} className="text-pink-600" />
            </Link>
          </article>
        </main>
        {/*grid child-3 */}
        <main className="border-4 rounded-[10px] h-[220px] md:h-[250px]">
          <h1 className="text-white rounded-t-[10px] font-bold text-[16px] text-center bg-slate-900">
            NEWSLETTER
          </h1>
          <article className="p-[30px]">
            <div className="p-[15px] rounded-[15px] bg-gray-200">
              <p>
                Be the first to receive new & reduced Portugal properties, with
                the Happy Homes Portugal newsletter.
              </p>
            </div>
            <Link
              to="/sign up"
              className="block bg-pink-600 text-center text-white  rounded-full mt-[20px]"
            >
              SIGN UP
            </Link>
          </article>
        </main>
      </section>
    </div>
  );
};

export default ContactDetail;
