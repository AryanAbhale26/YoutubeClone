import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <div className="flex">
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div
        className={`transition-all duration-1000 ${
          sidebar ? "ml-8" : "ml-[10%]  "
        } w-full py-10 px-10`}
      >
        <Feed category={category} setCategory={setCategory} sidebar={sidebar} />
      </div>
    </div>
  );
};

export default Home;
