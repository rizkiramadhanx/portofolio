const TechStack = [
  {
    id: 1,
    category: "Programing Language",
    listTech: [
      {
        name: "javascript",
        imgPath: "/assets/img/javascript.png",
      },
      {
        name: "PHP",
        imgPath: "/assets/img/php.png",
      },
      {
        name: "C#",
        imgPath: "/assets/img/Csharp.png",
      },
    ],
  },
  {
    id: 2,
    category: "Text Editor",
    listTech: [
      {
        name: "VS Code",
        imgPath: "/assets/img/vscode.png",
      },
      {
        name: "Vim",
        imgPath: "/assets/img/vim.png",
      },
      {
        name: "Microsoft Visual Studio",
        imgPath: "/assets/img/mvscode.png",
      },
    ],
  },
  {
    id: 3,
    category: "Databases",
    listTech: [
      {
        name: "My SQL",
        imgPath: "/assets/img/mysql.png",
      },
      {
        name: "Firebase",
        imgPath: "/assets/img/firebase.png",
      },
    ],
  },
  {
    id: 5,
    category: "Operating System",
    listTech: [
      {
        name: "Windows",
        imgPath: "/assets/img/windows.png",
      },
      {
        name: "Ubuntu",
        imgPath: "/assets/img/ubuntu.png",
      },
      {
        name: "Pop OS (Debian)",
        imgPath: "/assets/img/popOs.png",
      },
    ],
  },
  {
    id: 4,
    category: "Framework",
    listTech: [
      {
        name: "React JS",
        imgPath: "/assets/img/react-developer.png",
      },
      {
        name: "Node.js",
        imgPath: "/assets/img/nodejs.png",
      },
    ],
  },
  {
    id: 4,
    category: "Framework CSS",
    listTech: [
      {
        name: "Tailwinds CSS",
        imgPath: "/assets/img/tailwind.png",
      },
      {
        name: "Bootstrap 5",
        imgPath: "/assets/img/boostrap.png",
      },
    ],
  },
];

const TechLoop = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-7 m-3 justify-items-start items-start">
      {TechStack.map((items, i) => (
        <div key={i}>
          <div className="font-bold mb-3 text-gray-600" key={items.id}>
            {items.category}
          </div>

          {items.listTech.map((list, i) => (
            <div className="flex items-center text-sm mt-2" key={i}>
              <img
                src={list.imgPath}
                alt={list.name}
                className="w-5 inline mr-1"
              />
              {list.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const Content = () => {
  return (
    <div className="font-inter md:w-1/2 m-auto">
      <div className="m-3 font-bold text-xl">Tech Stack</div>
      <TechLoop />
    </div>
  );
};

export default Content;
