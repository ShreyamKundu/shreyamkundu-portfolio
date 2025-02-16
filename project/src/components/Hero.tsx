import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import me from "../assets/me.webp";

const Hero = () => {
  return (
    <section className="max-w-4xl w-full mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-6">
      {/* Profile Image */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
        <img src={me} alt="Profile" className="w-full h-full object-cover" />
      </div>
  
      {/* Hero Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#e1e2e4]">
          Hi 👋, I'm Shreyam Kundu
        </h1>
        <p className="text-[#9ba1a6] mb-4 text-xl font-bold relative inline-block">
          <span className="relative z-10">Full Stack Developer</span>
          <svg
            className="absolute left-0 bottom-[-3px] w-full h-3 text-[#64b5f6]"
            viewBox="0 0 200 20"
            preserveAspectRatio="none"
          >
            <path
              d="M0 15 C50 25, 150 5, 200 15"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </p>
        <p className="text-[#9ba1a6] text-lg mb-3">
          Specializing in React, Node.js, and cloud technologies.
        </p>
  
        {/* Resume + Build Together Buttons */}
        <div className="flex flex-row md:justify-start justify-center gap-6 mt-3">
          <div>
            <a
              href="https://drive.google.com/file/d/1Y8vD5Y1SLBTye1VNPK8g1Kc-uz3Yz3mk/view?usp=drive_link"
              className="flex items-center text-[#9ba1a6] hover:text-[#64b5f6] transition-colors gap-1"
              aria-label="Resume"
            >
              <span className="text-lg font-medium">resume</span>
              <GoArrowUpRight size={20} />
            </a>
            <div className="w-[87px] border-t-2 border-dashed border-[#9ba1a6] mt-1"></div>
          </div>
  
          <div>
            <a
              href="mailto:shreyamkundu04@gmail.com"
              className="flex items-center text-[#9ba1a6] hover:text-[#64b5f6] transition-colors gap-1"
              aria-label="Let's Build"
            >
              <span className="text-lg font-medium">let’s build</span>
              <GoArrowUpRight size={20} />
            </a>
            <div className="w-[87px] border-t-2 border-dashed border-[#9ba1a6] mt-1"></div>
          </div>
        </div>
      </div>
  
      {/* Social Icons on the Right for Desktop */}
      <div className="hidden md:flex flex-col gap-10">
        <a
          href="https://github.com/ShreyamKundu"
          className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors"
          aria-label="GitHub"
        >
          <FiGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/shreyamkundu/"
          className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors"
          aria-label="LinkedIn"
        >
          <FiLinkedin size={24} />
        </a>
        <a
          href="https://x.com/ShreyamKundu"
          className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors"
          aria-label="Twitter"
        >
          <FaXTwitter size={24} />
        </a>
      </div>
  
      {/* Mobile Social Icons - Below Hero */}
      <div className="flex md:hidden justify-center gap-16 mt-2">
        <a
          href="https://github.com/ShreyamKundu"
          className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors"
          aria-label="GitHub"
        >
          <FiGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/shreyamkundu/"
          className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors"
          aria-label="LinkedIn"
        >
          <FiLinkedin size={24} />
        </a>
        <a
          href="https://x.com/ShreyamKundu"
          className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors"
          aria-label="Twitter"
        >
          <FaXTwitter size={24} />
        </a>
      </div>
    </div>
  </section>
  
  );
};

export default Hero;  




















// import { Linkedin } from "lucide-react";
// import { FaXTwitter } from "react-icons/fa6";
// import { FiGithub } from "react-icons/fi";
// import { GoArrowUpRight } from "react-icons/go";
// import me from "../assets/me.jpg";

// const Hero = () => {
//   return (
//     <section className="max-w-4xl w-full mx-auto">
//       <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
//         {/* Profile Image */}
//         <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
//           <img src={me} alt="Profile" className="w-full h-full object-cover" />
//         </div>

//         {/* Hero Text Content */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#e1e2e4]">
//             Hi 👋, I'm Shreyam Kundu
//           </h1>
//           <p className="text-[#9ba1a6] mb-4 text-xl font-bold relative inline-block">
//             <span className="relative z-10">Full Stack Developer</span>
//             <svg
//               className="absolute left-0 bottom-[-3px] w-full h-3 text-[#64b5f6]"
//               viewBox="0 0 200 20"
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0 15 C50 25, 150 5, 200 15"
//                 fill="transparent"
//                 stroke="currentColor"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </p>
//           <p className="text-[#9ba1a6] text-md mb-3">
//             Specializing in React, Node.js, and cloud technologies.
//           </p>

//           {/* Resume + Build Together Buttons */}
//           <div className="flex flex-col md:flex-row md:items-center items-center gap-4 mt-4">
//             {/* Resume Button */}
//             <div>
//               <a
//                 href="https://drive.google.com/file/d/1Y8vD5Y1SLBTye1VNPK8g1Kc-uz3Yz3mk/view?usp=drive_link"
//                 className="flex items-center text-[#9ba1a6] hover:text-[#64b5f6] transition-colors gap-1"
//                 aria-label="Resume"
//               >
//                 <span className="text-lg font-medium">resume</span>
//                 <GoArrowUpRight size={20} />
//               </a>
//               <div className="w-[87px] border-t-2 border-dashed border-[#9ba1a6] mt-1"></div>
//             </div>

//             {/* Let's Build Button */}
//             <div>
//               <a
//                 href="mailto:shreyamkundu04@gmail.com"
//                 className="flex items-center text-[#9ba1a6] hover:text-[#64b5f6] transition-colors gap-1"
//                 aria-label="Let's Build"
//               >
//                 <span className="text-lg font-medium">let’s build</span>
//                 <GoArrowUpRight size={20} />
//               </a>
//               <div className="w-[87px] border-t-2 border-dashed border-[#9ba1a6] mt-1"></div>
//             </div>
//           </div>
//           {/* Social Links - Responsive Center on Mobile */}
//            <div className="flex gap-14 md:gap-8 md:justify-start justify-center mt-6">
//              <a
//               href="https://github.com/ShreyamKundu"
//               className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors"
//               aria-label="GitHub"
//             >
//               <FiGithub size={24} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/shreyamkundu/"
//               className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors"
//               aria-label="LinkedIn"
//             >
//               <Linkedin size={24} />
//             </a>
//             <a
//               href="https://x.com/ShreyamKundu"
//               className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors"
//               aria-label="Twitter"
//             >
//               <FaXTwitter size={24} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;








