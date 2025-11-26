import React from "react";
import PageLayOut from "../components/PagesLayout/PageLayOut";
import { blogData } from "../data/data";

const Blogs = () => {
  // console.log(blogData);
  const handleClick=(url)=>{
console.log(url)
  }
  return (
    <div>
      <PageLayOut />

      {/* Blogs */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <h1>No of Blogs : {blogData.length}</h1>
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="p-4 bg-white dark:bg-gray-700 rounded shadow mb-4"
          >
            <div>
              <img src={blog.imgSrc} alt="" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{blog.desc}</p>
              <button onClick={()=>handleClick(blog.id)}>read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
