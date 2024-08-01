import React from "react";
import { Chip } from "../../components/Chip";
import toast from "react-hot-toast";

export const CampaignCard = ({ campaign }) => {


  const clickHandler = () => {
    if(campaign.status!=="Active"){
      toast.error("Campaign is not active");  
    }else{
      //navigate to project/faculty list page for this campaign using _id

    }
  }



  return (
    <div className="bg-white w-[30%] h-[40%] max-h-[220px] p-4 rounded-md shadow hover:shadow-md transition-all ease-in-out duration-300" onClick={clickHandler}>
      <div className="flex flex-row gap-4">
        <h1 className="font-medium ">{campaign.name}</h1>
        {/* add status chip here */}
        <Chip
          value={campaign.status}
          className={"bg-purple-400 text-white px-1"}
        />
      </div>
      <div className="pt-4 text-sm text-slate-700">
        <p className="line-clamp-3">{campaign.description}</p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="pt-4">
          <h1 className=" text-sm text-[#9299b8]">Start Date</h1>
          <p className="text-sm font-semibold ">{campaign.startDate}</p>
        </div>
        <div className="pt-4">
          <h1 className="text-sm text-[#9299b8]">Deadline</h1>
          <p className="text-sm font-semibold text-slate-700">
            {campaign.endDate}
          </p>
        </div>
      </div>
      <div className="pt-2 flex flex-row flex-wrap gap-2">
        {campaign.branch.map((branch, index) => {
          return (
            <Chip
              key={index}
              value={branch}
              className={"bg-green-400 text-white px-1"}
            />
          );
        })}
      </div>
    </div>
  );
};
