import React from "react";
import { useForm } from "react-hook-form";
import contact from "../../images/contact-img.svg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/*container */}
      <div className="h-full w-[360px] md:w-[1000px] mx-auto">
        {/*grid container */}
        <section className="grid grid-cols-2 gap-x-10px">
          {/*grid child-1 */}
          <article>
            <h1 className="text-black text-font-bold mt-[50px]">CONTACT US</h1>
            <p className="border-y-[3px] h-[4px] my-[20px]"></p>
            <p>
              Established in 2012, Happy Homes Portugal has helped hundreds of
              happy customers buy and sell Algarve property over the last 10
              years. We have a portfolio of over 300 high-quality homes for
              sale, and we work with partner developers and agents across the
              portugal, so our customers can see all the properties they want to
              view, all with one agent.
            </p>
            <img className="block mt-[40px]" src={contact} alt="contact-img" />
            <p className="mt-[40px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam fugit corporis consectetur eos dolorem, recusandae
              deserunt beatae quo laboriosam omnis facilis optio ea non fugiat
              pariatur laudantium aspernatur enim voluptatum quae vitae nihil.
              Iste, sequi!
            </p>
            <p className="mt-[20px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam fugit corporis consectetur eos dolorem, recusandae
              deserunt beatae quo laboriosam omnis facilis optio ea non fugiat
            </p>
            <p className="mt-[20px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam fugit corporis consectetur eos dolorem, recusandae
              deserunt beatae quo laboriosam omnis facilis optio ea non fugiat
              pariatur laudantium aspernatur enim voluptatum quae vitae nihil.
              Iste, sequi!
            </p>
            <p className="mt-[30px]">We look forward to meeting you soon!</p>
          </article>
          {/*grid child-2 */}
          <article className="mt-[0px] border-4 w-[300px] rounded-t-[10px] place-self-end">
            <h1 className="bg-[#1E0909] px-[15px] rounded-t-[10px] text-white text-[14px] font-bold py-[5px]">
              Contact Us
            </h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <article className="flex flex-col px-[15px] mt-[15px]">
                <p className="font-bold">Your name</p>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  {...register("name", { required: "NAME REQUIRED" })}
                  className="border-2 w-full px-[10px]"
                />
              </article>
              <article className="flex flex-col px-[15px] mt-[15px]">
                <p className="font-bold">Email</p>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  {...register("email", { required: "EMAIL REQUIRED" })}
                  className="border-2 w-full px-[10px]"
                />
              </article>
              <article className="flex flex-col px-[15px] mt-[15px]">
                <p className="font-bold">Number</p>
                <input
                  type="number"
                  placeholder="number"
                  name="number"
                  {...register("number", { required: "NUMBER REQUIRED" })}
                  className="border-2 w-full px-[10px]"
                />
              </article>
              <article className="flex flex-col px-[15px] mt-[15px]">
                <p>Your comment</p>
                <textarea
                  name="comment"
                  id=""
                  cols="30"
                  className="border-2 text-black"
                ></textarea>
              </article>
              {/* <button className="w-[300px] ml-[20px] text-white hover:bg-pink-400 mt-[15px] rounded-full bg-pink-600 text-center text-[14px] font-bold py-[5px]">
            send inquiry
          </button> */}
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
              {errors.number && (
                <p className="text-red-600">{errors.number.message}</p>
              )}
              <input
                type="submit"
                className="w-[250px] ml-[20px] text-white hover:bg-pink-400 mt-[15px] rounded-full bg-pink-600 text-center text-[14px] font-bold py-[5px]"
              />
            </form>
            <p className="px-[15px] pt-[15px]">
              When you send an enquiry, a member of our customer services team
              will reply to you with more information. By submitting this form,
              you confirm that you agree to our website
              <span className="text-pink-600"> privacy policy</span> and consent
              to cookies being stored on your device.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Contact;
