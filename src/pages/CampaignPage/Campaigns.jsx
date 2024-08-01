import React, { useState } from "react";
import { CampaignCard } from "./CampaignCard";

const dummyCampaignList = [
  {
    _id: 1,
    name: "Application UI Design",
    description:
      "This is the first campaign This is the first campaign This is the first campaign This is the first campaign This is the first campaign This is the first campaign This is the first campaign",
    startDate: "2021-01-01",
    endDate: "2021-01-31",
    branch: ["CSE", "IT", "AI ML"],
    status: "Active",
  },
  {
    _id: 2,
    name: "Custom Software",
    description:
      "This is the second campaign This is the first campaign This is the first campaign This is the first campaign This is the first campaign This is the first campaign This is the first campaign",
    startDate: "2021-02-01",
    endDate: "2021-02-28",
    branch: ["CSE"],
    status: "Inactive",
  },
  {
    _id: 3,
    name: "Dashboard UI Project",
    description:
      "This is the third campaign This is the first campaign This is the first campaign This is the first campaign This is the first campaign This is the first campaign This is the first campaign This is the first campaign",
    startDate: "2021-03-01",
    endDate: "2021-03-31",
    branch: ["CSE", "EEE"],
    status: "Active",
  },
];

export const Campaigns = () => {
  const [campaignList, setCampaignList] = useState(dummyCampaignList);

  return (
    <div className="h-full px-14 pt-8 bg-[#f4f5f7] ">
      <h1 className="text-2xl pb-4">Project Campaigns</h1>
      <div className="flex flex-row flex-wrap justify-between">
        {campaignList.map((campaign, index) => {
          return <CampaignCard campaign={campaign} key={campaign._id} />;
        })}
      </div>
    </div>
  );
};
