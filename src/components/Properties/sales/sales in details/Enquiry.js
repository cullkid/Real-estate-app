import React from "react";
import { useForm } from "react-hook-form";

const Enquiry = () => {
  const { register, handleSubmit, watch, formState: {errors}  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <section>
        <h1 className="bg-[#1E0909] px-[15px] rounded-t-[10px] text-white text-[14px] font-bold py-[5px]">
          Make An Enquiry
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
              className="border-2 text-black"></textarea>
          </article>
          {/* <button className="w-[300px] ml-[20px] text-white hover:bg-pink-400 mt-[15px] rounded-full bg-pink-600 text-center text-[14px] font-bold py-[5px]">
            send inquiry
          </button> */}
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
          {errors.number && (
            <p className="text-red-600">{errors.number.message}</p>
          )}
          <input
            type="submit"
            className="w-[300px] ml-[20px] text-white hover:bg-pink-400 mt-[15px] rounded-full bg-pink-600 text-center text-[14px] font-bold py-[5px]"
          />
        </form>
        <p className="px-[15px] pt-[15px]">
          When you send an enquiry, a member of our customer services team will
          reply to you with more information. By submitting this form, you
          confirm that you agree to our website
          <span className="text-pink-600"> privacy policy</span> and consent to
          cookies being stored on your device.
        </p>
        <p className="text-pink-600 mt-[15px] text-2xl px-[15px]">ID: 12345</p>
      </section>
    </div>
  );
};

export default Enquiry;
