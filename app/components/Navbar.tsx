const Navbar = () => {
  const navs = ["Collection", "Men", "Women", "About", "Contact"];
  return (
    <div className="hidden md:flex items-center justify-center gap-4">
      {navs.map((nav) => (
        <div
          key={nav}
          className="py-8 px-1 text-base text-[#b6bcc8] font-normal hover:text-[#68707d] hover:border-b-4 hover:border-b-[#ff7d1a] cursor-pointer transition-all"
        >
          <p>{nav}</p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
