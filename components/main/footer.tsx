import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => (
  <footer className="w-full bg-black/50 backdrop-blur-md text-gray-200 border-t border-purple-500/20 mt-20">
    <div className="w-full flex flex-col items-center justify-center p-8 sm:p-12">
      <div className="w-full h-full flex flex-col sm:flex-row items-center justify-around flex-wrap gap-8 sm:gap-12">
        {FOOTER_DATA.map((column) => (
          <div key={column.title} className="flex flex-col items-center justify-start">
            <h3 className="font-bold text-[16px] text-white mb-4">{column.title}</h3>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
              {column.data.map(({ icon: Icon, name, link }) => (
                <a 
                  key={name} 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center gap-2 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  {Icon && <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />}
                  <span className="text-[13px] sm:text-[14px]">{name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 sm:mt-12 pt-8 border-t border-purple-500/10 text-[13px] sm:text-[14px] text-center text-gray-400">
        © Karim Ayman {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  </footer>
);

