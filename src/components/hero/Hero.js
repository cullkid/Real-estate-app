import React from "react";
import Herobg from "../../images/herobg.jpg";
import Heroselector from "./Heroselector";
import Button from "./Button";
import Feature from "./Feature";
import Latest from "./Latest";
import Location from "./Location";
// import Cookies from '../Cookies';
// import Footer from '../Footer';

const Hero = (value, placeholder, datas) => {
  return (
    <div>
      <div
        className="top-0 w-full  h-[600px] bg-no-repeat bg-cover bg-center md:brightness-50"
        style={{ backgroundImage: `url(${Herobg})` }}>
        {/*container */}
        <div className="h-full w-[360px] md:w-[1380px] mx-auto">
          <div className="block">
            <h1 className="text-center bg-slate-100 md:bg-inherit pt-2  text-2xl md:text-5xl text-black font-bold md:text-cyan-100 pt-[30px]">
              Explore Your portugal property Search here
            </h1>
            <p className="border-b-[8px] md:mt-4 w-[150px] mx-auto rounded border-b-red-500"></p>
          </div>
          <h3 className="text-center mx-auto py-[5px] bg-slate-800 md:w-[1000px] font-bold text-2xl mt-2 md:text-5xl text-gray-100 md:text-slate-100 md:mt-[50px]">
            Start your property search
          </h3>
          {/*selector field for search*/}
          <div className="w-[905px] mx-auto mt-[60px] md:mt-[100px] md:grid grid-cols-2 gap-[50px]">
            <Heroselector
              datas={[
                { value: 1, label: "Lisbon" },
                { value: 2, label: "Algarve" },
                { value: 3, label: "Setubal" },
                { value: 4, label: "Cascais" },
                { value: 5, label: "Coimbra" },
                { value: 6, label: "Porto" },
                { value: 7, label: "Sevilla" },
                { value: 8, label: "Almada" },
                { value: 9, label: "Branganca" },
              ]}
              placeholder="Search"
            />

            {/*selector field for min-price*/}
            <Heroselector
              datas={[
                { value: 1, label: "100,000" },
                { value: 2, label: "120,000" },
                { value: 3, label: "150,000" },
                { value: 4, label: "180,000" },
                { value: 5, label: "200,000" },
                { value: 6, label: "220,000" },
                { value: 7, label: "250,000" },
                { value: 8, label: "280,000" },
                { value: 9, label: "300,000" },
              ]}
              placeholder="Min"
            />

            {/*selector field for max-price*/}
            <Heroselector
              datas={[
                { value: 1, label: "200,000" },
                { value: 2, label: "250,000" },
                { value: 3, label: "300,000" },
                { value: 4, label: "400,000" },
                { value: 5, label: "500,000" },
                { value: 6, label: "600,000" },
                { value: 7, label: "700,000" },
                { value: 8, label: "1000,000" },
                { value: 9, label: "1500,000" },
              ]}
              placeholder="Max"
            />

            <Button />
          </div>
        </div>
      </div>
      <Feature />
      <Latest />
      <Location />
      {/* <Cookies />
      <Footer /> */}
    </div>
  );
};

export default Hero;
