import React from "react";
import passport from "../../images/p-passport.svg";
import family from "../../images/p-family.svg";
import flag from "../../images/p-flag.svg";

const Latest = () => {
  return (
    <div className="bg-gray-900 md:h-[1000px] h-[2200px]">
      {/*container */}
      <div className="h-full w-[360px] md:w-[1020px] mx-auto">
        <div className="w-[280px] mx-auto pt-[80px]">
          <h1 className="mx-auto text-3xl text-white text-center">
            Latest News
          </h1>
          <p className="mx-auto border-b-[8px] border-b-red-500 w-[100px] rounded-full mt-[10px] text-center"></p>
        </div>
        {/*grid container */}
        <main className="md:grid grid-cols-3 mt-[80px] gap-[10px]">
          {/*grid child-1 */}
          <section className=" w-[330px] bg-white py-[30px] rounded-[10px] hover:border-[3px] hover:border-red-600">
            <article className="w-[300px] mx-auto">
              <img className="rounded-[15px]" src={passport} alt="" />

              <h2 className="py-[25px] text-[18px] font-bold">
                Secure yourself a property with us and get entittle to
                Portuguese Golden Visa.
              </h2>
              <p className="pb-[15px] text-[12px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                voluptatum repellendus modi consequatur unde sint labore
                laudantium possimus sit fugiat nemo quisquam aperiam doloremque
                dignissimos omnis, id voluptate rem? Minima! voluptatum
                repellendus modi consequatur unde sint labore laudantium
                possimus sit fugiat nemo quisquam aperiam
              </p>
              <p className="text-orange-600 font-bold">20, January 2023</p>
              <button className="bg-green-600 hover:bg-green-400 text-white w-[130px] py-[3px] rounded-full mt-[20px]">
                Read More
              </button>
            </article>
          </section>
          {/*grid child-2 */}
          <section className="md:mt-[0] mt-[15px] w-[330px] bg-white py-[30px] rounded-[10px] hover:border-[3px] hover:border-red-600">
            <article className="w-[290px] mx-auto">
              <img className="rounded-[15px]" src={family} alt="" />
              <h2 className="py-[25px] text-[18px] font-bold">
                Take a look at the the family beneficiaries when you secure a
                property with us in portugal
              </h2>
              <p className="pb-[15px] text-[12px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                voluptatum repellendus modi consequatur unde sint labore
                laudantium possimus sit fugiat nemo quisquam aperiam doloremque
                dignissimos omnis, id voluptate rem? Minima! voluptatum
                repellendus modi consequatur unde sint labore laudantium
                possimus sit fugiat nemo quisquam aperiam
              </p>
              <p className="text-orange-600 font-bold">10, June 2022</p>
              <button className="bg-green-600 hover:bg-green-400 text-white w-[130px] py-[3px] rounded-full mt-[20px]">
                Read More
              </button>
            </article>
          </section>
          {/*grid child-3 */}
          <section className="md:mt-[0] mt-[15px] w-[330px] bg-white py-[30px] rounded-[10px] hover:border-[3px] hover:border-red-600">
            <article className="w-[290px] mx-auto">
              <img className="rounded-[15px]" src={flag} alt="" />

              <h2 className="py-[25px] text-[18px] font-bold">
                Why not check it out, why forigners choose portugal as the best
                location to get properties for retirement
              </h2>
              <p className="pb-[15px] text-[12px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                voluptatum repellendus modi consequatur unde sint labore
                laudantium possimus sit fugiat nemo quisquam aperiam doloremque
                dignissimos omnis, id voluptate rem? Minima! voluptatum
                repellendus modi consequatur unde sint labore laudantium
                possimus sit fugiat nemo quisquam aperiam
              </p>
              <p className="text-orange-600 font-bold">03, January 2023</p>
              <button className="bg-green-600 hover:bg-green-400 text-white w-[130px] py-[3px] rounded-full mt-[20px]">
                Read More
              </button>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Latest;
