import React, { Children } from "react";
interface TabsProps {
  
  text: string;
}

const Tabs = (props: TabsProps ) => {
  return (
    <div className="relative pb-1 group">
      <button className="font-nunito_SemiBold text-[0.9rem] lg:text-[1.3rem]    hover:cursor-pointer hover:text-orange-500">{props.text}</button>
      <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="h-[2px] w-12 bg-color-orange"></div>
        <div className="w-[6px] h-[6px] bg-color-orange rounded-full"></div>
        <div className="h-[2px] w-12 bg-color-orange"></div>
      </div>
    </div>
  );
};

export default Tabs;
