import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import memorial from '../../images/memorial.jpg';
import softLine from '../../images/softLine.jpg';
import theChairs from '../../images/theChairs.jpg';
import "../../style.css";

export default function Portfolio() {
  return (
    <div class="portfolio">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={memorial}
            alt="Memorial"
          />
          <Carousel.Caption>
            <h3>Memorial</h3>
            <p>A memorial for the wildlife that have been killed or had to flee due to wildfires. This memorial is designed to be a den or protective nest for animals and will decay and decompose as the burnt land replenishes and grows. All that will remain, once the land is healthy again, is a stone plaque with the date of the fire. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={softLine}
            alt="Soft Line"
          />

          <Carousel.Caption>
            <h3>Soft Line</h3>
            <p>Soft Sculpture Project 1: Soft Line</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={theChairs}
            alt="The Chairs"
          />

          <Carousel.Caption>
            <h3>The Chairs</h3>
            <p>
            Final scene design project: designing, drafting, and creating a 3/4 inch scale model for the play, The Chairs, by Eugene Ionesco
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
    </div>
  );
}