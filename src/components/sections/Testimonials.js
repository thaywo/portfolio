import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "Namdi Abugu",
    subtitle: "CEO Acemedix Academy",
    review:
      "I enjoy working with the Thaywo and learnt so much from him. He makes the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    avatar: "images/avatar-2.svg",
    userName: "Micheal Toba",
    subtitle: "CEO TMR Concept",
    review:
      "One of the satff I have worked with so far... I call him oracle..  Good luck! 👍",
  },
  {
    id: 3,
    avatar: "images/avatar-3.svg",
    userName: "Samuel Olaniyi",
    subtitle: "CEO Afrinict Limited",
    review:
      "When it comes to work, I love his energy.. Good luck! 👍",
  },
  {
    id: 4,
    avatar: "images/avatar-3.svg",
    userName: "Samuel Ajiboye",
    subtitle: "CEO COCO-Lino",
    review:
      "Yoh man, I love working with you. Good luck! 👍",
  },
  {
    id: 5,
    avatar: "images/avatar-3.svg",
    userName: "Ochekpa Solomon",
    subtitle: "CEO Goodie Market",
    review:
      "With you, we always solve the problem. Good luck! 👍",
  },
  {
    id: 6,
    avatar: "images/avatar-3.svg",
    userName: "John Olamobi",
    subtitle: "CEO Chrome Softek",
    review:
      "I have missed your working pattern in our office... Man, you too goog. Good luck! 👍",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Clients & Review" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
