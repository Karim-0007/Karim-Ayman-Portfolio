import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => (
  <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
    <div className="w-full flex flex-col items-center justify-center m-auto">
      <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
        {FOOTER_DATA.map((column) => <div key={column.title} className="min-w-[200px] h-auto flex flex-col items-center justify-start"><h3 className="font-bold text-[16px]">{column.title}</h3>{column.data.map(({ icon: Icon, name, link }) => <Link key={name} href={link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] hover:text-white transition-colors"><>{Icon && <Icon />}</><span className="text-[15px] ml-[6px]">{name}</span></Link>)}</div>)}
      </div>
      <div className="mb-[20px] text-[15px] text-center">© Karim Ayman {new Date().getFullYear()}. All rights reserved.</div>
    </div>
  </footer>
);
