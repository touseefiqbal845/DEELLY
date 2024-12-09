import React from "react";
import CountUp from 'react-countup';
import MapWithClusters from "./MapWithClusters";
import CustomButton from "../../Customize/Button";
import Card from "../../Customize/Cards";

const MiddleSection = () => {
  return (
    <>
      <div className="bg-white py-12 border-t">
        <div className="px-28">
          <img className="logo" src="/assets/playstoreicon.png" alt="app" />
        </div>
      </div>

      <div className="mt-10 border-t pt-4 pb-4 text-center">
        <div class="flex justify-evenly">
          <div className="font-bold text-4xl ">
            <CountUp end={75000} delay={0}/>+
            <p className="text-gray-600 font-normal text-xs mt-3 text-black text-xs">
              Deals
            </p>
          </div>
          <div className="font-bold text-4xl ">
            <CountUp end={6000} />+

            <p className="text-gray-600 font-normal text-xs mt-3 text-black">
              Retailers
            </p>
          </div>
          <div className="font-bold text-4xl ">
            
            <CountUp end={6.300000000} />M+

            <p className="text-gray-600 font-normal text-xs mt-3 text-black">
              Active Users
            </p>
          </div>
          <div className="font-bold text-4xl ">
            
            <CountUp end={1.8000000} />M+

            <p className="text-gray-600 font-normal text-xs mt-3 text-black">
              App Downloads
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 py-12 border-t">
        <div class="flex justify-center px-28">
          <div className="font-bold text-xl mt-1  ">
            For inquiries and more information
          </div>

          <CustomButton 
        text = "Get in Touch"
        bgColor = "bg-[#013D29]"
        textColor = "text-white"
        borderColor = "#013D29"
        textSize = "text-sm"
        padding = "px-4 py-2"
        borderRadius = "rounded-full"
        onClick={""} 
      />
        </div>
      </div>
      <MapWithClusters/>
    </>
  );
};

export default MiddleSection;
