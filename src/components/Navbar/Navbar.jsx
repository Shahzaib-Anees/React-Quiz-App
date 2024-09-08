function Navbar() {
  return (
    <>
      <article
        className="bg-[#fbfbfb] w-full"
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
      >
        <div className="py-3 px-3 flex items-center gap-1 justify-center">
          <img
            className="w-[70px] h-[70px]"
            src="./public/mind-icn.svg"
            alt="logo"
          />
          <span className="text-4xl font-bold px-1">The Quiz App</span>
        </div>
      </article>
    </>
  );
}

export default Navbar;
