import { records, screening, user, apps , diagnosis } from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: apps,
    link: "/",
  },
  {
     name:"diagnosis",
     imgUrl:diagnosis,
     link:"/upload-form",
  },
  {
    name: "records",
    imgUrl: records,
    link: "/medical-records",
  },
  {
    name: "screening",
    imgUrl: screening,
    link: "/screening-schedules",
  },
  {
    name: "profile",
    imgUrl: user,
    link: "/profile",
  },
  
];
