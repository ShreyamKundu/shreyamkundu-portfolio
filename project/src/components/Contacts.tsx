import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Contacts = () => {
  return (
    <>
      <section className="max-w-4xl w-full text-center bg-[#121317] p-6 rounded-lg shadow-lg">
        <p className="text-lg font-bold text-[#e1e2e4] mb-6">
          I'm open to new opportunities! Reach out anytime—I'd love to connect.
        </p>
        <div className="flex justify-center gap-12">
          <a
            href="mailto:shreyamkundu04@gmail.com"
            className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors text-2xl"
            aria-label="Email"
          >
            <MdOutlineMail size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/shreyamkundu/"
            className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors text-2xl"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://x.com/ShreyamKundu"
            className="text-[#9ba1a6] hover:text-[#64b5f6] transition-colors text-2xl"
            aria-label="Twitter"
          >
            <FaXTwitter size={24} />
          </a>
        </div>
        <footer className="text-center text-[#9ba1a6] mt-10">
        <p>Made with ❤️ by Shreyam Kundu</p>
      </footer>
      </section>
     
    </>
  );
};

export default Contacts;
