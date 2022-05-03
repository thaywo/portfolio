import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "laravel with touch of reactjs",
  },
  {
    id: 3,
    text: "reactjs",
  },
 
];

const allData = [
  {
    id: 1,
    title: "Sales Management System",
    category: "laravel with touch of reactjs",
    image: "images/works/chrome.png",
    popupLink: [
      "images/works/chrome.png",
      "images/works/chrome1.png",
      "images/works/chrome2.png",
    ],
  },
  {
    id: 2,
    title: "Hospital Managent System ",
    category: "laravel with touch of reactjs",
    image: "images/works/clinic.png",
    popupLink: [
      "images/works/clinic.png"
    ],
  },
  {
    id: 3,
    title: "Enterprise Resources Planning",
    category: "laravel with touch of reactjs",
    image: "images/works/erp.png",
    popupLink: [
      "images/works/erp.png",
      "images/works/erp1.png",
    ],
  },
  {
    id: 4,
    title: "Asset Management System",
    category: "laravel with touch of reactjs",
    image: "images/works/ass.png",
    popupLink: [
      "images/works/ass.png",
      "images/works/ass1.png",
      ],
  },
  {
    id: 5,
    title: "Learning Management System",
    category: "reactjs",
    image: "images/works/lms.png",
    popupLink: [
      "images/works/lms.png",
      "images/works/lms1.png",
    ],
  },
  {
    id: 6,
    title: "Gueue Management System",
    category: "laravel with touch of reactjs",
    image: "images/works/qeueu.png",
    popupLink: [
      "images/works/qeueu.png",
      "images/works/queue1.png",
    ],
  },
  {
    id: 7,
    title: "Real Estate Fronted-ReactJS",
    category: "reactjs",
    image: "images/works/estate.png",
    link: "https://github.com/thaywo/Real-Estate-Frontend-with-ReactJS.git",
  },
  {
    id: 8,
    title: "Revenue Management System",
    category: "reactjs",
    image: "images/works/occe.png",
    link: "https://github.com/thaywo/OCCE.git",
  },
  {
    id: 9,
    title: "Text Editor/Formater System",
    category: "reactjs",
    image: "images/works/t1.png",
    popupLink: [
      "images/works/t1.png",
      "images/works/t2.png",
    ],
    link: "https://text-editor-seven.vercel.app/",
  },
  
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(9);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 9));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
