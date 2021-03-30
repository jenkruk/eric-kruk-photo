import React from "react";
import image1 from "../../Assets/Images/portfolio-images/kitchen2proof.jpg";
import image2 from "../../Assets/Images/portfolio-images/diningdetail.jpg";
import image3 from "../../Assets/Images/portfolio-images/diningdetail2proof.jpg";
import image4 from "../../Assets/Images/portfolio-images/diningkitchenoverviewproof.jpg";
import image5 from "../../Assets/Images/portfolio-images/livingroom3proof.jpg";
import image6 from "../../Assets/Images/portfolio-images/loftview.jpg";
import image7 from "../../Assets/Images/portfolio-images/laundrydetail2proof.jpg";
import image8 from "../../Assets/Images/portfolio-images/loft1.jpg";
import image9 from "../../Assets/Images/portfolio-images/kitchen4.jpg";
import image10 from "../../Assets/Images/portfolio-images/powderroomdetail.jpg";
import image11 from "../../Assets/Images/portfolio-images/sparebathroom3.jpg";
import image12 from "../../Assets/Images/portfolio-images/mainliving1.jpg";
import image13 from "../../Assets/Images/portfolio-images/primarybedroom3.jpg";
import image14 from "../../Assets/Images/portfolio-images/primarybedroomdetail1.jpg";
import image15 from "../../Assets/Images/portfolio-images/sparebedroom2proof.jpg";
import image16 from "../../Assets/Images/portfolio-images/primarybedroom1proof.jpg";

export const Portfolio = () => {
  return (
    <>
      <div className="portfolio-container">

        <div class="gallery-container horizontal">
          <div class="gallery-item">
            <div class="image">
              <img src={image1} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container vertical">
          <div class="gallery-item">
            <div class="image">
              <img src={image2} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container vertical">
          <div class="gallery-item">
            <div class="image">
              <img src={image3} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container vertical">
          <div class="gallery-item">
            <div class="image">
              <img src={image6} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container vertical">
          <div class="gallery-item">
            <div class="image">
              <img src={image7} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container horizontal">
          <div class="gallery-item">
            <div class="image">
              <img src={image4} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container horizontal">
          <div class="gallery-item">
            <div class="image">
              <img src={image5} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container horizontal">
          <div class="gallery-item">
            <div class="image">
              <img src={image8} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container horizontal">
          <div class="gallery-item">
            <div class="image">
              <img src={image9} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container vertical">
          <div class="gallery-item">
            <div class="image">
              <img src={image10} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container vertical">
          <div class="gallery-item">
            <div class="image">
              <img src={image11} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container vertical">
          <div class="gallery-item">
            <div class="image">
              <img src={image14} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container vertical">
          <div class="gallery-item">
            <div class="image">
              <img src={image15} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container horizontal">
          <div class="gallery-item">
            <div class="image">
              <img src={image12} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container horizontal">
          <div class="gallery-item">
            <div class="image">
              <img src={image13} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

        <div class="gallery-container horizontal">
          <div class="gallery-item">
            <div class="image">
              <img src={image16} alt="portfolio" className="port-images" />
            </div>
          </div>
        </div>

      </div> {/* END PORTFOLIO CONTAINER */}

      <div className="portfolio-copyright">
        <div className="row">
          All images property of Eric Kruk | Copyright &copy;
          {new Date().getFullYear()} | All Rights Reserved
        </div>
        <div className="propertyof row">
          Use of any images without the photographer's explicit permission is
          strictly prohibited.
        </div>
      </div>
    </>
  );
};
