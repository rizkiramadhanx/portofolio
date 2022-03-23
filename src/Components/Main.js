const Main = () => {
  return (
    <div className="font-inter md:w-1/2 m-auto">
      <img
        src="/assets/img/Profil.png"
        width="200"
        alt="foto-profil"
        className="sm rounded-full mx-auto my-5"
      />
      <div className="mx-auto text-center text-2xl font-bold">
        Rizki Fauzian Ramadhan
      </div>
      <div className="mx-3 my-5">
        <div className="flex flex-wrap text-md leading-7 ">
          <div className="mr-1">
            <img
              className="inline mr-1"
              src="https://cdn.cdnlogo.com/logos/i/92/instagram.svg"
              width="16"
              alt="instagram-logo"
            />
            Rizkiramadhanx
          </div>
          <div className="mr-3">📍 Tegal, Central Java</div>
          <div className="mr-3">🏫 Universitas Muhammadiyah Purwokerto</div>
          <div className="mr-3">👶 2001</div>
        </div>
      </div>
      <div className="mx-3 my-5 font-light">
        Front End Web Developer | Javascript Enthusiast | Bycycle is life |
        Interest Math | Movie Addict | Payung Teduh Fans
      </div>
      <div className="mx-3 my-5 flex flex-wrap">
        <div className="border rounded-xl px-4 py-1 mr-2 my-1 border-slate-400">
          <div className="flex items-center">
            <img
              src="/assets/img/web-developer.png"
              alt="web-developer"
              width="16"
              className="inline mr-2"
            />
            Web Developer
          </div>
        </div>
        <div className="border rounded-xl px-4 py-1 mr-2 my-1 border-slate-400">
          <div className="flex items-center">
            <img
              src="/assets/img/javascript.png"
              alt="javascript"
              width="19"
              className="inline mr-2"
            />
            Javascript Developer
          </div>
        </div>
        <div className="border rounded-xl px-4 py-1 mr-2 my-1 border-slate-400">
          <div className="flex items-center">
            <img
              src="/assets/img/nodejs.png"
              alt="javascript"
              width="19"
              className="inline mr-2"
            />
            Node.js
          </div>
        </div>
        <div className="border rounded-xl px-4 py-1 mr-2 my-1 border-slate-400">
          <div className="flex items-center">
            <img
              src="/assets/img/school.png"
              alt="javascript"
              width="19"
              className="inline mr-2"
            />
            College
          </div>
        </div>
        <div className="border rounded-xl px-4 py-1 mr-2 my-1 border-slate-400">
          💫 1 Years Exprience
        </div>
      </div>
    </div>
  );
};

export default Main;
