const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="font-inter md:w-1/2 m-auto">
      <div className="text-center my-5 font-thin text-sm">
        Copyright {currentYear} | Rizki Ramadhan
      </div>
    </div>
  );
};
export default Footer;
