import React from "react";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div
      className={`pl-[2%] fixed pt-[80px] transition-all duration-300 ease-in-out ${
        sidebar ? "w-[100px] opacity-100" : "w-[10%] opacity-100"
      }`}
    >
      <div className="Shortcut-links">
        <div
          onClick={() => setCategory(0)}
          className="side-link flex items-center cursor-pointer mb-[20px]"
        >
          <img
            className={`w-[20px] mr-[10px] ${
              category === 0 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            src={home}
            alt="Home"
          />
          <p
            className={`transition-all duration-300 ease-in-out text ${
              sidebar ? "hidden" : "block"
            }`}
          >
            Home
          </p>
        </div>
        <div
          onClick={() => setCategory(20)}
          className="side-link flex items-center cursor-pointer mb-[20px]"
        >
          <img
            className={`w-[20px] mr-[10px] ${
              category === 20 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            src={game_icon}
            alt="Games"
          />
          <p
            className={`transition-all duration-300 ease-in-out text ${
              sidebar ? "hidden" : "block"
            }`}
          >
            Game
          </p>
        </div>
        <div
          onClick={() => setCategory(2)}
          className="side-link flex items-center cursor-pointer mb-[20px]"
        >
          <img
            className={`w-[20px] mr-[10px] ${
              category === 2 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            src={automobiles}
            alt="Automobiles"
          />
          <p
            className={`transition-all duration-300 ease-in-out text ${
              sidebar ? "hidden" : "block"
            }`}
          >
            Automobiles
          </p>
        </div>
        <div
          onClick={() => setCategory(17)}
          className="side-link flex items-center cursor-pointer mb-[20px]"
        >
          <img
            className={`w-[20px] mr-[10px] ${
              category === 17 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            src={sports}
            alt="Sports"
          />
          <p
            className={`transition-all duration-300 ease-in-out text ${
              sidebar ? "hidden" : "block"
            }`}
          >
            Sports
          </p>
        </div>
        <div
          onClick={() => setCategory(24)}
          className="side-link flex items-center cursor-pointer mb-[20px]"
        >
          <img
            className={`w-[20px] mr-[10px] ${
              category === 24 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            src={entertainment}
            alt="Entertainment"
          />
          <p
            className={`transition-all duration-300 ease-in-out text ${
              sidebar ? "hidden" : "block"
            }`}
          >
            Entertainment
          </p>
        </div>
        <div
          onClick={() => setCategory(28)}
          className="side-link flex items-center cursor-pointer mb-[20px]"
        >
          <img
            className={`w-[20px] mr-[10px] ${
              category === 28 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            src={tech}
            alt="Tech"
          />
          <p
            className={`transition-all duration-300 ease-in-out text ${
              sidebar ? "hidden" : "block"
            }`}
          >
            Tech
          </p>
        </div>
        <div
          onClick={() => setCategory(10)}
          className="side-link flex items-center cursor-pointer mb-[20px]"
        >
          <img
            className={`w-[20px] mr-[10px] ${
              category === 10 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            src={music}
            alt="Music"
          />
          <p
            className={`transition-all duration-300 ease-in-out text ${
              sidebar ? "hidden" : "block"
            }`}
          >
            Music
          </p>
        </div>
        <div
          onClick={() => setCategory(22)}
          className="side-link flex items-center cursor-pointer mb-[20px]"
        >
          <img
            className={`w-[20px] mr-[10px] ${
              category === 22 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            src={blogs}
            alt="Blogs"
          />
          <p
            className={`transition-all duration-300 ease-in-out text ${
              sidebar ? "hidden" : "block"
            }`}
          >
            Blogs
          </p>
        </div>
        <div
          onClick={() => setCategory(25)}
          className="side-link flex items-center cursor-pointer mb-[20px]"
        >
          <img
            className={`w-[20px] mr-[10px] ${
              category === 25 ? "border-b-2 border-red-500 pb-[2px]" : ""
            }`}
            src={news}
            alt="News"
          />
          <p
            className={`transition-all duration-300 ease-in-out text ${
              sidebar ? "hidden" : "block"
            }`}
          >
            News
          </p>
        </div>
      </div>

      <div className="h-[1px] flex flex-col gap-5 py-4">
        {[
          { img: jack, name: "Jack" },
          { img: simon, name: "Simon" },
          { img: tom, name: "Tom" },
          { img: megan, name: "Megan" },
          { img: cameron, name: "Cameron" },
        ].map((person, index) => (
          <div key={index} className="flex gap-6 cursor-pointer">
            <img
              className="w-[25px] rounded-full"
              src={person.img}
              alt={person.name}
            />
            <p
              className={`${
                sidebar ? "hidden" : "block"
              } transition-opacity duration-300`}
            >
              {person.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
