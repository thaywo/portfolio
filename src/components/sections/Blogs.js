import React from "react";
import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
  {
    id: 1,
    title: "What is map in JavaScript?",
    image: "images/blog/1.svg",
    filesource: "../../blogs/What is-map-in-JavaScript.md",
    date: "04 April, 2022",
    author: "Thaywo",
    category: "Tutorial",
  },
  {
    id: 2,
    title: "what is usestate in react",
    image: "images/blog/us.png",
    filesource: "../../blogs/what-is-usestate-in-react.md",
    date: "04 April, 2022",
    author: "Thaywo",
    category: "Tutorial",
  },
  {
    id: 3,
    title: "Using the Effect Hook",
    image: "images/blog/3.svg",
    filesource: "../../blogs/Using-the-Effect-Hook.md",
    date: "04 April, 2022",
    author: "Thaywo",
    category: "Tutorial",
  },
];

function Blogs() {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Latest Posts" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-4" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <Link to="/blogs" className="btn btn-default">
            Show all blogs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
