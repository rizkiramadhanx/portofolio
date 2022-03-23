const Header = () => {
  return (
    <div className="w-full bg-fixed">
      <div className="font-inter xl:w-1/2 m-auto">
        <nav className="flex xl:justify-between my-3 items-center">
          <div className="text-2xl font-black mx-auto xl:mx-0">Portofolio</div>
          <div>
            <ul className="hidden xl:flex">
              <li className="mr-3">Github</li>
              <li className="mr-3">LinkedIn</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
