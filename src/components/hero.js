import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./hero.css";
import img1 from "../scss/img/Сarousel1.jpg";
import img2 from "../scss/img/Сarousel2.jpg";

// const ItemLink = ({ title, desc, url, image }) => (
//   <a className="links-container__link" href={url}>
//     <div className="link__img-container">
//       <img src={image} alt="" />
//     </div>
//     <h4 className="link__title">{title}</h4>
//     <span className="link__desc">{desc}</span>
//   </a>
// );

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="slideshow-container"
      
    >
    <Carousel.Item>
  <img className="d-block w-100" src={img1} alt="First Img" style={{ objectFit: 'cover' }} />
</Carousel.Item>
<Carousel.Item>
  <img className="d-block w-100" src={img2} alt="Second Img" style={{ objectFit: 'cover' }} />
</Carousel.Item>

      {/* <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First Img" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second Img" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First Img" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second Img" />
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cutewallpaper.org/21/hd-dragon-wallpaper/Wallpaper-Red-Dragon-Wallpapers-Home-Screen.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default function hero() {
  return (
    <div className="Hero">
      <ControlledCarousel />

      {/* <div className="links-container">
        <ItemLink
          title="Title"
          desc="esta es una descripde prueba, no es increible esto?"
          url="/#"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        />
        <ItemLink
          title="Title"
          desc="esta es una descripde prueba, no es increible esto?"
          url="/#"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        />
        <ItemLink
          title="Title"
          desc="esta es una descripde prueba, no es increible esto?"
          url="/#"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        />
      </div> */}
    </div>
  );
}
