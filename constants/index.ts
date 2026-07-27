import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/karim-ayman-266560230",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/ke_x7/",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.me/201019150867",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Karim-0007",
  },
] as const;

export const Technical_SKILL = [
  
   {
    skill_name: "Revit",
    image: "revit-icon.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Autocad",
    image: "autocad-icon.svg",
    width: 80,
    height: 80,
  },
 
  {
    skill_name: "Civil 3D",
    image: "civil-3d-icon.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "3DS Max",
    image: "3ds-max-icon.svg",
    width: 80,
    height: 80,
  },
   {
    skill_name: "navisworks-manage",
    image: "navisworks-manage.svg",
    width: 80,
    height: 80,
  },
   {
    skill_name: "enscape",
    image: "enscape.svg",
    width: 80,
    height: 80,
  },
   {
    skill_name: "Lumion",
    image: "Lumion.svg",
    width: 80,
    height: 80,
  },
  
  {
    skill_name: "Google Earth",
    image: "Google-Earth.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name:"Arcpro",
    image: "Arcpro.svg",
    width: 80,
    height: 80,
  },
 
  
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
    {
    skill_name: "three-js",
    image: "three-js.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
    {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
   
] as const;

  

export const PROJECTS = [] as const;

export const FOOTER_DATA = [
  {
    title: "Connect With Me",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/karim-ayman-266560230",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Karim-0007",
      },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/ke_x7/",
      },
      {
        name: "WhatsApp",
        icon: FaWhatsapp,
        link: "https://wa.me/201019150867",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Credentials",
    link: "#credentials",
  },
  {
    title: "Certificates",
    link: "#certificates",
  },
] as const;

export const CERTIFICATES = [
  {
    title: "Revit Architecture Essential",
    issuer: "Autodesk Training Center",
    issuerLogo: "/skills/revit-icon.svg",
    year: "2026",
    certId: "EM30434709885640",
    description:
      "Comprehensive Revit Architecture skills including modeling, documentation, and project coordination.",
    file: "/Certificate/ATC_EM30434709885640_Revit Architecture essential.pdf",
  },
  {
    title: "Revit Structure Essential",
    issuer: "Autodesk Training Center",
    issuerLogo: "/skills/revit-icon.svg",
    year: "2026",
    certId: "EM304347098739605798223",
    description:
      "Structural BIM modeling, reinforcement detailing, and documentation workflows using Revit Structure.",
    file: "/Certificate/ATC_EM304347098739605798223_Revit Structure Eessential .pdf",
  },
  {
    title: "Revit Quantity Takeoff",
    issuer: "Autodesk Training Center",
    issuerLogo: "/skills/revit-icon.svg",
    year: "2025",
    certId: "EM30434709862579",
    description:
      "Extracting accurate quantity takeoffs and material schedules directly from Revit models for cost estimation.",
    file: "/Certificate/ATC_EM30434709862579_Revit Quantity Takeoff.pdf",
  },
  {
    title: "Introduction to BIM",
    issuer: "Autodesk Training Center",
    issuerLogo: "/skills/revit-icon.svg",
    year: "2024",
    certId: "EM30422909859596",
    description:
      "Foundational certification covering Building Information Modeling concepts, workflows, and industry applications using Autodesk tools.",
    file: "/Certificate/ATC_EM30422909859596_Introduction to BIM.pdf",
  },
  {
    title: "Shop Drawing Production",
    issuer: "Professional Training Center",
    issuerLogo: "/skills/autocad-icon.svg",
    year: "2022",
    certId: "",
    description:
      "Advanced shop drawing preparation techniques including detailing, coordination, and technical documentation standards.",
    file: "/Certificate/02-certificate shop drewing.pdf",
  },
  {
    title: "AutoCAD Fundamentals",
    issuer: "Professional Training Center",
    issuerLogo: "/skills/autocad-icon.svg",
    year: "2020",
    certId: "",
    description:
      "Core 2D drafting skills covering drawing setup, annotation, layers, and standard CAD workflows.",
    file: "/Certificate/01-certificate ِAutocad.pdf",
  },
] as const;

export const LINKS = {
  sourceCode: "",
};
