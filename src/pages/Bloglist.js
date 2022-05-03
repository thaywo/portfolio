import React, { useState, useEffect } from "react";
import Header from "../components/layouts/Header";
import Blog from "../components/elements/Blog";
import Pagination from "../components/elements/Pagination";

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

function Bloglist() {
  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    setPosts(allBlogs);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <Header
        logoSource="/images/logo.svg"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content open" : "content"}>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="row blog-wrapper fix-spacing">
              {currentPosts.map((blogItem) => (
                <div className="col-md-6" key={blogItem.id}>
                  <Blog blogData={blogItem} />
                </div>
              ))}
            </div>
            <div className="spacer" data-height="50"></div>
            {!(posts.length > postsPerPage) ? null : (
              <Pagination
                itemsPerPage={postsPerPage}
                totalItems={posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Bloglist;
