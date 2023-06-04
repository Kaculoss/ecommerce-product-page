const Footer = () => {
  return (
    <div className="w-full bg-white transition-all border-t border-[#f7f8fd] px-3 max-w-[1440px] mx-auto">
      <div className="w-full flex justify-center items-center text-center py-4">
        <span className="text-sm md:text-base font-normal text-[#68707d] text-center">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1c2026] underline"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://twitter.com/Sani_M_Alhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffede0] text-[#ff7d1a] font-bold rounded-md p-[2px]"
          >
            KEEZY🚀✨💫
          </a>
          .
        </span>
      </div>
    </div>
  );
};

export default Footer;
