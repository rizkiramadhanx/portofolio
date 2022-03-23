import React from "react";

const listExperience = [
  {
    id: 1,
    image: "/assets/img/ump.png",
    name: "College",
    location: "Muhammadiyah Purwokerto University",
    time: "Juli 2019",
  },
  {
    id: 2,
    image: "/assets/img/intern.png",
    name: "Be Front End and Back End Web Developer",
    location: "Intern Kampus Merdeka X Dicoding",
    time: "August 2021 - Januari 2022",
  },
];
const Exprience = () => {
  return (
    <div className="font-inter md:w-1/2 m-auto">
      {listExperience.map((items, i) => (
        <div
          className="flex items-center m-3 border border-gray-500 rounded-lg p-3"
          key={i}
        >
          <div className="mx-4">
            <img
              src={items.image}
              alt="logo"
              className="w-auto max-h-14"
              ey={i}
            />
          </div>
          <div className="">
            <div className="font-bold">{items.name}</div>
            <div className="text-sm">{items.location}</div>
            <div className="text-sm font-bold">{items.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exprience;
