import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Timeline({ education }) {
  const { years, title, language, description, content } = education;
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container">
        <div className="content">
          <span className="time">{years}</span>
          <h3 className="title">{title}</h3>
          <p style={{textAlign: 'justify'}}>{description}</p>
         <p style={{ color: 'green' }}> Language Used: {language}</p>
          <p style={{ color: 'red' }}>Company: <b>{content}</b></p>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Timeline;
