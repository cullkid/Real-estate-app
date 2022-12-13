import React from "react";
// import { Link } from "react-router-dom";

const Evaluate = () => {
  return (
    <div className="h-[1650px] md:h-[750px]">
      {/*container */}
      <section className="h-full w-[360px] md:w-[1000px] mx-auto">
        {/*grid container */}
        <main className="md:grid grid-cols-2">
          {/*gride child-1 */}
          <div className="mt-[30px] md:w-[600px]">
            <h1 className="text-center font-bold text-2xl">
              Want to sell your property in portugal with us?
            </h1>
            <h2 className="mt-[30px] text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              repellat ab repellendus a repudiandae minus numquam rem delectus
              impedit possimus.
            </h2>
            <p className="mt-[40px] font-bold">
              Evaluation and marketing process
            </p>
            <ul>
              <li className="mt-[5px]">
                . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                qui sed ipsum. Corporis, totam numquam!
              </li>
              <li className="mt-[5px]">
                . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                qui sed ipsum. Corporis, totam numquam!
              </li>
              <li className="mt-[5px]">
                . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                qui sed ipsum. Corporis, totam numquam!
              </li>
              <li className="mt-[5px]">
                . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                qui sed ipsum. Corporis, totam numquam!
              </li>
            </ul>

            <h1 className="mt-[40px] font-bold">Viewing process</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus voluptatem accusamus debitis et laborum illo!
              Nesciunt ullam nobis itaque in? Modi quibusdam ut impedit id
              mollitia molestiae incidunt! At explicabo odit quibusdam facilis?
              Vero sapiente dolorem quae consectetur praesentium autem,
              voluptate quos molestiae. Pariatur corporis officiis debitis
              cupiditate id aspernatur.
            </p>
            <p className="mt-[15px] text-2xl">
              For more inqury on how to sell you property with us, fill and
              submit the formfield to us.
            </p>
          </div>
          {/*grid child-2 */}
          <div className="md:w-[350px] w-[360] bg-gray-300 mt-[30px] md:mt-[80px] h-[550px] md:ml-[170px]">
            <div className="md:w-[300px] w-[300px] mx-auto">
              <p className="font-bold py-[20px]">
                You will receive a confirmation email and one of our worker will
                contact you after you would have submited your form.
              </p>
              {/*fullname container */}
              <article className="flex flex-col py-[15px]">
                <label className="font-bold" htmlFor="">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  className="border-2 px-[15px] py-[3px]"
                />
              </article>
              {/*email container */}
              <article className="flex flex-col">
                <label className="font-bold" htmlFor="">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="border-2 px-[15px] py-[3px]"
                />
              </article>
              {/* */}
              <article className="flex flex-col py-[15px]">
                <label className="font-bold" htmlFor="">
                  Number
                </label>
                <input
                  type="text"
                  placeholder="number"
                  className="border-2 px-[15px] py-[3px]"
                />
              </article>
              {/*ID container */}
              {/* <article className="flex flex-col">
                <label className="font-bold" htmlFor="">
                  ID
                </label>
                <input
                  type="text"
                  placeholder="id number"
                  className="border-2 px-[15px] py-[3px]"
                />
              </article> */}
              {/*address container */}
              <article className="flex flex-col">
                <label className="font-bold" htmlFor="">
                  Property location
                </label>
                <input
                  type="text"
                  placeholder="number, street and town"
                  className="border-2 px-[15px] py-[3px]"
                />
              </article>
              {/*exist container */}
              <article className="flex flex-col pb-[15px]">
                <label className="font-bold" htmlFor="">
                  Years
                </label>
                <input
                  type="text"
                  placeholder="years of existence"
                  className="border-2 px-[15px] py-[3px]"
                />
              </article>
              {/* button container */}
              <button className="bg-pink-600 py-[3px] text-white font-bold hover:bg-pink-400 w-[100px] rounded-full">
                Submit
              </button>
            </div>
          </div>
          {/*grid child-2 */}
          {/* <div className="md:w-[350px] w-[300px] mt-[20px] md:mt-[150px] h-[280px] p-[20px] md:ml-[140px] mx-auto bg-gray-300 "> */}
          {/* <p className="text-center font-bold pb-[10px]">Login</p>
            {/*email container */}
          {/* <article className="flex flex-col"> */}
          {/* <label className="font-bold" htmlFor=""> */}
          {/* Email */}
          {/* </label> */}
          {/* <input */}
          {/* type="text" */}
          {/* placeholder="example@gmail.com" */}
          {/* className="border-2 px-[15px] py-[3px]" */}
          {/* /> */}
          {/* </article> */}
          {/*password container */}
          {/* <article className="flex flex-col"> */}
          {/* <label className="font-bold" htmlFor=""> */}
          {/* Password */}
          {/* </label> */}
          {/* <input */}
          {/* type="text" */}
          {/* placeholder="password" */}
          {/* className="border-2 px-[15px] py-[3px]" */}
          {/* /> */}
          {/* </article> */}
          {/* button container */}
          {/* <button className="bg-pink-600 py-[3px] mt-[10px] text-white font-bold hover:bg-pink-400 w-[100px] rounded-full"> */}
          {/* Login */}
          {/* </button> */}
          {/* <p className="mt-[15px]"> */}
          {/* Don't have account yet? */}
          {/* <Link className="text-pink-600 font-bold">SIGNIN</Link> */}
          {/* </p> */}
          {/* </div>  */}
        </main>
      </section>
    </div>
  );
};

export default Evaluate;
