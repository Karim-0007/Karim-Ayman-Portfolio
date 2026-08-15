import { FOOTER_DATA } from "@/constants";

export const Footer = () => (
  <footer className="w-full bg-black/80 text-gray-200 border-t border-purple-500/20 mt-20">
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center p-8 sm:p-12">
      <div className="w-full h-full flex flex-col sm:flex-row items-center justify-around flex-wrap gap-8 sm:gap-12">
        {FOOTER_DATA.map((column) => (
          <div key={column.title} className="flex flex-col items-center justify-start">
            <h3 className="font-bold text-[16px] text-white mb-4">{column.title}</h3>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
              {column.data.map(({ icon: Icon, name, link }) => {
                const shadowColor: Record<string, string> = {
                  LinkedIn: "hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.9)] hover:text-[#0a66c2]",
                  Instagram: "hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.9)] hover:text-[#e1306c]",
                  WhatsApp: "hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.9)] hover:text-[#25d366]",
                  GitHub: "hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:text-white",
                };
                
                return (
                  <a 
                    key={name} 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex flex-col items-center gap-2 transition-all duration-300 ${shadowColor[name] || "hover:text-cyan-400"}`}
                  >
                    {Icon && <Icon className="w-6 h-6" />}
                    <span className="text-[13px] sm:text-[14px]">{name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 sm:mt-12 pt-8 border-t border-purple-500/10 text-center text-gray-400">
        <p className="text-[13px] sm:text-[14px]">
          © Karim Ayman {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="text-[11px] sm:text-[12px] mt-2 text-gray-400">
          Designed & Built by Karim Ayman using Next.js & React
        </p>
      </div>
    </div>
  </footer>
);
