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
    text: "personal",
  },
  {
    id: 3,
    text: "professional",
  },
  {
    id: 4,
    text: "school",
  }
];

const allData = [
  {
    id: 1,
    title: "Portfolio (2022)",
    category: "personal",
    description: "2022 online portfolio built with Next.js and Bootstrap",
    image: "images/works/portfolio-2022.png",
    popupLink: ["images/works/portfolio-2022.png"],
    link: "https://nicolebernardo-portfolio-2022.herokuapp.com/"
  },
  {
    id: 2,
    title: "Sunpunch",
    category: "professional",
    image: "images/works/sunpunch.png",
    description: "Online clock in site built using React and Django",
    popupLink: ["images/works/sunpunch.gif"],
  },
  {
    id: 3,
    title: "Queue Site",
    category: "professional",
    description: "Web application dedicated for clients who want to place an order for a customized Flyer or Business Card",
    image: "images/works/queue-site.png",
    popupLink: ["images/works/queue-site.gif"],
  },
  {
    id: 4,
    title: "Gator Media",
    category: "school",
    description: "E-commerce platform where San Francisco State students and faculty can purchase/sell digital media for extra income",
    image: "images/works/gator-media/gator-media.png",
    popupLink: [
      "images/works/gator-media/gator-media-dash.png",
      "images/works/gator-media/gator-media-details.png",
    ],
  },
  {
    id: 5,
    title: "Notekeeper",
    category: "school",
    description: "iOS app designed to help students keep track of their notes from class lectures by allowing them to store, type, or share them with each other",
    image: "images/works/notekeeper.png",
    popupLink: ["images/works/notekeeper.png"],
  }
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
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

  useEffect(() => {
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else if ((activeFilter && dataVisibleCount > visibleItems.length)) {
      setNoMorePost(true);
    } else {
      setNoMorePost(false);
    }
  }, [dataVisibleCount, getAllItems, visibleItems, activeFilter])

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
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
        <Pagetitle title="Projects" />
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
        
        { noMorePost ? null :
          <div className="load-more text-center mt-4">
            <button
              className="btn btn-default"
              onClick={handleLoadmore}
            >
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            </button>
          </div>
        }
      </div>
    </section>
  );
}

export default Works;
